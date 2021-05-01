var computerPaddle,playscore,compscore,playscore,gameState,ball,edges;
function setup(){

createCanvas(400,400);
computerPaddle=createSprite(10,150,10,70);
playerPaddle=createSprite(380,150,10,70);
ball=createSprite(200,200,10,10);
compscore=0;
playscore=0;
gameState="serve";


}
function draw(){
    background(255)
    text(compscore,180,20);
    text(playscore,210,20);
    //playerPaddle moving with mouse
    playerPaddle.y=World.mouseY;

    //make the ball move in serve state and when spce is pressed
    if(keyDown("space") && gameState ==="serve"){
        ball.velocityX=2;
        ball.velocityY=3;
        gameState ="play";
    }
    //if(gameState==="play" ||gameState==="serve"){
//net
    
    for(var i=0; i<400;i+=20){
        line(200,i,200,i+10);
    }
//}
    edges=createEdgeSprites();
    //topedge
    ball.bounceOff(edges[2]);
    //bottomedge
    ball.bounceOff(edges[3]);

    ball.bounceOff(computerPaddle);
    ball.bounceOff(playerPaddle);
    //make computerPaddle follow the ball
   computerPaddle.y=ball.y;
   //ball moves out of canvas
    if(ball.x>400 || ball.x<0){
        if(ball.x>400){
            compscore++;
        }
        if(ball.x<0){
            playscore++;
        }
        reset();
        gameState="serve";
    }
if(playscore===5|| compscore===5){
    gameState="end";
    text("Press R to restart",150,150);
}

//reset the game to intial gameState
if(keyDown("r") && gameState==="end"){
    playscore=0;
    compscore=0;
    gameState="serve";
}
    
    drawSprites();
    


}
function reset(){
    ball.x=200;
    ball.y=200;
    ball.velocityX=0;
    ball.velocityY=0;
}