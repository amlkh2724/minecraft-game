const buildBoard = document.querySelector("#game-board");
const getButton = document.querySelector(".buttondes")

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

getButton.addEventListener("click", () => {
    buildBoard.innerHTML = ""
    createBoard()
})


// build the big man
function renderStone(cell, i, j) {
    if ((i < 15 && i > 1 && j > 4 && j < 6) || (i < 2 && i > 0 && j > 4 && j < 15) || (i < 15 && i > 1 && j < 15 && j > 13)) {
        cell.classList.remove("sky");
        cell.classList.add("rock");

    }
    if (!cell.classList.contains("legs") && !cell.classList.contains("arms") && !cell.classList.contains("body") && !cell.classList.contains("afterheads") && !cell.classList.contains("goldenhead")) {
        if (i >= 2 && i <= 14 && j >= 6 && j <= 13) {
            if (i !== 4 || (j < 8 || j > 10)) {
                cell.classList.add("snow");
            }
        }
    }

    if ((i < 15 && i > 9 && j > 7 && j < 9) || (i < 15 && i > 9 && j > 10 && j < 12)) {
        cell.classList.remove("sky");
        cell.classList.add("legs");
    }
    if (i < 10 && i > 4 && j > 6 && j < 13) {
        cell.classList.remove("sky");
        cell.classList.add("body");
    }
    if (i === 4 && j < 13 && j > 6) {
        cell.classList.remove("sky");
        cell.classList.add("afterheads");
    }
    if (i === 3 && j < 11 && j > 8) {
        cell.classList.remove("sky");
        cell.classList.add("goldenhead");
    }
    if ((i < 11 && i > 3 && j > 5 && j < 7) || (i < 15 && i > 9 && j > 10 && j < 12)) {
        cell.classList.remove("sky");
        cell.classList.add("arms");
    }
    if ((i < 11 && i > 3 && j > 12 && j < 14) || (i < 15 && i > 9 && j > 10 && j < 12)) {
        cell.classList.remove("sky");
        cell.classList.add("arms");
    }


}

function buildTree(cell, i, j) {
    if ((i < 15 && i > 10 && j > 16 && j < 18) || (i < 15 && i > 10 && j > 1 && j < 3)) {
        cell.classList.remove("sky")
        cell.classList.add("trunk")
    }
    if (
        (i < 11 && i > 7 && j > 15 && j < 19) || (i < 11 && i > 7 && j > 0 && j < 4)

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