var engine, world;
var b1_u, b1_d, b2, b3_u, b3_d, b4;
var h1, h2, h3, h4, h5, h6, h7, h8;
var stick;
var P1ball1, P1ball2, P1ball3, P1ball4, P1ball5, P1ball6, P1ball7;
var P2ball1, P2ball2, P2ball3, P2ball4, P2ball5, P2ball6, P2ball7;
var CommonLastBall;
var tempBall;
var mainball;
var bg, bgImg;
var mx, my;
var no = 1;
var balls = [];
var goal = 0;
var p1score = 0;
var p2score = 0;
var ballToBallSound;
var ballToBorderSound;
var bgImg;
var P1ballsImg, P2ballsImg;

function prelaod(){
   bgImg = loadImage("bg2.png");
  P1ballsImg = loadImage("beachball.png");
  P2ballsImg = loadImage("basketball.png")
}


function setup() {
  createCanvas(displayWidth-650, displayHeight+700);



  
  bg = createSprite(0, 0, 900, 1600);

  b1_u = createSprite(40, 430, 30, 650);
  b1_d = createSprite(40, 1165, 30, 650);
  b2 = createSprite(450, 40, 700, 30);
  b3_u = createSprite(855, 430, 30, 650);
  b3_d = createSprite(855, 1165, 30, 650);
  b4 = createSprite(450, 1555, 700, 30);

  h1 = createSprite(80, 80, 70);
  h2 = createSprite(80, 1520, 70);
  h3 = createSprite(820, 80, 70);
  h4 = createSprite(820, 1520, 70);
  h5 = createSprite(70, 800, 70);
  h6 = createSprite(830, 800, 70);

  
  P1ball1 = createSprite(450, 540, 30, 30);
  P1ball1.addImage("asd", P1ballsImg);

  P1ball2 = createSprite(465, 513, 30, 30);
  P1ball2.addImage("asd", P1ballsImg);
  P1ball3 = createSprite(420, 485, 30, 30);
  P1ball3.addImage("asd", P1ballsImg);
  P1ball4 = createSprite(435, 457, 30, 30);
  P1ball4.addImage("asd", P1ballsImg);
  P1ball5 = createSprite(495, 457, 30, 30);
  P1ball5.addImage("asd", P1ballsImg);
  P1ball6 = createSprite(450, 430, 30, 30);
  P1ball6.addImage("asd", P1ballsImg);
  P1ball7 = createSprite(480, 430, 30, 30);
  P1ball7.addImage("asd", P1ballsImg);


  P2ball1 = createSprite(435, 513, 30, 30);
  P2ball1.addImage("qwe", P2ballsImg);
  P2ball2 = createSprite(480, 485, 30, 30);
  P2ball2.addImage("qwe", P2ballsImg);
  P2ball3 = createSprite(465, 457, 30, 30);
  P2ball3.addImage("qwe", P2ballsImg);
  P2ball4 = createSprite(405, 457, 30, 30);
  P2ball4.addImage("qwe", P2ballsImg);
  P2ball5 = createSprite(420, 430, 30, 30);
  P2ball5.addImage("qwe", P2ballsImg);
  P2ball6 = createSprite(390, 430, 30, 30);
  P2ball6.addImage("qwe", P2ballsImg);
  P2ball7 = createSprite(510, 430, 30, 30);
  P2ball7.addImage("qwe", P2ballsImg);

  CommonLastBall = createSprite(450, 485, 30, 30);

  mainball = createSprite(450, 1170, 30, 30);
  
  stick = createSprite(450, 1220, 5, 450);


 

  
}

