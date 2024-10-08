// If we just write name of the function then it is considered as reference but if we put () then it is executed.

// +++++++++++++ Code1 +++++++++++++++
// function addTwoNumbers(number1,number2){ // number1, number2 are called parameters
//     console.log(number1+number2);
    
// }

// function addTwoNumbers(number1,number2){ // number1, number2 are called parameters
//     return (number1+number2);
//     //console.log("shubham");// this is never executed coz after 'return' nothing will be executed
    
// }

// const res = addTwoNumbers(3,4)/// but here 3,4 are called arguments
// console.log(res);

//++++++++Code 2 +++++++++++++++++

// function userLogin(username){
//     // if(username===undefined)
//     if(!username){//                   (!username) equals if(username===undefined)
//         console.log("username not given");
//         return 
//     }
//     return `${username} just logged in`
// }
// console.log(userLogin("Shubham")) //if nothing is passed then it is considered as "undefined"

//+++++++++ Code3+++++++++++
function userLogin(username="USER"){//Sets defualt value for the parameter if no argument is passed.
    return `${username} just logged in`
}
console.log(userLogin("Shubham")) //if nothing is passed then it is considered as "undefined"


