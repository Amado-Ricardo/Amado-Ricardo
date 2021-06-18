
function renderMovies(data){

    $('#movie-container').empty();
    // console.log(data);
    data.forEach(function (m) {
        renderMovie(m);
    })
}

function renderMovie(movie){

    $('#edit-movie').empty();

    $('#movie-container').append(`<div class="card" style="width: 18rem;">
  <img src=${movie.poster} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${movie.title} (${movie.year})</h5>
    <p class="card-text">${movie.genre}</p>
    <p class="card-text">Actors: ${movie.actors}</p>
    <p class="card-text">Director: ${movie.director}</p>
    <p class="card-text">${movie.plot}</p>
    <p class="card-text">Rating: ${movie.rating} / 5</p>
    <button class="btn btn-primary" onclick="sendDelete(${movie.id})">Delete</button>
    <button class="btn btn-primary" onclick="renderEditForm(${movie.id})">Edit</button>
  </div>
</div>`)
}


