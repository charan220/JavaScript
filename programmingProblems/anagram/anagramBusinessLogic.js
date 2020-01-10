/**
 * @module - it will check for the two string are anagram or not
 * @param {String} string1 - string to be checked 
 * @param {String} string2 - string to be checked 
 */
let chararr=[];
let stringarr=[];
exports.anagramOrNot=(string1,string2)=> {
    if(string1.length==string2.length){
        chararr=string1.split("");  //(or) chararr=string1.split("").sort();
        chararr.sort();
        let s=chararr.join("");
        stringarr=string2.split("");   
        stringarr.sort();
        let s1=stringarr.join("");
        if(s==s1){
            console.log("yes two strings are anagram ");
        }
    }
    else{
        console.log("not An anagram");
    }
}

