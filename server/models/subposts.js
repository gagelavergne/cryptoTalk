const mongoose = require('mongoose');
const { Schema } = mongoose;

const subPostsSchema = new Schema({
  subject: String,
  body: String,
});

module.exports = subPostsSchema;
