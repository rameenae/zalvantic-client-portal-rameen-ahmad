const mongoose = require('mongoose');
const { z } = require('zod');
const Project = require('../models/Project');
const Client = require('../models/Client');
const { scopeFor } = require('../services/scope');

const createSchema = z.object({
  clientId: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
  status: z.enum(['planning', 'active', 'on_hold', 'completed']).optional(),
  startDate: z.coerce.date(),
});
const updateSchema = createSchema.partial();

async function list(req, res) {
  const projects = await Project.find(scopeFor(req.user))
    .populate('client', 'name company')
    .sort({ createdAt: -1 });
  res.json({ projects });
}

async function getOne(req, res) {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(404).json({ error: 'Project not found' });
  }
  const project = await Project.findOne({ _id: req.params.id, ...scopeFor(req.user) })
    .populate('client', 'name company');
  // 404 (not 403) so we never reveal that another client's project exists
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json({ project });
}

async function create(req, res) {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid input' });
  if (!mongoose.isValidObjectId(parsed.data.clientId) || !(await Client.exists({ _id: parsed.data.clientId }))) {
    return res.status(400).json({ error: 'Client not found' });
  }
  const project = await Project.create(parsed.data);
  res.status(201).json({ project });
}

async function update(req, res) {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(404).json({ error: 'Project not found' });
  }
  const parsed = updateSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid input' });
  const project = await Project.findOneAndUpdate(
    { _id: req.params.id, ...scopeFor(req.user) },
    parsed.data,
    { new: true, runValidators: true }
  );
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json({ project });
}

async function remove(req, res) {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(404).json({ error: 'Project not found' });
  }
  const project = await Project.findOneAndDelete({ _id: req.params.id, ...scopeFor(req.user) });
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.status(204).end();
}

module.exports = { list, getOne, create, update, remove };