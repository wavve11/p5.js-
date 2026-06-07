function setup() {
    createCanvas(600, 400);
    background('#F0EEE9'); 

  //배경 반투명 도형들
  noStroke();
  
  fill('#FFCC9930'); 
  triangle(100, 50, 250, 350, 400, 150);

  fill('#CCCCFFF1'); 
  rect(150, 200, 200, 80);
  
  fill('#FFCCCC80'); 
  circle(200, 250, 150);
  console.log(1)


  // 굵은 대각선
  fill('#191919');
  quad(-15, 355, 400, 150, 406, 154, 5, 415);
  
  // 빨간 점
  fill('#FF0000');
  circle(570, 20, 30);
  
  // 반원
  noFill();
  stroke('#000000');
  strokeWeight(3);
  arc(280, 260, 350, 220, radians(327), radians(147), CHORD );
  arc(200, 312, 135, 65, radians(327), radians(147), CHORD );
  arc(320, 234, 250, 136, radians(327), radians(147), CHORD );
  
  arc(530, 400, 350, 350, radians(180), radians(270), CHORD); 
  arc(530, 400, 280, 280, radians(180), radians(270), CHORD);
  arc(530, 400, 210, 210, radians(180), radians(270), CHORD);
  console.log(2)

  
  // 우측 상단 삼각형 3개
  noStroke()
  fill('#8080FF99');
  triangle(350, 0, 420, 0, 410, 200);
  triangle(420, 0, 470, 0, 460, 150);
  triangle(470, 0, 510, 0, 500, 110);
  console.log(3)

  
  // 직선
  stroke('#000000');
  strokeWeight(2);
  line(50, 300, 150, 100);
  line(65, 305, 165, 105); 
  line(80, 310, 180, 110); 

  strokeWeight(3);
  line(100, 150, 500, 350);

  // 동심원들
  noFill();
  stroke('#000000');
  strokeWeight(1);
  circle(250, 100, 80);
  circle(250, 100, 60);
  circle(250, 100, 40);
  console.log(4)

}