function draw() {
  background(0,225,0);


  mx = mouseX;
  my = mouseY;


//Player 1 bounceoff function
P1BallsBounceOffBorder();

//Player 2 bounceoff function
    P2BallsBounceOffBorder();

//Main ball(White ball)bounceoff function
    MainballBounceoffBorder();

//last ball(balck ball)bounceoff function
    LastballBounceOffBorder();

//bounce function for Player 1 balls
    P1BallsBounceSame();

//bounce function for player 2 ball
    P2ballsBounceSame();

//bounce function for main ball
    MainballBounceLastball();

//Bounce function between Player 1 ball and player 2 ball
    P1ballsBounceP2Balls();

//Player 1 Score
  Player1ScoreDisplay();


 //Dispay Of Borders
 /* 
  b1_u.display();
  b1_d.display();
  b2.display();
  b3_u.display();
  b3_d.display();
  b4.display();
  */

//Display Of Holes
  /*
  h1.display();
  h2.display();
  h3.display();
  h4.display();
  h5.display();
  h6.display();
  */
/*
//Player 1 Balls Display
  P1ball1.display();
  P1ball2.display();
  P1ball3.display();
  P1ball4.display();
  P1ball5.display();
  P1ball6.display();
  P1ball7.display();

//Player 2 Balls Display
  P2ball1.display();
  P2ball2.display();
  P2ball3.display();
  P2ball4.display();
  P2ball5.display();
  P2ball6.display();
  P2ball7.display();

//Black ball(common ball for both player at last) Display
  CommonLastBall.display();
  
//White ball Display
 // mainball.display();

//Stick Display
  stick.display();

*/


if(mouseIsPressed == true){
  var x = mouseX;
  var y = mouseY;

 line (mainball.x, mainball.y, x, y );

 if(mainball.y > mouseY && mainball.x == mouseX){
  mainball.velocityY = -4;
 
}
// mainball.x = x;
// mainball.y = y;

 if (mainball.y > y){
   mainball.velocityY = -4;


 }else{
   mainball.velocityY = +4;
 
 }
 if(mainball.x > x){
   mainball.velocityX = -4;

 }else{
   mainball.velocityX = +4;

}

if(mainball.velocityX != 0 || mainball.velocityY != 0){
  mainball.velocityX = mainball.velocityX - 0.2;
  mainball.velocityY = mainball.velocityY - 0.2;
}


}

drawSprites();
}

//Player 1 Score
function P1Score(){
  if (
    P1ball1.isTouching(h1) || P1ball1.isTouching(h2) || P1ball1.isTouching(h3) || P1ball1.isTouching(h4) || P1ball1.isTouching(h5) || P1ball1.isTouching(h6) || P1ball1.isTouching(h7) || P1ball1.isTouching(h8) || 
    P1ball2.isTouching(h1) || P1ball2.isTouching(h2) || P1ball2.isTouching(h3) || P1ball2.isTouching(h4) || P1ball2.isTouching(h5) || P1ball2.isTouching(h6) || P1ball2.isTouching(h7) || P1ball2.isTouching(h8) || 
    P1ball3.isTouching(h1) || P1ball3.isTouching(h2) || P1ball3.isTouching(h3) || P1ball3.isTouching(h4) || P1ball3.isTouching(h5) || P1ball3.isTouching(h6) || P1ball3.isTouching(h7) || P1ball3.isTouching(h8) || 
    P1ball4.isTouching(h1) || P1ball4.isTouching(h2) || P1ball4.isTouching(h3) || P1ball4.isTouching(h4) || P1ball4.isTouching(h5) || P1ball4.isTouching(h6) || P1ball4.isTouching(h7) || P1ball4.isTouching(h8) || 
    P1ball5.isTouching(h1) || P1ball5.isTouching(h2) || P1ball5.isTouching(h3) || P1ball5.isTouching(h4) || P1ball5.isTouching(h5) || P1ball5.isTouching(h6) || P1ball5.isTouching(h7) || P1ball5.isTouching(h8) || 
    P1ball6.isTouching(h1) || P1ball6.isTouching(h2) || P1ball6.isTouching(h3) || P1ball6.isTouching(h4) || P1ball6.isTouching(h5) || P1ball6.isTouching(h6) || P1ball6.isTouching(h7) || P1ball6.isTouching(h8) || 
    P1ball7.isTouching(h1) || P1ball7.isTouching(h2) || P1ball7.isTouching(h3) || P1ball7.isTouching(h4) || P1ball7.isTouching(h5) || P1ball7.isTouching(h6) || P1ball7.isTouching(h7) || P1ball7.isTouching(h8)
     ){
       p1score = p1score+1;
     }

    }

function mouseDragged(){
  if (mouseIsPressed === true){
    mainball.velocityX = 0;
    mainball.velocityY = 0;

  }

}

  //Player 1 bounceoff function
  function P1BallsBounceOffBorder (){
    
P1ball1.bounceOff(b1_u);
P1ball1.bounceOff(b1_d);
P1ball1.bounceOff(b2);
P1ball1.bounceOff(b3_u);
P1ball1.bounceOff(b3_d);
P1ball1.bounceOff(b4);

P1ball2.bounceOff(b1_u);
P1ball2.bounceOff(b1_d);
P1ball2.bounceOff(b2);
P1ball2.bounceOff(b3_u);
P1ball2.bounceOff(b3_d);
P1ball2.bounceOff(b4);

P1ball3.bounceOff(b1_u);
P1ball3.bounceOff(b1_d);
P1ball3.bounceOff(b2);
P1ball3.bounceOff(b3_u);
P1ball3.bounceOff(b3_d);
P1ball3.bounceOff(b4);

P1ball4.bounceOff(b1_u);
P1ball4.bounceOff(b1_d);
P1ball4.bounceOff(b2);
P1ball4.bounceOff(b3_u);
P1ball4.bounceOff(b3_d);
P1ball4.bounceOff(b4);

P1ball5.bounceOff(b1_u);
P1ball5.bounceOff(b1_d);
P1ball5.bounceOff(b2);
P1ball5.bounceOff(b3_u);
P1ball5.bounceOff(b3_d);
P1ball5.bounceOff(b4);

P1ball6.bounceOff(b1_u);
P1ball6.bounceOff(b1_d);
P1ball6.bounceOff(b2);
P1ball6.bounceOff(b3_u);
P1ball6.bounceOff(b3_d);
P1ball6.bounceOff(b4);

P1ball7.bounceOff(b1_u);
P1ball7.bounceOff(b1_d);
P1ball7.bounceOff(b2);
P1ball7.bounceOff(b3_u);
P1ball7.bounceOff(b3_d);
P1ball7.bounceOff(b4);

}

