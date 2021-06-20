class Ball{

    constructor(x, y, width, height){
       var options = {
      // restitution: 0.8,
       frictionAir: 0.01,
       density: 0.5
       };
       this.body = Bodies.rectangle(x, y, width, height, options)
       this.w = width;
       this.h = height;
       World.add(myWorld, this.body);
   }
   display (){
   var angle = this.body.angle;
   push()
   translate(this.body.position.x, this.body.position.y);
   rotate(angle);
   fill("yellow");
   stroke("black");
   strokeWeight(4);
   ellipse(0, 0, this.w, this.h );
   pop()
   }
}