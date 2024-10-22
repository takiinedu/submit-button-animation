const myDiv = document.getElementById("cycle-in");
const text = document.getElementById("text");
const tick = document.getElementById("tick");
let degree = 0;

function degreeadd() {
    degree += 1;
    if (degree > 360) {
        text.style.fontSize = "10px";
        text.style.opacity = "0";
        myDiv.style.width = "0px";
        myDiv.style.height = "0px";
        myDiv.style.border = "0px solid transparent";
        tick.style.opacity = "1";
        setTimeout(function(){
            tick.style.width = "70px";
            tick.style.height = "70px";
        }, 500);
        setTimeout(function(){
            tick.style.transition = "0.8s";
            tick.style.width = "0px";
            tick.style.height = "0px";
            tick.style.opacity = "0";
        }, 1200);
        return; // Stop when reaching 360 degrees
    } else {
        // Update the background color of text and myDiv
        text.style.backgroundClip = "text"; // Fix backgroundClip property
        text.style.color = "transparent"; // Set text color to transparent to see gradient
        myDiv.style.background = `linear-gradient(peachpuff 0 0) padding-box, conic-gradient(deepskyblue ${degree}deg, white 0deg) border-box`;
        setTimeout(function() {
            degreeadd();
        }, 5);
    }
}

// Change mouseenter to click to start background change
myDiv.addEventListener("click", function() {
    myDiv.style.borderRadius = "50%";
    myDiv.style.width = "100px";
    myDiv.style.height = "100px";
    degree = 0; // Reset degree to 0 on click
    myDiv.style.background = `linear-gradient(peachpuff 0 0) padding-box, conic-gradient(deepskyblue ${degree}deg, white 0deg) border-box`;
    text.style.background = `linear-gradient(to left ,deepskyblue 0%, white ${degree / 360 * 100}%)`;
    text.style.backgroundClip = "text"; // Fix backgroundClip property
    text.style.color = "transparent"; 
    setTimeout(function() {
        degreeadd();
    }, 1000);
});

// Remove mouseleave event
