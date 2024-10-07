// const obj1 = {1:'a',2:'b'}
// const obj2 = {3:'a',4:'d'}

// // OBJECTS ARE COMBINED USING 'ASSIGN()'

// const obj3 = Object.assign(obj1,obj2) // if {} is not given, then all the values are combined and stored in obj1.
// const obj4 = Object.assign({},obj1,obj2)// {} is considered as target object and obj1 ,obj2 are considered as source object.
// console.log(obj3);
// console.log(obj4);

// ////////// Using spread operator

// const obj5 = {...obj1,...obj2}
// console.log(obj5);

const obj1 = {
    name : "shubham",
    email:"shubhamkarjini@gmail.com",
    age:28,
    number:1234566
}

// console.log(obj1);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));



