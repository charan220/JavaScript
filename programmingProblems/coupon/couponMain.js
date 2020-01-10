/******************************************************************************
 *  Execution       :   1. default node         cmd> node couponMain.js
 *                      2. if nodemon installed cmd> nodemon couponMain.js
 *
 *  Purpose         : Coupon generating.
 *
 *  @description    : To generate the coupons of using numbers and string combination.
 *                    
 *
 *  @file           : couponMain.js
 *  @overview       : coupon generator using random 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Raavi Ramcharan<raavicharan33@gmail.com>
 *  @version        : 1.0
 *  @since          : 03-01-2020
 ******************************************************************************/
let readLinesync=require('readline-sync');
let inputCoupons=readLinesync.question("Enter the number of Coupons to generate ");
let objCoupon=require('./couponBusinessLogic')
objCoupon.couponGenerator(inputCoupons);
