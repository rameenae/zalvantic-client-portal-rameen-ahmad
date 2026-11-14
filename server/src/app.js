const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/auth');
const homeRoutes = require('./routes/home');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});
app.use('/api/auth', authRoutes);
app.use('/api', homeRoutes);
module.exports = app;