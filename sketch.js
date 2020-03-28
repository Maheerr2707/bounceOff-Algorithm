var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect =  createSprite(100,200, 50, 80);
 movingRect = createSprite(300,200,80,50);

 fixedRect.shapeColor = "green"
 movingRect.shapeColor = "green"

fixedRect.velocityX = 3;
movingRect.velocityX = -4;
}

function draw() {
  background(255,255,255);  

   //movingRect.x = World.mouseX
  //movingRect.y = World.mouseY

  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
   }
else{
  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"
}

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 )
 { 
  fixedRect.velocityX = fixedRect.velocityX * (-1);
 }

bounceOff(fixedRect,movingRect);

  drawSprites();
}

function isTouching(object1,object2){
 if(object1.x-object2.x<object2.width/2+object1.width/2
  &&object2.x-object1.x<object2.width/2+object1.width/2
  &&object1.y-object2.y<object2.height/2+object1.height/2
  &&object2.y-object1.y<object2.height/2+object1.height/2)
  {
   return true; 
  }
 else{
   return false;
 }
}
 function bounceOff(paddle1,paddle2){
 if(paddle1.x-paddle2.x<paddle2.width/2+paddle1.width/2
  &&paddle2.x-paddle1.x<paddle2.width/2+paddle1.width/2
  &&paddle1.y-paddle2.y<paddle2.height/2+paddle1.height/2
  &&paddle2.y-paddle1.y<paddle2.height/2+paddle1.height/2)
 {
paddle1.velocityX = paddle1.velocityX * (-1);
paddle2.velocityX = paddle2.velocityX * (-1);
}
else{
  return false;
 }
}