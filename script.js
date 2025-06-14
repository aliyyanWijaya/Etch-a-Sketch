const containerDiv = document.createElement("div");
containerDiv.classList.add("container");

// add containerDiv into Body
const mainBody = document.querySelector("body");
mainBody.append(containerDiv);

const gridDiv = document.createElement("div");
gridDiv.classList.add("grid-div");
containerDiv.append(gridDiv);
