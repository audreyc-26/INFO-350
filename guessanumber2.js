var express = require('express');

var app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

var randomNumber = [];
var guessCount = [];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.post('/startgame', function(req,res){
	var randomNumberGenerated = Math.floor(Math.random() * 100 + 1);

	randomNumber[req.body.gameId] = randomNumberGenerated;
	guessCount[req.body.gameId] = 0;

	console.log('Game number ' + req.body.gameId +
	' has started. The number to guess is ' + randomNumberGenerated);

	res.json({ APIMessage:"Game number " + req.body.gameId + " has started. Good luck!" });
});

app.get('/guessMade', function(req,res){

	let gameId = req.query.gameId;
	let numberToGuess = randomNumber[gameId];
	let numberGuessed = parseInt(req.query.userGuess);

	guessCount[gameId]++;

	let outMessage = "The guess of " + numberGuessed;
	let guessed = false;

	console.log('Game number ' + gameId +
	' guess #' + guessCount[gameId] +
	' | answer: ' + numberToGuess +
	' | guess: ' + numberGuessed);

	if (numberGuessed == numberToGuess) {
		guessed = true;
		outMessage += " is correct! Congratulations!";
	} else if (numberGuessed < numberToGuess) {
		outMessage += " is too low. Try again!";
	} else {
		outMessage += " is too high. Try again!";
	}

	res.json({
		APIMessage: outMessage,
		guessed: guessed,
		answer: numberToGuess
	});
});

console.log("Listening on port 8080");
app.listen(8080);