var garden,gardenImg;
var cat,catStand,catSit,catRun;
var mouse,mouseSearch,mouseFound,mouseCheer,mouseStand;

function preload(){

gardenImg = loadImage("garden.png");
catStand = loadImage("cat4.png");
catSit = loadImage("cat1.png");
catRun = loadAnimation("cat2.png","cat3.png");
mouseFound = loadImage("mouse1.png");
mouseStand = loadImage("mouse2.png");
mouseCheer = loadImage("mouse3.png");
mouseSearch = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(500,400,1000,800);
    garden.addImage(gardenImg);
    garden.scale = 1;

    cat = createSprite(900,700,20,20);
    cat.addImage(catSit);
    cat.scale = 0.5;

    mouse = createSprite(100,100,20,20);
    mouse.addImage(mouseStand);
    mouse.scale = 0.5;

}

function draw() {
  background(white);

    keyPressed();
    drawSprites();
    
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){

        cat.velocityX = -5;
        cat.addAnimation("running",catRun);
        cat.changeAnimation("running");

    }

    if(cat.x-mouse.x < (cat.width-mouse.width)){

        mouse.addAnimation("searching",mouseSearch);
        mouse.changeAnimation("searching");
    }
}

