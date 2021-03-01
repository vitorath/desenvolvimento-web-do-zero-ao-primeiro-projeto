const jwt = require('jsonwebtoken');

const authController = {
  authorization: function (req, res, next) {
    const token = req.header('authorization-token');

    if (!token) {
      res.status(401).send('Access Denied');
    }

    try {
      const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
      //req.user = userVerified;
      req.headers['user'] = userVerified
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send('Access Denied');
    }
  }
}

module.exports = authController;