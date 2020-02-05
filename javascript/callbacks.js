// syntax for callbacks

//this fucntion uses another function to transfrom an array
const map = function(array, transform){
  const copy = [];
  for( const element of array){
    copy.push(transform(element));

  }
  return copy;
}
