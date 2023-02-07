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

const blocks = {

    rock: {
        className: "rock",
        counter: 0,
        counterElement: counterRock
    },
    dirt: {
        className: "dirt",
        counter: 0,
        counterElement: counterDirt
    },
    grass: {
        className: "grass",
        counter: 0,
        counterElement: counterGrass
    },
    leaves: {
        className: "leaves",
        counter: 0,
        counterElement: counterLeaves
    },
    trunk: {
        className: "trunk",
        counter: 0,
        counterElement: counterTrunk
    },
    snow: {
        className: "snow",
        counter: 0,
        counterElement: counterSnow
    },


};
const tools = {
    pickaxe: ["rock", "snow"],
    axe: ["trunk", "leaves"],
    shovel: ["dirt", "grass"],
};

buildBoard.addEventListener("click", (e) => {
    const target = e.target;

    if (swordaaa.classList.contains("blue")) {
        target.classList = "";
    }

    for (const className in blocks) {
        const block = blocks[className];
        if (pickaxe.classList.contains("blue")) {
            tools.pickaxe.forEach(blockName => {
                if (target.classList.contains(blockName)) {
                    const block = blocks[blockName];
                    console.log(block);
                    block.counter++;
                    block.counterElement.innerHTML = block.counter;
                    target.classList.remove(block.className);
                }
            });
        }

        if (shovel.classList.contains("blue")) {
            tools.shovel.forEach(blockName => {
                if (target.classList.contains(blockName)) {
                    const block = blocks[blockName];
                    block.counter++;
                    block.counterElement.innerHTML = block.counter;
                    target.classList.remove(block.className);
                }
            });
        }

        if (axe.classList.contains("blue")) {
            tools.axe.forEach(blockName => {
                if (target.classList.contains(blockName)) {
                    const block = blocks[blockName];
                    block.counter++;
                    block.counterElement.innerHTML = block.counter;
                    target.classList.remove(block.className);
                }
            });
        }

        if (block.counterElement.classList.contains("green") && block.counter > 0) {
            block.counter--;
            block.counterElement.innerHTML = block.counter;
            if (target.classList.contains("sky") || !target.classList.length) {
                target.classList.add(block.className);
            }
        }
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
    restartColors()
    counterDirt.classList.add("green")
    restartBlurColor()


})
getTrunk.addEventListener("click", () => {
    restartColors()
    counterTrunk.classList.add("green")
    restartBlurColor()
})

getRock.addEventListener("click", () => {
    restartColors()
    counterRock.classList.add("green")
    restartBlurColor()
})

getLeaves.addEventListener("click", () => {
    restartColors()
    counterLeaves.classList.add("green")
    restartBlurColor()
})

getGrass.addEventListener("click", () => {
    restartColors()
    counterGrass.classList.add("green")
    restartBlurColor()

})

getSnow.addEventListener("click", () => {
    restartColors()
    counterSnow.classList.add("green")
    restartBlurColor()
})