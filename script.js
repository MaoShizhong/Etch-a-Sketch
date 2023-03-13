let gridColor = "black";
// create initial grid upon loading
createGrid(16, "black");

// change color setting
const buttonBlack = document.querySelector("#black");
const buttonRGB = document.querySelector("#rgb");
buttonBlack.addEventListener("click", () => gridColor = "black");
buttonRGB.addEventListener("click", () => gridColor = "rgb");

const create = document.querySelector("#create");
create.addEventListener("click", clearThenCreateGrid);


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
        allowColorBlack();
    } else {
        for (let i = 0; i < gridSize ** 2; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell-rgb");
            grid.appendChild(cell);
        }
        allowColorRGB();
    }
}

function clearThenCreateGrid() {
    const error = document.querySelector(".error");
    let gridSize = parseInt(document.querySelector("#grid-size").value);
    if (gridSize < 1 || gridSize > 100) {
        error.textContent = "Please enter a number between 1 - 100!";
        return;
    } else {
        error.textContent = "";
    }
    
    const grid = document.querySelector(".container");
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    createGrid(gridSize, gridColor);
}

function allowColorBlack() {
    const cellsBlack = document.querySelectorAll(".cell-black");
    for (let i = 0; i < cellsBlack.length; i++) {
        cellsBlack[i].addEventListener("mouseover", () => cellsBlack[i].style.backgroundColor = "black");
    }
}

function allowColorRGB() {
    const cellsRGB = document.querySelectorAll(".cell-rgb");
    for (let i = 0; i < cellsRGB.length; i++) {
        cellsRGB[i].addEventListener("mouseover", function() {
            let randomRed = Math.floor(Math.random() * 256);
            let randomGreen = Math.floor(Math.random() * 256);
            let randomBlue = Math.floor(Math.random() * 256);
            this.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
            });
    }
}