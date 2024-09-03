const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createUserServices = async (name, email, password) => {
  try {
    // hash user password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // save user to database
    let result = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      role: 'user',
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createUserServices,
};
