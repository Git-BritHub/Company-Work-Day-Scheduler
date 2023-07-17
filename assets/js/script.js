var dateEl = $('#currentDay');


$(function () {
  var date = dayjs().format('MMM, D, YYYY')
  dateEl.text(date)



});
