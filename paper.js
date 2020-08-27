class Paper {
    constructor(x,y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,15,options);
        this.color = color("white");
        this.diameter = 15

        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill(this.color);
        circle(0,0,this.diameter);
        pop();
    }
}