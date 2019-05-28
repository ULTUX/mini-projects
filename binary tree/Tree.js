function Tree(n){
    this.addNode(n);
}

Tree.prototype.addNode = function(node) {
    let create = new Node(node);
    if (this.root == null){
        create.x = width/2;
        create.y = 100;
        create.level = 0;
        stroke(255);
        noFill();
        text(create.value, create.x, create.y);
        this.root = create;
    }
    else if (this.root.value != node){
        this.root.addNode(node);
    }
}
Tree.prototype.search = function(val){
    return this.root.search(val);
}
