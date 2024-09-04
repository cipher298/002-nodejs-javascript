const delay = (req, res, next) => {
  setTimeout(() => {
    const token = req.headers.authorization?.split(' ')[1];

    next();
  }, 1000);
};

module.exports = delay;
