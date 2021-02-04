var ground
var monkey, monkey_running
//var banana,bananaImage, obstacle, obstacleImage
//var FoodGroup, obstacleGroup, bananaGroup
var score = 0;
var backg, backgroundImage;
var rocket, rocketImage, rocketGroup;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  rocketImage = loadImage("rocket.png");
  backgroundImage = loadImage("space.png");
 
}



function setup() {
  createCanvas(400,400);
  
  backg = createSprite(400,400,200,200);
  backg.addImage(backgroundImage);
  backg.velocityX = -8;
  
  monkey = createSprite(30,300,0,0);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(200,340,400,20);

  rocketGroup = new Group();
  obstacleGroup = new Group();

  
}


function draw() {
  background("white");
  
  ground.visibility = false;
  
  if(keyDown("space") && monkey.y >225){
    monkey.velocityY = -12;
  }

  if(backg.x<-100){
  backg.x=backg.width/2;
  }
  monkey.velocityY = monkey.velocityY + 0.6;
  
  monkey.collide(ground);
  rockets();
  
  
  
  if(rocketGroup.isTouching(monkey)){
    monkey.scale = 0.15;
  }
  

  switch(score){
      case 10: monkey.scale = 0.18;
              break;
      case 20: monkey.scale = 0.21;
              break;
      case 30: monkey.scale = 0.24;
              break;
      case 40: monkey.scale = 0.27;
              break;
      case 50: monkey.scale = 0.3;
              break;
      default: break;
    }
  score = round(frameCount/40);

  drawSprites();
  textSize(25);
  textFont("Calibri bold");
  stroke("blue");
  fill("white");
  text("Score: " + score, 250,60);
}

function rockets(){
  if(frameCount % 60 === 0){
    var yNumber = (Math.round(random(1, 5))) * 60;
    rocket = createSprite(400,yNumber,0,0);
    rocket.addImage(rocketImage);
    rocket.lifetime = 300;
    rocket.velocityX = -8;
    rocket.scale = 0.3;
    rocketGroup.add(rocket);
  }
}


