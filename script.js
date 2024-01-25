//Function with no parameters
var startMyDay = function () {
    return "Time for breakfast and a shower.";
};
console.log(startMyDay());
  
//Function with one parameter
var favoriteCookie = function (cookie) {
    return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie(`chocolate chip`));
  
//Function with two parameters
var introduce = function (name, occupation) {
    return `Hi, my name is ${name} and I am a ${occupation}.`;
};
console.log(introduce(`Ken`, `student`));
console.log(introduce(`Pixie`, `dog`));
  
//Function to capture input with conditionals
var hydrationFeedback = function () {
    var numGlasses = Number(
      prompt(`How many glasses of water did you have today?`)
    );
    if (numGlasses >= 8) {
      console.log(`Congrats, you're well hydrated!`);
    } else {
      console.log(`Try drinking more water throughout the day.`);
    }
};
hydrationFeedback();
