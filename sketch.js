var movingRect, fixedRect;
var object1, object2;
function setup() {
  createCanvas(1000,800);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(300,300,50,50);
movingRect.shapeColor="green";
fixedRect.shapeColor="green";

object1=createSprite(350,150,50,50);
object2=createSprite(170,90,50,50);
object1.shapeColor="green";
object2.shapeColor="green";


}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x)

  if(isTouching(movingRect, object1)){
    movingRect.shapeColor="red";
    object1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    object1.shapeColor="green";
  }
  drawSprites();
}

