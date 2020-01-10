/******************************************************************************
 *  Execution       :   1. default node         cmd> node inventoryManagement.js
 *                      2. if nodemon installed cmd> nodemon binarySearchMain.js
 *
 *  Purpose         : InventoryManagement using json
 *
 *  @description    : to read all the inventoris list from the json file.
 *                    
 *
 *  @file           : permutationStringMain.js
 *  @overview       : reads data from json file and calculates Total inventory price.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Raavi Ramcharan<raavicharan33@gmail.com>
 *  @version        : 1.0
 *  @since          : 03-01-2020
 ******************************************************************************/
let readLinesync=require('readline-sync');
let input=readLinesync.question("Enter the name of rice to calculate whole price 1)Rice 2)Pulses OR 3)Wheat");
let fs=require('fs');
let data=fs.readFileSync('inventory.json');
let data1=JSON.parse(data);
if(input=='Rice'){
    let wholeprice=data1.RiceList[0].Weight*data1.RiceList[0].PricePerKg;
    console.log(wholeprice);
}
else if(input='Pulses'){
let wholeprice=data1.PulsesList[0].Weight*data1.PulsesList[0].PricePerKg;
console.log("Whole Price ",wholeprice);
}else if(input='Wheat'){
    let wholeprice=data1.WheatList[0].Weight*data1.WheatList[0].PricePerKg;
    console.log("Whole Price is",wholeprice);
}