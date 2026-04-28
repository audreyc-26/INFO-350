// HelloWorld1.js - a simple API running on Node.js and using Express
var express = require('express');					// use the express module and call it 'express'

var app = express();								// create a new express() server object called 'app'
app.use(express.urlencoded({extended: false}));     // allows us to parse (i.e., get information from) URLs 
app.use(express.json());                            // allows us to parse (i.e., get information from) JSON

var randomNumber = [];
var numberToGuess = 0;
var numberGuessed = 0;
var outMessage = ""
var randomNumberGenerated = 0;
var guessed = false;

app.use(function(req, res, next) {
    express.urlencoded({extended: false})
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

app.post('/startgame', function(req,res){
	randomNumberGenerated = Math.floor(Math.random() * 100 + 1);
  randomNumber[req.body.gameId] = randomNumberGenerated;
	console.log('Game number ' + req.body.gameId + ' has started. The number to guess is ' + randomNumberGenerated);
	responseMessage = { APIMessage:"Game number " + req.body.gameId + " has started. Good luck!" };
	res.json(responseMessage);                                                                                                                     
	});

app.get('/guessMade', function(req,res){
  numberToGuess = randomNumber[req.query.gameId];
  numberGuessed = req.query.userGuess;
  outMessage = "The guess of " + numberGuessed;
  console.log('Game number ' + req.query.gameId + ' has received a guess. The number to guess is ' + numberToGuess + ' and the guess made was ' + numberGuessed);
  if (numberToGuess == numberToGuess) {
    guessed = true;
    outMessage += " is correct! Congratulations!";
  } else if (numberGuessed < numberToGuess) {
    outMessage += " is too low. Try again!";
  } else {
    outMessage += " is too high. Try again!";
  }
  responseMessage = { APIMessage: outMessage, 'guessed': guessed};
  res.json(responseMessage);
	
console.log("Listening on port 8080");
app.listen(8080);									// And we're listening on port 8080