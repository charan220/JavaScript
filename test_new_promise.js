function call(){
    return  new Promise((res,rej)=>{
        setTimeout(()=>{
            if(1){
                console.log("coming innner")
                res(true);
            } else {
                console.error("ERROR====");
                rej("NOT HANDLED==")
            }
        },5000)
    })
}

(async function print(){
    try{
        let val = await call();
        console.log("THIS NEED TO PRINT AFTER PROMISE RESPONSE");
    } catch(e){
        console.log("ERROR OCCured not handled")
    }
})() 