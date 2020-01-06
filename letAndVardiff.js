let value1="from value1";
var value2="from value2";
console.log(value1);    
console.log(value2)

//we are not able to use same variable name for let as below
// me="charan";
//let me="raavi";
//console.log(me);   //throws error.
var HTML5_SKELETON = `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    </body>
    </html>`;
    console.log("skel",HTML5_SKELETON);


//In var we will use same variable names for var as below.
var me="charan";
var me="raavi";
console.log(me);    //takes latest value of variable and prints output as raavi

//var is a function scoped variable  example below.
var x=3;
function func(params) {
    //var x=3;
    if(params){
       var y= Math.random();
        return y;
    }
    return x;
}
console.log(func(false));

// let is blockScoped variable example below.

let y=5;
function func1(params){
if(params){
    let x=Math.random();
    return x;
}
return y+1;
}

console.log(func1(false));

