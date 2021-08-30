/* Libraries required  */
const chalk = require('chalk');
var readLineSync = require('readline-sync')
const error = chalk.keyword('red');
const correct = chalk.keyword('green');
/* Welcoming the User  */
console.log(chalk.cyan("-------------------------------"));
console.log(chalk.redBright.bold("       🤩 WELCOME! 🤩"));
console.log(chalk.cyan("-------------------------------"));
var username = readLineSync.question("What is your name? ");
console.log(chalk.yellow("Hi " + username + " !"));
console.log("Let's see how well do you know me 😎");

/* Leaderboard Information  */
var leaderBoard = [{ name: "Abhishek", score: 3 }, { name: "Vishal", score: 4 }];

/* Questions array  */
var questions = [{ question: "Q1. where do i live?", answer: "Bengaluru" }, 
{
    question: "Q2. what is my age?", answer: "24"
}, 
{
    question: "Q3. what is the name of my college? ",
    answer: "BMSCE"
}, 
{
    question: "Q4. Do i own a car ?",
    answer: "no"
}, 
{
    question: "Q5. Where does your brother live",
    answer: "Delhi"
}];
/* Total Score */
var score = 0;

/* Function that drives the game  */
function play(question, answer) {
    var q = readLineSync.question(question);
    if (q.toLowerCase() == answer.toLowerCase()) {
        console.log(correct("✅ This is correct!"));
        score++;
    } else {
        console.log(error("😞 This is incorrect!"));
    }
}

/* Loop that calls the function everytime */
for (var i = 0; i < questions.length; i++) {
    var currentq = questions[i];
    play(currentq.question, currentq.answer);

}

/* Final Score Display  */
console.log("Your final score is : " + score + "/5 👍✨");

finalend = 0;
/* Appending the name and the score to leaderboard array */
var a = { name: username, score: score };
for (var j = 0; j < leaderBoard.length; j++) {
    var c = leaderBoard[j];
    if (score >= c.score) {
        finalend = 1;
        leaderBoard.splice(j, 0, a);
        break;
    }
}
if (finalend === 0) {
    leaderBoard.push(a);
}


console.log(chalk.yellow("------------------------------"));
console.log(chalk.yellow("         🥳LEADERBOARD🥳           "));
/* Displaying the Leaderboard  */

for (var k = 0; k < leaderBoard.length; k++) {
    console.log(leaderBoard[k].name + "     - " + leaderBoard[k].score);
}

console.log(chalk.yellow("------------------------------"));
console.log("THANKYOU FOR PLAYING!");