$(function() {
  var date = location.search.split('date=')[1] || moment().format('MMDDYY');
  var url = "http://gameculture.com/eca_today_" + date + ".htm";


  $.get(url, function(page) {
    var links = $($($('tbody', page).get(-2)).find('tr').get(2));
    $('#list').html(links);
  }).fail(function() {
    var yesterday_link = "?date=" + moment().subtract('days', 1).format('MMDDYY');
    $('#list').html(moment().format('L') +
                    ': The links are not yet ready for today. ' +
                    "<a href='" + yesterday_link +
                    "'>Read yesterday's links &rarr;</a>"
    );
  });
});
