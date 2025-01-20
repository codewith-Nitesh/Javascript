// string and its method function
// concatenate meaning adding up two things

let name1 = 'Nitesh'
let surname = ' Choudhary'

console.log(name1+surname)

// injecting the variable
// for this use back ticks and this is called the string interpollatation

console.log(`${name1}${surname}`)

console.log(`hello my first name is ${name1} and my surname is ${surname}`)
// function methods

let container = new String('Nitesh')
console.log(name1[0])
console.log(name1.toUpperCase())
console.log(container.toUpperCase())

console.log(surname.toLowerCase())
console.log(surname.charAt('3'))
console.log(surname.indexOf('d'))
console.log(surname.substring(0,4))
console.log(surname.slice(1,4))
console.log(surname.length)
console.log(surname.slice(4,6))
console.log(surname.slice(2,4))

let container1 = '     Nitesh   Choudhary     '
console.log(container1.trim())
console.log(container1.trimStart())
console.log(container1.trimEnd())


const url = 'https://nitesh.com/nitesh%20choudhary'

console.log(url.replace('nitesh', 'Nitin'))


let namee = 'nitesh'
console.log(namee.includes('choudhary')) // answer will be given by in either true of false

console.log(namee.includes('sh'))

let container2 = 'My name is Nitesh Choudhary, my name is sahil, my name is Ashutosh, my name is Nitin'

console.log(container2.split(''))

console.log(container2.split(' '))

console.log(container2.split(',',2))

let sentence = "one, two, three, four, five";
let result = sentence.split(", ", 3);  // Split by comma and space, with a limit of 3
console.log(result);                    // Output: ["one", "two", "three"]


// toUpperCase()
// toLowerCase()
// replace()
// includes()
// length
// indexOf()
// substring( , )
// slice()
// split()
// charAt
// trim, trimStart, trimEnd

console.log(surname.bold())
console.log(container)

console.log(url.replace('nitesh', 'Nitin'))


