let arr=[1,2,3,4,4,5];
let findFunction=(x)=>{
try{
    lalla    ////goes to error block as variable is not defined.
  console.log("try catch starts");
  if(arr.findIndex(x)){
      console.log("no error");
  }
}catch(err){
 console.log(err);
}
}
findFunction(arr.forEach(x=>x));