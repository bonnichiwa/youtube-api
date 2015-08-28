$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyBmyiVtmZImItOvPQv2Cla-vt37IOuORZM',
    q: searchTerm,
    maxResults: 10
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items);
  });
}

function showResults(results) {
  var html = "";
  $.each(results, function(index,video){
    html += "<li>" + video.snippet.title + "<br>" + "<a href='https://www.youtube.com/watch?v=" + video.id.videoId + "'><img src='" +  video.snippet.thumbnails.medium.url + "'/></a></li>" ;
  });
  $('#search-results ul').html(html);
}