//Player 2 bounceoff function
  function P2BallsBounceOffBorder(){

P2ball1.bounceOff(b1_u);
P2ball1.bounceOff(b1_d);
P2ball1.bounceOff(b2);
P2ball1.bounceOff(b3_u);
P2ball1.bounceOff(b3_d);
P2ball1.bounceOff(b4);

P2ball2.bounceOff(b1_u);
P2ball2.bounceOff(b1_d);
P2ball2.bounceOff(b2);
P2ball2.bounceOff(b3_u);
P2ball2.bounceOff(b3_d);
P2ball2.bounceOff(b4);

P2ball3.bounceOff(b1_u);
P2ball3.bounceOff(b1_d);
P2ball3.bounceOff(b2);
P2ball3.bounceOff(b3_u);
P2ball3.bounceOff(b3_d);
P2ball3.bounceOff(b4);

P2ball4.bounceOff(b1_u);
P2ball4.bounceOff(b1_d);
P2ball4.bounceOff(b2);
P2ball4.bounceOff(b3_u);
P2ball4.bounceOff(b3_d);
P2ball4.bounceOff(b4);

P2ball5.bounceOff(b1_u);
P2ball5.bounceOff(b1_d);
P2ball5.bounceOff(b2);
P2ball5.bounceOff(b3_u);
P2ball5.bounceOff(b3_d);
P2ball5.bounceOff(b4);

P2ball6.bounceOff(b1_u);
P2ball6.bounceOff(b1_d);
P2ball6.bounceOff(b2);
P2ball6.bounceOff(b3_u);
P2ball6.bounceOff(b3_d);
P2ball6.bounceOff(b4);

P2ball7.bounceOff(b1_u);
P2ball7.bounceOff(b1_d);
P2ball7.bounceOff(b2);
P2ball7.bounceOff(b3_u);
P2ball7.bounceOff(b3_d);
P2ball7.bounceOff(b4);

}

//Main ball(White ball)bounceoff function
  function MainballBounceoffBorder(){

    b1_u.bounce(mainball);
mainball.bounceOff(b1_d);
mainball.bounceOff(b2);
mainball.bounceOff(b3_u);
mainball.bounceOff(b3_d);
mainball.bounceOff(b4);

}

//last ball( black ball)bounceoff function
 function LastballBounceOffBorder(){
  
  CommonLastBall.bounceOff(b1_u);
  CommonLastBall.bounceOff(b1_d);
  CommonLastBall.bounceOff(b2);
  CommonLastBall.bounceOff(b3_u);
  CommonLastBall.bounceOff(b3_d);
  CommonLastBall.bounceOff(b4);
}

//Player 1 balls bounce function against them
 function P1BallsBounceSame(){

  P1ball1.bounce(P1ball2);
P1ball1.bounce(P1ball3);
P1ball1.bounce(P1ball4);
P1ball1.bounce(P1ball5);
P1ball1.bounce(P1ball6);
P1ball1.bounce(P1ball7);
P1ball1.bounce(mainball);
P1ball1.bounce(CommonLastBall);

P1ball2.bounce(P1ball3);
P1ball2.bounce(P1ball4);
P1ball2.bounce(P1ball5);
P1ball2.bounce(P1ball6);
P1ball2.bounce(P1ball7);
P1ball2.bounce(mainball);
P1ball2.bounce(CommonLastBall);

P1ball3.bounce(P1ball4);
P1ball3.bounce(P1ball5);
P1ball3.bounce(P1ball6);
P1ball3.bounce(P1ball7);
P1ball3.bounce(mainball);
P1ball3.bounce(CommonLastBall);

P1ball4.bounce(P1ball5);
P1ball4.bounce(P1ball6);
P1ball4.bounce(P1ball7);
P1ball4.bounce(mainball);
P1ball4.bounce(CommonLastBall);

P1ball5.bounce(P1ball6);
P1ball5.bounce(P1ball7);
P1ball5.bounce(mainball);
P1ball5.bounce(CommonLastBall);

P1ball6.bounce(P1ball7);
P1ball6.bounce(mainball);
P1ball6.bounce(CommonLastBall);

P1ball7.bounce(mainball);
P1ball7.bounce(CommonLastBall);

}

