const express = require('express');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

router.get('/admin/home', requireAuth, requireRole('admin'), (req, res) => {
  res.json({ message: 'Welcome, Zalvantic admin' });
});

router.get('/client/home', requireAuth, requireRole('client'), (req, res) => {
  res.json({ message: 'Welcome, client', clientId: req.user.clientId });
});

module.exports = router;