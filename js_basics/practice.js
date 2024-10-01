const userOne ={
    mail:"shubham@gmail.com",
    upi:"shubham@ybl"
}

console.log(userOne.mail)

const userTwo = userOne 

userTwo.mail = "shubham2@gmail.com"

console.log(userOne.mail)
console.log(userTwo.mail)
