const instructionGameButton = document.querySelector(".instruction-game-button");
const instructionsText = document.querySelector("#instructions-text");
const flexit = document.querySelector(".flexit");

instructionGameButton.addEventListener("click", function() {
  if (instructionsText.style.display === "none") {
    instructionsText.style.display = "block";
    instructionsText.innerText = "A similar game that contains several tools to choose from the game and there is the sword that deletes everything and the other tools are deleted according to the real game, what you delete you can keep it";
    flexit.classList.add("backgroundforit");
    setTimeout(function() {
      instructionsText.style.opacity = 1;
    }, 500);
  } else {
    instructionsText.style.display = "none";
    flexit.classList.remove("backgroundforit");
    instructionsText.style.opacity = 0;
  }
});