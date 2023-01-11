var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {

    //Generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    //Use jQuery to animate a flash to the button selected
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // Use Javascript to play the sound for the button colour selected
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

nextSequence();