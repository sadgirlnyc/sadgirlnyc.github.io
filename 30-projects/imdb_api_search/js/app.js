$(document).ready(function(){
  $('body').on('submit', '#searchForm', function(e){
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

//Before Movie Details Page
//$(document).on('pagebeforeshow', '#movie', function(){
  //let movieId = sessionStorage.getItem('movieId');
  //getMovie(movieId);
//});

//Single Movie Selected
//function movieClicked(id){
  //sessionStorage.setItem('movieId', id);
  //$.mobile.changePage('movie.html')
//}

//Get Movies From OBDB API
function getMovies(searchText){
  $.ajax({
    method:'GET',
    url:'http://www.omdbapi.com/?i=tt3896198&apikey=b7c0791a&s='+searchText
  }).done(function(data){
    let movies = data.Search;
    let output = '';
    $.each(movies, function(index, movie){
    output += `
      <li>
        <a onclick= "movieClicked('${movie.imdbID}')" href="#">
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

/*
//Get Single Movie
function getMovie(movieId){
  $.ajax({
    method:'GET',
    url:'http://www.omdbapi.com/?i=tt3896198&apikey=b7c0791a&i='+movieId
  }).done(function(movie){
    let movieTop = `
      <div style="text-align:center">
        <h1>${movie.Title}</h1>
          <img src="${movie.Poster}">
      </div>
    `;
    $('#movieTop').html(movieTop);

    let movieDetails = `
      <li><strong>Genre:</strong> ${movie.Genre}</li>
      <li><strong>Rated:</strong> ${movie.Rated}</li>
      <li><strong>Released:</strong> ${movie.Released}</li>
      <li><strong>Runtime:</strong> ${movie.Runtime}</li>
      <li><strong>IMDB Rating:</strong> ${movie.imdbRatings}</li>
      <li><strong>IMDB Votes:</strong> ${movie.imdbVotes}</li>
      <li><strong>Actors:</strong> ${movie.Actors}</li>
      <li><strong>Director:</strong> ${movie.Director}</li>
    `;

    $('#movieDetails').html('movieDetails').listview.('refresh');
  });
}
