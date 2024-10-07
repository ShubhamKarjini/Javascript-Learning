// Singlton objects are built using constructors

// In objects, the key of KEY VALUE PAIRS will always be a STRING

// Symbol can be used as a key in objects, to access them "obj[mykey]". No need to put quotes around the key name.

const mykey = Symbol()

const obj = {
    name : "shubham",
    age : 21,
    [mykey]:"key1",
    email : "shubhamkarjini@gmail.com"
}

// console.log(obj["email"]);
// console.log(obj[mykey]);

obj.greeting = function(){
    console.log("Hello!!");    
}

console.log(obj.greeting());
console.log(obj);

