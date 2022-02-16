var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  fullname: String,
  username: String,
  email: String,
  idNumber: String,
  ipAddress: String,
  phone: String,
  education: String,
  password: String,
  role: String,
  card: Number,
  sex: String,
  file: {
    type: [Object],
    default: []
  },
  avatar: Number,
  course: [Object],
  city: String,
  gender: String,
  intrests: [String],
  orientation: String,
  sexRole: String,
  
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
