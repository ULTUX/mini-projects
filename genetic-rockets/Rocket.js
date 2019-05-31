class Rocket {
    constructor(vector) {
        this.vector = vector;
        this.dna = new DNA();
        this.life = 0;
        this.fitness = 0;
        this.velocity = createVector(Math.random() * 2 - 1, Math.random() * 2 - 1);
        this.velocity.mult(startV);
        this.crashed = false;
    }


    calcFitness() {
        let fitness = Math.sqrt(Math.pow(this.vector.x - goal.x, 2) + Math.pow(this.vector.y - goal.y, 2));
        if (this.vector.x > goal.x + 5 || this.vector.x > goal.x - 5 ||
            this.vector.y > goal.y + 5 || this.vector.y > goal.y - 5) {
            fitness -= 40;
            if (this.crashed) fitness += 60;
        }
        this.fitness = 1 / fitness;
    }






    applyForce() {
        if (this.life < this.dna.getDna().length) {
            this.velocity.add(this.dna.getDna()[this.life]);
            this.life++;
        }
    }

    move() {
        if (!this.crashed) {
            this.vector.add(this.velocity);
            if ((this.vector.x >= rectangle.x &&
                    this.vector.y <= rectangle.y + 50) &&
                (this.vector.x <= rectangle.x + width / 2 &&
                    this.vector.y >= rectangle.y)) {
                this.crashed = true;
            }
        }
    }

    show() {
        fill(255);
        ellipse(this.vector.x, this.vector.y, 10);
    }
}