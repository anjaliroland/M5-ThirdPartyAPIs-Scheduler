// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
// Saves user input to local storage with corresponding time the note was written in
    var saveBtns = $(".saveBtn");
    function save(event) {
      console.log(event);
      var note = event.currentTarget.parentElement.children[1].value;
      console.log(note);
      var key = event.currentTarget.parentElement.children[0].innerText;
      console.log(key);
      localStorage.setItem(key, note);
    }
    saveBtns.on("click", save);
  
// Finds out if the time block is past, present, or future, and color codes them accordingly
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

// Notes saved in local storage persist when page is refreshed



// Displays current date
    var timeEl = $("#currentDay");
    timeEl.text(dayjs().format('MMMM DD, YYYY'));
  });