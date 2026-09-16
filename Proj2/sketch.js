new Q5("global");

let player;
let floor;
let wall1;
let wall2;
let wall3;

let ySize = 800
let xSize = 900

function setup() {
  createCanvas(xSize, ySize);


  player = new Sprite(200, 200, 50);
  player.collider = 'dynamic';
  player.mass = 0.9;
  player.color = "lime";
  player.rotationLock = true;
  player.layer = 1000;
  player.speed = 4;
  player.bounciness = 1;
  player.friction = 0;
  


  // floor = new Sprite(400,800,800,20,'static')

  floor = new Sprite(xSize/2,ySize,xSize,20,'static')
  floor.bounciness = 1;
  floor.color = "pink";

  wall1 = new Sprite(0,ySize/2,20,ySize,'static')
  floor.bounciness = 1;
  floor.color = "blue";

  wall2 = new Sprite(xSize,ySize/2,20,ySize,'static')
  floor.bounciness = 1;
  floor.color = "blue";

  wall3 = new Sprite(xSize/2,0,xSize,20,'static')
  floor.bounciness = 1;
  floor.color = "blue";
}

function draw() {
  background(90);
  // gravityScale()
  // player.speed.y = 0.3;
  world.gravity.y = 10
  
  player.physics = "dynamic";

  if (kb.pressing('left'))  player.vel.x += -4;
  if (kb.pressing('right')) player.vel.x += 4;
  if (kb.pressing('up'))    player.vel.y += -4;
  if (kb.pressing('down'))  player.vel.y += 4;
  if (kb.pressing("space") && player.collider != 'static') {
    player.collider = 'static';
    // player.vel.y = 0
    // player.vel.x = 0
  }
  // if (kb.release('space')) {
  //   player.collider = 'dynamic'
  // }

  // Add real-time movement and game loops here
}