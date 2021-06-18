init();

function renderAddForm() {

    $('#addMoviesRatings').append(`   
   <form name="Add movie">
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

function renderEditForm(id){



    $('#edit-movie').append(`
    <form name="Edit movie">
    <input id="edit-title" placeholder="Movie Title">
    <input id="edit-year" placeholder="Year"> 
    <input id="edit-poster" placeholder="Poster">
    <br>
    <input id="edit-genre" placeholder="Genre">
    <input id="edit-actor" placeholder="Actor">
    <input id="edit-director" placeholder="Director">
    <input id="edit-plot" placeholder="Plot">
    <input id="edit-rating" placeholder="Rating">
    <button class="btn btn-primary" onclick="postEdit(event,${id})">Update</button>
</form>`)
}