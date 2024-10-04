// let arr = new Array(1,2,3,4,5)

// let newArr = arr.join()
// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);

// ++++++++++++++ Slice and Splice +++++++++++++++++

// Here slice doesn't change the original array but splice makes changes in original array

let arr = [0,1,2,3,4,5]
console.log("A",arr);

console.log(arr.slice(1,3));
console.log("B",arr);

console.log((arr.splice(1,3)));//splice starts from "index 1" and the second argument i.e 3 tells to delete three elements from '1'
console.log("C",arr);





