var player, playerImg,playerImg2;
var box1,miniBox1,box2,miniBox2;
var box1Img,box2Img;
var box1Img2,box2Img2;
var bg,bgImg;
var title = 1;
var answer1=2;
var answer2 =2;
var question =0;
var score = 0
var gameState = 2;
var questiona = "A lion's roar can be heard up to 8km away.";
var questiona2 = "cricket is the most popular sport in the world.";
var questionb = "pine trees aren't evergreen.";
var questionb2 = "Italy won the 2021 euros";
var questionc = "mount kilimanjaro is smaller than mount fuji.";
var questionc2 = "Gazpacho is a french dish"
var questiond = "Lightning never strikes in the same place twice."
var questiond2 = "SSC Tuatara is the fastest car in 2021"
var true1 = "true"
var true2 = "Set 1"
var false1 = "false"
var false2 = "Set 2" 
var restartVar, restartVarImg;



function preload(){
playerImg =loadImage("imgs/mouse3.0.png")
playerImg2 = loadImage("imgs/mouse2.01.png")
bgImg = loadImage("imgs/bg1.jpg")
box1Img = loadImage("imgs/tick1.png")
box2Img = loadImage("imgs/cross.png")
box1Img2 = loadImage("imgs/set2.png")
box2Img2 = loadImage("imgs/set3.png")
restartVarImg = loadImage("imgs/restart.png")

}

function setup(){


  player = createSprite(200, 200, 30,30);
  player.addImage(playerImg)
  player.scale=0.2;

  
  miniBox1 = createSprite(100,100,25,25);
  box1= createSprite(100,100,50,50);
  box1.addImage(box1Img)
  box1.scale=0.1
  
  miniBox2 = createSprite(300,100,25,25);
  box2= createSprite(300,100,50,50);
  box2.addImage(box2Img)
  box2.scale = 0.35

  restartVar = createSprite(1000,40,70,25)
  restartVar.addImage(restartVarImg)
  restartVar.scale = 0.1

fill("white")

}

function draw() {
  
  background(bgImg);

if(player.isTouching(restartVar)&&question===13){
  restart()
}

text ("score: "+score,300,50)

if(question<13 && question>0){
  restartVar.x=1000;
text ("choose if this statement is true or not:",100,280)}
 

if(question===0){
  
  text("choose which set of questions you would like",90,300)
  box1.addImage(box1Img2)
  box1.scale=0.3
  box2.addImage(box2Img2)
  box2.scale=0.1
}
else{
  box1.addImage(box1Img)
  box1.scale=0.1
  box2.addImage(box2Img)
  box2.scale = 0.35

}


//first question
  if(question ===1 ){
    if(gameState===1){
    text(questiona,90,300);}
    if(gameState===2){
      text(questiona2,90,300)
    }
  }

//first question answer outcomes
  if(question ===2){
    fill("green")
    text("correct",180,300)
    fill("white")
    text("Press Space for next question",120,320)
    if(keyDown("space")){
      score = score+1
      question=4
      player.x=200
    player.y=200
    player.addImage(playerImg)
    player.scale=0.2;
    
    }
  }
  if(question ===3){
    fill("red")
    text("incorrect",180,300)
    fill("white")
    text("Press Space for next question",120,320)
    if(keyDown("space")){
      question=4
    player.x=200
    player.y=200
    player.addImage(playerImg)
    player.scale=0.2;
  }

//second questions
  }
  if(question ===4){
    if(gameState===1){
      text(questionb,120,300);
    }
    if(gameState===2){
      text(questionb2,130,300);
    }
   
  }

  //second questions answers
  if(question === 5){
    fill("red")
    text("incorrect",180,300)
    fill("white")
    text("Press Space for next question",120,320)
    if(keyDown("space")){
      question=7
    player.x=200
    player.y=200
    player.addImage(playerImg)
    player.scale=0.2;
  }
}

if(question ===6){
  fill("green")
  text("correct",180,300)
  fill("white")
    text("Press Space for next question",120,320)
    if(keyDown("space")){
      score = score+1
      question=7
      player.x=200
    player.y=200
    player.addImage(playerImg)
    player.scale=0.2;
}}

//third question 
if(question ===7){
  if(gameState===1){
    text(questionc,90,300);}
  if(gameState===2){
    text(questionc2,120,300)
  }
}

//third question answers
if(question === 8){
  fill("red")
  text("incorrect",180,300)
  fill("white")
  text("Press Space for next question",120,320)
  if(keyDown("space")){
    question=10
  player.x=200
  player.y=200
  player.addImage(playerImg)
  player.scale=0.2;
}
}

if(question ===9){
  fill("green")
  text("correct",180,300)
  fill("white")
    text("Press Space for next question",120,320)
    if(keyDown("space")){
      score = score+1
      question=10
      player.x=200
    player.y=200
    player.addImage(playerImg)
    player.scale=0.2;
}}

//question 4
if(question ===10){
  if(gameState===1){
    text(questiond,90,300);
  }
  if(gameState===2){
    text(questiond2,97,300);
  }
}

//question 4 answers
if(question ===11){
  fill("green")
  text("correct",180,300)
  fill("white")
    text("Press Space to finish quiz",120,320)
    if(keyDown("space")){
      question=13
      score = score+1
      miniBox1.destroy();
      miniBox2.destroy();
      box1.destroy()
      box2.destroy()
      answer1=0
      answer2=0
      player.addImage(playerImg)
      player.scale=0.2;
      
}}

if(question === 12){
  fill("red")
  text("incorrect",180,300)
  fill("white")
  text("Press Space to finish quiz",120,320)
  if(keyDown("space")){
    question=13
    miniBox1.destroy();
      miniBox2.destroy();
      box1.destroy()
      box2.destroy()
      answer1=0
      answer2=0
      player.addImage(playerImg)
    player.scale=0.2;
      
   
}
}

if(question ===13){
  textSize(20)
  text("You have finished the quiz." ,70,200);
  text(" Congratulations you got "+score,75,240)
  text(" out of 4",150,280)

  restartVar.x=100;
  
 
}

  if(title === 1){
    textSize(25)
    text("TRIVIA",160,50)
  }

  if(answer1 ===1 ){
    fill("green")
    text("true",75,150)
  }

  if(answer1 ===2){
    fill("white")
    text("Set 1",75,150)
  }

  if(answer2 ===1){
    fill("red")
    text("False",275,150)
  }

  if(answer2 ===2){
    fill("white")
    text("Set 2",275,150)
  }

  if( keyDown("UP_ARROW")){
    player.y=player.y-2;
  }
  
  if(keyDown("DOWN_ARROW")){
    
   player.y=player.y+2 ;
  }
  
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-2 ;
      
  }
  
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+2 ;
      
  }

  if(question===0){
    if(player.isTouching(miniBox1)){
      answer1=1
      answer2=1
      gameState=1
      player.x=200
      player.y=200
      question=1
    }
    if(player.isTouching(miniBox2)){
      answer1=1
      answer2=1
      gameState=2
      player.x=200
      player.y=200
      question=1
    }
  }
        
  if(question===1){
    if(gameState===1){
      if(player.isTouching(miniBox1)&&question===1){
        player.scale=0.04;
        player.addImage(playerImg2)
        question = 2
      }
            
      if(player.isTouching(miniBox2)&&question===1){
        player.scale=0.04;
        player.addImage(playerImg2)
        question = 3
      }
    }
    if(gameState===2){
      if(player.isTouching(miniBox1)&&question===1){
        player.scale=0.04;
        player.addImage(playerImg2)
        question = 3
      }
            
      if(player.isTouching(miniBox2)&&question===1){
        player.scale=0.04;
        player.addImage(playerImg2)
        question = 2
      }
    }
  }
  
  
