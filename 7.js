// string and its method function
// concatenate meaning adding up two things

let name1 = "Nitesh";
let surname = " Choudhary";

console.log(name1 + surname);

// injecting the variable
// for this use back ticks and this is called the string interpollatation

console.log(`${name1}${surname}`);

console.log(`hello my first name is ${name1} and my surname is ${surname}`);
// function methods

let container = new String("Nitesh");
console.log(name1[0]);
console.log(name1.toUpperCase());
console.log(container.toUpperCase());

console.log(surname.toLowerCase());
console.log(surname.charAt("3"));
console.log(surname.indexOf("d"));
console.log(surname.substring(0, 4));
console.log(surname.slice(1, 4));
console.log(surname.length);
console.log(surname.slice(4, 6));
console.log(surname.slice(2, 4));

let container1 = "     Nitesh   Choudhary     ";
console.log(container1.trim());
console.log(container1.trimStart());
console.log(container1.trimEnd());

const url = "https://nitesh.com/nitesh%20choudhary";

console.log(url.replace("nitesh", "Nitin"));

let namee = "nitesh";
console.log(namee.includes("choudhary")); // answer will be given by in either true of false

console.log(namee.includes("sh"));

let container2 =
  "My name is Nitesh Choudhary, my name is sahil, my name is Ashutosh, my name is Nitin";

console.log(container2.split(""));

console.log(container2.split(" "));

console.log(container2.split(",", 2));

let sentence = "one, two, three, four, five";
let result = sentence.split(", ", 3); // Split by comma and space, with a limit of 3
console.log(result); // Output: ["one", "two", "three"]

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

console.log(surname.bold());
console.log(container);

console.log(url.replace("nitesh", "Nitin"));

let my_Name = "nitesh Choudhary";
let anoth = my_Name.length;
console.log(anoth);

let location = "himachal";
console.log(location.indexOf("i"));

let name = "Dayaramchand";
console.log(name.split(""));
console.log(name.split(" "));
console.log(name.split("  "));
console.log(name.charAt("5"));
console.log(name.slice(""));
console.log(name, "".concat("choudhary"));
console.log(location.includes("m"));

const surname1 = "CHOUDHARY";
console.log(surname1.toLowerCase(surname1));

const modify = [
  {
    name: "Nitesh",
    DOB: 12 / 6 / 2003,
  },
  {
    name: "Nishant",
    DOB: 15 / 8 / 2002,
  },
  {
    name: "Nitin",
    DOB: 19 / 11 / 2001,
  },
];

const nameModify = modify.map((data)=>{
    return data.name.concat(' ','choudhary').toUpperCase()
})

console.log(nameModify)

let my_Name1  = 'Nitesh'
console.log(my_Name1.length)

console.log(modify.filter((item)=>{
 return item.name = 'Nitesh'
}))

const items = () =>{
  return items.DOB = 19 / 11 / 2001
}

console.log(modify.filter(items))

let technology = "JavaScript, Python, Java, C++";
let techArray = technology.split(" ,");   
console.log(techArray); // Output: ["JavaScript", "Python", "Java", "C++"]

let modiitems = [10,20,30,40,50,60];

let othermodiItems = modiitems.map((item) => {
  return item + 5
})

console.log(othermodiItems)

let allValue = [10,20,30,40,50]

let allValueAdd = allValue.reduce((acc,curr) =>{
  return acc - curr
},0)

console.log(allValueAdd)

let per1Name = 'Nitesh';
console.log(per1Name.length)
