// ! Promise in Javascipt
// * Promise are object representing the eventual completion or failure oc an asynchronouse operation (such  as fetching data from server, or executing any code that takes  time to  execute).
// * promise is introduced to simplfy and improve the handling of asynchronous operations which is increase readability and maintability of the code

// * It is a solution of callback Hell.


let promise = new Promise((resole, reject) => {
    let random = Math.random();
    if (random > 0.5) {
        resole(random);
    }
    else {
        reject(new Error("Number is less than 0.5"));
    }
})

promise.then((result) => {
    console.log("The random number is :",result)
}).catch((error) => {
    console.log(error)
})

