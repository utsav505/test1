//Create variables here
var dog,dogIMG,DogHapp,

function preload(){

  dogIMG.loadImage("images/dogImg.png");

  //load images here
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(400,350);
  dog.addImage(dogIMG);
}


function draw() {  

  drawSprites();
  //add styles here

}



