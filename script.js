// create initial grid upon loading
createGrid(16, "BLACK");

// clear current grid and create new using entered size and selected color
const create = document.querySelectorAll("button");
for (let i = 0; i < create.length; i++) {
    create[i].addEventListener("click", function() {
        const error = document.querySelector(".error");
        let userInputSize = document.querySelector("#grid-size").value;

        let gridSize = parseInt(userInputSize);
        if (gridSize < 1 || gridSize > 100 || userInputSize.trim() === "") {
            error.textContent = "Please enter a number between 1 - 100!";
            return;
        } else {
            error.textContent = "";
        }

        let gridColor = this.textContent;
        
        const grid = document.querySelector(".container");
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }

        createGrid(gridSize, gridColor);
    });
}

function createGrid(gridSize, color) {
    const grid = document.querySelector(".container");

    const cellProportion = 100 / gridSize;
    grid.style.gridTemplateRows = `repeat(${gridSize}, ${cellProportion}fr)`;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, ${cellProportion}fr)`;

    for (let i = 0; i < gridSize ** 2; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }

    allowColorChangeOnMouseover(color);
}

function allowColorChangeOnMouseover(color) {
    const cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", function() {
            if (color === "BLACK") {
                this.style.backgroundColor = color;
                this.style.borderColor = color;
            } else {
                let randomRed = Math.floor(Math.random() * 256);
                let randomGreen = Math.floor(Math.random() * 256);
                let randomBlue = Math.floor(Math.random() * 256);
                this.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
                this.style.borderColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            }
        });
    }
}
