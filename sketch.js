
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boy_img;
var tree,tree_img; 
var launch = 1;
var onSling = 0;
var gameState = 0;

function preload()
{
boy_img = loadImage("pics/boy.png");
tree_img = loadImage("pics/tree.png");
}

function setup() {
	createCanvas(1100, 600);

	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(550,600,width,20);
	mango1	= new Mango(860,200,40);
	mango2	= new Mango(900,200,40);
	mango3	= new Mango(930,180,40);
	mango4	= new Mango(1000,180,40);
	mango5	= new Mango(800,250,40);
	stone = new Stone(200,400,80);
	rope = new Rope(stone.body,{x:200,y:424});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white")
text("("+mouseX+","+mouseY+")",mouseX,mouseY);
  image(tree_img,700,00,400,700);
  image(boy_img,170,330,150,350);


  ground.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  rope.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
}

function detectCollision(Stone,Mango){
	mangopov = Mango.body.position
	stonepov = Stone.body.position

	var distance=dist(stonepov.x,stonepov.y,mangopov.x,mangopov.y)
		if (distance<=Mango.r+Stone.r)
		{
			Matter.Body.setStatic(Mango.body,false);
		}
}


function mouseDragged(){
    if (gameState!=="launch"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
	rope.fly();
	gameState = "launch";
}


function keyPressed(){
    if (keyCode === 32){
       Matter.Body.setPosition(stone.body,{x:200,y:400});
        rope.attach(stone.body)
        gameState = onSling;
    }
}
