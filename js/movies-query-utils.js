$.ajax('https://spice-ultra-nape.glitch.me/movies')

    .then(response => {
        console.log(response);
        setTimeout(function () {
            $('#loader').hide();
        }, 4000);
        renderMovies(response);
        return response;
    })


