// object and array syntax

//object literal

const point = {x:1, y:2};
console.log(point.x);


//change properties
point.x = 3

const circle = {
  center: point,
  radius: 4
};


//accessing sub properties
console.log(circle.center.x);


//undefined subproperties
console.log(circle.color);
circle.color = blue;
console.log(circle)

//arrays
const languages = ['HTML', 'CSS', 'JS'];
console.log(languages);

//accessing elements in an array
for(let i = 0; i < languages.length; i++){
  console.log(languages[i]);
}

//indexing
languages[2] = 'Javascript';

//adding elements
languages.push('MongoDB');

//interating over elements
for(const lang of languages){
  console.log(lang);s
}
