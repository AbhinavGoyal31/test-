class Papper {
    constructor(x, y,) {
        var options = {
            'restitution':0.5,
            'friction':0.5,
            'density':1.2
        };
        this.body= Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
        this.width=10;
        this.length=20;
        World.add(world,this.body);
    };
    display(){

     eclipseMode(CENTER);
this.Body.circle(100,200,10,20);
    };
};