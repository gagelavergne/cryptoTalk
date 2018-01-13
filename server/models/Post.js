const mongoose = require('mongoose');
const { Schema } = mongoose;
const subPostsSchema = require('./subposts');

const postSchema = new Schema({
  googleId: String,
  title: String,
  subject: String,
  body: String,
  subPosts: [subPostsSchema],
  views: { type: Number, default: 0 },
  _user: {type: Schema.Types.ObjectId, ref: 'User' },
  datesent: Date,
  lastResponded: Date
});

mongoose.model('Posts', postSchema);
