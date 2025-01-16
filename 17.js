// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log('DB connected')
})();

( ()=>{
  console.log('my name is Hatela')
})();

((name) =>{
    console.log(`my name is ${name}`)
})('Nitesh');

(() => console.log('Nitesh'))()