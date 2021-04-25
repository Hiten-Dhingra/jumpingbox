var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here

}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(290,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(497,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(702,580,200,30);
    block4.shapeColor = "green";
    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(550,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=-4;
    ball.velocityY=4;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)&& block1.bounce(ball) ){
        ball.shapeColor = "blue";
        block1.velocityX=0;
        block1.velocityY=0;
        ball.velocityX=-4;
        ball.velocityY=-4;
    }
    if(block2.isTouching(ball)&&block2.bounce(ball) ){
        ball.shapeColor = "orange";
        block2.velocityX=0;
        block2.velocityY=0;
        ball.velocityY=-4;
        ball.velocityX=-4;
    }

    if(block3.isTouching(ball)&& block3.bounce(ball) ){
        ball.shapeColor = "red";
        block3.velocityX=0;
        block3.velocityY=0;
        ball.velocityY=-4;
        ball.velocityX=-4;
    }
    if(block4.isTouching(ball)&& block4.bounce(ball) ){
        ball.shapeColor = "green";
        block4.velocityX=0;
        block4.velocityY=0;
        ball.velocityY=-4;
        ball.velocityX=-4;
    }
    drawSprites();
}
