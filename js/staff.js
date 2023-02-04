const buildBoard = document.getElementById("game-board");
const pickaxeClick = document.querySelector("#pickaxe");
const axeClick = document.querySelector("#axe");
const shovelClick = document.querySelector("#shovel");
const pickaxe = document.getElementById("pickaxe");
const axe = document.getElementById("axe");
const shovel = document.getElementById("shovel");
const counterGrass = document.querySelector(".counter1")
const counterRock = document.querySelector(".counter2")
const counterSnow = document.querySelector(".counter3")
const counterTrunk = document.querySelector(".counter4")
const counterLeaves = document.querySelector(".counter5")
const counterDirt = document.querySelector(".counterDirt")
const getDirt = document.querySelector(".currentDirt")
const getGrass = document.querySelector(".currentGrass")
const getRock = document.querySelector(".currentRock")
const getSnow = document.querySelector(".currentSnow")
const getTrunk = document.querySelector(".currentTrunk")
const getLeaves = document.querySelector(".currentLeaves")
const swordaaa = document.querySelector(".containerSword")
const sword1 = document.querySelector(".sword")


//////////////////////////////////
counterDirt.classList.add("red")
counterGrass.classList.add("red")
counterRock.classList.add("red")
counterSnow.classList.add("red")
counterTrunk.classList.add("red")
counterLeaves.classList.add("red")
//////////////////////////////////



function restartGame() {
    location.href = "./index.html";
}

function restartColors() {
    counterDirt.classList.remove("green");
    counterGrass.classList.remove("green");
    counterRock.classList.remove("green");
    counterSnow.classList.remove("green");
    counterTrunk.classList.remove("green");
    counterLeaves.classList.remove("green");
}


function restartBlurColor() {
    pickaxe.classList.remove("blue");
    shovel.classList.remove("blue");
    axe.classList.remove("blue");
}

let counter = 0

let counterRock1 = 0;
let counterDirt2 = 0;
let counterGras3 = 0;
let counterLeaves4 = 0;
let counterTrunk5 = 0;
let counterSnow6 = 0

buildBoard.addEventListener("click", (e) => {
    const target = e.target
    if (swordaaa.classList.contains("blue")) {
        target.classList = "";
    }
    if (pickaxe.classList.contains("blue")) {
        counterDirt.classList.add("red")
        if (target.classList.contains("rock")) {
            counterRock1++;
            counterRock.innerHTML = counterRock1;
            target.classList.remove("rock");
        }
        if (target.classList.contains("snow")) {
            counterSnow6++
            counterSnow.innerHTML = counterSnow6
            target.classList.remove("snow")

        }
    }
    if (shovel.classList.contains("blue")) {
        // restartColors()
        if (target.classList.contains("dirt")) {
            counterDirt2++;
            counterDirt.innerHTML = counterDirt2;
            target.classList.remove("dirt");
        }
        if (target.classList.contains("grass")) {
            counterGras3++;
            counterGrass.innerHTML = counterGras3;
            target.classList.remove("grass");
        }
    }
    if (axe.classList.contains("blue")) {
        // restartColors()

        if (target.classList.contains("leaves")) {
            counterLeaves4++;
            counterLeaves.innerHTML = counterLeaves4;
            target.classList.remove("leaves");
        }
        if (target.classList.contains("trunk")) {
            counterTrunk5++;
            counterTrunk.innerHTML = counterTrunk5;
            target.classList.remove("trunk");
        }
    }

    if (counterDirt.classList.contains("green")) {
        if (counterDirt.innerHTML > 0) {
            counterDirt.innerHTML--
            if (target.classList.contains("sky") || !target.classList.length) {
                target.classList.add("dirt")
            }
        }

    }
    if (counterTrunk.classList.contains("green")) {
        if (counterTrunk.innerHTML > 0) {
            counterTrunk.innerHTML--
            if (target.classList.contains("sky") || !target.classList.length) {
                target.classList.add("trunk")

            }
        }
    }
    if (counterRock.classList.contains("green")) {
        if (counterRock.innerHTML > 0) {
            counterRock.innerHTML--
            if (target.classList.contains("sky") || !target.classList.length) {
                target.classList.add("rock")
            }
        }
    }
    if (counterLeaves.classList.contains("green")) {
        if (counterLeaves.innerHTML > 0) {
            counterLeaves.innerHTML--
            if (target.classList.contains("sky") || !target.classList.length) {
                target.classList.add("leaves")
            }
        }
    }
    if (counterGrass.classList.contains("green")) {
        if (counterGrass.innerHTML > 0) {
            counterGrass.innerHTML--
            if (target.classList.contains("sky") || !target.classList.length) {
                target.classList.add("grass")
            }
        }
    }
    if (counterSnow.classList.contains("green")) {
        if (counterSnow.innerHTML > 0) {
            counterSnow.innerHTML--
            if (target.classList.contains("sky") || !target.classList.length) {
                target.classList.add("snow")
            }
        }
    }

});
swordaaa.addEventListener("click", (e) => {
    swordaaa.classList.add("blue")
    restartBlurColor()
    restartColors()
})
pickaxeClick.addEventListener("click", (e) => {
    swordaaa.classList.remove("blue")

    pickaxe.classList.add("blue");
    restartColors()
    axe.classList.remove("blue");
    shovel.classList.remove("blue");
});

