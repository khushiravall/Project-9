//all the var names

var box

function setup() 
{
  createCanvas(400,400);
  box= createSprite(200,200,50,60)

}

function draw() 
{
  //anything to repeat
  background(30);
  
  if(keyDown("right"))
  {
    box.x=box.x +5
    background("Blue")
  }

  if(keyDown("left"))
  {
    box.x=box.x -5
    background("Pink")
  }
  if(keyDown("down"))
  {
    box.y=box.y +5
    background("Purple")
  }

  if(keyDown("up"))
  {
    box.y=box.y -5
    background("Green")
  }

  

drawSprites()
}




