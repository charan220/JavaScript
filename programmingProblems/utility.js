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
}