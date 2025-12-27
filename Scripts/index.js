const viewUniversesBtn = document.getElementById("viewUniversesButton");
const createUniverseBtn = document.getElementById("createUniverseButton");

const createUniversePopup = document.getElementById("createUniversePopup")

viewUniversesBtn.addEventListener("click", viewUniverses);
createUniverseBtn.addEventListener("click", createUniverse);

function viewUniverses() {
    console.log("User clicked the view universes button");
}

function createUniverse(){
    createUniversePopup.classList.remove("hidden");
}

console.log("index.js correctly loaded");