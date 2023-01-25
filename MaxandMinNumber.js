let number1 = Math.floor(Math.random()*90 +10);
console.log("number1 is " +number1);
let number2 = Math.floor(Math.random()*90 +10);
console.log("number2 is " +number2);
let number3 = Math.floor(Math.random()*90 +10);
console.log("number3 is " +number3);
let number4 = Math.floor(Math.random()*90 +10);
console.log("number4 is " +number4);
let number5 = Math.floor(Math.random()*90 +10);
console.log("number5 is " +number5);
if(number1 > number2 && number1 > number3 && number1 > number4 && number1 > number5 ){
    console.log("Maximum number is " +number1);
}else if(number2 > number1 && number2 > number3 && number2 > number4 && number2 > number5 ){
    console.log("Maximum number is " +number2);
}else if(number3 > number1 && number3 > number2 && number3 > number4 && number3 > number5 ){
    console.log("Maximum number is " +number3);
}else if(number4 > number1 && number4 > number2 && number4 > number3 && number4 > number5 ){
    console.log("Maximum number is " +number4);
}else{
    console.log("Maximum number is " +number5);
    }
    
if(number1 < number2 && number1 < number3 && number1 < number4 && number1 < number5 ){
    console.log("Minimum number is " +number1);
}else if(number2 < number1 && number2 < number3 && number2 < number4 && number2 < number5 ){
    console.log("Minimum number is " +number2);
}else if(number3 < number1 && number3 < number2 && number3 < number4 && number3 < number5 ){
    console.log("Minimum number is " +number3);
}else if(number4 < number1 && number4 < number2 && number4 < number3 && number4 < number5 ){
    console.log("Minimum number is " +number4);
}else{
    console.log("Minimum number is " +number5);
}