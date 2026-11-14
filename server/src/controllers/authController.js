const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const User = require('../models/User');

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

async function login(req, res) {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const { email, password } = parsed.data;
  const user = await User.findOne({ email: email.toLowerCase() });

  // Same message for wrong email and wrong password, on purpose
  const invalid = () => res.status(401).json({ error: 'Invalid email or password' });
  if (!user) return invalid();

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return invalid();

  const token = jwt.sign(
    {
      sub: user._id.toString(),
      role: user.role,
      clientId: user.clientId ? user.clientId.toString() : null,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.json({
    token,
    user: { id: user._id, email: user.email, role: user.role, clientId: user.clientId },
  });
}

async function me(req, res) {
  const user = await User.findById(req.user.id).select('-passwordHash');
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ user });
}

module.exports = { login, me };