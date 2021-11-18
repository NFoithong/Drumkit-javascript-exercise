var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {


      var buttonInnerHTML = this.innerHTML
        
      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);


  });

}


// detecting keyboard press

document.addEventListener("keypress", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w": 
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "a": 
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "s": 
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "d": 
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "j": 
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;

    case "k": 
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "l": 
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;


    default:
  }
}

function buttonAnimation(currentKey) {
  
  var activeButton = document.querySelector("." + currentKey);
  
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");

  }, 100);
}


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();






//  Constructor function
// function Audio (fileLocation) {
//   this.fileLocation = fileLocation;
//   this.play = function() {
//     tap into audio hardware;
//     check the file at filelocation exists
//     check the file at filelocation is a soud file
//     play the file at filelocation
//   }
// }

