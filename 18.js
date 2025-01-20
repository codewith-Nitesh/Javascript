// control flow

// let userLoggedIn = false

// if (userLoggedIn == true){
//     console.log('Nitesh')
// }else{
//     console.log('Not registered')
// }

// <,>,!=,<=,>=,!==,===

// console.log(3!==2)

// const score = 200

// if(score > 100){
//      const power = 'Fly'
//      console.log(`User Power : ${power}`);  
// }  


// let userBalance = 4000

// if(userBalance >= 3000){
//     console.log('user is rich')
// }else if(userBalance >=1500){
//     console.log('user is middle class')
// }else{
//     console.log('user is nothing to company')
// }

 const userLoggedIn = true
 const debitCard = false
 if(userLoggedIn && debitCard){
    console.log('allow to buy course')
 }else{
    console.log('dont allow to buy the course')
 }



  let userLogOut = false
  let userName = true

  if(userLogOut || userName){
    console.log('user is valid')
  }else{
    console.log('user is not valid')
  }


  //switch stmt 
//   switch (key) {
//     case value:
        
//         break;
  
//     default:
//         break;
//   }

const month = 1

switch(month){
    case 1:
        console.log('January')
        break;
    case 2:
        console.log('Feb')
        break;
    case 3:
        console.log('March')
        break;
    case 4:
        console.log('April')
        break;
    case 5:
        console.log('May')
    default:
        console.log('nothing')
        break;
}
const month1 = 'April'

switch(month1){
    case 'Jan':
        console.log('January')
        break;
    case 'Feb':
        console.log('Feb')
        break;
    case 'march':
        console.log('March')
        break;
    case 'April':
        console.log('April')
        break;
    case 'May':
        console.log('May')
    default:
        console.log('nothing')
        break;
}


const userEmail = 'h@hitesh.ai'

if(userEmail === 'h@hitesh.ai'){
    console.log('got user Email')
}else{
    console.log('Dont have user Email')
}

// falsy value --> 0,-0,false,bigInt,undefined,null,!,NaN,""

// truthy value --> '0', 'false', true, " " , [] , function() , {}

if(userEmail.length === 11){
    console.log('You are right')
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log('Object is empty')
}

// Nullish Coalescing Operator (??): nul, undefined 

let val1 ; 
val1 = undefined ?? 15
console.log(val1)

let val2;
val2 = null ?? 10
console.log(val2)   

let val3;
val3 = null ?? 8 ?? 12 ?? 30
console.log(val3)

// terranary operator

// condition ? true : false

let age = 18
age >= 18 ? console.log('you are eligible for voting') : console.log('you are not eligible for voting')

// terrnary operator
let age1 = 20;
age1 <=18 ? console.log('you are eligible to join the club') : console.log('you are not eligible to join the club')

// nullish collosense opt

let val4;
val4 = 5 ?? null

console.log(val4)

let val5;

val5 = null ?? 10 ?? 5
console.log(val5)

let month2 = 3

switch(month2){
    case 1 :
        console.log('Jan')
        break;
        case 2 :
        console.log('Feb')
        break;
        case 3 :
        console.log('March')
        break;
        default : 
        console.log('Nothing')
        break;
}

