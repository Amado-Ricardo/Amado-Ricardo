$.ajax('https://spice-ultra-nape.glitch.me/movies')

    .then(response => {
        console.log(response);
        setTimeout(function () {
            $('#loader').hide();
            renderMovies(response);
            renderAddTitleRating();
        }, 2000);

        // renderMovies(response);
        // renderAddTitleRating();
        return response;
    })