//Player 2 balls bounce function against them
 function P2ballsBounceSame(){
  P2ball1.bounce(P2ball2);
P2ball1.bounce(P2ball3);
P2ball1.bounce(P2ball4);
P2ball1.bounce(P2ball5);
P2ball1.bounce(P2ball6);
P2ball1.bounce(P2ball7);
P2ball1.bounce(mainball);
P2ball1.bounce(CommonLastBall);

P2ball2.bounce(P2ball3);
P2ball2.bounce(P2ball4);
P2ball2.bounce(P2ball5);
P2ball2.bounce(P2ball6);
P2ball2.bounce(P2ball7);
P2ball2.bounce(mainball);
P2ball2.bounce(CommonLastBall);

P2ball3.bounce(P2ball4);
P2ball3.bounce(P2ball5);
P2ball3.bounce(P2ball6);
P2ball3.bounce(P2ball7);
P2ball3.bounce(mainball);
P2ball3.bounce(CommonLastBall);

P2ball4.bounce(P2ball5);
P2ball4.bounce(P2ball6);
P2ball4.bounce(P2ball7);
P2ball4.bounce(mainball);
P2ball4.bounce(CommonLastBall);

P2ball5.bounce(P2ball6);
P2ball5.bounce(P2ball7);
P2ball5.bounce(mainball);
P2ball5.bounce(CommonLastBall);

P2ball6.bounce(P2ball7);
P2ball6.bounce(mainball);
P2ball6.bounce(CommonLastBall);

P2ball7.bounce(mainball);
P2ball7.bounce(CommonLastBall);

}
//main ball bounce function against last ball
 function MainballBounceLastball(){

mainball.bounce(CommonLastBall);

}

//Player 1 balls bounce function against Palyer 2 balls
function P1ballsBounceP2Balls(){
  P1ball1.bounce(P2ball1);
P1ball1.bounce(P2ball2);
P1ball1.bounce(P2ball3);
P1ball1.bounce(P2ball4);
P1ball1.bounce(P2ball5);
P1ball1.bounce(P2ball6);
P1ball1.bounce(P2ball7);

P1ball2.bounce(P2ball1);
P1ball2.bounce(P2ball2);
P1ball2.bounce(P2ball3);
P1ball2.bounce(P2ball4);
P1ball2.bounce(P2ball5);
P1ball2.bounce(P2ball6);
P1ball2.bounce(P2ball7);

P1ball3.bounce(P2ball1);
P1ball3.bounce(P2ball2);
P1ball3.bounce(P2ball3);
P1ball3.bounce(P2ball4);
P1ball3.bounce(P2ball5);
P1ball3.bounce(P2ball6);
P1ball3.bounce(P2ball7);

P1ball4.bounce(P2ball1);
P1ball4.bounce(P2ball2);
P1ball4.bounce(P2ball3);
P1ball4.bounce(P2ball4);
P1ball4.bounce(P2ball5);
P1ball4.bounce(P2ball6);
P1ball4.bounce(P2ball7);

P1ball5.bounce(P2ball1);
P1ball5.bounce(P2ball2);
P1ball5.bounce(P2ball3);
P1ball5.bounce(P2ball4);
P1ball5.bounce(P2ball5);
P1ball5.bounce(P2ball6);
P1ball5.bounce(P2ball7);

P1ball6.bounce(P2ball1);
P1ball6.bounce(P2ball2);
P1ball6.bounce(P2ball3);
P1ball6.bounce(P2ball4);
P1ball6.bounce(P2ball5);
P1ball6.bounce(P2ball6);
P1ball6.bounce(P2ball7);

P1ball7.bounce(P2ball1);
P1ball7.bounce(P2ball2);
P1ball7.bounce(P2ball3);
P1ball7.bounce(P2ball4);
P1ball7.bounce(P2ball5);
P1ball7.bounce(P2ball6);
P1ball7.bounce(P2ball7);

}

function Player1ScoreDisplay(){

  textSize(18);
  text("Player 1 Score : "+p1score,200,400);
  textAlign(CENTER);
  fill("black");
  textFont("Text");
  
}

/*
function Player2ScoreDisplay(){

  textSize(18);
  text("Player 2 Score : "+p2score,250,600);
  textAlign(CENTER);
  fill("black");
  textFont("Text");
}
*/