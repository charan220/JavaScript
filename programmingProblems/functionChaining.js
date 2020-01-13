/******************************************************************************
 *  Execution       :   1. default node         cmd> node functionChaining.js
 *                      2. if nodemon installed cmd> nodemon functionChaining.js
 *
 *  Purpose         : Function Chaining .
 *
 *  @description    : To implement the fnction chaining in the  using Es6
 *  @file           : functionChaining.js
 *  @overview       : chaining the methods using this keyword. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Raavi Ramcharan<raavicharan33@gmail.com>
 *  @version        : 1.0
 *  @since          : 03-01-2020
 ******************************************************************************/
exports.obj=function () {
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

