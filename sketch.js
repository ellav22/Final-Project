var slider;
var slider2;
var buttonH;
var buttonG;
var buttonD;
var buttonV;
var buttonS;
var buttonGa;
var buttonBU;
var font;
let smiley;
let phil;
let dogs;
let house;
let college;
let family;
function preload() {
  smiley = loadImage('download-2.jpg');
  phil = loadImage('philippines.jpg');
  dogs = loadImage('download-1-1.jpg');
  house = loadImage('house.jpg');
  college = loadImage('download-3.jpg');
  family = loadImage('download-4.jpg');
  


}
function setup() {
  createCanvas(550, 400);
  colorMode(HSB)
  createElement('h1', "Change Font")
  createP("Click a button to change the font.")
  loadFont('Dalgona.ttf')
  loadFont('Victoria.ttf')
  loadFont('SweetyStrawberry.otf')
  loadFont('Ganttlets.ttf')
  loadFont('Buon Umore.otf')
  font = textFont ('Helvetica');
  buttonH = createButton("Helvetica")
  buttonH.mousePressed(changeHelvetica);
  buttonG = createButton("Georgia")
  buttonG.mousePressed(changeGeorgia);
  buttonD = createButton("Dalgona")
  buttonD.mousePressed(changeDalgona);
  buttonV = createButton("Victoria")
  buttonV.mousePressed(changeVictoria);
  buttonS = createButton("Sweety Strawberry")
  buttonS.mousePressed(changeSweety);
  buttonGa = createButton("Ganttlets")
  buttonGa.mousePressed(changeGanttlets);
  buttonBU = createButton("Buon Umore")
  buttonBU.mousePressed(changeBuon);
  createElement('h1', "Change Text Box Color")
  createP("Drag the slider to change the color of the text box that appears when you hover over an image.")
  slider = createSlider(0,360,1)
  slider = slider.value(210)
  createElement('h1', "Change Text Color")
  createP("Drag the slider to change the color of the text.")
  slider2 = createSlider(0,360,1)
  slider2 = slider2.value(50) 
  textSize(30)
}
function draw() {
  background (255)
  scale (1)
  image (family, 130,222)
  scale (1.0)  
  image (phil, 0, 0);
  scale(0.8)
  image (dogs, 0, 175)
  scale (0.5)
  image(house, 600,0)
  scale (1.5)  
  image(smiley, 0, 456);
  scale (1.5)
  image (college, 360, 250)
  textFont(font)
  
if (mouseX > 0 && mouseX < 240 && mouseY > 0 && mouseY < 140){
  noStroke()
  fill (slider.value(), 57, 87)
  rect (2,2,225,70,10)
  fill (slider2.value(), 57, 87)
  text ('to visit the\nphilippines more', 4, 25);
        
}
  if (mouseX > 0 && mouseX < 240 && mouseY > 140 && mouseY < 275){
  noStroke()
  fill (slider.value(), 57, 87)
  rect (2,260,180,40,10)
  fill (slider2.value(), 57, 87)
  text ('to have dogs', 4, 290);
        
}
  if (mouseX > 0 && mouseX < 144 && mouseY > 275 && mouseY < 400){
  noStroke()
  fill (slider.value(), 57, 87)
  rect (1,410,163,35,10)
  fill (slider2.value(), 57, 87)
  text ('to be happy', 4, 435);
        
}
  if (mouseX > 240 && mouseX < 550 && mouseY > 0 && mouseY < 226){
  noStroke()
  fill (slider.value(), 57, 87)
  rect (340,200,225,40,10)
  fill (slider2.value(), 57, 87)
  text ('to have a house', 345, 230);
        
}
  if (mouseX > 144 && mouseX < 323 && mouseY > 275 && mouseY < 400){
  noStroke()
  fill (slider.value(), 57, 87)
  rect (152,410,210,35,10)
  fill (slider2.value(), 57, 87)
  text ('to start a family', 156, 435);
        
}
 if (mouseX > 323 && mouseX < 550 && mouseY > 275 && mouseY < 400){
  noStroke()
  fill (slider.value(), 57, 87)
  rect (400,255,170,35,10)
  fill (slider2.value(), 57, 87)
  text ('to graduate', 410, 280);
  
}
}
function changeGeorgia(){
 textSize(30) 
  font = textFont('Georgia')
}
function changeDalgona(){
  textSize(30)
  font = textFont('Dalgona')
}
function changeVictoria(){
  textSize(35)
  font = textFont('Victoria')
}
function changeSweety(){
  textSize(35)
  font = textFont('SweetyStrawberry')
}
function changeHelvetica(){
  textSize(30)
  font = textFont('Helvetica')
}
function changeGanttlets(){
  textSize(33)
  font = textFont('Ganttlets')
}
function changeBuon(){
  textSize(35)
  font = textFont('Buon Umore')
}