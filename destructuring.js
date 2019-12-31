//maping the list
var [a,,,b]=[1,2,3,4,5]
console.log(a);
console.log(b);


///Objects can be destrcutured as well.
nodes = () => { return {op: "a", lhs: "b", rhs: "d"}}
var { op: a, lhs: b , rhs: d } = nodes()
console.log(a)  
console.log(b)
console.log(d)


///using Shorthand notation

nodes=()=>{return {lhs:"a",rhs:"b"}};
var {lhs,rhs}=nodes();
console.log(lhs);
console.log(rhs);