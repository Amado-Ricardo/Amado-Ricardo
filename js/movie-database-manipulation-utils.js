init();

function renderAddForm() {

    $('#addMoviesRatings').append(`   
   <form name="Add movie">
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


function renderEditForm(id){

    $('#edit-movie').append(`
    <form name="Edit movie">
    <input id="edit-title" class="d-flex align-items-center m-auto" placeholder="Movie Title">
    <input id="edit-year" class="d-flex align-items-center m-auto" placeholder="Year">
    <input id="edit-poster" class="d-flex align-items-center m-auto" placeholder="Poster">
    <input id="edit-genre" class="d-flex align-items-center m-auto" placeholder="Genre">
    <input id="edit-actor" class="d-flex align-items-center m-auto" placeholder="Actor">
    <input id="edit-director" class="d-flex align-items-center m-auto" placeholder="Director">
    <input id="edit-plot" class="d-flex align-items-center m-auto" placeholder="Plot">
    <input id="edit-rating" class="d-flex align-items-center m-auto" placeholder="Rating">
    <br><br>
    <button class="btn btn-primary d-flex align-items-center m-auto" onclick="postEdit(event,${id})">Update</button>
</form>`)
}