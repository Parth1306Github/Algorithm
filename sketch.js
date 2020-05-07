var movingrect, fixedrect



function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 100, 50, 50);
  fixedrect = createSprite(200, 200, 50, 50);
  movingrect.debug = true;
  fixedrect.debug = true;
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  movingrect.velocityY = -5;
  fixedrect.velocityY = +5;
  
}

function draw() {
  background(0,0,0);
  //movingrect.x = World.mouseX;  
 // movingrect.y = World.mouseY; 
  if(  movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2)
    {
      movingrect.velocityX = movingrect.velocityX * (-1);
      fixedrect.velocityX = fixedrect.velocityX * (-1);
    
    }
 if(movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2
  && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2)
  {
    movingrect.velocityY = movingrect.velocityY * (-1);
      fixedrect.velocityY = fixedrect.velocityY * (-1);
  }

  drawSprites();
}