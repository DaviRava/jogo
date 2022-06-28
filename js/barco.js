class Barco {
    constructor (x,y,h,w,py) {
        this.body = Bodies.rectangle(x, y, w, h);
        this.w = w ;
        this.h = h;
        this.py = py;
        this.image = loadImage("assets/boat.png");
        World.add(world,this.body)

    }

    show() {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0, this.py, this.w, this.h)


        pop()
    
    }
}

