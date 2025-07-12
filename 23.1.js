let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = false;
    if (!success) {
      resolve("operation failed");
    } else {
      reject("operation successful");
    }
  }, 2000);
});

promise1
  .then((param) => {
    console.log(param);
  })
  .catch((error) => {
    console.log(error);
  });

let promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "nitesh", age: 21 });
  }, 4000);
});

promiseTwo
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((user) => {
    console.log(user.username);
  });

let movieTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    let movieTicketAvail = true;
    if (movieTicketAvail) {
      resolve("Movie ticket is avaliable");
    } else {
      reject("movie ticket is not available");
    }
  }, 2000);
});

movieTicket
  .then((avail) => {
    console.log(avail);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("final answer is above");
  });

fetch("https://api.github.com/users/codewith-Nitesh")
  .then((data) => {
    return data.json();
  })
  .then((finalData) => {
    console.table([
      finalData.id,
      finalData.name,
      finalData.location,
      finalData.twitter_username,
    ]);
  })
  .catch((error) => {
    console.log(error);
  });

async function getData() {
  setTimeout(async () => {
    try {
      let data = await fetch("https://api.github.com/users/sahil");
      let res = await data.json();
      console.table([res.name, res.followers, res.company]);
    } catch (err) {
      console.log("error:", err);
    }
  }, 3000);
}

getData();

try {
  let user = JSON.parse('{"name":"Nitesh"}'); // ✅ valid JSON
  console.log(user.name);
} catch (error) {
  console.log("Galat JSON tha bhai:", error.message);
}

async function getUser() {
  try {
    let res = await fetch("https://wrong-api-url.com");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("⚠️ Error Type:", err.name);
    console.log("📩 Message:", err.message);
    //   console.log('error stack:', err.stack)
  }
}

getUser();

let userList = [
  {
    name: "Nitesh",
    age: 21,
    gender: "male",
  },
  {
    name : 'ashutosh',
    age:21,
    gender : 'male'
  },
  {
    name:'Sunidhi',
    age:21,
    gender:'female'
  }
];

let filtermethod = userList.filter((items) => {
    console.log(items.name)
})

console.log(filtermethod)

console.log(userList[1])

let mapping = userList.map((item)=>{
    let surname = 'choudhary'
   return item.name.concat(surname)
})

console.log(mapping)
