console.log("loaded ðŸ¸");

const stage = document.querySelector("body");
const mrHabs = document.getElementById("mrHabs");

// Sounds
const smack= new Audio("sounds/air-hockey-smack-61272.mp3");

// When mrHabs is clicked, toggle its movement state and play sound
mrHabs.onclick = function() {
    mrHabs.classList.toggle("move");
    smack.play();

}

// When the stage is clicked, move mrHabs to the mouse position
stage.addEventListener("click", function(event) {
    console.log(event.clientX + " : " + event.clientY);
    
    // Move mrHabs element to the clicked position, offset by the dimensions of mrHabs
    mrHabs.style.transform = `translateX(${event.clientX - 100}px) translateY(${event.clientY - 92}px)`;
});

// Keyboard input for manual movement of mrHabs
document.onkeydown = checkKeys;

function checkKeys(event) {
    var style = window.getComputedStyle(mrHabs);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;    
    var coords;

    // Move mrHabs based on arrow key presses
    if (event.keyCode == "37") { // left arrow
        coords = `translateX(${xVal - 200}px) translateY(${yVal}px)`;
        mrHabs.style.transform = coords;
    }
    if (event.keyCode == "39") { // right arrow
        coords = `translateX(${xVal + 200}px) translateY(${yVal}px)`;
        mrHabs.style.transform = coords;
    }
    if (event.keyCode == "38") { // up arrow
        coords = `translateX(${xVal}px) translateY(${yVal - 200}px)`;
        mrHabs.style.transform = coords;
    }
    if (event.keyCode == "40") { // down arrow
        coords = `translateX(${xVal}px) translateY(${yVal + 200}px)`;
        mrHabs.style.transform = coords;
    }
}

// Create and animate random objects on the screen
let myObject;

function addMyObject() {
    myObject = document.createElement("img");
    myObject.src = "img/mrhabs.svg";
    myObject.style.width = "50px";
    stage.append(myObject);

    let w = window.innerWidth - 100;
    let randoX = Math.floor((Math.random() * w) + 1);
    let h = window.innerHeight - 58;
    let randoY = Math.floor((Math.random() * h) + 1);

    myObject.style.transform = `translateX(${randoX}px) translateY(${randoY}px)`;

    setTimeout(() => { 
        myObject.remove();
        addMyObject(); 
    }, 4000);
}

addMyObject();
