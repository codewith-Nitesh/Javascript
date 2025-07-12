function myName(){
    console.log('Nitesh')
    console.log('Hitesh')
}

myName()  // myName -> reference // () -> execution

function addTwoNumbers(number1, number2){
   console.log(number1 + number2)
}

addTwoNumbers(4,5)


function nitesh(){
 for(let i=0; i<=10; i++){
    console.log('hey sunidhi', i)
 }
}

nitesh()

let Var = function(){
    let num = num1 + num2;
    return num
}

let con = function(num1,num2){
    console.log(num1+num2)
}

con(33,4)
con(3,'4')
con(5,'a')
con(5,null)
con(2,undefined)


let Function1 = function(num1,num2){
    let Var = num1+num2;
    return Var
}

console.log(Function1(5,6))


let othFun = function(num1,num2){
    return  num1+num2
}
console.log(othFun(5,5))

let loginUserName = function (loginUser){
    return `${loginUser} just loggged in `
}

console.log(loginUserName('Nitesh'))


function lgnUser(userName){
       if(!userName){
        console.log(`${userName } not availabel`)
       }else{
        console.log(`${userName} just logged in`)
       }
}

lgnUser('loggin')

// rest operator 

// it is used to handle all the inputs of argumnets
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(400,400,600,200,500))

// passing objects 
// const userName ={
//     username:'Nitesh',
//     Lastname:'choudhary'
// }

function detail(info){
     console.log( `first name is ${info.username} and last name is ${info.Lastname}`)
}
    detail(
      {
        username:'Nitesh',
        Lastname:'Choudhary'
      }
    )


//passing Array

let arr = [100,200,300,400,500]

function mynewArr(arrPass){
       console.log(arrPass[1])
}
mynewArr(arr)


function myArr(arr){
    console.log(arr[2],arr[3])
}

myArr([100,200,300,400])

// scopes

var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log(a)
}

// console.log(a)
// console.log(b)
console.log(c)
console.log(a)


let obj = {
    name:'Nitesh',
    age:21,
    location:'Chandigarh'
}

let {name, location} = obj

console.log(location)


// Array destructuring

let arraa = ['nitesh', 'Vikas','Nishant','Biki']

let [firstName , secondName ,thirdName] = arraa

console.log(firstName, ',', thirdName)

// const arrList = useState(0)

// const count = arrList[0]
// const setCount = arrList[1]

async function nitu(){
    try{
        let var1 = await fetch('https://api.github.com/users/codewith-Nitesh')
        let var2 = await var1.json()
        console.log(var2.id , var2.name)
    } 
    catch(error){
        console.log('error', error.message)
    }
}

nitu()


async function getData() {
    setTimeout(async () => {
      try {
        let data = await fetch("https://api.github.com/users/sahil");
        let res = await data.json();
        console.table([res.name, res.followers, res.company]);
      } catch (err) {
        console.log("error:", err);
      }
    }, 1000);
  }
  
  getData();