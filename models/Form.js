var mongoose = require('mongoose');

var FormSchema = new mongoose.Schema({
  fullname: String,
  city: String,
  gender: String,
  orientation: String,
  roles: [String],
  actions: [String],
  toys: [String],
});

var Form = mongoose.model('Form', FormSchema);

module.exports = Form;
