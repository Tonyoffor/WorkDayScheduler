// Here I set my global varibales
var currentDay = $('#currentDay');
var saveBtn = $('saveBtn');
var userinput = $('userinput');


// I used this function to show th current date
const d = new Date();
document.getElementById("today").innerHTML = d;

//This calls the function current time
currentTime();

//This is the save button command it uses the id on the textarea I created
$(".saveBtn").on("click", function(){
var userinput9 = $('#nine').val();
var userinput10 = $('#ten').val();
var userinput11 = $('#eleven').val();
var userinput12 = $('#twelve').val();
var userinput13 = $('#one').val();
var userinput14 = $('#two').val();
var userinput15 = $('#three').val();
var userinput16 = $('#four').val();
var userinput17 = $('#five').val();

//this is used to log the data into local storage

localStorage.setItem('hour-9', userinput9);
localStorage.setItem('hour-10', userinput10);
  localStorage.setItem('hour-11', userinput11);
  localStorage.setItem('hour-12', userinput12);
  localStorage.setItem('hour-13', userinput13);
  localStorage.setItem('hour-14', userinput14);
  localStorage.setItem('hour-15', userinput15);
  localStorage.setItem('hour-16', userinput16);
  localStorage.setItem('hour-17', userinput17);  
})



//This function adds the color
function currentTime(){
  const d = new Date();
let hour = d.getHours();
var time_blocks = document.getElementsByClassName('hour');
var textareas= document.getElementsByClassName('description');
for (let i = 0; i < time_blocks.length; i++) {
  timelength= time_blocks[i].innerHTML.length;
  timelength=timelength-3;
  time=time_blocks[i].innerHTML.substring(0,timelength);
  console.log(time);
  time_blocks[i].style.color= 'White'; 
  if (time==hour){
    time_blocks[i].style.backgroundColor= '#ff6961'; 
   textareas[i].style.backgroundColor='#ff6961';
  }
  else if (time<hour){
    time_blocks[i].style.backgroundColor= '#d3d3d3';
    textareas[i].style.backgroundColor='#d3d3d3';
  }
  else if (time>hour){
    time_blocks[i].style.backgroundColor= '#77dd77';
    textareas[i].style.backgroundColor='#77dd77';
  }
}};