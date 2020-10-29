var car , wall , speed , weight ;

function setup() {
    createCanvas(1600,400);
  
    car = createSprite(100,200,50,50);
    car.shapeColor = 'yellow';
    wall = createSprite(1360,200,60,height/2);
    wall.shapeColor = 'white' ;

    speed = random (55,90);
    weight = random(400,1500);

    car.velocityX = speed;
}

function draw() {
    background ('black'); 

if (wall.x - car.x <(car.width+wall.width/2)){
  car.velocityX=0;
  var deformation = 0.5 * weight * speed * speed/2;
  if (deformation > 180){
    car.shapeColor = 'green';
  }
  if (deformation < 180 && deformation > 100){
  car.shapeColor = 'pink';
  }
  if (deformation < 100 ){
    car.shapeColor = 'blue';
  }
}
 drawSprites();
}