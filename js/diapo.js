const diapoProject = document.getElementsByClassName("diapoProject")[0]

const project = diapoProject.getElementsByClassName("InfoDiapo")
const projectView = document.getElementById("cardDiapoP")
const projectViewRight = document.getElementById("cardDiapoPr")
const projectViewLeft = document.getElementById("cardDiapoPl")
const projectMoveL = diapoProject.getElementsByClassName("ToLeft")[0]
const projectMoveR = diapoProject.getElementsByClassName("ToRight")[0]
let projectActiveId = 0;

const setViewProject = () => {
    const p = project[projectActiveId]
    const pl = project[projectActiveId == 0? project.length-1 : projectActiveId-1];
    const pr = project[projectActiveId == project.length-1? 0 : projectActiveId+1];

    diapoProject.querySelector(".titleDiapo h3").innerHTML = p.getAttribute("card-title")

    //navigation
    //focus
    projectView.style.backgroundImage = `url('${p.getAttribute("card-pc")}')`;
    projectView.style.backgroundSize = "cover"
    //left
    projectViewLeft.style.backgroundImage = `url('${pl.getAttribute("card-pc")}')`;
    projectViewLeft.style.backgroundSize = "cover"
    //right
    projectViewRight.style.backgroundImage = `url('${pr.getAttribute("card-pc")}')`;
    projectViewRight.style.backgroundSize = "cover"
    
    //render
    document.getElementsByClassName("imgProject")[0]
        .style.backgroundImage = `url('${p.getAttribute("card-pc")}')`;
    document.getElementsByClassName("imgProject")[1]
        .style.backgroundImage = `url('${p.getAttribute("card-mobile")}')`;
    document.getElementsByClassName("infoProject")[0]
        .innerHTML = p.getAttribute("card-link") !== ""?
            `${p.getAttribute("card-info")} <a href="${p.getAttribute("card-link")}">Visiter le site.</a>`
            :
            p.getAttribute("card-info");
}

const moveLeft = () => {
    projectActiveId = projectActiveId == project.length -1 ? 0 : projectActiveId + 1;
    setViewProject()
}
const moveRight = () => {
    projectActiveId = projectActiveId == 0 ?project.length -1 : projectActiveId - 1;
    setViewProject()
}

projectMoveL.addEventListener("click", moveRight);
projectViewLeft.addEventListener("click", moveRight);
projectMoveR.addEventListener("click", moveLeft);
projectViewRight.addEventListener("click", moveLeft);
const pdl = document.getElementsByClassName("cardDiapoL")
const pdr = document.getElementsByClassName("cardDiapoR")
for (let i = 0; i < pdl.length; i++) pdl[i].addEventListener("click", moveRight);
for (let i = 0; i < pdr.length; i++) pdr[i].addEventListener("click", moveLeft);

setViewProject()