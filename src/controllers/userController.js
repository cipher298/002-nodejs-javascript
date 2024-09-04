const {
  createUserServices,
  loginService,
} = require('../services/userServices');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const data = await createUserServices(name, email, password);
  return res.status(200).json(data);
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const data = await loginService(email, password);
  return res.status(200).json(data);
};

module.exports = {
  createUser,
  handleLogin,
};
