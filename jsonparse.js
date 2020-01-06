let text='{ "name":"John", "age":30, "city":"New York"}'
var obj = JSON.parse(text);
console.log(`name is ${obj.name} and city is ${obj.city} ` )

$.getJSON("test.js",function(data){
    console.log("JSON Dtaa:",data.users[1].name)
})