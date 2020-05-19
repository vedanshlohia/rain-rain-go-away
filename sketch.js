const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var raindrops = [];
var engine,world;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  engine = Engine.create();
  world = engine.world;
  

  frameRate(10);

   for(var i = 0; i <= width; i = i + 10 ){
     raindrop = new Rain(i,random(-200,300),random(1,5),random(5,15))
     raindrops.push(raindrop);
     World.add(world,raindrops)
   }
}

function draw() {
  background(0,180)
  Engine.update(engine)

  for(var i =0; i < raindrops.length; i++ ){
    raindrops[i].display();
  }
}