// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy")

// options
var option1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var option2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var option3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var option4 = ["!", "$", "#", "%", "&", "[", "]", "(", ")", "*", "@", "`", "?", "<", ">"];


// setting prompt variables
var userinput;
var isOp1;
var isOp2;
var isOp3;
var isOp4;
var possibleOptions = [];

// asking user what it wants
function confirms() {
    userinput = prompt("how many characters would you like to use?")
    // making sure they select atleast 8 characters
    if (userinput < 8 || userinput > 128) {
        alert("must choose between 8-128 characters ")
        confirms();
    }

    isOp1 = confirm('Would you like to use lowercase letters?');
    isOp2 = confirm('Would you like to use uppercase letters?');
    isOp3 = confirm('Would you like to use numbers?');
    isOp4 = confirm('Would you like to use special characters?');
    optionBuilder();
};

// linking all of the options to be used
function optionBuilder() {
    if (isOp1 || isOp2 || isOp3 | isOp4) {
        if (isOp1) {
            possibleOptions = possibleOptions.concat(option1)
        };

        if (isOp2) {
            possibleOptions = possibleOptions.concat(option2)
        };

        if (isOp3) {
            possibleOptions = possibleOptions.concat(option3)
        };
        if (isOp4) {
            possibleOptions = possibleOptions.concat(option4)
        };
        getString();
    } else {
        alert("You must make a selection an option");
        confirms();
    }
};

function randomNumber() {
    return Math.floor(Math.random() * possibleOptions.length)
};

function getString() {
    var text = "";

    for (var i = 0; i < userinput; i++) {
        text += possibleOptions[randomNumber()]
    };
    document.getElementById("password").innerHTML = text;
};

// adding the copy
function copying() {
    var copyText = document.getElementById("password");
    copyText.select();
    /* Copy the text inside the text field */
    document.execCommand("copy");

    // alert that it has been copies
    alert("Copied the password: " + copyText.value);
}


// Add event listener to generate button
generateBtn.addEventListener("click", confirms); {

}
copyBtn.addEventListener("click", copying); {

}


// BONUS EVENT LISTENER