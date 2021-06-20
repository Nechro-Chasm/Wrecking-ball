class Box{

    constructor(x, y, width, height){
       var options = {
       restitution: 0.8,
       friction: 0.9,
       density: 0.04
       };
       this.body = Bodies.rectangle(x, y, width, height, options)
       this.w = width;
       this.h = height;
       World.add(myWorld, this.body);
   }
   display (){
   var angle = this.body.angle;
   push()
   rectMode(CENTER);
   translate(this.body.position.x, this.body.position.y);
   rotate(angle);
   fill("magenta");
   stroke("black");
   strokeWeight(4);
   rect(0, 0, this.w, this.h )
   pop()
   }
}