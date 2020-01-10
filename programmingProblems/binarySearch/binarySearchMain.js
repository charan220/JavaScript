/******************************************************************************
 *  Execution       :   1. default node         cmd> node binarySearchMain.js
 *                      2. if nodemon installed cmd> nodemon binarySearchMain.js
 *
 *  Purpose         : Binary Search 
 *
 *  @description    : Binary Search to search the elements from the list.
 *                    
 *
 *  @file           : binarySearchMain.js
 *  @overview       : find the element from the list 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Raavi Ramcharan<raavicharan33@gmail.com>
 *  @version        : 1.0
 *  @since          : 03-01-2020
 ******************************************************************************/
let readLinesync=require('readline-sync');
let input=readLinesync.question("ENter the element you want to search ?");
let obj=require('./binarySearchBL')
obj.binarySearch(input);

