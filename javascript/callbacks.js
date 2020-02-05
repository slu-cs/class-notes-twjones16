// syntax for callbacks

//this fucntion uses another function to transfrom an array
const map = function(array, transform){
  const copy = [];
  for( const element of array){
    copy.push(transform(element));

  }
  return copy;
}

//this can be used as the transfrom
const square = function(x){
  return x**2;
}

const numbers = [1, 2, 3, 4, 5, 6];

// do the transformation
console.log(map(numbers, square));
console.log(numbers)

//defining other transformations with arrow functions
console.log(map(numbers, x=> x**2));
console.log(map(numbers, x=> x+2));


//using array map method
console.log(numbers.map(x => x=> x**2));
console.log(numbers.map(x => x=> x+2));
