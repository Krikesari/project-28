
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var girl;
function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400, 675, 800, 20);
	girl = new Girl(505, 10, 100, 100);




	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	ground.display();
	girl.display();
	drawSprites();

}



