function spread(x,y,z) {
    return x+y+z;

}
console.log(spread(...[1,2,3]));


//In arrays we can use spread operators as below.
var arr=["ram","charan","raavi"]
var spreadarr=[...arr,"family"]; //we can add multiple arrays as well like =[...arr,...arr1,............]
console.log("spreadarray is-->",spreadarr);

//spread + Object literals.
var {x,y,...z}={x:1,y:2,a:1,b:3}
console.log(x);
console.log(y);
console.log(z);
