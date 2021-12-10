
var trex ,trex_running;
var ground,invisabalground, groundimage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
trex = createSprite(50,180,20,20);  
trex.addAnimation("runing",trex_running);
trex.scale = 0.5;
  //create a trex sprite
ground = createSprite(200,200,400,20);
ground.addImage("ground",groundimage);
ground.x = ground.width/2;
}

function draw(){
  background("white")
  ground.velocityX = -3;
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(ground);
  drawSprites();

}
