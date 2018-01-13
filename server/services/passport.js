const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

//Creates new instance of Google Strategy
//passport.use I want you to be aware there is a new strat. available
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true

      },
      async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id });
                if (existingUser) {
                // we already have a record with the given profile Id
                return done(null, existingUser);

              }
                // We don't have a user record with this ID
                const user = await new User({ googleId: profile.id }).save();
                done(null, user);
    }
  )
);
