const containerDiv = document.createElement("div");
containerDiv.classList.add("container");

// add containerDiv into Body
const mainBody = document.querySelector("body");
mainBody.append(containerDiv);

function createGrid(grid) {
    for (let i = 0; i < grid ** 2; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-div");
        containerDiv.append(gridDiv);
    }
}

createGrid(16);

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const gridDiv = document.querySelectorAll(".grid-div");

gridDiv.forEach(div => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = getRandomRgbColor();
    })
})
