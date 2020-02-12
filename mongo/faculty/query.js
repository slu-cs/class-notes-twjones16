const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // To the database

//what documents are in the collection

const query = Professor.find();
// query.exec(function(error, professors){
//   if(error)console.error(error.stack);
//   console.log(professors);
// });
cons queries = [
  //what are the names in alphabetical order
  Professor.find().sort('name'),

  //who started the most recently
  Professor.find().sort('-started').limit(1),

  //who started in 2003?
  Professor.find().where('started').equals(2003),

  // who teaches 362
  Professor.find().where('courses').in(362),

  //what atre all the ranks
  Professor.distinct('rank')

];

queries[0].exec(funtion(error, professors){
  if(error) console.log(error.stack);
  const names = professors.map(p => p.name);
  console.log('Names in order: ' , names);
});

queries[1].exec(funtion(error, professors){
  if(error) console.log(error.stack);
  const names = professors.map(p => p.name);
  console.log('Most recent: ' , names);
});

queries[2].exec(funtion(error, professors){
  if(error) console.log(error.stack);
  const names = professors.map(p => p.name);
  console.log('who started in 2003: ' , names);
});

queries[3].exec(funtion(error, professors){
  if(error) console.log(error.stack);
  const names = professors.map(p => p.name);
  console.log('who teacher 362': ' , names);
});

queries[4].exec(funtion(error, ranks){
  if(error) console.log(error.stack);
  console.log('what are all the ranks: ' , ranks);
});
