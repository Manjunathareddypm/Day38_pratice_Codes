const prompt = require("prompt-sync")();
let year = prompt("enter a year: ");
if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)){
    console.log(year+" is a leap year.");
}else{
    console.log(year+ " is not a leap year");
}



