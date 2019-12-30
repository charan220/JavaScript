var readLinesync=require('readline-sync');
let inputCoupons=readLinesync.question("Enter the number of Coupons to generate ");
let SecuredCoupons=[]
let numberTypeCoupons=[]
let couponGenerator=(inputCoupons) =>{
    if(inputCoupons<0){
        console.log("INPUT MISMATCH PLEASE ENSURE INPUT IS CORRECT");
    }else
    {   
      for(i=0;i<inputCoupons;i++){
      let numbers=  Math.floor((Math.random()*1000*999 ) +1)
      let r=Math.random().toString(36).substring(7);
      SecuredCoupons.push(r);
      numberTypeCoupons.push(numbers);
    }
}  
} 
couponGenerator(inputCoupons);
let wishinput=readLinesync.question("Hello Admin!!! Select Option 1 Or 2 \n 1)Do you want to generate Secured Coupons\n 2)Do you want to generate NumberWise Coupons\n")
SecuredCoupons.forEach(function(entryvalue) {
    if(wishinput==1)
    console.log("Coupons Numbers genrated are ",entryvalue);
})
numberTypeCoupons.forEach(function(entryvalue) {
    if(wishinput==2)
    console.log("Coupons generated are ",entryvalue)
})
var seccou=SecuredCoupons.map(i=>i+Math.round(2.095*2.5));
console.log("coupons are ",seccou)