var towerImage,tower;
var doorImage,door,doorGroup;
var climberImage,climber,climberGroup;
var ghostImage,ghost;
var invisibleBlock,blockGroup;
var gameState="play";

var spookySound;


function preload(){
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  doorGroup=new Group();
  climberImage=loadImage("climber.png");
  climberGroup=new Group();
  ghostImage=loadImage("ghost-standing.png");
  blockGroup=new Group();
  spookySound=loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  spookySound.loop();
 tower=createSprite(300,300);
  tower.addImage("tower",towerImage);
  tower.velocityY=1;
  
  ghost=createSprite(200,200,50,50);
  ghost.scale=0.3;
  ghost.addImage("ghost",ghostImage);
  
  
}

function draw(){
  background(0);
  
  if(gameState=="play"){
    
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
     
     }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
     
     }
  if(keyDown("space")){
    ghost.velocityY=-5;
     
     }
  ghost.velocityY= ghost.velocityY+0.5;
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
     
     }
  
  if(blockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState="end";
     }
  
  
  
  
  if (tower.y>400){
      tower.y=300;
  }
  
  spawnDoors();
  drawSprites();
}
  if(gameState=="end"){
     stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over",230,250);
   
         
  }
}
function spawnDoors(){
  if (frameCount%240==0){
    var door=createSprite(200,-50);
    door.addImage("door",doorImage);
     door.x=Math.round(random(120,400)) 
    door.velocityY=1;
    door.lifetime=800;
    doorGroup.add(door);
    
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
    
    var climber=createSprite(200,10);
    climber.addImage("climber",climberImage);
     climber.x=door.x;
    climber.velocityY=1;
    climber.lifetime=800;
    climberGroup.add(climber);
    
    var invisibleBlock=createSprite(200,15);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    invisibleBlock.x=door.x;
    invisibleBlock.velocityY=1;
    invisibleBlock.debug=true;
    
    blockGroup.add(invisibleBlock);
      }
}











