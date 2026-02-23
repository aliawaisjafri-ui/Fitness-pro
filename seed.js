require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/fitness-app';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Delete existing test user if any
    await User.deleteOne({ username: 'ALI AWAIS JAFRI' });

    // Create new test user
    const testUser = new User({
      name: 'ALI AWAIS JAFRI',
      username: 'ALI AWAIS JAFRI',
      password: 'aucs@1212',
      age: 25,
      gender: 'male',
      height: 180,
      weight: 75
    });

    await testUser.save();
    console.log('✅ Test user created successfully!');
    console.log('Username: ALI AWAIS JAFRI');
    console.log('Password: aucs@1212');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
    process.exit(1);
  }
};

seedDB();
