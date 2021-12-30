var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var edges;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

box1=createSprite(550,550,150,20);
box1.shapeColor=("yellow");
box2=createSprite(400,550,150,20);
box2.shapeColor=("green");
box3=createSprite(250,550,150,20);
box3.shapeColor=("red");
box4=createSprite(100,550,150,20);
box4.shapeColor=("blue");

ball=createSprite(100,200,40,50);
ball.velocityX=5;
ball.velocityY=3;
edges=createEdgeSprites();
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
 ball.bounceOff(edges);
    //create edgeSprite
if(box1.isTouching(ball)){
    ball.shapeColor="yellow";
    music.play();

}
if(box2.isTouching(ball)){
    ball.shapeColor="green";
    music.play();
    
}
if(box3.isTouching(ball)){
    ball.shapeColor="red";
    music.stop();
    ball.velocityX=0;
    ball.velocityY=0;
}
if(box4.isTouching(ball)){
    ball.shapeColor="blue";
    music.play();
    
}

   drawSprites();
//add condition to check if box touching surface and make it box
}
