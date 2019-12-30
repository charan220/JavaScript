let arr=[1,2,5,4,6,7]
let x=5;
let binarySearch=function (arr,param,startindex,endindex) {
    if(startindex   > endindex) return false
        let midindex=Math.floor((startindex+endindex)/2)
        if(arr[midindex]===param)
        return true;
        if(arr[midindex]>x)
        return binarySearch(arr,param,startindex,midindex-1)
        else
        return binarySearch(arr,param,midindex+1,endindex)
    
}
if(binarySearch(arr,x,0,arr.length-1)){
console.log("Element Found ")
}
else console.log("ELement not Found");
