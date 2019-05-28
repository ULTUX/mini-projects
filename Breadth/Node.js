function Node(val){
    this.value = val;
    this.edges = [];
    this.searched = false;
    this.parent = null;
}

Node.prototype.connect = function(node) {
    this.edges.push(node);
    node.edges.push(this);
}