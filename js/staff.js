

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



function addedClass() {
    counterDirt.classList.add("red")
    counterGrass.classList.add("red")
    counterRock.classList.add("red")
    counterSnow.classList.add("red")
    counterTrunk.classList.add("red")
    counterLeaves.classList.add("red")
}
addedClass()



function restartColors() {
    counterDirt.classList.remove("green");
    counterGrass.classList.remove("green");
    counterRock.classList.remove("green");
    counterSnow.classList.remove("green");
    counterTrunk.classList.remove("green");
    counterLeaves.classList.remove("green");
    swordaaa.classList.remove("blue")

}


function restartBlurColor() {
    pickaxe.classList.remove("blue");
    shovel.classList.remove("blue");
    axe.classList.remove("blue");
}
function addedClass() {
    counterDirt.classList.add("red")
    counterGrass.classList.add("red")
    counterRock.classList.add("red")
    counterSnow.classList.add("red")
    counterTrunk.classList.add("red")
    counterLeaves.classList.add("red")
}
addedClass()



function restartColors() {
    counterDirt.classList.remove("green");
    counterGrass.classList.remove("green");
    counterRock.classList.remove("green");
    counterSnow.classList.remove("green");
    counterTrunk.classList.remove("green");
    counterLeaves.classList.remove("green");
    swordaaa.classList.remove("blue")

}


function restartBlurColor() {
    pickaxe.classList.remove("blue");
    shovel.classList.remove("blue");
    axe.classList.remove("blue");
}

let counter = {
    dirt: 0,
    rock: 0,
    grass: 0,
    leaves: 0,
    trunk: 0,
    snow: 0
};

const updateCounter = (counterName, value) => {
    counter[counterName] += value;
};
const removeMaterial = (target, material) => {
    target.classList.remove(material);
    updateCounter(material, 1);
};

const addMaterial = (target, element) => {

    if (counter[element] > 0) {
        counter[element]--;
        if (target.classList.contains("sky") || !target.classList.length) {
            target.classList.add(element);
        }
    }
};

buildBoard.addEventListener("click", (e) => {
    const target = e.target;
    if (swordaaa.classList.contains("blue")) {
        target.classList = "";
    }
    if (pickaxeClick.classList.contains("blue")) {
        if (target.classList.contains("rock")) {
            removeMaterial(target, "rock");
        }
        if (target.classList.contains("snow")) {
            removeMaterial(target, "snow");
        }
    }
    if (shovelClick.classList.contains("blue")) {
        if (target.classList.contains("dirt")) {
            removeMaterial(target, "dirt");
        }
        if (target.classList.contains("grass")) {
            removeMaterial(target, "grass");
        }
    }
    if (axeClick.classList.contains("blue")) {
        if (target.classList.contains("leaves")) {
            removeMaterial(target, "leaves");
        }
        if (target.classList.contains("trunk")) {
            removeMaterial(target, "trunk");
        }
    }

    if (getDirt.classList.contains("green")) {

        addMaterial(target, "dirt");
    }
    if (getTrunk.classList.contains("green")) {
        addMaterial(target, "trunk");
    }
    if (getRock.classList.contains("green")) {
        addMaterial(target, "rock");
    }
    if (getLeaves.classList.contains("green")) {
        addMaterial(target, "leaves");
    }
    if (getGrass.classList.contains("green")) {
        addMaterial(target, "grass");
    }
    if (getSnow.classList.contains("green")) {
        addMaterial(target, "snow");
    }
});

swordaaa.addEventListener("click", (e) => {
    restartBlurColor()
    restartColors()
    swordaaa.classList.add("blue")
})
pickaxeClick.addEventListener("click", (e) => {
    restartBlurColor()
    pickaxe.classList.add("blue");
    restartColors()
});

axeClick.addEventListener("click", (e) => {
    restartBlurColor()
    axe.classList.add("blue");
    restartColors()

});
shovelClick.addEventListener("click", (e) => {
    restartBlurColor()
    shovel.classList.add("blue");
    restartColors()

});
getDirt.addEventListener("click", () => {
    restartColors();
    counterDirt.classList.add("green");
    restartBlurColor();

});

getTrunk.addEventListener("click", () => {
    restartColors();
    counterTrunk.classList.add("green");
    restartBlurColor();
});

getRock.addEventListener("click", () => {
    restartColors();
    counterRock.classList.add("green");
    restartBlurColor();
});

getLeaves.addEventListener("click", () => {
    restartColors();
    counterLeaves.classList.add("green");
    restartBlurColor();
});

getGrass.addEventListener("click", () => {
    restartColors();
    counterGrass.classList.add("green");
    restartBlurColor();
});

getSnow.addEventListener("click", () => {
    restartColors();
    counterSnow.classList.add("green");
    restartBlurColor();
});

