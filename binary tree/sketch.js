var tree;
function setup(){
    createCanvas(800, 800);
    background(51);
    tree = new Tree(50);

    for (let i = 0; i < 100; i++){
        let num = Math.floor(Math.random()*100);
        console.log(num);
        tree.addNode(num);
    }
    
    
    tree.search(51);
}
function draw(){

}

