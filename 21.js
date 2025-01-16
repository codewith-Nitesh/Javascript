let num = [10,20,30,40,50,60,70,80,90]

// filter method usage
// let newNum = num.filter((num1) => num1 > 50)
// console.log(newNum)

console.log(num.filter( (item) => item>50))

// let newArray = array.filter(callback(element[, index[, array]])[, thisArg]);

//The filter() method in JavaScript is used to create a new array with all elements that pass a test implemented by a provided function. It does not modify the original 
// array but instead returns a new array containing only the elements that meet the condition specified in the callback function.

let personage = [
    {
        Name :'Nitesh',
        age : 21
    },
    {
        Name :'Rohan Pal',
        age : 45
    },
    {
        Name :'Mukesh yadav',
        age : 40
    },
    {
        Name :'Sohan Lal',
        age : 35
    },
    {
        Name :'shivam reddy',
        age : 52
    }
]

let fil = personage.filter( (item) => {
    return item.age >= 40
})

console.log(fil)


let  addtocart = [
    {
        itemName:'Gyser',
        itemprice:6999,
        starRating: 4.5,
        itemsold:50000

    },
    {
        itemName:'Air conditioner',
        itemprice:39999,
        starRating: 4,
        itemsold:35000
    },
    {
        itemName:'electric kettle',
        itemprice:2999,
        starRating: 3.5,
        itemsold:40000
    },
    {
        itemName:'LED Tv',
        itemprice:34999,
        starRating: 5,
        itemsold:20000
    },
    {
        itemName:'Washing Machine',
        itemprice:32999,
        starRating: 4.5,
        itemsold:45000
    },
    {
        itemName:'Chimney',
        itemprice:19999,
        starRating: 3.7,
        itemsold:15000
    },
    {
        itemName:'Fridge',
        itemprice:29999,
        starRating: 4.3,
        itemsold:30000
    },
]

let itemFil = addtocart.filter( (item) => (item.itemprice > 30000 && item.starRating > 4  ))
console.log(itemFil)
let itemFil1 = addtocart.filter( (item) => (item.itemprice > 30000 && item.starRating > 4 && item.itemName === 'LED Tv' ))
console.log(itemFil1)

 // map() method function

// Purpose: Creates a new array by applying a transformation function to each element of the original array.
// Return Value: Returns a new array with the results of calling the callback function on every element.
// Chaining: map() can be chained with other array methods like filter(), reduce(), etc., because it returns a new array.


let arr = [10,20,30,40,50,60,70,80,90]

let arr1 = arr.map( (item) => (item +1))
console.log(arr1)


// chaining method in map

let arr2 = [10,20,30,40,50,60,70,80,90]

let arr3 = arr2
            .map((item) => item*10)
            .map((item) => item +1)
            .filter((item) => item >= 150)
            console.log(arr3)

// reduce method

// array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

// The reduce() method in JavaScript is a powerful array method used to reduce an array to a 
// single value by applying a function to each element of the array. It can be used to perform 
// operations like summing up numbers, flattening arrays, or creating objects.

let num1 = [10,20,30,40,50,60,70]

let total = num1.reduce((acc,curval) => (acc + curval),0)
console.log(total)

let shoopingListitem = [
    {
        itemName:'Gyser', price : 6999
    },
    {
        itemName:'Shoes', price : 2999
    },
    {
        itemName:'Furniture', price : 9999
    },
]

let subtotal = shoopingListitem.reduce((accu,currval) => (accu+currval.price) ,0)
console.log(subtotal)

let temp = [-10,0,20,30,40]

 temp.map((cel) => console.log(`temperature is ${cel}°C`))

temp.forEach((cel) => console.log(`temperature is ${cel}°C`))


let age = 0;
do{
    console.log(age)
    age++
}while(age<=10)
