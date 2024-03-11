//ask the user to input the length
let length= prompt("input length of the rectangle:");
//ask user to input the width
let width= prompt("input width of rectangle");
//convert the strings into numbers
length =parseFloat(length);
width=parseFloat(width);
//calculate the area of the rectangle
let area=length*width
//calculate the perimeter of the rectangle
let perimeter =(length + width)*2
//results
console.log("the area of the reactangle is:"+area);
console.log("the perimeter of the rectangle is:" +perimeter);