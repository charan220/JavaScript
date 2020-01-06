let readLinesync=require('readline-sync')
let value=readLinesync.question("Enter the value");
let inc=1.00;
function harmonic(value) {
    for(i=2;i<value;i++){
            inc+=1/i;
    }
    return inc;
}
let outputvalue=harmonic(value);
console.log("the harmonic value is",outputvalue);