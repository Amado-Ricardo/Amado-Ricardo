
function renderMovies(data){

    $('#movie-container').empty();
    // console.log(data);
    data.forEach(function (m) {
        renderMovie(m);
    })
}

function renderMovie(movie){

//todo pass movie properties directly to template literal
    let actors = movie.actors;
    let director = movie.director;
    let moviePoster = movie.poster;
    let movieTitle = movie.title;
    let genre = movie.genre;
    let year = movie.year;
    let plot = movie.plot;
    let rating = movie.rating;



    $('#movie-container').append(`<div class="card" style="width: 18rem;">
  <img src=${moviePoster} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${movieTitle} (${year})</h5>
    <p class="card-text">${genre}</p>
    <p class="card-text">${plot}</p>
    <p class="card-text">Rating: ${rating} / 5</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`)
}