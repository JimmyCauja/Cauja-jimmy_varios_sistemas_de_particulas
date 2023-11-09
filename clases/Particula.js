class Particula {
    constructor(_x, _y) {
        this.pos =
            createVector(_x, _y);
        this.lifespan = Math.ceil(random(10, 200));
        this.isDead = true; 
        this.side = Math.cell(random(3, 15));
    }
    update() {
        this.r = random();
        
    }
    display() {
        square(this.pos.x, this.pos.y, this.side);
    }
}