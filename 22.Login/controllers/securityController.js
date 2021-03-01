const securityController = {
  forceHttps: function (req, res, next) {
    if (req.headers['x-forwarded-proto'] == 'https') {
      next();
    } else {
      res.redirect('https://' + req.headers.host + req.originalUrl);
    }
  }
};

module.exports = securityController;


