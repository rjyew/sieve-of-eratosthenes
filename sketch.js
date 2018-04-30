
// sieve of eratosthenes
var cellArr = []; // array of square objects
var nums = []; // array of numbers from 2 to 10000
var sieved= []; // array of prime numbers from 2 to 10000
var locx = 0;
var locy = 0;
var CANVAS_SIZE = 500;
var fr = 2; //frameRate
var j = 0; // var to traverse sieved arr
var num = 1; // var to track the number each cell represents
var d;
function setup() {
  frameRate(fr);
  createCanvas(1000,1000);
  background(255);
 // adding values to nums
  for (var i = 1; i < 10000; i++){
    append(nums,i+1);
  }
 // drawing the board
  while (locy < CANVAS_SIZE){
  if (locx == 0 && locy == 0){
    cellArr.push(new Cell(locx,locy,100,num));
    locx += CANVAS_SIZE/100;
    num+=1;
  }
  else if (locx == CANVAS_SIZE){
    locx = 0;
    locy += CANVAS_SIZE/100;
    if (locy != CANVAS_SIZE){
      cellArr.push(new Cell(locx,locy,255,num));
      num +=1;
    }
    locx += CANVAS_SIZE/100;
  }
  else {
    cellArr.push(new Cell(locx,locy,255,num));
    locx += CANVAS_SIZE/100;
    num+=1;
    }
  }
  sieved = sieve(nums);
}

function draw() {
  textSize(10);
  for (var i = 0; i < cellArr.length; i++){
      if ((i+1) == sieved[j]){
        cellArr[i].display();
      }
      else if ((i+1) % sieved[j] == 0 && (i+1) != sieved[j]){
        cellArr[i].change();
        cellArr[i].display();
      }
      else{
        cellArr[i].display();
      }
    }
  j+=1;
  if(j>=1 && j <= 10){
    textSize(10);
    text('SIEVE OF ERATOSTHENES', 370, 515);
    text('lel test', 380,520);
  }
  if (j==sieved.length){
    noLoop();
  }
}

/* starts from 2 */
function sieve(list){
  if (list.length == 0){
    return [];
  }
  else {
    return sort(append(sieve(list.filter(function(val) {return val % list[0] !== 0;})),list[0]));
  }
}



function Cell(locx,locy,c,num){
  this.locx = locx;
  this.locy = locy;
  this.c = c;
  this.num = num;
  this.display = function() {
    fill(this.c);
    rect(this.locx,this.locy,5,5);
  }
  this.change = function(){
    this.c= 0;
  }
  this.clicked = function(){ //function not implemented
    d = dist(mouseX,mouseY,this.locx,this.locy);
    if (d < 5){
      if (c != 0 && c != 100){
        print("PRIME");
      }
      else{
        print("NOT PRIME");
      }
    }
  }
}
  

