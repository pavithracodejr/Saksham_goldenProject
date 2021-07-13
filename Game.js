class Game{
 constructor(){

 }

 start(){

    if(gameState===0)
    {
     home = new Home();
     home.display();

    }

     car = createSprite(200,450,10,10);

     car.addImage(carImg);
  
     monster = createSprite(200,590,10,10);
 }

 play(){
    home.hide()

    if(car.y<monster.y){
        monster.velocityY = -1;
    
      }
    
      if(keyDown(LEFT_ARROW)){
       // updateHeight(0,-10)
        //balloon.addAnimation("hotAirBalloon",balloonImage2);
        //balloon.scale= balloon.scale-0.01
        car.x = car.x-2
        
      }
      else if(keyDown(RIGHT_ARROW)){
        //balloon.addAnimation("hotAirBalloon",balloonImage2);
       // updateHeight(0,-10)
        //balloon.scale= balloon.scale-0.01
        car.x = car.x+2
      }
      else if(keyDown(UP_ARROW)){
       // balloon.addAnimation("hotAirBalloon",balloonImage2);
       // updateHeight(0,-10)
       // balloon.scale= balloon.scale-0.01
       car.y = car.y-2
      }
     drawSprites();
 }
}