/**
 * @module - it will check for the two string are anagram or not
 * @param {String} stake - stake amount
 * @param {String} goal - goal amount
 * @param {String} totalnumberoftimes -total times to play.
 */
let bets=0,wins=0;winper=0;
exports.gambler=(stake,goal,totalnumberoftimes)=> {
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
    winper=100*wins/totalnumberoftimes; 
}

console.log("Total Wins are ",wins);

console.log(`percentage of wins are :${winper} %`);
console.log(`percentage of loss are :${100-winper} %`)
