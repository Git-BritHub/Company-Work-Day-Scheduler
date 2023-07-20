$(function () {
  // jquery var dateEl = $('#currentDay') for current day to be displayed
  var dateEl = $('#currentDay');
  // var timeBlock for smart-For-Loop/.each. Is usually for each but in jquery it's .each
  var timeBlock = $('.time-block')
  var saveButton = $(".saveBtn")
  // var date created so that current date displays on page using api Day.js format
  var date = dayjs().format('MMM D, YYYY')
  dateEl.text(date)

  timeBlock.each(function () {
    var currentHour = dayjs().hour()
    // added Number and .slice to remove 'hour' portion of string and change it to a number as opposed to a string
    var id = Number($(this).attr("id").slice(5))
    // if statement so that past event timeBlocks display as gray. 
    if (id < currentHour) {
      // gray when id is less than current hour/is in the past.
      $(this).children(".description").attr("class", "col-8 col-md-10 description past")
    // else if statement so that future event timeBlocks display as green
    } else if (id > currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future")
    // else if statment so that current hour/present event timeBlock displays as red
    } else if (id === currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description present")
    }
  })
  // add event listener. Note that in jquery it's just .on
  // added functionality to button so that it saves text from user when save icon is clicked
  saveButton.on("click", function (event) {
    event.preventDefault();
    // var value will help grab whatever text is typed in by user in the parent var key/hour in time block
    var value = $(this).siblings(".description").val()
    var key = $(this).parent().attr("id")
    // will let us save value to key in timeBlock in localStorage
    localStorage.setItem(key, JSON.stringify(value))
  })

  for(var i = 9; i <= 17; i++) {
    // used back tics `` so that I can use variables in string. It sees the ${i} value and turns it into a string.
    // chose this because it is cleaner than using: $("#hour-" + i + " textarea").val(JSON.parse(localStorage.getItem("hour- " + i)))
    $(`#hour-${i} textarea`).val(JSON.parse(localStorage.getItem(`hour-${i}`)))
  }
});
