const { signupSchema, loginSchema } = require('../validation');
const { getSingleUserByEmail } = require('../services');

const validateSignup = (req, res, next) => {
  try {
    const { error } = signupSchema.validate(req.body);
    if (!error) {
      return next();
    }
    return res.status(400).json({
      status: 'Fail',
      message: error.message,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong.',
    });
  }
};

const validateLogin = (req, res, next) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (!error) {
      return next();
    }
    res.status(400).json({ status: 'Fail', message: error.message });
    return next();
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong.',
    });
  }
};

const checkIfUserExists = (req, res, next) => {
  try {
    const user = getSingleUserByEmail(req.body.email);
    if (!user) {
      return next();
    }
    return res.status(400).json({
      status: 'Fail',
      message: 'user already exists.',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong.',
    });
  }
};

module.exports = {
  checkIfUserExists,
  validateSignup,
  validateLogin,
};
