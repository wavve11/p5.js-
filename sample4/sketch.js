let centerArcs = [[280, 260, 350, 220], [200, 312, 135, 65], [320, 234, 250, 136]];
let arcSizes = [350, 280, 210];
let circleSizes = [80, 60, 40];

let growthOffset = 0;   
let growthSpeed = 1.5; 
let growthLimit = 800; 

//왼쪽 세 선이 이동하는 변수
let trackX = 100; 
let trackY = 150; 
let trackSpeed = 0.5; 

// 빨간 점 좌표
let redDotX;
let redDotY;

//삼각형 3개 색상 관리
let triColor1, triColor2, triColor3;
let activeTriIndex = 0; 
let changeInterval = 40;

function setup() {
  createCanvas(600, 400);
  smooth(); 
  
  // 빨간 점 초기 위치
  redDotX = random(width);
  redDotY = random(height);

  // 삼각형 초기 랜덤 색상 
  triColor1 = color(random(255), random(255), random(255), 150);
  triColor2 = color(random(255), random(255), random(255), 150);
  triColor3 = color(random(255), random(255), random(255), 150);
}

function draw() {
 
  background('#F0EEE9'); 
  noStroke();
  fill('#FFCC9930'); triangle(100, 50, 250, 350, 400, 150);
  fill('#CCCCFFF1'); rect(150, 200, 200, 80);
  fill('#FFCCCC80'); circle(200, 250, 150);
  fill('#191919'); quad(-15, 355, 400, 150, 406, 154, 5, 415);

  // 애니메이션 1: 빨간 점
  if (frameCount % 60 === 0) {
    redDotX = random(width);  
    redDotY = random(height); 
  }
  fill('#FF0000'); 
  circle(redDotX, redDotY, 30);
  
  //팽창하는 가운데 반원과 우측 하단 반원
  noFill(); stroke('#000000'); strokeWeight(3);
  for (let a of centerArcs) {
    push(); translate(a[0], a[1]);
    arc(0, 0, a[2] + growthOffset, a[3] + growthOffset, radians(327), radians(147), CHORD);
    pop();
  }
  
  push(); translate(530, 400); 
  for (let s of arcSizes) {
    arc(0, 0, s + growthOffset, s + growthOffset, radians(180), radians(270), CHORD);
  }
  pop();

  //순차적으로 색상이 바뀌는 우측 상단 삼각형
  if (frameCount % changeInterval === 0) {
    if (activeTriIndex === 0) {
      triColor1 = color(random(255), random(255), random(255), 150);
    } else if (activeTriIndex === 1) {
      triColor2 = color(random(255), random(255), random(255), 150);
    } else if (activeTriIndex === 2) {
      triColor3 = color(random(255), random(255), random(255), 150);
    }
    activeTriIndex = (activeTriIndex + 1) % 3;
  }

  noStroke();
  fill(triColor1); triangle(350, 0, 420, 0, 410, 200);
  fill(triColor2); triangle(420, 0, 470, 0, 460, 150);
  fill(triColor3); triangle(470, 0, 510, 0, 500, 110);

  //대각선을 따라 흘러가는 노이즈 직선과 잔상
  strokeWeight(2);
  noFill();

  for (let i = 4; i >= 1; i--) { 
    let gx = trackX - (i * trackSpeed * 20); 
    let gy = trackY - (i * trackSpeed * 10);
    let ghostAlpha = 150 - (i * 30); 
    //잔상
    stroke(0, 0, 0, ghostAlpha); 
    for (let j = 0; j < 3; j++) {
      push(); 
      translate(gx + (j * 15), gy + (j * 5));
      drawNoisyLine(0, 0, 100, -200, (frameCount - (i * 5)) * 0.03);
      pop();
    }
  }
  
  //현재 위치의 선
  stroke(0, 0, 0, 255); 
  for (let j = 0; j < 3; j++) {
    push(); 
    translate(trackX + (j * 15), trackY + (j * 5));
    drawNoisyLine(0, 0, 100, -200, frameCount * 0.03);
    pop();
  }
  
  // 추적 위치 업데이트
  trackX += 2 * trackSpeed; 
  trackY += 1 * trackSpeed; 
  if (trackX > 500) {
    trackX = 100;
    trackY = 150;
  }
  strokeWeight(3);
  line(100, 150, 500, 350);

  //팽창하는 동심원
  noFill(); stroke('#000000'); strokeWeight(1);
  push(); translate(250, 100); 
  for (let s of circleSizes) {
    circle(0, 0, s + growthOffset);
  }
  pop();

  // 성장(팽창) 변수 업데이트
  growthOffset += growthSpeed;
  if (growthOffset > growthLimit) {
    growthOffset = 0;
  }
}

// 보조 함수: 노이즈로 꿈틀거리는 선을 그리는 함수
function drawNoisyLine(startX, startY, endX, endY, timeOffset) {
  beginShape();
  for (let t = 0; t <= 1; t += 0.05) {
    let bx = lerp(startX, endX, t);
    let by = lerp(startY, endY, t);
    
    let nx = map(noise(bx * 0.02, timeOffset), 0, 1, -15, 15);
    let ny = map(noise(by * 0.02, timeOffset + 100), 0, 1, -15, 15); 
    
    vertex(bx + nx, by + ny); 
  }
  endShape();
}

