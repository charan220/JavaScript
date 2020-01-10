
let permutations=[];
 exports.permute=(string)=> {
    if (string.length < 2) return string; 
    
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
  
      if (string.indexOf(char) != i) 
        continue; 
      let remainingString = string.slice(0, i) + string.slice(i + 1, string.length); 
  
      for (let subPermutation of this.permute(remainingString))
        permutations.push(char + subPermutation)
    }
    return permutations;
   
  }
  
  permutations.forEach(function (entrypoint) {
    console.log(" vaues are",entrypoint)
})
 