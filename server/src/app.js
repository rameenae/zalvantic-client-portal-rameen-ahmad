const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/auth');
const homeRoutes = require('./routes/home');
const projectRoutes = require('./routes/projects');
const clientRoutes = require('./routes/clients');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});
app.use('/api/auth', authRoutes);
app.use('/api', homeRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
module.exports = app;