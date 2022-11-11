// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var currentDay = $('#currentDay');
var saveBtn = $('saveBtn');
var userinput = $('userinput');

var nine = document.getElementById('nine').value
var ten = document.getElementById('ten').value
var eleven = document.getElementById('eleven').value
var twelve = document.getElementById('twelve').value
var one = document.getElementById('one').value
var two = document.getElementById('two').value
var three = document.getElementById('three').value
var four = document.getElementById('four').value
var five = document.getElementById('five').value

const d = new Date();
document.getElementById("today").innerHTML = d;
//will it be easier to us (UTC) on date so I can attach color attributes

//new Date = dayjs().hour(12) 
//hour	h	now, but with 0 mins, 0 secs, and 0 ms
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(".saveBtn").on("click", function(){
console.log(this)  

  localStorage.setItem('hour-9', nine);
  localStorage.setItem('hour-10', ten);
  localStorage.setItem('hour-11', eleven);
  localStorage.setItem('hour-12', twelve);
  localStorage.setItem('hour-1', one);
  localStorage.setItem('hour-2', two);
  localStorage.setItem('hour-3', three);
  localStorage.setItem('hour-4', four);
  localStorage.setItem('hour-5', five);

  console.log(document.getElementById('nine').value)
  
})




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  //function myFunction() {
    //var element = document.getElementById("myDIV");
    //element.classList.remove("mystyle");
  //}
  //function myFunction() {
  //var element = document.getElementById("myDIV");
  //element.classList.add("mystyle");
//}
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



