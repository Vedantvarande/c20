var red, green;


function setup() 
{
  createCanvas(800,400);
 red = createSprite(200, 200, 50, 50);
 green = createSprite(400, 200, 80, 50);
red.velocityX=3;
green.velocityX=-3;

 red.shapeColor="green";
 green.shapeColor="green";
}

function draw() 
{
  background(255,255,255);  
  
 // red.x=World.mouseX;
 // red.y=World.mouseY;

  /*if(red.x-green.x < red.width/2+green.width/2 && green.x-red.x < red.width/2+green.width/2 && red.y-green.y < red.height/2+green.height/2 && green.y-red.y < red.height/2+green.height/2 ) 
{
  red.shapeColor="red";
  green.shapeColor="red";

}
else
{
  red.shapeColor="green";
  green.shapeColor="green";
}*/
if(red.x-green.x < red.width/2+green.width/2 && green.x-red.x < red.width/2+green.width/2)
{
  red.velocityX=red.velocityX*(-1);
  green.velocityX=green.velocityX*(-1);

}
if(red.y-green.y < red.height/2+green.height/2 && green.y-red.y < red.height/2+green.height/2 ) 
{
  red.velocityY=red.velocityY*(-1);
  green.velocityY=green.velocityY*(-1);

}
  drawSprites();

  
}