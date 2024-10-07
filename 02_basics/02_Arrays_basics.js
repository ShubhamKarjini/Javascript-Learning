const a = ["superman","batman","Wonderwomen"]
const b = ["Ironman","Thor","Hulk"]

//a.push(b) //[ 'superman', 'batman', 'Wonderwomen', [ 'Ironman', 'Thor', 'Hulk' ] ]
// const c = a.concat(b)//[ 'superman', 'batman', 'Wonderwomen', 'Ironman', 'Thor', 'Hulk' ]
const new_heros = [...a,...b]// This SPREAD operator breaks array and creates elements as individuals
console.log(new_heros);

// const new_arr = [1,2,3,4,[5,6,7,8],9,10,[1,2,3,[1,2]]]

// const new_real_arr = new_arr.flat(Infinity)
// console.log(new_real_arr);

//console.log(Array.from("Shubham")); //Converts string into an array

let score1 = 100, score2 = 200, score3=300;
const an_arr = Array.of(score1,score2,score3)
console.log(an_arr);


