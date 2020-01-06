const a="b";
//a="c";   //throws TypoError as assignment to const variable. because const is READ-ONLY.
console.log(a)

let list=[1,2,3,4];
for(let i of list){
    console.log(i);
}

var set=new Set();
set.add("ram").add("charan");
console.log(set.size);
console.log(set.has("charan"));

