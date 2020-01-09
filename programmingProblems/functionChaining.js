let obj=function () {
    let i=0;
    let add=function (j) {
        i+=j;
        return this;
    }
    let subtract=function (j) {
        i-=j;
        return this;
    }
    let print=function () {
        console.log("printing...i value is",i);
        return this
    }
    return {add:add,subtract:subtract,print:print}
}
let myFunc=obj();
console.log(myFunc.add(3).subtract(1).print());
