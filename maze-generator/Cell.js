class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.x = rows * j;
        this.y = cols * i;
        this.t = true;
        this.r = true;
        this.b = true;
        this.l = true;
        this.visited = false;
        this.fill = fill(255);
        this.isCurrent = false;
        this.g = null;
        this.h;
        this.f;
        this.parent = null;
    }

    removeWall(dir, newCell) {
        if (dir == 0) {
            this.t = false;
            newCell.b = false;
        } else if (dir == 1) {
            this.r = false;
            newCell.l = false;

        } else if (dir == 2) {
            this.b = false;
            newCell.t = false;

        } else if (dir == 3) {
            this.l = false;
            newCell.r = false;

        }
    }

    getDir(anotherCell) {
        if (anotherCell.i - this.i == 1) return 2;
        else if (anotherCell.i - this.i == -1) return 0;
        else if (anotherCell.j - this.j == 1) return 1;
        else if (anotherCell.j - this.j == -1) return 3;
    }


    checkNeighbors() {
        let neighbors = [];

        if (this.i > 0) {
            let top = cels[this.i - 1][this.j];
            if (!top.visited) neighbors.push(top);
        }
        if (this.j < perx - 1) {
            let right = cels[this.i][this.j + 1];
            if (!right.visited) neighbors.push(right);
        }
        if (this.i < pery - 1) {
            let bottom = cels[this.i + 1][this.j];
            if (!bottom.visited) neighbors.push(bottom);

        }
        if (this.j > 0) {
            let left = cels[this.i][this.j - 1];
            if (!left.visited) neighbors.push(left);
        }
        if (neighbors.length == 0) return -1;

        return neighbors;
    }

    show() {
        strokeWeight(2);
        stroke(0);
        if (this.t) line(this.x, this.y, this.x + resx, this.y);
        if (this.r) line(this.x + resx, this.y, this.x + resx, this.y + resy);
        if (this.b) line(this.x, this.y + resy, this.x + resx, this.y + resy);
        if (this.l) line(this.x, this.y, this.x, this.y + resy);

        if (this.isCurrent) {
            noStroke();
            fill(30, 255, 0, 130);
            rect(this.x, this.y, resx, resy);

        } else if (this.visited) {
            noStroke();
            fill(123, 206, 243, 170);
            rect(this.x, this.y, resx, resy);
        }
    }



}