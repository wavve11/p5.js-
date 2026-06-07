let x = 0; 
let move = 5;

// 머리카락 색상
let hairR = 30;
let hairG = 30;
let hairB = 30;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(140, 150, 130);

  // 방향키 좌우 이동
  if (keyIsDown(LEFT_ARROW)) {
    x -= move;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += move;
  }
  
  x = constrain(x, -140, 140);

  // 1. 어깨와 옷
  fill(30, 30, 35); 
  noStroke(); 
  arc(300 + x, 400, 320, 220, PI, 0); 
  
  stroke(100); 
  strokeWeight(2);
  line(300 + x, 300, 300 + x, 400); 

  // 2. 목
  fill(240, 185, 150); 
  noStroke();
  rect(260 + x, 230, 80, 70); 

  // 3. 귀
  fill(230, 185, 150); 
  ellipse(210 + x, 200, 25, 45); 
  ellipse(390 + x, 200, 25, 45); 

  // 4. 얼굴 윤곽 
  fill(240, 185, 150); 
  noStroke();
  rect(210 + x, 100, 180, 150); 
  arc(300 + x, 250, 180, 100, 0, PI); 

  // 5. 짧은 머리카락 
  fill(hairR, hairG, hairB); 
  noStroke();
  triangle(210 + x, 100, 222 + x, 100, 216 + x, 75); 
  triangle(222 + x, 100, 234 + x, 100, 228 + x, 75); 
  triangle(234 + x, 100, 246 + x, 100, 240 + x, 75); 
  triangle(246 + x, 100, 258 + x, 100, 252 + x, 75); 
  triangle(258 + x, 100, 270 + x, 100, 264 + x, 75); 
  triangle(270 + x, 100, 282 + x, 100, 276 + x, 75); 
  triangle(282 + x, 100, 294 + x, 100, 288 + x, 75); 
  triangle(294 + x, 100, 306 + x, 100, 300 + x, 75); 
  triangle(306 + x, 100, 318 + x, 100, 312 + x, 75); 
  triangle(318 + x, 100, 330 + x, 100, 324 + x, 75); 
  triangle(330 + x, 100, 342 + x, 100, 336 + x, 75); 
  triangle(342 + x, 100, 354 + x, 100, 348 + x, 75); 
  triangle(354 + x, 100, 366 + x, 100, 360 + x, 75); 
  triangle(366 + x, 100, 378 + x, 100, 372 + x, 75); 
  triangle(378 + x, 100, 390 + x, 100, 384 + x, 75); 

  // 6. 눈썹
  stroke(40); 
  strokeWeight(6); 
  line(240 + x, 165, 275 + x, 167); 
  line(325 + x, 167, 360 + x, 165); 

  // 7. 눈
  stroke(100);
  strokeWeight(1);
  fill(255); 
  ellipse(255 + x, 195, 40, 13); 
  ellipse(345 + x, 195, 40, 13); 

  fill(30); 
  noStroke();
  circle(255 + x, 195, 13); 
  circle(345 + x, 195, 13); 

  // 8. 코
  stroke(210, 150, 120); 
  strokeWeight(2);
  noFill();
  line(300 + x, 195, 300 + x, 225); 
  arc(300 + x, 235, 24, 15, 0, PI); 

  // 9. 입
  stroke(180, 100, 90); 
  strokeWeight(3);
  noFill();
  arc(300 + x, 275, 45, 10, 0, PI); 
  
  // 10. 선글라스 (마우스 누르면 눈 위치로 이동)
  let glassYOffset = 0;
  if (mouseIsPressed) {
    glassYOffset = 60; 
  }

  fill(20, 20, 20); 
  stroke(50); 
  strokeWeight(3);
  
  rect(220 + x, 120 + glassYOffset, 70, 40); 
  rect(310 + x, 120 + glassYOffset, 70, 40); 
  line(290 + x, 140 + glassYOffset, 310 + x, 140 + glassYOffset);
  
  strokeWeight(4); 
  line(220 + x, 135 + glassYOffset, 210 + x, 185); 
  line(380 + x, 135 + glassYOffset, 390 + x, 185);
}

// 키보드 입력 시 머리카락 색상 무작위 변경
function keyPressed() {
 
  if (key === 'r' || key === 'R') {
    hairR = random(255);
    hairG = random(255);
    hairB = random(255);
  }
}
