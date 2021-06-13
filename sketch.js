var player,playerImg
var bg,bgImg
var zombie,zombieImg
var invisibleBlock
var zombieGroup
var safezoneImg,heathImg
var health
var healthGroup
function preload(){
playerImg=loadImage("images/player.png")
bgImg=loadImage("images/background.jpg")
zombieImg=loadImage("images/zombie1.png")
safezoneImg=loadImage("images/safezone.png")
healthImg=loadImage("images/health.png")
}
function setup(){
createCanvas(windowWidth,windowHeight);
player=createSprite(windowWidth/2,windowHeight-40,20,20);
player.addImage("player",playerImg);
player.scale=0.2;
invisibleBlock=createSprite(player.x,player.y,200,200)
invisibleBlock.addImage("safezone",safezoneImg)
invisibleBlock.scale=1.5;
zombieGroup=new Group()
healthGroup=new Group()
}
function draw(){
    background("white");
camera.position.x=player.x;
camera.position.y=player.y;
if(keyDown(UP_ARROW)){
    player.velocityY=-3;
    invisibleBlock.velocityY=-3;
}else{
    player.velocityY=0;
    invisibleBlock.velocityY=0;
}
if(keyDown(DOWN_ARROW)){
    player.velocityY=3;
    invisibleBlock.velocityY=3;
}
if(keyDown(LEFT_ARROW)){
    player.velocityX=-3;
    invisibleBlock.velocityX=-3;
}else{
    player.velocityX=0;
    invisibleBlock.velocityX=0;
}
if(keyDown(RIGHT_ARROW)){
    player.velocityX=3;
    invisibleBlock.velocityX=3;
}
if(zombieGroup.isTouching(invisibleBlock)){
    zombieGroup.setVelocityXEach(player.velocityX);
    zombieGroup.setVelocityYEach(player.velocityY);
}
if(player.isTouching(healthGroup)){
    healthGroupEach=destroy;
}

console.log(frameCount)
spawnZombies()
spawnsupplies()
    drawSprites()
    
    
}
function spawnZombies(){
if(frameCount%80===0){
    zombie=createSprite(random(windowWidth-1000,windowWidth+1000),random(windowWidth-1000,windowWidth+1000),20,20)
zombie.addImage("zombie",zombieImg);
zombie.velocityX=random(-3,3);
zombie.velocityY=random(-3,3);
zombie.scale=0.4;
zombieGroup.add(zombie);

}
}
function spawnsupplies(){
    if(frameCount%200===0){
        health=createSprite(random(windowWidth-1000,windowWidth+1000),random(windowWidth-1000,windowWidth+1000),20,20)
    health.addImage("health",healthImg);
      health.scale=0.4;
      health.velocityX=random(-3,3);
      health.velocityY=random(-3,3);
    healthGroup.add(health)
    }
    }