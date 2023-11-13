let s;
let v;

function setup() {
  createCanvas(windowWidth, windowHeight);
	s = new Sistema();
	v = new Sistema();
}

function draw() {
	background (43, 52, 153);
	s.update();
	s.display();
	s.display();
	v.update();
	v.display();
	v.display();
}