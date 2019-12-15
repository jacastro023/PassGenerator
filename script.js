// Assignment Code
var generateBtn = document.querySelector("#generate");

// options
var option1 = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
var option2 = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
var option3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var option4 = [];


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER



var option1 = ['a', 'b', 'c'];
var option2 = ['D', 'E', 'F'];
var option3 = ['1', '2', '3'];

var isOp1;
var isOp2;
var isOp3;
var possibleOptions = [];

function confirms() {
    isOp1 = confirm('Would you like to enable option 1?');
    isOp2 = confirm('Would you like to enable option 2?');
    isOp3 = confirm('Would you like to enable option 3?');
    optionBuilder();
};

function optionBuilder() {
    if (isOp1 || isOp2 || isOp3) {
        if (isOp1) {
            possibleOptions = possibleOptions.concat(option1)
        };

        if (isOp2) {
            possibleOptions = possibleOptions.concat(option2)
        };

        if (isOp3) {
            possibleOptions = possibleOptions.concat(option3)
        };
        getString();
    } else {
        alert("You must enable an option");
        confirms();
    }
};

function randomNumber() {
    return Math.floor(Math.random() * possibleOptions.length)
};

function getString() {
    var text = "";

    for (var i = 0; i < 4; i++) {
        text += possibleOptions[randomNumber()]
    };
    alert(text);
};

confirms();