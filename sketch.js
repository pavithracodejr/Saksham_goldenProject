var car,monster1,monster2,monster3,monster4,rockies,track,treasure, background;
var carImg,monster, monster1Img, monster2Img, monster3Img, monster4Img,rockies,backgroundImg,game,home;
var gameState = 0;



function preload(){
  carImg = loadImage( "car.png")
  backgroundImg = loadImage("jpg.png");
  trackImg=loadImage("track.png");
}

function setup(){
  createCanvas(700,800)
  

  game = new Game()
  game.start();
  
}




function draw(){

background(backgroundImg);

  if (gameState === 1)
  {
    //background("brown");
    background(trackImg);
    game.play();
  }
}
