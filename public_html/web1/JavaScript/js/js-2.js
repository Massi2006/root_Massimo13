console.log("JS 2 is loaded");

//Step 1 - selecting your element
const myPacman = document.getElementById("pacman")

//step 2 - adding a click event

    myPacman.addEventListener("click", () => { ;
    myPacman.style.borderTop = "60px solid black";
    myPacman.style.borderBottom = "60px solid black";
    myPacman.style.borderLeft = "60px solid black";
    myPacman.classList.toggle("change-me");
})