class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 1,
        }
        
        this.pointB = pointB
        this.poly = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.poly.bodyA = body;
    }
    
    fly(){
        this.poly.bodyA = null;
    }

    display(){
   if(this.poly.bodyA){
  var pointA = this.poly.bodya.position;
  var pointB = this.pointB

  strokeweight(4);
  stroke();
  line(pointA.x,pointA.y,pointB.x,pointB.y);
   }
    }
    }