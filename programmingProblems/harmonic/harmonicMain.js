/******************************************************************************
 *  Execution       :   1. default node         cmd> node harmonicMain.js
 *                      2. if nodemon installed cmd> nodemon harmonicMain.js
 *
 *  Purpose         : harmonic value Detection.
 *
 *  @description    : To count the value of harmonic number and displaying total value of that number.
 *                 
 *
 *  @file           : harmonicMain.js
 *  @overview       : find the harmonic number . 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Raavi Ramcharan<raavicharan33@gmail.com>
 *  @version        : 1.0
 *  @since          : 03-01-2020
 ******************************************************************************/
let readLinesync=require('readline-sync')
let value=readLinesync.question("Enter the value");
let obj=require('./harmonicBL');
let totalvalue=obj.harmonicFunc(value);
console.log("thw totalvalue is ",totalvalue);