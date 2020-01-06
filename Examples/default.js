//passing default parameters as below.
function sample(x,y=12) {
    return x+y;
}
console.log(sample(3));


function sample2(x,y=12,z) {
    return x+y+z;
}
console.log(sample2(12,this.y,1));


//Example for for of loop on array
let arr=[1,2,3,4];
for(let i of arr){
    console.log(i); //returns index as 0,1,2,3
}

//Exaple for for in loop  on array.
let arr=[1,2,3,4];
for(let i in arr){
    console.log(i);  //returns values of array  as 1,2,3,4 
}