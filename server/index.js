const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Post');
require('./services/passport');

const postRoutes = require('./routes/postRoutes')
const authRoutes = require('./routes/authRoutes')


const app = express();

mongoose.connect(keys.mongouri);

authRoutes(app);
postRoutes(app);


app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/postRoutes')(app);
require('./routes/authRoutes')(app);


if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assets
  app.use(express.static('client/build'));
  //Express will serve up the index.html file
  //If it does not recognize the route.
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'));
  });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);
