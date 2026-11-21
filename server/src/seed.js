require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Client = require('./models/Client');
const User = require('./models/User');
const Project = require('./models/Project');

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);

  await User.deleteMany({});
  await Client.deleteMany({});

  const [acme, globex] = await Client.create([
    { name: 'Ali Khan', company: 'Acme Traders' },
    { name: 'Sara Ahmed', company: 'Globex Logistics' },
  ]);

  const passwordHash = await bcrypt.hash('Password123!', 10);

  await User.create([
    { email: 'admin@zalvantic.test', passwordHash, role: 'admin' },
    { email: 'ali@acme.test', passwordHash, role: 'client', clientId: acme._id },
    { email: 'sara@globex.test', passwordHash, role: 'client', clientId: globex._id },
  ]);
    await Project.create([
    { clientId: acme._id, name: 'Website Redesign', description: 'New company website with a blog and contact forms.', status: 'active', startDate: new Date('2026-10-01') },
    { clientId: acme._id, name: 'Mobile App MVP', description: 'First version of the customer ordering app.', status: 'planning', startDate: new Date('2026-12-01') },
    { clientId: globex._id, name: 'Logistics Dashboard', description: 'Live dashboard for shipments and delivery times.', status: 'active', startDate: new Date('2026-09-15') },
    { clientId: globex._id, name: 'Brand Refresh', description: 'New logo, colours and brand guide.', status: 'completed', startDate: new Date('2026-06-01') },
  ]);

  console.log('Seed complete');
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});