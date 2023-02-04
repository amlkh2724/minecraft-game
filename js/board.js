
const buildBoard = document.querySelector("#game-board");
const matrixSize = 21;

export function createBoard() {
    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("sky");
            getDirt(cell, i);
            getGrass(cell, i);
            buildTree(cell, i, j)
            renderStone(cell, i, j)
            buildBoard.appendChild(cell);
        }
    }
}

function renderStone(cell, i, j) {
    if (i < 15 && i > 11 && j > 6 && j < 15) {
        cell.classList.remove("sky")
        cell.classList.add("rock")
    }

}

function buildTree(cell, i, j) {
    if (i < 15 && i > 10 && j > 16 && j < 18) {
        cell.classList.remove("sky")
        cell.classList.add("trunk")
    }
    if (
        (i < 11 && i > 7 && j > 15 && j < 19) ||
        (i < 15 && i > 11 && j > 2 && j < 6)


    ) {
        cell.classList.remove("sky")
        cell.classList.add("leaves")


    }
}

function getGrass(cell, i) {
    if (i === 15) {
        cell.classList.remove("sky")
        cell.classList.add("grass")
    }
}
function getDirt(cell, i) {
    if (i > 15) {
        cell.classList.remove("sky");
        cell.classList.add("dirt");
    }
}