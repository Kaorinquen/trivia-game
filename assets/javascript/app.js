$(document).ready(function() {

    var count = 0;
    var timer = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;



var questions = ["Which is these are NOT a Street Fighter","This rapper was recently awared a Pulitzer Prize",""];
var correctAnswers = ["Kevin Nash","Kendrick Lamar"];
var sfAnswers = ["Chun Li", "Blanka", "Kevin Nash", "E. Honda"];
var rapAnswers = ["Kendrick Lamar", "J. Cole", "KRS-ONE", "21 Savage"];
var firstChoice = ["Chun Li","Kendrick Lamar"];
var secondChoice = ["Blanka","J. Cole"];
var thirdChoice = ["Kevin Nash","KRS-ONE"];
var fourthChoice = ["E. Honda", "21 Savage"];

// var questionForm = '<div class="form-check">' +
// '<input class="form-check-input" type="radio"  value="option[i]">' +
// '<label class="form-check-label" for="exampleRadios1" id="sfAnswers"></label>' +
// '</div>';



function (showQA) {
    $("#questionHere").show();
    $("AnswerSlot1").show();
    $("AnswerSlot2").show();
    $("AnswerSlot3").show();
    $("AnswerSlot4").show();
}

function (hideQA){
    $("#questionHere").hide();
    $("AnswerSlot1").hide();
    $("AnswerSlot2").hide();
    $("AnswerSlot3").hide();
    $("AnswerSlot4").hide();
}

function (questionSlide){
    $("#questionHere").html(questions[count]);
    $("AnswerSlot1").html(firstChoice[count]);
    $("AnswerSlot2").html(secondChoice[count]);
    $("AnswerSlot3").html(thirdChoice[count]);
    $("AnswerSlot4").html(fourthChoice[count]);
}


}