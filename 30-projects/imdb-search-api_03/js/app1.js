$(document).ready(function(){
  $('body').on('submit', '#searchForm', function(e){
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

// Before Movie Details
$(document).on('pagebeforeshow', '#movie', function(){
  let movieId = sessionStorage.getItem('movieId');
  getMovie(movieId);
})

//Single Movie Selected
function movieClicked(id){
  sessionStorage.setItem('movieId', id);
  $.mobile.changePage('movie.html');
//  alert(id);
}

//Get Movies from OMDB API
function getMovies(searchText){
  $.ajax({
    method: 'GET',
    url: 'http://www.omdbapi.com/?i=tt3896198&apikey=b7c0791a&s='+searchText
  }).done(function(data){
    let movies = data.Search;
    let output = ' ';
    $.each(movies, function(index, movie){
      output += `
        <li>
          <a onclick="movieClicked('${movie.imdbID}')" href="#">
            <img src="${movie.Poster}">
              <h2>${movie.Title}</h2>
              <p>Release Year: ${movie.Year}</p>
          </a>
        </li>
      `;
    });
    $('#movies').html(output).listview('refresh');
  });
}

// Get Single Movie
function getMovie(movieId){
  $.ajax({
    method:'GET',
    url:'http://www.omdbapi.com/?i=tt3896198&apikey=b7c0791a&i='+movieId
  }).done(function(data){
    console.log(data);
});
}
