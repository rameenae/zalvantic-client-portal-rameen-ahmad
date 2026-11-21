const express = require('express');
const { requireAuth, requireRole } = require('../middleware/auth');
const Client = require('../models/Client');

const router = express.Router();

router.get('/', requireAuth, requireRole('admin'), async (req, res) => {
  const clients = await Client.find().sort({ name: 1 });
  res.json({ clients });
});

module.exports = router;