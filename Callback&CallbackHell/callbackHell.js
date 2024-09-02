// let heading1 = document.getElementById("one");
// let heading2 = document.getElementById("two");
// let heading3 = document.getElementById("three");

// let button = document.getElementById("btn");


// button.addEventListener("click", () => {
//     setTimeout(() => {
//         heading1.style.color = "red"
//         setTimeout(() => {
//             heading2.style.color = "green"
//             setTimeout(() => {
//                 heading3.style.color="purple"
//             }, 1000);
//         },1000);
//     }, 1000);

// })

function makeBreakfast(callback) {
  setTimeout(() => {
    console.log("Breakfast is ready!");
    callback();
  }, 1000);
}

function makeLunch(callback) {
  setTimeout(() => {
    console.log("Lunch is ready!");
    callback();
  }, 1000);
}

function makeDinner(callback) {
  setTimeout(() => {
    console.log("Dinner is ready!");
    callback();
  }, 1000);
}

function cleanDishes(callback) {
  setTimeout(() => {
    console.log("Dishes are cleaned!");
    callback();
  }, 1000);
}

// Callback hell example
makeBreakfast(() => {
  makeLunch(() => {
    makeDinner(() => {
      cleanDishes(() => {
        console.log("All tasks are done!");
      });
    });
  });
});
