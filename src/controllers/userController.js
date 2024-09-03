const { createUserServices } = require('../services/userServices');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const data = await createUserServices(name, email, password);
  return res.status(200).json(data);
};

module.exports = {
  createUser,
};
