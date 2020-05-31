var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	rooftop = new Roof(300,100,500,10)
	rt1 = new Roof(100,100,10,10)
	rt2 = new Roof(200,100,10,10)
	rt3 = new Roof(300,100,10,10)
	rt4 = new Roof(400,100,10,10)
	rt5 = new Roof(500,100,10,10)
	

	bob1 = new Bob(200,400,50)
	bob2 = new Bob(300,400,50)
	bob3 = new Bob(400,400,50)
	bob4 = new Bob(500,400,50)
	bob5 = new Bob(100,400,50)

	rope1 = new Rope(bob1.body,rt2.body,0,200)
	rope2 = new Rope(bob2.body,rt1.body,0,200)
    rope3 = new Rope(bob3.body,rt3.body,0,200)
 	rope4 = new Rope(bob4.body,rt4.body,0,200)
	rope5 = new Rope(bob5.body,rt5.body,0,200)

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#87CEFA");
  
	Engine.update(engine)	
	rooftop.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();


	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
 // drawSprites();
  
}



