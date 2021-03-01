const Link = require('../models/Link');

async function redirect(req, res) {
  const title = req.params.title;

  try {
    const doc = await Link.findOneAndUpdate({ title }, {$inc: { click: 1 }});
    if (doc) {
      res.redirect(doc.url);
    } else {
      res.send('Referência não encontrada');
    }
  } catch(error) {
    res.send(error);
  }
}

async function addLink(req, res) {
  const link = new Link(req.body);

  try {
    await link.save();
    res.redirect('/');
  } catch (error) {
    res.render('add', { error, body: req.body });
  }
}

async function allLinks(req, res) {
  try {
    const links = await Link.find();
    res.render('all', { links });
  } catch (error) {
    res.send(error);
  }
}

async function deleteLink(req, res) {
  const id = getLinkId(req);

  try {
    await Link.findByIdAndDelete(id);
    // res.send(id);
    res.redirect('/');
  } catch (error) {
    res.status(404).send(error);
  }
}

async function loadLink(req, res) {
  const id = req.params.id;

  try {
    const doc = await Link.findById(id);
    res.render('edit', { error:false, body: doc });
  } catch (error) {
    res.status(404).send(error);
  }
}

async function editLink(req, res) {
  const link = {};
  link.title = req.body.title;
  link.description = req.body.description;
  link.url = req.body.url;

  const id = getLinkId(req);

  try {
    await Link.updateOne({ _id: id }, link);
    res.redirect('/');
  } catch (error) {
    res.render('edit', { error, body: req.body });
  }
}

function getLinkId(req) {
  if (req.params.id) {
    return req.params.id;
  } else {
    return req.body.id;
  }
}

module.exports = { redirect, addLink, allLinks, deleteLink, loadLink, editLink };