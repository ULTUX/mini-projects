function Graph(){
    this.root;
    this.nodes = [];
    this.graph = {};
    this.track = [];
}

Graph.prototype.addNode = function(n){
    this.nodes.push(n);
    let title = n.value;
    this.graph[title] = n;
}


Graph.prototype.getNode = function(value){
    for (let i = 0; i < this.nodes.length; i++){
        if (this.nodes[i].value == value) return this.nodes[i];
    }
    return null;
}


Graph.prototype.find = function(startval, endval){
    let queue = [];
    let start = this.getNode(startval);
    let end = this.getNode(endval);
    queue.push(start);
    let curr;
    while (queue.length > 0){
        if (queue[0] == end) end.parent = curr;
        curr = queue.shift();
        if (curr == end) {
            while (true){
                console.log(curr);
                curr = curr.parent;
                if (curr == start) break;
            }
        break;
        }
        for(let i = 0; i < curr.edges.length; i++){
            if (!curr.edges[i].searched){
                curr.edges[i].searched = true;
                curr.edges[i].parent = curr;
                queue.push(curr.edges[i]);
            }
        }
    }
}