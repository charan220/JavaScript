<<<<<<< HEAD
let merge1=(left,right)=>{
    let resultarray=[],leftIndex=0,rightIndex=0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex]);
          leftIndex++;
        } else {
          resultArray.push(right[rightIndex]);
          rightIndex++; 
        }
      }
      return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
=======
let merge1=(left,right)=>{
    let resultarray=[],leftIndex=0,rightIndex=0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex]);
          leftIndex++;
        } else {
          resultArray.push(right[rightIndex]);
          rightIndex++; 
        }
      }
      return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
>>>>>>> ad05d3c1893aa7d3a852297b873a0c60e104c014
}