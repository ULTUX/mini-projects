
function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
    this.x = null;
    this.y = null;
    this.level;
}

Node.prototype.addNode = function(value) {

    let node = new Node(value);
    if (value < this.value) {
        if (this.left == null) {
            node.level = this.level + 1;
            node.x = this.x - 30*node.level;
            node.y = this.y + 30+10*node.level;
            stroke(255);
            noFill();
            text(node.value, node.x, node.y);
            line(this.x, this.y, node.x, node.y);
            this.left = node;
        }
        else this.left.addNode(value);
    }
    else if (node.value > this.value){
        if (this.right == null) {
            node.level = this.level + 1;
            node.x =  this.x + 30*node.level;
            node.y = this.y + 30+10*node.level;
            stroke(255);
            noFill();
            text(node.value, node.x, node.y);
            line(this.x, this.y, node.x, node.y);
            this.right = node;
        }
        else this.right.addNode(value);
    }
}
Node.prototype.search = function(val){
    if (val == this.value) return this;
    if (val < this.value){
        if (this.left == null) return null;
        else return this.left.search(val);
    }
    if (val > this.value) {
        if (this.right == null) return null;
        else return this.right.search(val);
    }
}