// Here I set my global varibales
var currentDay = $('#currentDay');
var saveBtn = $('saveBtn');
var userinput = $('userinput');


// I used this function to show th current date
const d = new Date();
document.getElementById("today").innerHTML = d;

//This calls the function current time
currentTime();

//This is the save button command 
$(".saveBtn").on("click", function(){
var userinput9 = $('nine').siblings(".description").val();
var userinput10 = $('ten').siblings(".description").val();
console.log($(this).siblings(".description").val());
localStorage.setItem('hour-9', userinput9);
localStorage.setItem('hour-10', userinput10);
  localStorage.setItem('hour-11', userinput);
  localStorage.setItem('hour-12', userinput);
  localStorage.setItem('hour-13', userinput);
  localStorage.setItem('hour-14', userinput);
  localStorage.setItem('hour-15', userinput);
  localStorage.setItem('hour-16', userinput);
  localStorage.setItem('hour-17', userinput);  
//first step is when I click on a button I want to console log the value beside it

  // var nine = document.getElementById('nine').value;
  // var ten = document.getElementById('ten').value;
  // var eleven = document.getElementById('eleven').value;
  // var twelve = document.getElementById('twelve').value;
  // var eleven = document.getElementById('one').value;
  // var two = document.getElementById('two').value;
  // var three = document.getElementById('three').value;
  // var four = document.getElementById('four').value;
  // var five = document.getElementById('five').value;
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
}}

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
