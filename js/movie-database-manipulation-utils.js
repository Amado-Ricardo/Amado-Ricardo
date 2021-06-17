function renderAddTitleRating() {

    $('#addMoviesRatings').append(`   
   <form name="Add movies" method="POST" action="pageHandlingUpdateRequestOnServer">
        <label>Movie:</label>
        <br>
        <input name="">
        <br>
        <label>Rating:</label>
        <br>
        <input name="">
        <br><br>
        <a href="#" class="btn btn-primary" onclick="addTitleRating()">Add</a>
    </form>`)


}

function addTitleRating(){

}