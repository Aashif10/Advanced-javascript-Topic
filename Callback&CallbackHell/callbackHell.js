let heading1 = document.getElementById("one");
let heading2 = document.getElementById("two");
let heading3 = document.getElementById("three");

let button = document.getElementById("btn");


button.addEventListener("click", () => {
    setTimeout(() => {
        heading1.style.color = "red"
        setTimeout(() => {
            heading2.style.color = "green"
            setTimeout(() => {
                heading3.style.color="purple"
            }, 1000);
        },1000);
    }, 1000);

})