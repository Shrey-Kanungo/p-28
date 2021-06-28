class louncher
{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.pointB=pointB;
        this.louncher =Constraint.create(options);
        World.add(world,this.louncher);
    }

    fly()
    {
        this.louncherbodyA=null;
    }
    display()
    {
        if(this.louncher.bodyA)
        {
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
    function mouseDragged()
{
    Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY});
}
}