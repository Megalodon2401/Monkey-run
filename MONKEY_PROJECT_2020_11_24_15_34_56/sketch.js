
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var obstacleGroup;
var survivalTime;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
obstacleGroup = new Group();
bananaGroup = new Group();
monkey = createSprite(200,350,20,50); monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1;
 
  ground = createSprite(100,390,800,20);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  console.log(ground.x)
}


function draw() {
background("lightblue");
survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivalTime, 100,50);
  drawSprites()
  
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }  
  
   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -12;
    }
    
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
  }
  
   if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach();
    monkey.velocityX = 0;
    obstacleGroup.velocityX = 0;
  }
  
  spawnObstacles();
  spawnBananas();
}
function spawnObstacles(){
 if (frameCount % 60 === 0){
   obstacle = createSprite(400,350,10,40);
   obstacle.addImage (obstacleImage);          
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   obstacle.velocityX = -4;
  
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}
  function spawnBananas(){
 if (frameCount % 60 === 0){
   banana = createSprite(600,175,10,40);
   banana.addImage (bananaImage);          
   banana.scale = 0.1;
   banana.lifetime = 300;
   banana.velocityX = -3;
   //add each obstacle to the group
    bananaGroup.add(banana);
}
}



