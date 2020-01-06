let readLinesync=require('readline-sync');
let age=readLinesync.question("Enter your age ?");
let message=(age>3)?'hello Baby ':(age>18)?'hello gentleman':(age<100)?'hello Professor!!':'';  ///multiple ?...........
console.log(message);



//conditional operator example 
let age1 =9;
console.log((age1>8)?"play music":"very good morning");