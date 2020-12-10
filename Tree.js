class Tree{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true,
        }
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x, this.y, width, height, options);
        this.image = loadImage("pics/tree.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}