arr=[1,2,3,4];
var ele=arr.map(incrbyone);
function incrbyone(element){
    return element+1;
}
var ele2=arr.map(incrbyone);
const name="charan"
console.log("ele are ",ele)
console.log(`this line spans multiple lines ${name}`)
function logAllArguments(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}
logAllArguments();
console.log(arr.map(x=>x))

{
    let a="charan";

}
console.log("a is ",a)