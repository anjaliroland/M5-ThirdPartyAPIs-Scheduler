// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    var saveBtns = $(".saveBtn");
    function save(event) {
      var note = event.currentTarget.parentElement.children[1].value;
      var key = event.currentTarget.parentElement.children[0].innerText;
      localStorage.setItem(key, note);
    }
    saveBtns.on("click", save);
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    var timeBlocks = $(".time-block");
    timeBlocks.each(function (){
      console.log(this)
      var currentHr = dayjs().hour();
      var timeBlockHR = parseInt($(this).attr("id").split("-")[1]);
      console.log(currentHr, timeBlockHR);

      if (currentHr > timeBlockHR) {
        console.log("past");
        this.classList.add("past");
      } else if (currentHr < timeBlockHR) {
        console.log("future");
        this.classList.add("future");
      } else {
        console.log("present");
        this.classList.add("present");
      }
    })
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    $("#hour-7 .description").val(localStorage.getItem("7AM"));
    $("#hour-8 .description").val(localStorage.getItem("8AM"));
    $("#hour-9 .description").val(localStorage.getItem("9AM"));
    $("#hour-10 .description").val(localStorage.getItem("10AM"));
    $("#hour-11 .description").val(localStorage.getItem("11AM"));
    $("#hour-12 .description").val(localStorage.getItem("12PM"));
    $("#hour-13 .description").val(localStorage.getItem("1PM"));
    $("#hour-14 .description").val(localStorage.getItem("2PM"));
    $("#hour-15 .description").val(localStorage.getItem("3PM"));
    $("#hour-16 .description").val(localStorage.getItem("4PM"));
    $("#hour-17 .description").val(localStorage.getItem("5PM"));
    $("#hour-18 .description").val(localStorage.getItem("6PM"));

    
    // TODO: Add code to display the current date in the header of the page.
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  });