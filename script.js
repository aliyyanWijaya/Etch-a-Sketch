const containerDiv = document.createElement("div");
containerDiv.classList.add("container");

// add containerDiv into Body
const mainBody = document.querySelector("body");
mainBody.append(containerDiv);

function createGrid(grid) {
    containerDiv.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${grid}, 1fr)`;

    for (let i = 0; i < grid ** 2; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-div");
        containerDiv.append(gridDiv);
    }

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
}

createGrid(16);



let gridInputValue = document.querySelector(".square");
const gridInputContainer = document.querySelector(".grid-input-container")

const changeGridButton = document.querySelector(".change-grid-button");

changeGridButton.addEventListener("click", () => {
    let newGridValue = gridInputValue.value;
    if (isNaN(newGridValue) || newGridValue < 1 || newGridValue > 100) {
        const alertText = document.createElement("p");
        alertText.classList.add("alert-text");
        alertText.textContent = "Please input only a number between 1 - 100";
        gridInputContainer.append(alertText);
        gridInputValue.value = "";
        gridInputValue.focus();
        const removeText = document.querySelector(".alert-text");
        setTimeout(() => {
            removeText.remove();
        }, 3000);
    } else {
        const currentGrid = document.querySelector(".grid-div");
        containerDiv.innerHTML = "";
        createGrid(newGridValue);
    }
})