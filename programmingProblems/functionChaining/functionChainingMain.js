
let obj=require('./functionChaining')
let myFunc=obj.obj;
myFunc.prototype.setAdd=()=>{
    console.log("set add done");
    return this;
}
