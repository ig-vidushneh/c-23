const Engine1=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,world;
var box1,box2

function setup() 
{
  createCanvas(400,400);
  myengine=Engine1.create();
  world=myengine.world;

 box1=new Box(200,300,50,50);
 box2=new Box(240,100,50,100);
 ground=new Ground(200,height,400,20)
}

function draw() 
{
  background(0); 
Engine1.update(myengine);
box1.display();
box2.display();
ground.display();
}