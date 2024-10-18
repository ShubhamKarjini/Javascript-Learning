// for(let i=0;i<=10;i++){
//     const element = i
//     console.log(element);
// }
 

// 'break' comes out of the loop and 'continue' skips one iteration
// ++++++++++++ for-of loop++++++++++++++

// arr = ['ironman','superman','batman']

// for (const i of arr) {
//     // console.log(i);
// }

//+++++++++ map with for-of loop+++++++++++
const map = new Map()

map.set('IN','INDIA')
map.set('US','United States')
map.set('UK','United Kingdom')

for (const [key,value] of map) {
    // console.log(key,':',value);  
}

// Using for-of we cannot iterate a basic object but can iterate array & maps
// for basic objects, we use for-in loop

const myObj = {
    js : "Javascript",
    cpp : "C++",
    py : "Python",
    html : "html"
}

for (const key in myObj) {
    // console.log(`${key} and its value is ${myObj[key]}`);
    
}

// for-of returns values directly but for-in returns keys.

const myArr = ["python","javascript","html","css"]

for(let key in myArr){
    // console.log(key,' ',myArr[key]);
}

// maps are not iteratable using for-in

//+++++++++ for-each loop +++++++++


const languages = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
// languages.forEach( function(item){
//     sum+=item
// } )
// // console.log(sum);


// languages.forEach( (value)=>{
//     sum+=value
// } )

// console.log(sum);


// function print(item){
//     console.log(item);
// }

// languages.forEach(print)  // just give reference of the function, no need to execute


// myArr.forEach( (item,index,array)=>{
//     console.log(item,index,array);
    
// } )


// const newArr = [ 
//     {
//         language : "python",
//         filename : "py"
//     },
//     {
//         language : "javascript",
//         filename : "js"
//     },
//     {
//         language : "java",
//         filename : "java"
//     },
//  ]

//  newArr.forEach( (item)=>{
//     console.log(` ${item.language} is the file and the extension is ${item.filename} `);
    
//  } )