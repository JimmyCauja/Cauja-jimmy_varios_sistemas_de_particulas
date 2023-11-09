let s;
let v;

function setup() {
  createCanvas(windowWidth, windowHeight);
	s = new Sistema();
	v = new Sistema();
}

function draw() {
	background(10, 20,10);
	s.update();
	s.display();
	v.update();
	v.display();
}