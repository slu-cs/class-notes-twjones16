// Define a plan for a collection

const mongoose = require('mongoose');

const Professor = new mongoose.Schema({
  name: String;,
  rank: String;,
  started: Number,
  courses: [Number]
});

//speed up quereies on all fields
Professor.index({name:1});
Professor.index({rank:1});
Professor.index({started:1});
Professor.index({courses:1});

//compile and export this Schema
module.exports = mongoose.model('Professor', Professor);
