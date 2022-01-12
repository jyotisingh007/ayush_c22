const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, myengine, myworld, backgroundImg;
var tower;
var angle = 20;


function preload(){
  backgroundImg = loadImage("./assets/background.gif");
  towerImage= loadImage("./assets/tower.png");
}

function setup(){

  canvas =createCanvas(1200, 600);
  myengine = Engine.create();
  myworld = myengine.world;

  var options= {
    isStatic:true
  }
  ground = Bodies.rectangle(0, height - 1, width*2, 1, options);
  World.add(myworld, ground);
  console.log(ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(myworld, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
}

function draw(){
  background(backgroundImg);
   Engine.update(myengine);
  rect(ground.position.x, ground.position.y, width*2,1 );
  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
}
