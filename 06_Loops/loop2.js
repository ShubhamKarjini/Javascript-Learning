// using map
// const nums=[1,2,3,4,5,6,7,8]
// const newNums = nums.map( (item)=>{
//     return item + 10
// } )
// console.log(newNums);

// chaining

// const nums=[1,2,3,4,5,6,7,8]

// const newNums = nums
//                     .map( (item)=> item * 10 )// item is updated with multiplication of 10
//                     .map( (item)=> item +1 )// item is added up with 1
// console.log(newNums);

//REDUCE

const nums = [1,2,3,4,5]
const newNums = nums.reduce( (acc,currVal)=>{
    return acc+currVal
},0 )//0 represents initial value for accumulator

console.log(newNums);




