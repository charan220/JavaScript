let readLinesync=require('readline-sync')
let stringinput=readLinesync.question("Enter the string ")
let obj=require('./PermutationStringBL');
obj.permute(stringinput);