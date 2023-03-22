//Detecting clicks on button
var allButtons=document.querySelectorAll(".drum");      //it's an array actually 
for(var i=0;i<allButtons.length;i++) {
    allButtons[i].addEventListener("click",handleClick);
}

function handleClick() {
    var buttonName=this.innerHTML;
    playDrumSound(buttonName);
    buttonAnimation(buttonName);
}


//Detecting keyboard presses
document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(anEvent)  {
    playDrumSound(anEvent.key);
    buttonAnimation(anEvent.key);
}


//the function which plays the sound corresponding to key press or clicks
function playDrumSound(drumKey) {
    switch (drumKey) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kickBass=new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(buttonName);
            break;
    }
}

//the function that generates the flash, corresponding to key press or clicks
function buttonAnimation(drumKey) {
    var activeButton=document.querySelector("."+drumKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    } , 100);
}