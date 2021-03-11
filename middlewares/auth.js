const { verifyToken } = require('../utils');

const authenticate = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({
        status: 'Fail',
        message: 'Sign in please',
      });
    }
    const token = authorization.split(' ')[1];
    req.user = verifyToken(token);
    return next();
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};

// const authtoTodoOwner = (req, res, next) => {
//   try {
//     console.log(req.user.email);
//     const token = req.headers.authorization.split(' ')[1];
//     if (!token) {
//       return res.status(401).json({
//         status: 'Fail',
//         message: 'Unauthorized! Sign in to view your todos.',
//       });
//     }
//     req.user = verifyToken(token);
//     return next();
//   } catch (error) {
//     return res.status(500).json({
//       status: 'Fail',
//       message: 'Something broke',
//     });
//   }
// };

module.exports = {
  authenticate,
  // authtoTodoOwner,
};
