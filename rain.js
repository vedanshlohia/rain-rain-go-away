class Rain {
   constructor(x,y,width,height){
     var options = {
        'restitution':0.8,
        'frictionAir':0.1,
     }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    World.add(world,this.body)
   }
   display(){
      var pos = this.body.position
      if(this.body.position.y > height){
         Matter.Body.setPosition(this.body, {x: random(0,1000) , y: 0});
      }
      rectMode(CENTER)
      fill("red")
      rect(pos.x,pos.y,this.width,this.height)

   }
}