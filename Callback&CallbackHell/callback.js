// *Callback Defination = A Callback functin is function that is passed as an argument in another function
//   *  and return another function
// * Callback function commonly used to handle asynchronous function such as loading data from sever and waiting for user event

// Example Sync
function multiply(a, b) {
    return a * b;
}
function calculator(task,a, b) {
    console.log('Result:',task(a,b))
}
calculator(multiply, 5, 5);

// Asychronous way

// function Add(a, b) {
//     console.log("sum:",a+b)
// }

// setTimeout(() => {
//     Add(5, 5)
// }, 2000);

//! CallbackHell in javascript 
