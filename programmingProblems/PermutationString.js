var readLinesync=require('readline-sync')
let stringinput=readLinesync.question("Enter the string ")
var permutations=[];
function permut(string) {
    if (string.length < 2) return string; 
    
    for (var i = 0; i < string.length; i++) {
      var char = string[i];
  
      if (string.indexOf(char) != i) 
        continue; 
      var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); 
  
      for (var subPermutation of permut(remainingString))
        permutations.push(char + subPermutation)
    }
    return permutations;
   
  }
  permut(stringinput)
  permutations.forEach(function (entrypoint) {
    console.log(" vaues are",entrypoint)
})
 