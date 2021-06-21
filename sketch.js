var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  wall = createSprite(1300,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet = createSprite(100,200,40,20);
  bullet.shapeColor = ("white");
  bullet.velocityX =50;
  
  speed = random(223,321);
  weight = random(30,52);
  bullet.collide(wall);
}

function draw() {
  background("black"); 
  
  
  
  
  
  if(hascollided(bullet,wall)){
  bullet.velocityX=0
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
  wall.shapeColor = color(255,0,0)
  }
  
  if(damage<10){
    wall.shapeColor=color(0,255,0)
  }


  }
  drawSprites();
}

function hascollided (Lbullet,Lwall){
  bulletRightEdge = Lbullet.x+Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }

  return false

}