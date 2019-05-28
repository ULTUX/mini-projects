
    function Point(i, j){
        this.i = i;
        this.j = j;
        this.neighbors = [];
        this.f= 0;
        this.g = 0;
        this.h = 0;
        this.parent = undefined;
        this.wall = false;
        if (Math.random() <= 0.3) this.wall = true;
    }

    Point.prototype.show = function(){
        rect(this.i*wii, this.j*hee, wii, hee)
    }

    Point.prototype.addNeighbors = function(){
        let i = this.i;
        let j = this.j;
        if (i > 0) this.neighbors.push(grid[i-1][j]);
        if (i < w-1) this.neighbors.push(grid[i+1][j]);
        if (j > 0) this.neighbors.push(grid[i][j-1]);
        if (j < h-1) this.neighbors.push(grid[i][j+1]);
        if (j > 0 && i > 0) this.neighbors.push(grid[i-1][j-1]);
        if (j < h-1 && i < w-1) this.neighbors.push(grid[i+1][j+1]);
        if (j > 0 && i < w-1) this.neighbors.push(grid[i+1][j-1])
        if (j < h-1 && i > 0 ) this.neighbors.push(grid[i-1][j+1])
    }


    Point.prototype.calcH = function() {
        let distance = Math.sqrt(Math.pow(h-1-this.i, 2) + Math.pow(w-1-this.j, 2));
        this.h = distance;
    }
