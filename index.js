//FOR DARKSEID
const target1 = document.querySelector('#target1_modal');
const target1Photo = document.querySelector('#photo1');
const target1Button = document.querySelector('#target1_button');
const closeBtn1 = document.querySelector('#close_target1');

target1Button.addEventListener('click', target1Open);
function target1Open(){
    target1.style.display = 'block';
}
target1Photo.addEventListener('click', target1Open);
function target1Open(){
    target1.style.display = 'block';
}
closeBtn1.addEventListener('click', closeTarget1);
function closeTarget1(){
    target1.style.display = 'none';
}

//hover to change the border of a picture
target1Button.addEventListener('mouseover', ()=>{
  target1Photo.style.borderColor = 'cyan';
});
target1Button.addEventListener('mouseout', ()=>{
  target1Photo.style.borderColor = 'black';
});
target1Photo.addEventListener('mouseover', ()=>{
  target1Photo.style.borderColor = 'cyan';
});
target1Photo.addEventListener('mouseout', ()=>{
  target1Photo.style.borderColor = 'black';
});

window.addEventListener('click', outsideClick1);
function outsideClick1(e){
  if (e.target == target1){
    target1.style.display = 'none';
  }
}

//for joker
const target2 = document.querySelector('#target2_modal');
const target2Photo = document.querySelector('#photo2');
const target2Button = document.querySelector('#target2_button');
const closeBtn2 = document.querySelector('#close_target2');

target2Button.addEventListener('click', target2Open);
function target2Open(){
    target2.style.display = 'block';
}
target2Photo.addEventListener('click', target2Open);
function target2Open(){
    target2.style.display = 'block';
}
closeBtn2.addEventListener('click', closeTarget2);
function closeTarget2(){
    target2.style.display = 'none';
}

//hover to change the border of a picture
target2Button.addEventListener('mouseover', ()=>{
  target2Photo.style.borderColor = 'cyan';
});
target2Button.addEventListener('mouseout', ()=>{
  target2Photo.style.borderColor = 'black';
});
target2Photo.addEventListener('mouseover', ()=>{
  target2Photo.style.borderColor = 'cyan';
});
target2Photo.addEventListener('mouseout', ()=>{
  target2Photo.style.borderColor = 'black';
});

window.addEventListener('click', outsideClick2);
function outsideClick2(e){
  if (e.target == target2){
    target2.style.display = 'none';
  }
}

//FOR THANOS
const target3 = document.querySelector('#target3_modal');
const target3Photo = document.querySelector('#photo3');
const target3Button = document.querySelector('#target3_button');
const closeBtn3 = document.querySelector('#close_target3');

target3Button.addEventListener('click', target3Open);
function target3Open(){
    target3.style.display = 'block';
}
target3Photo.addEventListener('click', target3Open);
function target3Open(){
    target3.style.display = 'block';
}
closeBtn3.addEventListener('click', closeTarget3);
function closeTarget3(){
    target3.style.display = 'none';
}

//hover to change the border of a picture
target3Button.addEventListener('mouseover', ()=>{
  target3Photo.style.borderColor = 'cyan';
});
target3Button.addEventListener('mouseout', ()=>{
  target3Photo.style.borderColor = 'black';
});
target3Photo.addEventListener('mouseover', ()=>{
  target3Photo.style.borderColor = 'cyan';
});
target3Photo.addEventListener('mouseout', ()=>{
  target3Photo.style.borderColor = 'black';
});

window.addEventListener('click', outsideClick3);
function outsideClick3(e){
  if (e.target == target3){
    target3.style.display = 'none';
  }
}

//FOR LEBRON
const target4 = document.querySelector('#target4_modal');
const target4Photo = document.querySelector('#photo4');
const target4Button = document.querySelector('#target4_button');
const closeBtn4 = document.querySelector('#close_target4');

target4Button.addEventListener('click', target4Open);
function target4Open(){
    target4.style.display = 'block';
}
target4Photo.addEventListener('click', target4Open);
function target4Open(){
    target4.style.display = 'block';
}
closeBtn4.addEventListener('click', closeTarget4);
function closeTarget4(){
    target4.style.display = 'none';
}

//hover to change the border of a picture
target4Button.addEventListener('mouseover', ()=>{
  target4Photo.style.borderColor = 'cyan';
});
target4Button.addEventListener('mouseout', ()=>{
  target4Photo.style.borderColor = 'black';
});
target4Photo.addEventListener('mouseover', ()=>{
  target4Photo.style.borderColor = 'cyan';
});
target4Photo.addEventListener('mouseout', ()=>{
  target4Photo.style.borderColor = 'black';
});


window.addEventListener('click', outsideClick4);
function outsideClick4(e){
  if (e.target == target4){
    target4.style.display = 'none';
  }
}

//FOR DALISAY
const target5 = document.querySelector('#target5_modal');
const target5Photo = document.querySelector('#photo5');
const target5Button = document.querySelector('#target5_button');
const closeBtn5 = document.querySelector('#close_target5');

target5Button.addEventListener('click', target5Open);
function target5Open(){
    target5.style.display = 'block';
}
target5Photo.addEventListener('click', target5Open);
function target5Open(){
    target5.style.display = 'block';
}
closeBtn5.addEventListener('click', closeTarget5);
function closeTarget5(){
    target5.style.display = 'none';
}

//hover to change the border of a picture
target5Button.addEventListener('mouseover', ()=>{
  target5Photo.style.borderColor = 'cyan';
});
target5Button.addEventListener('mouseout', ()=>{
  target5Photo.style.borderColor = 'black';
});
target5Photo.addEventListener('mouseover', ()=>{
  target5Photo.style.borderColor = 'cyan';
});
target5Photo.addEventListener('mouseout', ()=>{
  target5Photo.style.borderColor = 'black';
});

window.addEventListener('click', outsideClick5);
function outsideClick5(e){
  if (e.target == target5){
    target5.style.display = 'none';
  }
}

//THE ROCK
const target6 = document.querySelector('#target6_modal');
const target6Photo = document.querySelector('#photo6');
const target6Button = document.querySelector('#target6_button');
const closeBtn6 = document.querySelector('#close_target6');

target6Button.addEventListener('click', target6Open);
function target6Open(){
    target6.style.display = 'block';
}
target6Photo.addEventListener('click', target6Open);
function target6Open(){
    target6.style.display = 'block';
}
closeBtn6.addEventListener('click', closeTarget6);
function closeTarget6(){
    target6.style.display = 'none';
}

//hover to change the border of a picture
target6Button.addEventListener('mouseover', ()=>{
  target6Photo.style.borderColor = 'cyan';
});
target6Button.addEventListener('mouseout', ()=>{
  target6Photo.style.borderColor = 'black';
});
target6Photo.addEventListener('mouseover', ()=>{
  target6Photo.style.borderColor = 'cyan';
});
target6Photo.addEventListener('mouseout', ()=>{
  target6Photo.style.borderColor = 'black';
});

window.addEventListener('click', outsideClick6);
function outsideClick6(e){
  if (e.target == target6){
    target6.style.display = 'none';
  }
}