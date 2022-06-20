const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var btn1,btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  btn1 = createImg("up.png");
  btn1.position(50,50);
  btn1.size(50,50);
  btn1.mouseClicked(vforce);

  btn2 = createImg("right.png");
  btn2.position(150,50);
  btn2.size(50,50);
  btn2.mouseClicked(hforce);
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var options = {
    restitution: 1
  };
  ball = Bodies.circle(200,200,25, options);
  World.add(world, ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  ellipse(ball.position.x, ball.position.y, 25);

  Engine.update(engine);


}
function hforce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.05, y:0});
}

function vforce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});
}
