

function getAllMovies(){
    $.ajax('https://spice-ultra-nape.glitch.me/movies')
        .then(response => {
            $('#loader').hide();
            renderMovies(response);
        })
}

function postMovie(){

    let title = $('#add-title').val();
    let rating = $('#add-rating').val();

    $.post('https://spice-ultra-nape.glitch.me/movies', {title, rating}, function (response){
        console.log(response);
        getAllMovies();
    })

}


