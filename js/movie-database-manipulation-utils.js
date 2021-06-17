init();

function renderAddForm() {

    $('#addMoviesRatings').append(`   
   <form name="Add movies">
        <input id="add-title" name="" placeholder="Movie Title">
        <br>
        <input id="add-rating" name="" placeholder="Rating">
        <br><br>
        <a href="#" class="btn btn-primary" onclick="postMovie()">Add</a>
    </form>`)

}

function init() {
    getAllMovies();
    renderAddForm();
}