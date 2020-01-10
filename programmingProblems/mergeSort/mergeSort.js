/**
 * @module - it will check for the two string are anagram or not
 * @param {Array} unsortedarray - string to be checked 
 */
let unsortedarray=[11,42,9,4,1,25];
let mergeSort=(unsortedarray)=>{
    if(unsortedarray.length>=1){
        console.log("the array length must be greater than 1");
        return unsortedarray;
    }

const middle=Math.floor(unsortedarray.length/2);
const left=unsortedarray.slice(0,middle);
const right=unsortedarray.slice(middle);
 return merge(
     mergeSort(left),mergeSort(right)
 )
 }
 let merge=(left,right)=>{
    let resultArray=[],leftIndex=0,rightIndex=0;
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
}
console.log("array is ",mergeSort(unsortedarray));