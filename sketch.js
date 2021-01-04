var Engine = Matter.Engine;
 var World = Matter.World;
 var Events = Matter.Events;
 var Bodies = Matter.Bodies;
 
  var particles;
  var particles = [particles];
  var plinkos = [];
  var divisions = [];
  var line;

  var divisionHeight=300;

  var gameState = "PLAY";

  var turn = 0;
  var score = 0;

function setup() {
  createCanvas(1100,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) 
   {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
   for (var j = 75; j <=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,75));
   }
   for (var j = 50; j <=width-10; j=j+50) 
   { 
      plinkos.push(new Plinko(j,175));
   }
   for (var j = 75; j <=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,275));
   }
   for (var j = 50; j <=width-10; j=j+50) 
   { 
      plinkos.push(new Plinko(j,375));
   }
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",100,690);
  text("500",200,690);
  text("500",300,690);
  text("500",400,690);
  text("100",500,690);
  text("100",600,690);
  text("100",700,690);
  text("200",800,690);
  text("200",900,690);
  text("200",1000,690);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++)
  { 
     particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++)
  {
     divisions[k].display();
  }
  if(particle!=null)
  {
     particle.display();
     if(particle.body.position.x<300)
      {
         score=score+500;
         particle=null;
         if(count>=5)
         {
            gameState = "end";
         }
      }
   }
   if(particle!=null)
   {
      particle.display();
      if(particle.body.position.x>301 && particle.body.position.x<600)
      {
         score=score+100;
         particle=null;
         if(count>=5)
         {
            gameState = "end";
         }
      }
   }
   if(particle!=null)
   {
      particle.display();
      if(particle.body.position.x>601 && particle.body.position.x<900)
      {
         score=score+200;
         particle=null;
         if(count>=5)
         {
            gameState = "end";
         }
      }
   }
}

function mousePressed()
{
   if(gameState!=="end")
   {
      count++;
      particle=new Particle(mouseX,10,10,10);
   }
}