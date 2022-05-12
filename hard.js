/* HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. Create a single function that takes an input className and updates the body's classList to ONLY include that className */

// let colorchange = function(clicked) {
//     if (clicked == "Red") {
//         document.body.classList.remove("White");
//         document.body.classList.add("Red");
//     }
//     if (clicked == "White") {
//         document.body.classList.add("Red");
//         document.body.classList.remove("White");
//     }
// }

// document.getElementById("btn1").onclick = function() {colorChange("bg-red")};

// document.getElementById("btn2").onclick = function() {colorChange("bg-white")};

// let colorChange = function(color) {
//     var element = document.getElementsByTagName('body')[0]
    
//     if (color == "bg-white") {
//         element.classList.toggle(color);
//     } else {
//         return console.log("already red");
//     }

//     if (document.body.style.backgroundColor == "red") {
//         element.classList.toggle(color);
//     } else {
//         return console.log("already white");
//     }
// } 

document.getElementById("btn1").onclick = function() {changeToRed("bg-red")};

document.getElementById("btn2").onclick = function() {changeToWhite("bg-white")};

let changeToRed = function(color) {
    var element = document.getElementsByTagName('body')[0]
    
    if (color == "bg-red") {
        element.classList.toggle(color);
    }
    
    if (document.body.style.backgroundColor = "red") {
        return console.log("already red")
    }
} 

let changeToWhite = function(color) {
    var element = document.getElementsByTagName('body')[0]
    
    if (color == "bg-white") {
        element.classList.toggle(color);
    } 

    if (document.body.style.backgroundColor = "white") {
        return console.log("already white")
    }
} 