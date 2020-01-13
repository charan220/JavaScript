let myfunc=(firstname,lastname)=>{
    this.firstname=firstname;
    this.lastname=lastname;

}
myfunc.prototype.getFullName=()=>{
    return firstname;

}
console.log("getfull", )

myfunc.prototype.constructor=myfunc;
let std=new myfunc("james","bond");
console.log("fullname is",std.getFullName);
