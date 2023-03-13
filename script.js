let gridSize = 16;

document.addEventListener("DOMContentLoaded", createGrid(gridSize, "black"));

const cellsBlack = document.querySelectorAll(".cell-black");
for (let i = 0; i < cellsBlack.length; i++) {
    cellsBlack[i].addEventListener("mouseover", changeColorToBlack);
}

/* const cellsRGB = document.querySelectorAll(".cell-rgb");
for (let i = 0; i < cellsRGB.length; i++) {
    cellsRGB[i].addEventListener("mouseover", changeColorRGB);
} */


function createGrid(gridSize, color) {
    const grid = document.querySelector(".container");

    const cellProportion = 100 / gridSize;
    grid.style.gridTemplateRows = `repeat(${gridSize}, ${cellProportion}fr)`;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, ${cellProportion}fr)`;

    if (color === "black") {
        for (let i = 0; i < gridSize ** 2; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell-black");
            grid.appendChild(cell);
        }
    } else {
        for (let i = 0; i < gridSize ** 2; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell-rgb");
            grid.appendChild(cell);
        }
    }
}

function changeColorToBlack() {
    this.style.backgroundColor = "black";
}

/* function changeColorRGB() {
    this.style.backgroundColor = "black";
} */