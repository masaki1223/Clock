function setup(){
	createCanvas(400, 400);
	angleMode(DEGREES);
	
}
var c;
var bgSc; // sec used for bg
function draw(){
	c = color(0, 0, 0);
	background(c.levels);
	translate(200, 200);
	
	let sc = second();
	let mn = minute();
	let hr = hour();
	bgSc = sc;
	
	noFill();
	// stroke(255);
	// ellipse(200, 200, 300, 300);
	
	let scAngle = map( sc, 0, 60, 0, 360);
	strokeWeight(8);
	stroke(255, 50, 0);
	arc(0, 0, 300, 300, -90, scAngle-90);

	let mnAngle = map(mn, 0, 60, 0, 360);
	stroke(100, 255, 150);
	arc(0, 0, 280, 280, -90, mnAngle-90);

	let hrAngle = map( hr, 0, 24, 0, 360);
	stroke(255, 0, 255);
	arc(0, 0, 260, 260, -90, hrAngle-90);

	stroke(255);
	ellipse(0,0,3,3);

	push();
	rotate(scAngle);
	stroke(255);
	strokeWeight(3);
	line(0,0,0,-100);
	pop();

	push();
	rotate(mnAngle);
	stroke(255);
	strokeWeight(5)
	line(0,0,0,-100);
	pop();

	push();
	rotate(hrAngle);
	stroke(255);
	line(0,0,0,-70);
	pop();



	fill(255);
	noStroke();
	textSize(20);
	text(hr + ":" + mn + ":" + sc, 10, 20);

nummber();
backgroundColor();
}

var nummber = function(){
	var numString = [];
	for(var i = 1; i<13; i++){
		numString.push(i);
	}
	var counter = 7;
	var ang = 30;
	for(var i = 0; i<numString.length; i++){
		numString[i] == 12 ? ang = 30.3 : ang = 30;
		push();
		rotate(ang*counter);
		text(numString[i],0,100);
		pop();
		counter++;
		//console.log(numString[i]);
	}

}
var backgroundColor = function(){
	if(bgSc%2==0){
		console.log(c)
		c.levels = color(random(0,255),random(0,255),random(0,255));
	}
	//console.log("bgSc is"+bgSc);
}
