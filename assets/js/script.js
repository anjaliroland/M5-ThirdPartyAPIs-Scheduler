// all code is wrapped to ensure that the code won't run until the browser has rendered all the elements in the HTML
$(function () {
    // saves user input to local storage with corresponding time block it was typed into
    var saveBtns = $(".saveBtn");
    function save(event) {
      var note = event.currentTarget.parentElement.children[1].value;
      var key = event.currentTarget.parentElement.children[0].innerText;
      localStorage.setItem(key, note);
    }
    saveBtns.on("click", save);
    
    // checks if time block is in the past, present, or future and sets the color accordingly
    var timeBlocks = $(".time-block");
    timeBlocks.each(function (){
      var currentHr = dayjs().hour();
      var timeBlockHR = parseInt($(this).attr("id").split("-")[1]);

      if (currentHr > timeBlockHR) {
        this.classList.add("past");
      } else if (currentHr < timeBlockHR) {
        this.classList.add("future");
      } else {
        this.classList.add("present");
      }
    });
    
    // gets notes saved in local storage and renders them on the page
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

    // displays current date in the header of the page
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  });