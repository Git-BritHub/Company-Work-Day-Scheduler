var dateEl = $('#currentDay');


$(function () {
  var date = dayjs().format('MMM D, YYYY')
  dateEl.text(date)

  var currentHour = dayjs().hour()
  var timeBlock = $('.time-block')

  timeBlock.each(function() {
    var id = Number($(this).attr("id").slice(5))
    if(id < currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past")
    } else if(id > currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future")
    } else {
      $(this).children(".description").attr("class", "col-8 col-md-10 description present")
    }
  })



});
