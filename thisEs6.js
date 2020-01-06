let object={
    name:"charan",
    arrowGetName:()=>this.name,
    arrowgetThis:()=>this,
    arrowgetRegularNAme:function(){return this.name}
}
console.log("name is ",object.name);
console.log("arrowgetNAme is ",object.arrowgetThis());
console.log("arrowgetRegular is ",object.arrowgetRegularNAme());
console.log(this);