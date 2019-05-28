let h = 50;
let w = 50;
let grid = new Array(h);
let closedSet = [];
let openSet = [];
let winner;
let start;
let end;
let foundTrack = false;
let path = [];
let wii;
let hee;
function removeIt(arr, item){
    for (let i = arr.length-1; i >= 0; i--){
        if (arr[i] == item){
        arr.splice(i, 1);
        }
    }
}





function heuristic(point, end){
    let result = dist(point.i, point.j, end.i, end.j);
    // let result = Math.abs(point.i - end.i) + Math.abs(point.j - end.j);
    return result;
}



function setup(){
    frameRate(50);
    createCanvas(500, 500);
    hee = height/h;
    wii = width/w;

    for (let i = 0; i < h; i++){
        grid[i] = new Array(w)
        for (let j = 0; j < w; j++) grid[i][j] = new Point(i, j);
    }
    for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++) grid[i][j] = new Point(i, j);
    }
    

    for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
        grid[i][j].addNeighbors();
        }
    }
    start = grid[0][0];
    end = grid[h-1][w-1];
    start.wall = false;
    end.wall = false;
    openSet.push(start);


}




function draw(){

    if (openSet.length > 0 && foundTrack == false){
        let winner = openSet[0];

        for (let i = 0; i < openSet.length; i++) {
            if (winner.f > openSet[i].f) {
                winner = openSet[i];
            }  
        }
        clear();
        path = new Array();
        let temp = winner;
        path.push(temp);
        while (temp.parent != undefined){
            path.push(temp.parent);
            temp = temp.parent;
        }
        

        if (winner === end) {
            console.log("Znaleziono trase!");
            foundTrack = true;
            let temp = winner;
            noLoop();

            path.push(temp);
            while (temp.parent != undefined){
                path.push(temp.parent);
                temp = temp.parent;
            }
    }
        removeIt(openSet, winner);

        closedSet.push(winner);

        let neighbors = winner.neighbors;
        for (let i = 0; i < neighbors.length; i++){
            let neighbor = neighbors[i];
            if (!closedSet.includes(neighbor) && neighbor.wall == false){

                let estimateG = winner.g+heuristic(neighbor, winner);
                var isBetter = false;
                if (openSet.includes(neighbor)){
                    if (estimateG < neighbor.g) {
                        neighbor.g = estimateG;
                        isBetter = true;
                    }  
                }
                else {
                    openSet.push(neighbor);
                    neighbor.g = estimateG;

                    isBetter = true;
                }
                if (isBetter == true){
                    neighbor.h = heuristic(neighbor, end);
                    neighbor.f = neighbor.h + neighbor.g;
                    neighbor.parent = winner;
                    path.push();
                }

            }
    }
    
    }



    //Debugging
    for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
            fill(255, 255, 255);
            if (grid[i][j].wall == true) fill(0, 0, 0);
            else if (closedSet.includes(grid[i][j])) fill(255, 0, 0);
            else if (openSet.includes(grid[i][j])) fill(0, 255, 0);
            if (path.includes(grid[i][j])) fill(0, 0, 255);
            grid[i][j].show();
        }
    }
}
