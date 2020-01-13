arr=[1,2,3,4];
let ele=arr.map(incrbyone);
function incrbyone(element){
    return element+1;
}
let ele2=arr.map(incrbyone);
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
console.log(arr.constructor)

let a1={
    a:"charan"

}
console.log("a is ",a1.a)