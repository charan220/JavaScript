var readLinesync=require('readline-sync')
let stake=readLinesync.question("Enter the stake value");
let goal=readLinesync.question("Enter the goal value");
let totalnumberoftimes=readLinesync.question("Enter the number of times want to play");
let bets=0,wins=0;
function gambler(stake,goal,totalnumberoftimes) {
    for(i=0;i<totalnumberoftimes;i++){
        let amount=stake;
        while(amount>0 && amount<goal){
            bets++;
                if(Math.random()< 0.5) {
                    amount++;
                
                }else amount--;
        }
        if(amount==goal) {
            wins++;
        }     
    }  
}
gambler(stake,goal,totalnumberoftimes);
console.log("Total Wins are ",wins);
let winper=100*wins/totalnumberoftimes;
console.log(`percentage of wins are :${winper} %`);
console.log(`percentage of loss are :${100-winper} %`)
