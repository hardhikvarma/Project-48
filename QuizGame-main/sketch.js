var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var bg_img;
var question, contestant, quiz;

function preload(){
  bg_img = loadImage("img1.jpg");
}

function setup(){
  canvas = createCanvas(850,900);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){

  
  background(bg_img);
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
