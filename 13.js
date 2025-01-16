let faceBookUser = new Object()   // singletonobject

console.log(faceBookUser)

faceBookUser.id = 1234
faceBookUser.age = 45
faceBookUser.location = 'Paonta Sahib'

console.log(faceBookUser)

let userInformation = {
    
    fullName:{
        name:'Nitesh',
        surname:'Choudhary'
    },
    location:{
       plotno:23,
       tehsil:'Paonta Sahib'
    }
}       

console.log(userInformation.location)
console.log(userInformation.fullName)

let obj1 = {1:'a', 2:'b'}
let obj2 = {3:'c', 4:'d'}

// merging the objects together

let obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

console.log(obj1 === obj2)

let obj4 = {...obj1, ...obj2}
console.log(obj4)

// Array object 

let user = [
    {
        name:'Nitesh',
        class:'12th',
        lastName:'Chaudhary'
    },
    {
        location:'Paonta Sahib',
        district:'Sirmaur',
        village:'Byas'
    }
]
// access in array object

console.log(user[0].name)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

let obj = {
    name:'nitesh',
    location:'Paonta Sahib'
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


console.log(obj.hasOwnProperty('location'))


// Object destructuring

let object = {
    name:'Nitesh',
    surname:'Choudhary',
    location:'Paonta Sahib'
}

// way of destructuring 

const {location : jgha} = object
// console.log(location)
console.log(jgha)


// Json format

// {
//     name:'Nitesh'
//     courseName:'javascript',
//     price:999
// }

