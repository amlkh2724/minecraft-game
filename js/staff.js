const buildBoard = document.getElementById("game-board");
const pickaxeClick = document.querySelector("#pickaxe");
const axeClick = document.querySelector("#axe");
const shovelClick = document.querySelector("#shovel");
const pickaxe = document.getElementById("pickaxe");
const axe = document.getElementById("axe");
const shovel = document.getElementById("shovel");

class allTheStaff {
    constructor(axe, pickaxe, shovel) {
        this.axe = axe;
        this.pickaxe = pickaxe;
        this.shovel = shovel;
    }
}

const types = {
    grass: "grass",
    leaves: "leaves",
    dirt: "dirt",
    rock: "rock",
    snow: "snow",
    tree: "tree",
    trunk: "trunk"
};

const toolTypes = {
    pickaxe: [types.rock],
    shovel: [types.dirt, types.grass],
    axe: [types.trunk]
};

buildBoard.addEventListener("click", (e) => {
    const target=e.target
    // console.log(target);
    if(pickaxe.classList.contains("blue")){
        //todo
        if(target.classList.contains("rock")){
            target.classList.remove("rock")
        }
    }
    if(shovel.classList.contains("blue")){
        if(target.classList.contains("dirt")|| target.classList.contains("grass")){
            target.classList.remove("grass")
            target.classList.remove("dirt")
            
        }
    }
    if(axe.classList.contains("blue")){
        if(target.classList.contains("grass")|| target.classList.contains("trunk") ){
            target.classList.remove("leaves")
            target.classList.remove("trunk")
        }
    }
});

pickaxeClick.addEventListener("click", (e) => {
    pickaxe.classList.add("blue");
    axe.classList.remove("blue");
    shovel.classList.remove("blue");
});

axeClick.addEventListener("click", (e) => {
    axe.classList.add("blue");
    pickaxe.classList.remove("blue");
    shovel.classList.remove("blue");
});

shovelClick.addEventListener("click", (e) => {
    shovel.classList.add("blue");
    pickaxe.classList.remove("blue");
    axe.classList.remove("blue");
});