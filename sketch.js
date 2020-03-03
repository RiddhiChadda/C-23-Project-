const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var tower1 , tower2 , tower3 ;
var middle ; 
var roof1 , roof2 , roof3  ;  


function setup(){
    var canvas = createCanvas(400,500);
    engine = Engine.create();
    world = engine.world;

   ground = new Tower (200,500,500,50); 
   tower1 = new Tower (50,320,85,310); 
   tower2 = new Tower (350,320,85,310); 
   tower3 = new Tower (200,200,70,250 ); 
   middle = new Tower (200,400,215,150); 

   

}

function draw(){
    background(0);
    Engine.update(engine);
   
    ground.display () ; 
     tower1.display () ; 
     tower2.display () ; 
     tower3.display () ; 
     middle.display () ; 

     roof1 = triangle(50,70, 100, 170, 0, 170);
     roof2 = triangle (350,80, 300 ,170, 400, 170);
     roof3 = triangle (150, 80, 200, 0, 250, 80);
 
     fill("#ffff00");
     textSize(20);
     text("MY SWEET PALACE ", 110, 350);

}
