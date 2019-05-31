/*  1. Tworozna jest populacja o wielkosci n
    2. Selekcja populacji poprzez funkcje obliczającą fitness
    3. Losowo wybierane są osobnuki do reprodukjci z szansą większą dla tych z większym fitness
    4. Łączenie osobnikow
    5. Powstaje nowa populacja
*/



let rocket;
let populationSize = 200;
let population = [];
let lifeTime = 200;
let maxForce = 0.5;
let goal;
let isready = true;
let fullMutationRate = 0.01;
let partlyMutationRate = 0.005;
let startV = 0;
let rectangle;

function setup() {
    createCanvas(600, 600);
    background(0);
    rectangle = createVector(width / 4, height / 2 - 50);
    goal = createVector(width / 2, height / 2 - 200);
    for (let i = 0; i < populationSize; i++) {
        population.push(new Rocket(createVector(width / 2, height - 80)));
    }
}

function draw() {
    if (isready) {
        if (population[0].life == population[0].dna.getDna().length) {
            isready = false;
            newGeneration();
            console.log("Next generation");
        }

        //drawing population
        clear();
        background(0);
        ellipse(goal.x, goal.y, 20);
        rect(rectangle.x, rectangle.y, width / 2, 50);
        for (let i = 0; i < population.length; i++) {
            population[i].move();
            population[i].applyForce();
            population[i].show();
        }
    }
}



function newGeneration() {
    let newPop = [];
    for (let i = 0; i < population.length; i++) {
        let first = getElement();
        let second = getElement();
        let child = new Rocket(createVector(width / 2, height - 80));
        child.dna.setDna(first.dna.crossOver(second.dna));
        newPop.push(child);
    }
    population = newPop;
    isready = true;
}

function getElement() {
    let sumOfFitnesses = 0;
    for (let i = 0; i < population.length; i++) {
        population[i].calcFitness();
        sumOfFitnesses += population[i].fitness;
    }
    for (let i = 0; i < population.length; i++) {
        population[i].fitness /= sumOfFitnesses;
    }

    let random = Math.random();
    let i = 0;
    // while (random > 0) {
    //     random -= population[i].fitness;
    //     i++;

    // }
    let found = false;
    let index = 0;
    while (!found) {
        index = Math.floor(Math.random() * population.length);
        if (Math.random() < population[index].fitness) {
            found = true;
        }
    }
    return population[index];



}