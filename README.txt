// Deeper understand Javascript

var bellBoy1Name = "Jane";
var bellBoy1Age = 19;
var bellBoyy1HasWorkPermit = "true";
var bellBoy1Language = ["English", "French"];

var bellBoy2Name = "Peter";
var bellBoy2Age = 23;
var bellBoyy2HasWorkPermit = "true";
var bellBoy2Language = ["Thai", "French"];

Short 

var bellBoy1 = {
  name: "Jane",
  age: 19,
  hasWorkPermit: true,
  language: ["English", "French"]
}

Constructor function 

function BellBoy (name, age, hasWorkPermit, language) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.language = language;
}

Initialise Object - in console

var bellBoy1 = new BellBoy("Jane", 19, true, ["English", "French"]);
var bellBoy2 = new Bellboy("Peter", 23, false, ["Thai", "French"]);

console.log(bellboy1.name); 
result : Jane


switch statement:

switch (expression) {
          case expression: 

          break;

          default:
        }


Method

var bellBoy1 = {
  name: "Jane",
  age: 19,
  hasWorkPermit: true,
  language: ["English", "French"],
  moveSuitcase: function() {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  }
}

Call Method

bellBoy1.moveSuitcase();

Constructor function 

function BellBoy (name, age, hasWorkPermit, language) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.language = language;
  this.moveSuitcase = function() {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  }
}


addEventListener("keypress", function() {
  alert("Key was press");

});


addEventListener("keypress", function(event) {
  console.log(event);
});



Higher Order function

document.addEventListener("click", respondToKey(event));

function respondToKey(event) {
  console.log("Key press");
}


example:

function anotherAddEventListener(typeOfEvent, callback) {
  var eventThatHappened = {
    eventType = "keypress",
    key: "p",
    durationOfKeypress: 2
  }
  
  if (eventThathappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}