// arrow function and this
 const user = {
    username:'Nitesh',
    price:999,
    welcomeMessage: function (){
        console.log(`${this.username}, welcome to the website `)
    }
 }

 user.welcomeMessage()


//  function chai(){
//     let username= 'Nitesh'
//     // console.log(this.username)
//     console.log(this)
//  }

 // chai()


// this only works with the object

const chai =  () => {
    console.log(this)
}

chai()

// pure arrow function

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1,num2) =>  (num1 + num2)   // Implicit return 


const addTwo = (num1,num2) => ({username:'Nitesh'})
console.log(addTwo(5,6))

let add1 = () => {
    console.log('nitesh')
}

add1()