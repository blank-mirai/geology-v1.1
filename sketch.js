
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(200, 200);

	stone = new Stone(200, 500, 100, 100);

	

	rubber = new Rubber(500, 500, 50);

	sand1 = new Sand(300, 500, 10);
	sand2 = new Sand(315, 500, 10);
	sand3 = new Sand(330, 500, 10);
	sand4 = new Sand(345, 500, 10);
	sand5 = new Sand(360, 500, 10);
	sand6 = new Sand(375, 500, 10);

iron = new Iron(600, 500, 75, 75);

	ground = new Ground(400, height, 800, 20);


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  hammer.display();
  stone.display();
  iron.display();
  rubber.display();
  ground.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
}



