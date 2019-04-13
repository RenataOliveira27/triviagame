/* Start */
$(document).on('click', '#start', function(){
    console.log("Start");
    game.startGame();

});
/* Reset */ 
    $(document).on('click', '#reset', function(){
    game.reset();
});

/* Questions and Answers */
var randomQuestions = Math.floor(Math.random()*(questions));

var questions = [{
question: "Who killed Sansa's direwolf Lady?",
answers:["The Hound", "Ned Stark", "Robert Baratheon", "Joffrey Baratheon"],
correctAnswer: "1"
}, {

question: "Which of these aren't one of Daenerys's Dragon?",
answers: ["Drogon", "Rhaegal", "Aerys", "Viserion"],
correctAnswer: "2"
}, {

question: "What is the name of Jon Snow's sword?",
answers: ["Oathkeeper", "Ice", "Heartsbane", "Longclaw"],
correctAnswer: "3"
}, {

question: "Which of these houses is NOT from the North?",
answers: ["Reed", "Forrester", "Blackwater", "Glover"],
correctAnswer: "2"
}, {

question: "What killed Kahl Drogo?",
answers: ["Curse by a witch", "Died in Battle", "Infected Wound","His own men"],
correctAnswer: "0"
}];

/* GAME */

var game = {
correct:0,
incorrect:0,
counter:30,

countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);
    if (game.counter === 0){
    console.log('Times Up');
    game.timeUP();
}
},
startGame:function(){
    timer=setInterval(game.countdown, 1000);
    $('#start').remove();
    for (var i = 0; i < questions.length; i++) {
    $("#panel").append('<h2>' + questions[i].question + '</h2>');
        for (var j = 0; j < questions[i].answers.length; j++) {
    $("#panel").append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);

     }
    }
},
timeUP:function() {
    clearInterval (timer);
    alert('Times Up!');

},
reset:function() {
location.reload();

},

done: function(){
    $.each($("imput[name='answer0']:checked"), function (){
        console.log("inside")
        if($(this).val() == questions[0].correctAnswer){
            game.correct++;
        }else {
            game.incorrect++;
        }
});
    $.each($("input[name='answer1']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[1].correctAnswer){
        game.correct++;
        } else {
        game.incorrect++;
    }
});
    $.each($("input[name='answer2']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[2].correctAnswer) {
        game.correct++;
    } else {
        game.incorrect++;
    }
});
    $.each($("input[name='answer3']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[3].correctAnswer) {
        game.correct++;
    } else {
        game.incorrect++;
    }
});
    $.each($("input[name='answer4']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[4].correctAnswer) {
        game.correct++;
    } else {
        game.incorrect++;
    }
});
    $.each($("input[name='answer5']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[5].correctAnswer) {
        game.correct++;
    } else {
        game.incorrect++;
    }
});
game.result();
},
     result:function(){
     clearInterval(timer);
     $("#panel").empty();
     $("#panel").append("Correct answers: " + game.correct + "<br/>");
     $("#panel").append("Incorrect answers: " + game.incorrect);

     }
 }