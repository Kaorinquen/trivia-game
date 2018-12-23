



    var count = 0;
    var timer = 31;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

// show the timer and start a countdown from 30 done
// make the start button disappear 
// show the question
// make each button an answer (which will have some sort of hover state) and show then in order

var startButton = $("#sutaato");
var questions = ["Which is these are NOT a Street Fighter","This rapper was recently awared a Pulitzer Prize",""];
var correctAnswers = ["Kevin Nash","Kendrick Lamar"];
var sfAnswers = ["Chun Li", "Blanka", "Kevin Nash", "E. Honda"];
var rapAnswers = ["Kendrick Lamar", "J. Cole", "KRS-ONE", "21 Savage"];
var firstChoice = ["Chun Li","Kendrick Lamar"];
var secondChoice = ["Blanka","J. Cole"];
var thirdChoice = ["Kevin Nash","KRS-ONE"];
var fourthChoice = ["E. Honda", "21 Savage"];
var userAnswer= [""]

$(document).ready(); {

var countdownTimer = setInterval(function(){
    timer--;
    $("#timeHere").text("Time Left: " + timer);
    if(timer <= 0)
        clearInterval(countdownTimer);
    },1000);


// var questionForm = '<div class="form-check">' +
// '<input class="form-check-input" type="radio"  value="option[i]">' +
// '<label class="form-check-label" for="exampleRadios1" id="sfAnswers"></label>' +
// '</div>';

// var x = setTimeout(thirtySeconds, 1000 * 30)

//show all q&a's on page

function questionSlide() {
    // $("#timeHere").text(timer);
    startButton.hide();
    $("#questionHere").text(questions[count]).addId();
    $("#AnswerSlot1").text(firstChoice[count]);
    $("#AnswerSlot2").text(secondChoice[count]);
    $("#AnswerSlot3").text(thirdChoice[count]);
    $("#AnswerSlot4").text(fourthChoice[count]);
    console.log(questions[count]);
}

function showQA() {
    $(countdownTimer).html();
    $("#questionHere").show();
    $("AnswerSlot1").show();
    $("AnswerSlot2").show();
    $("AnswerSlot3").show();
    $("AnswerSlot4").show();
}
//hide q&a's (for game start and after answring question)
function hideQA() {
    $("#questionHere").hide();
    $("AnswerSlot1").hide();
    $("AnswerSlot2").hide();
    $("AnswerSlot3").hide();
    $("AnswerSlot4").hide();
}


//function for priming click listening
function gameStart() {
    questionSlide();
    showQA();
    console.log(questionSlide);
}
// Selecting an answer will:
// Clear the page
// Restart the time
// Show the next question
// Display the next set of answers

if (startButton.on("click")) {
    this.hide();
    gameStart();
    questionSlide();
 console.log(question[count]);
}



// At game's end:
// Show number of correct answers
// show number of wrong answers
// play again button
// go back to start screen
