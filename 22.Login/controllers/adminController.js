const adminController = {
  sample: function (req, res) {
    // req.user.admin
    if (!req.header('user').admin) {
      res.status(401).send('Not Admin: Access Denied');
    }

    res.send('Esse só deve ser visto pelo Admin');
  }
}

module.exports = adminController;