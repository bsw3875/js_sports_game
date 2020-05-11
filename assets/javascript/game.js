const teamoneNumshots = document.querySelector("#teamone-numshots")
const teamoneNumgoals = document.querySelector("#teamone-numgoals")
const teamoneShootButton = document.querySelector("#teamone-shoot-button")

const teamtwoNumshots = document.querySelector("#teamtwo-numshots")
const teamtwoNumgoals = document.querySelector("#teamtwo-numgoals")
const teamtwoShootButton = document.querySelector("#teamtwo-shoot-button")


teamoneShootButton.addEventListener("click", function () {
    console.log("teamoneshoot button clicked");
    let numbershots = Number(teamoneNumshots.innerHTML) + 1;
    teamoneNumshots.innerHTML = numbershots;
})

teamtwoShootButton.addEventListener("click", function () {
    console.log("teamtwoshoot button clicked");
    let numbershots = Number(teamtwoNumshots.innerHTML) + 1;
    teamtwoNumshots.innerHTML = numbershots;

})

const resetButton = document.querySelector("#reset-button")

resetButton.addEventListener("click", function () {
    console.log("reset-button clicked");
    let numResets = Number(resetButton.innerHTML) + 1;
    resetButton.innerHTML = numResets;


})














