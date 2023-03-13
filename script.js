let grid = document.querySelector(".container");
const gridSize = 16;
const cellProportion = 100 / gridSize;
grid.style.gridTemplateRows = `repeat(${gridSize}, ${cellProportion}fr)`;
grid.style.gridTemplateColumns = `repeat(${gridSize}, ${cellProportion}fr)`;
for (let i = 0; i < gridSize ** 2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
}