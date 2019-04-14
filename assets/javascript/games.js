
// <!-- Here's how the app works:

// The player will be shown a random number at the start of the game.
// Number should be should be between 19 - 120

var computerChoice = Math.floor((Math.random() * 101) + 19);
console.log(computerChoice);
$('#numBox').html(computerChoice);


// There will be four crystals displayed as buttons on the page.
// When the player clicks on a crystal, it will add a specific (1-12) amount of points to the player's total score. 

// Your game will hide this amount until the player clicks a crystal. 

var num1 = Math.floor(Math.random() * 11 + 1);
var num2 = Math.floor(Math.random() * 11 + 1);
var num3 = Math.floor(Math.random() * 11 + 1);
var num4 = Math.floor(Math.random() * 11 + 1);

var userScore;

$('#crys1').on('click', function () {
    userScore = userScore + num1;
    console.log("New userScore= " + userScore);
    $('#pointsBox').html(userScore);

    if (userScore == computerChoice) {
        winFunc();
    }
    else if (userScore > computerChoice) {
        loseFunc();
    }
})

$('#crys2').on('click', function () {
    userScore = userScore + num2;
    console.log("New userScore= " + userScore);
    $('#pointsBox').html(userScore);

    if (userScore == computerChoice) {
        winFunc();
    }
    else if (userScore > computerChoice) {
        loseFunc();
    }
})

$('#crys3').on('click', function () {
    userScore = userScore + num3;
    console.log("New userScore= " + userScore);
    $('#pointsBox').html(userScore);

    if (userScore == computerChoice) {
        winFunc();
    }
    else if (userScore > computerChoice) {
        loseFunc();
    }
})

$('#crys4').on('click', function () {
    userScore = userScore + num4;
    console.log("New userScore= " + userScore);
    $('#pointsBox').html(userScore);

    if (userScore == computerChoice) {
        winFunc();
    }
    else if (userScore > computerChoice) {
        loseFunc();
    }
})

// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.

function winFunc() {
    alert("You won!");
    wins++;
    $('#numWins').html(wins);
    reset();

    // The player loses if their score goes above the random number.

    function loseFunc() {
        alert("You lose!");
        losses++;
        $('#numLosses').html(losses);
        reset();


        // The game restarts whenever the player wins or loses.

        function reset() {
            computerChoice = Math.floor(Math.random() * 101 + 19);
            console.log(computerChoice);
            $('#numBox').html(computerChoice);
            num1 = Math.floor(Math.random() * 11 + 1);
            num2 = Math.floor(Math.random() * 11 + 1);
            num3 = Math.floor(Math.random() * 11 + 1);
            num4 = Math.floor(Math.random() * 11 + 1);
            userScore = 0;
            $('#pointsBox').html(userScore);

        });
