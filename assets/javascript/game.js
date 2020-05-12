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


    var d = Math.random();
    if (d < 0.5) {
        console.log("Cramer is Awsome")
        let numbergoals = Number(teamoneNumgoals.innerHTML) + 1;
        teamoneNumgoals.innerHTML = numbergoals;
    }
})

teamtwoShootButton.addEventListener("click", function () {
    console.log("teamtwoshoot button clicked");
    let numbershots = Number(teamtwoNumshots.innerHTML) + 1;
    teamtwoNumshots.innerHTML = numbershots;

    var d = Math.random();
    if (d < 0.5) {
        console.log("Elizabeth is Supergreat")
        let numbergoals = Number(teamtwoNumgoals.innerHTML) + 1;
        teamtwoNumgoals.innerHTML = numbergoals;
    }
})

const resetButton = document.querySelector("#reset-button")
const numresetsElement = document.querySelector("#num-resets")
resetButton.addEventListener("click", function () {
    console.log("reset-button clicked");
    let numResets = Number(numresetsElement.innerHTML) + 1;
    numresetsElement.innerHTML = numResets;
    teamoneNumshots.innerHTML = 0;
    teamtwoNumshots.innerHTML = 0;

})














