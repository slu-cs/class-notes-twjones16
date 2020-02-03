//excersise 1

const aClass = function(dept, number){
  this.dept = dept;
  this.number = number;
};

const classes = [CS220 = new aClass('CS', 220), CS364 = new aClass('CS', 362), CS332 = new aClass('CS', 332)];

for(const Class of classes){
  let largestnum = 0;
  if(Class.number > largestnum){
    largestnum = Class.number;
  }
	console.log(largestnum);
}
