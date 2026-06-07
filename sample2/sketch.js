function setup() {
 
  createCanvas(600, 400);

  background(140, 150, 130);
  // 1. 어깨와 옷
  fill(30, 30, 35); 
  noStroke(); 
  arc(300, 400, 320, 220, PI, 0); 
  
  stroke(100); 
  strokeWeight(2);
  line(300, 300, 300, 400); 

  // 2. 목
  fill(240, 185, 150); 
  noStroke();
  rect(260, 230, 80, 70); 

  // 3. 귀
  fill(230, 185, 150); 
  ellipse(210, 200, 25, 45); 
  ellipse(390, 200, 25, 45); 

  // 4. 얼굴 윤곽 
  fill(240, 185, 150); 
  noStroke();
  rect(210, 100, 180, 150); 
  arc(300, 250, 180, 100, 0, PI); 

  // 5. 짧은 머리카락 
  fill(30, 30, 30); 
  noStroke();
  
  triangle(210, 100, 222, 100, 216, 75); 
  triangle(222, 100, 234, 100, 228, 68); 
  triangle(234, 100, 246, 100, 240, 80);  
  triangle(246, 100, 258, 100, 252, 65); 
  triangle(258, 100, 270, 100, 264, 72); 
  triangle(270, 100, 282, 100, 276, 78); 
  triangle(282, 100, 294, 100, 288, 66); 
  triangle(294, 100, 306, 100, 300, 74); 
  triangle(306, 100, 318, 100, 312, 69); 
  triangle(318, 100, 330, 100, 324, 76); 
  triangle(330, 100, 342, 100, 336, 71); 
  triangle(342, 100, 354, 100, 348, 67); 
  triangle(354, 100, 366, 100, 360, 79); 
  triangle(366, 100, 378, 100, 372, 70); 
  triangle(378, 100, 390, 100, 384, 73); 

  // 6. 눈썹
  stroke(40); 
  strokeWeight(6); 
  line(240, 165, 275, 167); 
  line(325, 167, 360, 165); 

  // 7. 눈
  stroke(100);
  strokeWeight(1);
  fill(255); 
  ellipse(255, 195, 40, 13); 
  ellipse(345, 195, 40, 13); 

  fill(30); 
  noStroke();
  circle(255, 195, 13); 
  circle(345, 195, 13); 

  // 8. 코
  stroke(210, 150, 120); 
  strokeWeight(2);
  noFill();
  line(300, 195, 300, 225); 
  arc(300, 235, 24, 15, 0, PI); 

  // 9. 입
  stroke(180, 100, 90); 
  strokeWeight(3);
  noFill();
  arc(300, 275, 45, 10, 0, PI); 
  
  //10. 선글라스
  fill(20, 20, 20); 
  stroke(50); 
  strokeWeight(3);
  rect(220, 120, 70, 40); 
  rect(310, 120, 70, 40); 
  line(290, 140, 310, 140);
  
  strokeWeight(4); 
  line(220, 135, 210, 185); 
  line(380, 135, 390, 185);
}