axeClick.addEventListener("click", (e) => {
    swordaaa.classList.remove("blue")

    axe.classList.add("blue");
    restartColors()
    pickaxe.classList.remove("blue");
    shovel.classList.remove("blue");
});

shovelClick.addEventListener("click", (e) => {
    swordaaa.classList.remove("blue")

    shovel.classList.add("blue");
    restartColors()
    pickaxe.classList.remove("blue");
    axe.classList.remove("blue");
});

getDirt.addEventListener("click", () => {
    swordaaa.classList.remove("blue")


    counterDirt.classList.add("green")
    restartBlurColor()
    counterGrass.classList.remove("green")
    counterRock.classList.remove("green")
    counterSnow.classList.remove("green")
    counterTrunk.classList.remove("green")
    counterLeaves.classList.remove("green")

})
getTrunk.addEventListener("click", () => {
    swordaaa.classList.remove("blue")

    counterDirt.classList.remove("green")
    counterGrass.classList.remove("green")
    counterRock.classList.remove("green")
    counterSnow.classList.remove("green")
    counterTrunk.classList.add("green")
    restartBlurColor()
    counterLeaves.classList.remove("green")

})

getRock.addEventListener("click", () => {
    swordaaa.classList.remove("blue")
    counterDirt.classList.remove("green")
    counterGrass.classList.remove("green")
    counterRock.classList.add("green")
    restartBlurColor()
    counterSnow.classList.remove("green")
    counterTrunk.classList.remove("green")
    counterLeaves.classList.remove("green")
})

getLeaves.addEventListener("click", () => {
    swordaaa.classList.remove("blue")

    counterDirt.classList.remove("green")
    counterGrass.classList.remove("green")
    counterRock.classList.remove("green")
    counterSnow.classList.remove("green")
    counterTrunk.classList.remove("green")
    counterLeaves.classList.add("green")
    restartBlurColor()

})

getGrass.addEventListener("click", () => {
    swordaaa.classList.remove("blue")

    counterDirt.classList.remove("green")
    counterGrass.classList.add("green")
    restartBlurColor()
    counterRock.classList.remove("green")
    counterSnow.classList.remove("green")
    counterTrunk.classList.remove("green")
    counterLeaves.classList.remove("green")

})

getSnow.addEventListener("click", () => {
    swordaaa.classList.remove("blue")

    counterDirt.classList.remove("green")
    counterGrass.classList.remove("green")
    counterRock.classList.remove("green")
    counterSnow.classList.add("green")
    restartBlurColor()
    counterTrunk.classList.remove("green")
    counterLeaves.classList.remove("green")

})