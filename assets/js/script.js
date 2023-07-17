$(function () {
  var dateEl = $('#currentDay');
  var timeBlock = $('.time-block')
  var saveButton = $(".saveBtn")

  var date = dayjs().format('MMM D, YYYY')
  dateEl.text(date)

  timeBlock.each(function () {
    var currentHour = dayjs().hour()
    var id = Number($(this).attr("id").slice(5))
    if (id < currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past")
    } else if (id > currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future")
    } else if (id === currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description present")
    }
  })

  saveButton.on("click", function (event) {
    event.preventDefault();

    var value = $(this).siblings(".description").val()
    var key = $(this).parent().attr("id")
    localStorage.setItem(key, JSON.stringify(value))
  })

});
