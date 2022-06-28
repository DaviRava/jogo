const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon, cannonBall, barquinho;

var matrizball = []
var matrizbarquin = []

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  angleMode(DEGREES)
  angle = 20



  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle)
  
  

}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  
  for (let i = 0; i < matrizball.length; i++) {
    exibir(matrizball[i]);
    
  }

  cannon.show()
  exibir2()
  

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
}
function keyReleased(){
  if (keyCode===DOWN_ARROW) {
    matrizball[matrizball.length-1].shooting()
  }
}

function keyPressed(){
  if (keyCode===DOWN_ARROW) {
    cannonBall = new Ball(cannon.x,cannon.y) 
    cannonBall.trajetory = []
    Matter.Body.setAngle(cannonBall.body,cannon.angle)
    matrizball.push(cannonBall)
  }
}

function exibir(ball){
  if (ball) {
    ball.show()
  

  }
}

function exibir2(){
  if (matrizbarquin.lenght > 0) {
    if (matrizbarquin[matrizbarquin.lenght -1] === undefined || 
    matrizbarquin[matrizbarquin.lenght -1].body.position.x < width -300) {
      var positions = [-60, -70, -80, -90]
      var position = random(positions)
      barquinho = new Barco(width-79, height-60, 170, 170, position)
      matrizbarquin.push(barquinho)


      
    }

    for (let i = 0; i < matrizbarquin.length; i++) {
      if (matrizbarquin[i]) {
        Matter.Body.setVelocity(matrizbarquin[i].body, {
          x: -0.5,
          y: 0
        })
        matrizbarquin[i].show()

          
      }

      else {
        matrizbarquin[i]
      }



    }
    
    
  }
  
  else {
    barquinho = new Barco(width-79, height-60, 170, 170, -80)
    matrizbarquin.push(barquinho)

  }
}
  

