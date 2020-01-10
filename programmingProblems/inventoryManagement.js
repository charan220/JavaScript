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