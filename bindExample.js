let myobj={
    name:"charan",
    myFunc:()=>{
        console.log("my func is called ",this.name);
    }
}
let func=()=>{
console.log("func is called"+myobj.name+myobj.myFunc);
}
let a=func.bind(myobj);
a();
