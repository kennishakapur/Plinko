const Engine = Matter.Engine
const World = Matter.World

const Bodies = Matter.Bodies


function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

ground1= new Ground(400,780,800,20)
  
}

function draw() {
  background(0);  

  Engine.update(engine);

  ground1.display();

  drawSprites();
}