const passport = require('passport');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Post = mongoose.model('Posts');

module.exports = app => {
  app.post('/api/General', requireLogin, (req, res) => {

    const { title, subject, body, subposts } = req.body;

    const post = new Post({
      _user,
      title,
      subject,
      body,
      subPosts: subPosts.split(',').map(subject => ({ subject: subject.trim() })),
      _user: req.user.id,
      dateSent: Date.now()

    });

  });
};