if(question===4){
  
  if(gameState===1){

if(player.isTouching(miniBox1)&&question===4){
  player.scale=0.04;
  player.addImage(playerImg2)
  question = 5
}
      
if(player.isTouching(miniBox2)&&question===4){
  player.scale=0.04;
  player.addImage(playerImg2)
  question = 6
}
}

if(gameState===2){

  if(player.isTouching(miniBox1)&&question===4){
       player.scale=0.04;
        player.addImage(playerImg2)
       question = 6
      }
          
  if(player.isTouching(miniBox2)&&question===4){
        player.scale=0.04;
       player.addImage(playerImg2)
       question = 5
     }
    }
  
  }


  if(question===7){
    if(gameState===1){
      
      if(player.isTouching(miniBox1)&&question===7){
      player.scale=0.04;
      player.addImage(playerImg2)
      question = 8
    }
          
    if(player.isTouching(miniBox2)&&question===7){
      player.scale=0.04;
      player.addImage(playerImg2)
      question = 9
    }}

    if(gameState===2){

      if(player.isTouching(miniBox1)&&question===7){
        player.scale=0.04;
        player.addImage(playerImg2)
        question = 8
      }
            
      if(player.isTouching(miniBox2)&&question===7){
        player.scale=0.04;
        player.addImage(playerImg2)
        question = 9
      }
    
    }
  }

  if(question===10){
    if(gameState===1){
      if(player.isTouching(miniBox1)&&question===10){
        player.scale=0.04;
        player.addImage(playerImg2)
        question = 11
      }
            
      if(player.isTouching(miniBox2)&&question===10){
        player.scale=0.04;
        player.addImage(playerImg2)
        question = 12
      }
    }
    if(gameState===2){
      if(player.isTouching(miniBox1)&&question===10){
        player.scale=0.04;
        player.addImage(playerImg2)
        question = 11
      }
            
      if(player.isTouching(miniBox2)&&question===10){
        player.scale=0.04;
        player.addImage(playerImg2)
        question = 12
      }
    }
  }
  
        drawSprites();
        
}

function restart(){

  player.x=200
  player.y=200
  
  miniBox1 = createSprite(100,100,25,25);
  box1= createSprite(100,100,50,50);
  box1.addImage(box1Img)
  box1.scale=0.1
  
  miniBox2 = createSprite(300,100,25,25);
  box2= createSprite(300,100,50,50);
  box2.addImage(box2Img)
  box2.scale = 0.35

  question=0
  answer1=2
  answer2=2

  score=0

}