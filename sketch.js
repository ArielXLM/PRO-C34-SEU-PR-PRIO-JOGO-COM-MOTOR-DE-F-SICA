var bird, bird_annimation, bird_collided;
var pipe_1, pipe_2;
var bg, bg_image;
var ground, ground_image;
var play_bt, play_bt_image;
var board, board_image;
var get_ready, get_ready_image; 
var game_over, game_over_image;
var logo, logo_image;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

