var cat;
var catImage;

var mouse;
var mouseImage;

function preload() {
   
    catImage = loadImage(cat1.png);
    mouseImage = loadImage(mouse1.png);

}

function setup(){
    createCanvas(800,800);
    
cat = createSprite(50,50,100,100);
cat.addImage('cat', catImage);


mouse = createSprite(200,250,100,100);
mouse.addImage('mouse', mouseImage);

}

function draw() {

    background(255);
    

    drawSprites();
}

