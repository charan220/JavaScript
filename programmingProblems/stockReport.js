let fileasync=require('readline-sync')
let ls=require('fs');
let data=ls.readFileSync('stock.json');
let jsondata=JSON.parse(data);
let a=(jsondata)=>{
    for(let a=0;a<4;a++){
       console.log(jsondata[a].name);
    }
}
a(jsondata);
let input =fileasync.question("Enter the Sharename u want to invest ");
let c=(jsondata)=>{
    for(let i=0;i<4;i++){
        if(input=="bridgelabz"){
            return jsondata[0].numberofshares*shareCost;
        }
        else if(input=="IBM"){
            return jsondata[1].numberofshares.shareCost;
        
        }
        else if(input=="capgemini"){
            return jsondata[2].numberofshares.shareCost;
        }
        else if(input=="GILCUS"){
            return jsondata[3].numberofshares.shareCost;
        }
    }
    
}
if(input=="bridgelabz"){
    return jsondata[0].numberofshares*shareCost;
}
else if(input=="IBM"){
    return jsondata[1].numberofshares.shareCost;

}
else if(input=="capgemini"){
    return jsondata[2].numberofshares.shareCost;
}
else if(input=="GILCUS"){
    return jsondata[3].numberofshares.shareCost;
}

console.log(c());