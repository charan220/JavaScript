function func(x=1,y=0){

return x+y;
}
console.log("the value are",func(6,5));     ///handling parameeter default vlaues in function

function func1(options){
    let x=options.start||0;
    let y=options.end||0;
    let z=options.mid||0;

    return x+y+z;
}
console.log("thr values are ",func1({start:0,end:2,mid:3}));   ///handling named parameters.


let name = "Bob", time = "today";

let multiLine = `This

Line

Spans Multiple

Lines`


console.log(`Hello ${name},how are you ${time}?`)
console.log(multiLine)

let a={
 a:"charan"
}
console.log(a.a)