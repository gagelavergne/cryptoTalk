const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema will describe what each individual object will look like
const userSchema = new Schema({
  googleId: String,
  
});

mongoose.model('users', userSchema);
