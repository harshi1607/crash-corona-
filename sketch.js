var sanitizer,sanitizerImg,coronaImg1,coronaImg2,coronaImg3,coronaImg4
var boyImg,boyImg_,sanitizerImg_,coronaImg1_,coronaImg2_,coronaImg3_,coronaImg4_
var boy,coronaGroup;
function preload(){
boyImg=loadImage("images/boy.png")
boyImg_=loadImage("images/dead boy.png")  
sanitizerImg=loadImage("images/sanitizer.png")
sanitizerImg_=loadImage("images/sanitizer hit.png")
coronaImg1=loadImage("images/corona_alive.png")
coronaImg_=loadImage("images/corona dead.png")
coronaImg2=loadImage("images/corona 2 alive.png")
coronaImg2_=loadImage("images/corona 2 ded.png")
coronaImg3=loadImage("images/corona 3 alive.png")
coronaImg3_=loadImage("images/corona 3 dead.png")
coronaImg4=loadImage("images/corona 4 alive.png")
coronaImg4_=loadImage("images/corona 4 dead.png")
}

function setup() {
  createCanvas(1200,600);
   boy=createSprite(width/2,height/2, 50, 50);
   boy.addImage(boyImg)
   boy.scale=0.3
   sanitizer=createSprite(200,200,20,20)
   sanitizer.addImage(sanitizerImg)
   sanitizer.scale=0.7
   coronaGroup=new Group()
}

function draw() {
  background("black");  
sanitizer.x=mouseX
sanitizer.y=mouseY

spawnCorona()
for(var i = 0;i<coronaGroup.length;i++){
  if(coronaGroup.get(i).isTouching(sanitizer)){
    console.log("touching")
  }
}
  drawSprites();
}
function spawnCorona(){
  if(frameCount%50===0){
    var randDirection=Math.round(random(1,4))
    var corona=createSprite(300,30,20,20)
    corona.scale=0.3
    switch(randDirection){
      case 1: corona.x=10
      corona.y=height/2
      corona.velocityX=4
      break;
      case 2: corona.x=width
      corona.y=height/2
      corona.velocityX=-4
      break;
      case 3: corona.x=width/2
      corona.y=10
      //corona.velocityX=4
      corona.velocityY=4
      break;
      case 4: corona.x=width/2
      corona.y=height
     // corona.velocityX=4
      corona.velocityY=-4
      break;
    }
    
    
    var rand=Math.round(random(1,4))

    switch(rand){
      case 1: corona.addImage(coronaImg1);
      break;
      case 2: corona.addImage(coronaImg2);
      break;
      case 3: corona.addImage(coronaImg3);
      break;
      case 4: corona.addImage(coronaImg4);
      break;
    }
    coronaGroup.add(corona)
  }
 

}