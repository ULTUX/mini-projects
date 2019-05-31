class DNA {
    constructor() {
        this.vectors = [];
        for (let i = 0; i < lifeTime; i++) {
            let x = Math.random() * 2 - 1;
            let y = Math.random() * 2 - 1;
            let vector = createVector(x, y);
            vector.setMag(maxForce);
            this.vectors.push(vector);
        }
    }

    getDna() {
        return this.vectors;
    }

    setDna(newDna) {
        if (Math.random() <= fullMutationRate) {
            this.fullMutate();
        } else {
            this.partMutate(newDna);
        }
    }


    fullMutate() {
        for (let i = 0; i < lifeTime; i++) {
            let x = Math.random() * 2 - 1;
            let y = Math.random() * 2 - 1;
            let vector = createVector(x, y);
            vector.setMag(maxForce);
            this.vectors.push(vector);
        }
    }


    partMutate(newDna) {
        for (let i = 0; i < this.vectors.length; i++) {
            if (Math.random() <= partlyMutationRate) {
                let x = Math.random() * 2 - 1;
                let y = Math.random() * 2 - 1;
                let vector = createVector(x, y);
                this.vectors[i] = vector;
            } else this.vectors[i] = newDna[i];
        }
    }

    crossOver(otherDna) {
        let newDna = [];
        let split = Math.floor(Math.random() * this.vectors.length);
        for (let i = 0; i < lifeTime; i++) {
            if (i < split) {
                newDna.push(this.vectors[i])
            } else {
                newDna.push(otherDna.vectors[i]);
            }

            // if (i % 2 == 0) {
            //     newDna.push(otherDna.vectors[i]);
            // } else newDna.push(this.vectors[i])
            // newDna.push(vector);
        }
        return newDna;
    }



}