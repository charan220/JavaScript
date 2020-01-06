let readLinesync=require('readline-sync');
let string1=readLinesync.question("Enter the first string for anagram");
let string2=readLinesync.question("ENter the second string for anagram");
let chararr=[];
let stringarr=[];
function anagramOrNot(string1,string2) {
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
anagramOrNot(string1,string2);
