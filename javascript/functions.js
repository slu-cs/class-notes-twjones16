//function syntax

//function definitions\

const avg = fuction(a,b){
  retrun (a+b)/2;
};

//function call
console.log(avg(5,6));

const print(a,b) = funciton(a,b){
  console.log(`a=${a}, b=${b}`);
}

//undefined values
const result = print(7,8);
console.log(result);
print(9);
print();

//object literal with a method
const rectangle = {
  width: 10,
  height: 20,
  area: function(){
    return this.width * this.height;
  }
};

//method call
console.log(rectangle.area());

// constructor definitions
const Rectangle = function(width, height){
  this.width = width;
  this.height = height;
};

//contructing objects

const small = new Rectangle(1,2);
const large = new Rectangle(10,20);

//shared method
Rectangle.prototype.area = function () {
  return this.width * this.height;
};
