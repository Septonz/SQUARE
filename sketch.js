
var fsquare,msquare;



function setup() {
  createCanvas(1200,800);
  fsquare=createSprite(400, 200, 50, 50);
  fsquare.shapeColor="green";
  msquare=createSprite(600, 200, 50, 50);
  msquare.shapeColor="green";
  
}

function draw() {



  background(0); 
  
  msquare.y=mouseY
  msquare.x=mouseX


  if( msquare.x-fsquare.x<fsquare.width/2+msquare.width/2
    && fsquare.x-msquare.x<fsquare.width/2+msquare.width/2
    && msquare.y-fsquare.y<fsquare.height/2+msquare.height/2
    && fsquare.y-msquare.y<fsquare.height/2+msquare.height/2){
    msquare.shapeColor="red"
    fsquare.shapeColor="red"
  } else{
    msquare.shapeColor="green"
    fsquare.shapeColor="green"
  }
  drawSprites();
}