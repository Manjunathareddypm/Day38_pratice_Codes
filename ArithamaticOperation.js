let a = 10;
let b = 20;
let c = 30;
let number1 = a + b * c;
console.log("number1 is " +number1);
let number2 = c + a / b;
console.log("number2 is " +number2);
let number3 = a % b + c;
console.log("number3 is " +number3);
let number4 = a * b + c;
console.log("number4 is " +number4);

if(number1 > number2 && number1 > number3 && number1 > number4 ){
    console.log("Maximum number is " +number1);
}else if(number2 > number1 && number2 > number3 && number2 > number4 ){
    console.log("Maximum number is " +number2);
}else if(number3 > number1 && number3 > number2 && number3 > number4 ){
    console.log("Maximum number is " +number3);
}else{
    console.log("Maximum number is " +number4);
}
    
if(number1 < number2 && number1 < number3 && number1 < number4 ){
    console.log("Minimum number is " +number1);
}else if(number2 < number1 && number2 < number3 && number2 < number4 ){
    console.log("Minimum number is " +number2);
}else if(number3 < number1 && number3 < number2 && number3 < number4 ){
    console.log("Minimum number is " +number3);
}else{
    console.log("Minimum number is " +number4);
}