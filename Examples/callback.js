let myFunc=(a,b,callback)=>{
    console.log('the values are ${a} and ${b} and total value is ${a+b}')
    callback();
}
let disp=()=>{
    console.log("callback func is called");

}

myFunc(1,2,disp)

//Example in real time scenario 
 export let firstscript=(error)=>{
if(error){
    console.log("Error while loading scripts");
}
else{
    loadScript('2.js',secondscript);
}
};
let secondscript=(error)=>{
    if(error){
        console.log("Error while lsoading scripts");
    }
    else{
        loadScript('2.js'); 
    }
}


