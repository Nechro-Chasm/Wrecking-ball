class Rope{

    constructor(ballBody, ropePoint ){
       var options = {
        bodyA: ballBody,
        pointB: ropePoint,
        stiffness: 0.05,
        lenght: 400,
       };
       this.rope = Constraint.create(options)
       this.rp = ropePoint;
       
       World.add(myWorld, this.rope);
   }
   display (){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rp

   push()
  
   fill("yellow");
   strokeWeight(4);
   line(pointA.x, pointA.y, pointB.x, pointB.y );
   pop()
   }
}