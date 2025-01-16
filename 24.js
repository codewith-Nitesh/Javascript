
let promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({
                userName:'Nishant',
                age:21,
                gender:"Male"
            })
        }
        else{
               reject('Error: js went wrong')
            }
        },4000
)})


async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response)
   } catch (error) {
    console.log(error)
   }
}

consumePromiseFive()


// async function getAllusers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log(error)
//   }
// }

// getAllusers()

fetch('https://api.github.com/users/Nitesh0677')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log('userName:', data.login)
    console.log('id',data.id)
    console.log('type:',data.type)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log('data fetched successfully')
})

