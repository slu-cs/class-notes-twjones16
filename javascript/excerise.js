//class exercises

//1
let sum = 0;
for(let x=1; x <11; x++){
  sum = sum + x*x;
}
console.log(sum);

//2
let num = 2;
let prev = 1;
while(num < 1000){
  temp = num + prev;
  prev = num;
  num = temp;
}
console.log(num);

//3
let count =0;
for(let x=1; x <101; x++){
  if(x%3 === 0 && x % 5=== 0){
    x++;
  }
  if(x%3 === 0){
    count++;
    x++;
  }
  if(x%5 === 0){
    count++;
    x++;
  }else {
    x++;
  }
}
console.log(count);

//4
console.log(10 * 9 * 8 * 7 * 6);
