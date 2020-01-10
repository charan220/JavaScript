/******************************************************************************
 *  Execution       :   1. default node         cmd> node gamblerMain.js
 *                      2. if nodemon installed cmd> nodemon gamblerMain.js
 *
 *  Purpose         : gambler program for win and loss %
 *
 *  @description    : gambler will come to know the % of win and loss
 *                    
 *
 *  @file           : gamblerMain.js
 *  @overview       : calculate the wins and losses.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Raavi Ramcharan<raavicharan33@gmail.com>
 *  @version        : 1.0
 *  @since          : 03-01-2020
 ******************************************************************************/
var readLinesync=require('readline-sync')
let stake=readLinesync.question("Enter the stake value");
let goal=readLinesync.question("Enter the goal value");
let totalnumberoftimes=readLinesync.question("Enter the number of times want to play");
let obj=require('./gamblerBL')
obj.gambler(stake,goal,totalnumberoftimes);
