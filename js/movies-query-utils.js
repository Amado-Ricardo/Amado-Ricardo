function getAllMovies() {
    $.ajax('https://spice-ultra-nape.glitch.me/movies')
        .then(response => {
            $('#loader').hide();
            renderMovies(response);
        })
}

function postMovie() {

    let title = $('#add-title').val();
    let rating = $('#add-rating').val();

    $.post('https://spice-ultra-nape.glitch.me/movies', {title, rating}, function (response) {
        console.log(response);
        $('#add-title').val('');
        $('#add-rating').val('');
        getAllMovies();
    })
}

function postEdit(e, id) {

    e.preventDefault();

    let title = $('#edit-title').val();
    let year = $('#edit-year').val();
    let genre = $('#edit-genre').val();
    let actors = $('#edit-actors').val();
    let director = $('#edit-director').val();
    let plot = $('#edit-plot').val();
    let rating = $('#edit-rating').val();
    let poster = $('#edit-poster').val();

    let obj = {
        title, genre, actors, director, plot, rating, year, poster
    }
    console.log(obj);

    let objArr = Object.entries(obj);
    let filter = objArr.filter(([k, v]) => !!v);
    obj = Object.fromEntries(filter)
    console.log(obj);

    $.ajax(`https://spice-ultra-nape.glitch.me/movies/${id}`, {method: 'PATCH', data: obj}).done(res => {
        $('#edit-container').empty();
        getAllMovies();
    })
}

function sendDelete(id) {

    $.ajax(`https://spice-ultra-nape.glitch.me/movies/${id}`, {
        method: "DELETE",
    }).done(res => {
        getAllMovies()
    })
        .then(response => console.log(response))
        .catch(err => {
            console.log('error: ' + err);
        });
}
