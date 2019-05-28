let data;
let graph =  new Graph();
let url = "https://raw.githubusercontent.com/nature-of-code/NOC-S17-2-Intelligence-Learning/3108659e2103e35c71c0b65f2f8f67dea31dce0f/week1-graphs/P2_six_degrees_kevin_bacon/bacon.json";

function setup(){
    noCanvas();
    fetch(url).then((resp) => {
        return resp.json();
    }).then((resp) => {
        data = resp;
        var movies = data.movies;

    for (let i = 0; i < movies.length; i++){
        let movie = movies[i].title;
        let cast = movies[i].cast
        var movieNode = new Node(movie);
        graph.addNode(movieNode);

        for (let j = 0; j < cast.length; j++){
            let actor = cast[j];
            let actorNode = graph.getNode(actor);
            if (actorNode == null){
                actorNode = new Node(actor);
            }
            graph.addNode(actorNode);


            movieNode.connect(actorNode)
        }

    }
    });
    
}