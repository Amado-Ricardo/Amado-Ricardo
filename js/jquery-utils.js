function renderMovies(data) {

    $('#movie-container').empty();
    data.forEach(function (m) {
        renderMovie(m);
    })
}

function renderMovie(movie) {

    let movieCard = $(`
   <div class="card h-100" style="width: 18rem;">

            <img src=${movie.poster} class="card-img-top" alt="...">

            <div class="card-body">
                <div class="container movie-details-container">
                    <h5 class="card-title overflow">${movie.title} (${movie.year})</h5>
                    <p class="card-text overflow">${movie.genre}</p>
                    <p class="card-text overflow">Actors: ${movie.actors}</p>
                    <p class="card-text overflow" >Director: ${movie.director}</p>
                    <p class="card-text overflow-plot">${movie.plot}</p>

                </div>
                <div class="card-footer-container" style="padding-bottom: 5%">
                    <p class="card-text" >Rating: ${movie.rating} / 5</p>

                    <div class="button-container">
                        <button class="btn btn-primary" onclick="sendDelete(${movie.id})">Delete</button>
                        <button class="btn btn-primary edit-btn">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    `)

    movieCard.find('.edit-btn').click(function () {
        renderEditForm(movie);
    })

    $('#movie-container').append(movieCard);

}
