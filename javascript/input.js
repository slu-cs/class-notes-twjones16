//syntax for concole and file input
//synchronous calls: wait for a result until call arrives
//async calls: don't wait for the result

const readline = require('readline');

//console configuration
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//console input

user.question('Filename: ', function(filename){
  console.log(filename);
});
