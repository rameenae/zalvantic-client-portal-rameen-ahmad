require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Client = require('./models/Client');
const User = require('./models/User');

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

  console.log('Seed complete');
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});