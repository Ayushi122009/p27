
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 roof = new Roof(350,100,300,30);
	World.add(world,roof);

	 bobOb1 = new Bob(250,300);
	 bobOb2 = new Bob(300,300);
	 bobOb3 = new Bob(350,300);
	 bobOb4 = new Bob(400,300);
	 bobOb5 = new Bob(450,300);

	 rope1 = new Rope(bobOb1.body,roof.body,-100,0);
	World.add(world,rope1);

	 rope2 = new Rope(bobOb2.body,roof.body,-50,0);
	World.add(world,rope2);

	 rope3 = new Rope(bobOb3.body,roof.body,0,0);
	World.add(world,rope3);

     rope4 = new Rope(bobOb4.body,roof.body,+50,0);
	World.add(world,rope4);

     rope5 = new Rope(bobOb5.body,roof.body,+100,0);
	World.add(world,rope5);

    Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);

  roof.display();

  bobOb1.display();
  bobOb2.display();
  bobOb3.display();
  bobOb4.display();
  bobOb5.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
}

function keyPressed(){
if (keyCode===32){
 Matter.Body.applyForce(bobOb1.body,bobOb1.body.position,{x:-730,y:0});
}
}

