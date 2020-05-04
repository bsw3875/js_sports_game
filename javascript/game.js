let incrementButton = document.querySelector("#increment");
let decrementButton = document.querySelector("#decrement");
let counter = document.querySelector("#counter");
incrementButton.addEventListener("click", function () {
    console.log("+ button click")

    let newCounterValue = Number(counter.innerHTML) + 1;
    counter.innerHTML = newCounterValue;
})

decrementButton.addEventListener("click", function () {
    console.log("- button clicked")

    let newCounterValue = Number(counter.innerHTML) - 1;
    counter.innerHTML = newCounterValue;

})
function shoot() {
    document.getElementById("shoot").value = document.getElementById("shoot").value

}

function goals() {
    document.getElementById("goals").value = document.getElementById("goals").value
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



