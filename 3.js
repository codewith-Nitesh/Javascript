let score = 99
console.log(typeof score)

let valueInNumber = String(score)
console.log(typeof valueInNumber)

let str1 = '33abc'

console.log(str1)
console.log(typeof str1)

let num1 = Number(str1)
console.log(typeof num1)

console.log(num1)  //NaN not a number

let bool = 1

console.log(typeof bool)

let num_To_Booolean = Boolean(bool)
console.log(typeof num_To_Booolean)
console.log(num_To_Booolean)


let bool1 = ""

console.log(typeof bool1)

let num_To_Booolean1 = Boolean(bool1)
console.log(typeof num_To_Booolean1)
console.log(num_To_Booolean1)


let bool2 = "nitesh"

console.log(typeof bool2)

let num_To_Booolean2 = Boolean(bool2)
console.log(typeof num_To_Booolean2)
// console.log(num_To_Boolean2)


//true=> 1, false=>0;
// ""=> false
// "nitesh"=> true

let myNum = 55
let anNum = 100

console.log(myNum += 55)

const myObj = {
   name:'Nitesh',
   age:21,
   surname:'choudhary'
}

console.log(myObj.age)

const myObj1 = [
    {
        name:'Nitesh',
        surname:'choudhry',
        age:22
    },
    {
        name:'Nishant',
        surname:'kumar',
        age:23
    },
    {
        name:'Vishal',
        surname:'Choudhary',
        age:25
    }
]

console.table([myObj1[0].name, myObj1[1].surname, myObj1[2].age])

let myArr = [10,20,30,40,50,60]

let antArr = myArr.map((num)=>{
    return num + 20
})

console.log(antArr)

const myuserObj = {
    userData:{
        name:'Nitesh',
        age:22
    },
    myData:{
        name:'Kamli',
        age:21
    }
}

console.log(myuserObj.userData.name)

console.log(myuserObj.myData.age)

const objFun = {
    myFun: (name) => {
        return name
    },
    antFun: (surname) =>{
        return surname
    }
}

console.log(objFun.myFun('Dhananjay'), objFun.antFun('negi'))


let myFun = () =>{
    console.log('Nitesh Choudhary')
    let antFun = ()=>{
        console.log('Arjun Dev ji')
    }
    // antFun()
    let antFun1 =()=>{
        console.log('hy this is me Nitesh')
        antFun()
    }
    antFun1()
    console.log('jug jug jio')
}
myFun()

let myArr1 = [10,20,30,40,50,60]
let dusraArr = myArr1.push(0)
let tisraArr = dusraArr
console.log(tisraArr)
console.log(dusraArr)
console.log(myArr1)
console.log(myArr.push(70, 30, 40))



let Arr1 = [10,20,30,40,50,60]
Arr1.push(70)
console.log(Arr1)
Arr1.pop(60)
console.log(Arr1)


let priArr = [10,20,30,40,50]
let finArr = priArr.pop()
console.log(priArr)
console.log(finArr)
let preFinArr = priArr.push('Nitesh')
console.log(priArr)

let shiftArr = ['Vikas', 'Suryaptura', 'Arjun', 'Karn']
let anthArr = shiftArr.unshift('Mohan')
console.log(shiftArr)
console.log(anthArr)