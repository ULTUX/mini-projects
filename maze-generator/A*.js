let route = [];

function begin(start, end) {
    let closedSet = [];
    let openSet = [];
    openSet.push(start);
    start.g = 0;
    let isFinished = false;
    while (openSet.length > 0 && isFinished == false) {
        x = openSet[0];
        for (let i = 0; i < openSet.length; i++) {
            if (openSet[i].g < x.g) x = openSet[i];
            console.log("changed optimal x");
        }
        if (x == end) {
            console.log("found route");
            reconstruct(end);
            noLoop();
            break;
        }

        removeFromArray(x, openSet);
        closedSet.push(x);

        if (getNeighbors(x) != -1) {
            console.log(getNeighbors(x));
            getNeighbors(x).forEach(element => {
                if (!closedSet.includes(element)) {
                    let estG = x.g + 1;
                    let estIsBetter = false;
                    if (!openSet.includes(element)) {
                        openSet.push(element);
                        element.h = heuristic(element, end);
                        estIsBetter = true;
                    } else if (estG < element.g || element.g == null) estIsBetter = true;
                    if (estIsBetter) {
                        element.parent = x;
                        element.g = estG;
                        element.f = element.h + element.f;
                    }
                }
            });
        }

    }
}

function reconstruct(end) {
    let temp = end;
    route = new Array();
    while (temp.parent != null) {
        console.log(temp);
        route.push(temp);
        temp = temp.parent;
    }
}


function heuristic(from, to) {
    return Math.sqrt(Math.pow(from.i - to.i, 2) + Math.pow(from.j - to.j, 2));
}

function removeFromArray(object, arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == object) {
            arr.splice(i, 1);
            console.log("Removed something!");
        }
    }
}




function getNeighbors(element) {
    let neighbors = [];

    if (element.i > 0) {
        let top = cels[element.i - 1][element.j];
        if (element.t == false) neighbors.push(top);
    }
    if (element.j < perx - 1) {
        let right = cels[element.i][element.j + 1];
        if (element.r == false) neighbors.push(right);
    }
    if (element.i < pery - 1) {
        let bottom = cels[element.i + 1][element.j];
        if (element.b == false) neighbors.push(bottom);

    }
    if (element.j > 0) {
        let left = cels[element.i][element.j - 1];
        if (element.l == false) neighbors.push(left);
    }
    if (neighbors.length == 0) return -1;

    return neighbors;
}