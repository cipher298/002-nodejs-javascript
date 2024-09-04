require('dotenv').config();
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const white_lists = ['/', '/register', '/login'];

  if (white_lists.find((item) => '/v1/api' + item === req.originalUrl)) {
    next();
  } else {
    if (req?.headers?.authorization?.split(' ')?.[1]) {
      const token = req.headers.authorization.split(' ')[1];

      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        next();
      } catch (error) {
        return res.status(401).json({
          message: 'Expires access',
        });
      }
    } else {
      // return exception
      return res.status(401).json({
        message: 'Unauthorized access / expires access',
      });
    }
  }
};

module.exports = auth;
