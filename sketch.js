
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var box3,box2,box3,ball,ballBody;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

ball=new Papper(140,300,40,30);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=createSprite(250,600, 20,100);
	box2=createSprite(350,650, 200,20);
	box3=createSprite(450,600, 20,100);
     ball=createSprite(width/2,50,10,10);
	 //ballBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //ball.positon.x=ballBody.positon.x;
  //ball.positon.y=ballBody.positon.y;
  drawSprites();
  box1.display;
  box2.display;
  box3.display;
  ball.display;
}



