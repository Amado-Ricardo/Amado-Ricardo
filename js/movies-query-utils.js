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
        getAllMovies();
    })

}

function postEdit(e, id) {
    e.preventDefault();

    let title = $('#edit-title').val();
    let genre = $('#edit-genre').val();
    let actor = $('#edit-actor').val();
    let director = $('#edit-director').val();
    let plot = $('#edit-plot').val();
    let rating = $('#edit-rating').val();

    let obj = {
        title, genre, actor, director, plot, rating,
    }
    console.log(obj);

    let objArr = Object.entries(obj);
    let filter = objArr.filter(([k, v]) => !!v);
    obj = Object.fromEntries(filter)
    console.log(obj);


    $.ajax(`https://spice-ultra-nape.glitch.me/movies/${id}`, {method: 'PATCH', data: obj}).done(res => {getAllMovies()
        console.log(res)
    })


}
