let cities = [];

function setup() {
    createCanvas(500, 500);
    background(0);
    var amount = 20;
    for (let i = 0; i < amount; i++) {
        cities.push(createVector(random(width), random(height)));
    }
}



function draw() {

    let i = Math.floor(Math.random() * cities.length);
    let j = Math.floor(Math.random() * cities.length);


    let arr = swap(i, j);

    if (calcDist(arr) < calcDist(cities)) {
        console.log(calcDist(arr));
        cities = arr;
    }



    //drawing
    clear();
    background(0);
    color(255);
    fill(255);
    for (let i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }
    noFill();
    beginShape();
    stroke(255);
    strokeWeight(3);
    for (let i = 0; i < cities.length; i++) {
        vertex(cities[i].x, cities[i].y);
    }
    endShape();

}

function calcDist(arr) {
    let distance = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        distance += Math.sqrt(Math.pow(arr[i].x - arr[i + 1].x, 2) +
            Math.pow(arr[i].y - arr[i + 1].y, 2));
    }
    return distance;
}

function swap(i, j) {
    let arr = [...cities];
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}