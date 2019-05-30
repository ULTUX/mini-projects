let perx, pery, cols, rows, cels; //perx - ile zmiesci sie komorek w szerz, pery - ile zmiesci ∂sie komorek w zwyz



let resx; //szerokość kazdej komorki
let resy; // wysokosc kazdej komorki
//columny - w zwyz
// rzędy - w szerz
// [kolumny][rzedy]

//i - kolumny
//j- rzedy

let stack = [];


let current;

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}



function setup() {

    frameRate(60);

    createCanvas(500, 500);
    cols = 20;
    rows = 20;
    perx = Math.round(width / rows);
    pery = Math.round(height / cols);
    resy = height / pery;
    resx = width / perx;
    cels = [];

    for (let i = 0; i < pery; i++) {
        cels.push(new Array(perx));
        for (let j = 0; j < perx; j++) {
            cels[i][j] = new Cell(i, j);
        }
    }

    stack.push(current);
    current = cels[0][0];
    current.isCurrent = true;
    current.visited = true;
}

function draw() {
    //algorithm
    if (stack.length > 0) {
        let neighbors = current.checkNeighbors();
        if (current.checkNeighbors() != -1) {
            let newCurrent = getRandom(neighbors);
            current.visited = true;
            //0 - top, 1-right, 2-bottom, 3-left
            current.removeWall(current.getDir(newCurrent), newCurrent);
            current.isCurrent = false;
            current = newCurrent;
            current.isCurrent = true;
            stack.push(current);
        } else if (current != undefined) {
            current.isCurrent = false;
            current.visited = true;
            current = stack.pop();
            if (current != undefined) current.isCurrent = true;
        }
    } else {
        begin(cels[0][0], cels[perx - 1][pery - 1]);
    }




    //drawing cells
    clear();
    for (let i = 0; i < pery; i++) {
        for (let j = 0; j < perx; j++) {
            cels[i][j].show();
        }
    }


    //Drawing route
    strokeWeight(4);
    stroke(255, 0, 0, 160);
    noFill();
    beginShape();
    if (route.length > 0) {
        for (let i = 0; i < route.length; i++) {
            vertex(route[i].x + resx / 2, route[i].y + resy / 2);
        }
        vertex(cels[0][0].x + resx / 2, cels[0][0].y + resy / 2);

    }
    endShape();
}