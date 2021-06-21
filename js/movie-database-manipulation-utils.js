
$(document).ready(function () {
    setTimeout(function () {
        init();
    }, 3000);
})


function renderAddForm() {

    $('#addMoviesRatings').append(`   
   <form name="Add movie" id="add-movie-form">
        <input id="add-title" name="" placeholder="Movie Title">
        <br>
        <input id="add-rating" name="" placeholder="Rating">
        <br><br>
        <a href="#" class="btn btn-primary d-flex justify-content-center" onclick="postMovie()">Add</a>
    </form>`)
}

function init() {
    getAllMovies();
    renderAddForm();
}

function renderEditForm(movie){

        $('#edit-container').empty();

        let year = movie.year;
        let actors = movie.actors;
        let director = movie.director;
        let plot = movie.plot;
        let genre = movie.genre;

        if(!year && !actors && !director && !plot && !genre
            || movie.year === 'undefined' && movie.actors === 'undefined' && movie.director === 'undefined'
            && movie.plot === 'undefined' && movie.genre === 'undefined'){

            let year = "";
            let actors = "";
            let director = "";
            let plot = "";
            let genre = "";

            $('#edit-container').append(`
         <div id="edit-movie">
            <form name="Edit movie">
                <input id="edit-title" class="d-flex align-items-center m-auto" placeholder="Movie Title" value="${movie.title}">
                <input id="edit-year" class="d-flex align-items-center m-auto" placeholder="Year" value="${year}">
                <input id="edit-poster" class="d-flex align-items-center m-auto" placeholder="Poster" value="${movie.poster}">
                <input id="edit-genre" class="d-flex align-items-center m-auto" placeholder="Genre" value="${genre}">
                <input id="edit-actors" class="d-flex align-items-center m-auto" placeholder="Actors" value="${actors}">
                <input id="edit-director" class="d-flex align-items-center m-auto" placeholder="Director" value="${director}">
                <input id="edit-plot" class="d-flex align-items-center m-auto" placeholder="Plot" value="${plot}">
                <input id="edit-rating" class="d-flex align-items-center m-auto" placeholder="Rating" value="${movie.rating}">
                <br><br>
                <button class="btn btn-primary d-flex align-items-center m-auto" id="update-btn" onclick="postEdit(event,${movie.id})">Update</button>
            </form>
        </div>
        `);
        } else {
            $('#edit-container').append(`
         <div id="edit-movie">
            <form name="Edit movie">
                <input id="edit-title" class="d-flex align-items-center m-auto" placeholder="Movie Title" value="${movie.title}">
                <input id="edit-year" class="d-flex align-items-center m-auto" placeholder="Year" value="${movie.year || year}">
                <input id="edit-poster" class="d-flex align-items-center m-auto" placeholder="Poster" value="${movie.poster}">
                <input id="edit-genre" class="d-flex align-items-center m-auto" placeholder="Genre" value="${movie.genre || genre}">
                <input id="edit-actors" class="d-flex align-items-center m-auto" placeholder="Actors" value="${movie.actors || actors}">
                <input id="edit-director" class="d-flex align-items-center m-auto" placeholder="Director" value="${movie.director || director}">
                <input id="edit-plot" class="d-flex align-items-center m-auto" placeholder="Plot" value="${movie.plot || plot}">
                <input id="edit-rating" class="d-flex align-items-center m-auto" placeholder="Rating" value="${movie.rating}">
                <br><br>
                <button class="btn btn-primary d-flex align-items-center m-auto" id="update-btn" onclick="postEdit(event,${movie.id})">Update</button>
            </form>
        </div>
        `);
        }

}