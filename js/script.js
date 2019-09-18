var greatBooks = ["The Great Gatsby", "On the Road", "100 Years of Solitude", "The Kite Runner", "Invisible Man", "Catcher in the Rye", "Othello", "The Piano Lesson", "Their Eyes Were Watching God", "Lord of the Flies", "The Outsiders"];

for (let i = 0; i < greatBooks.length; i++) {
    $('#buttons').append('<button class="btn btn-outline-info">' + greatBooks[i] + '</button>');
}

var bookButtonPush = function() {
    var query = "https://api.giphy.com/v1/gifs/search?q=" + this.innerHTML + "&api_key=aORSyh3OYX52nRTFnKFPMTC6ijlqSOee&limit=5";

    $.get(query).then(function(response) {
        var rData = response.data;
        for (let j = 0; j < rData.length; j++) {
            var giphyURL = rData[j].images.original.url;
            var stillURL = rData[j].images.original_still.url;
            
            var rating = rData[j].rating;
            $('#giphy-home').append('<img src="' + stillURL + '" data-still="' + stillURL + '" data-animate="' + giphyURL + '" data-state="still" class="gif"><br><h3>Rating: ' + rating + '</h3><br>');
        }
        $('.gif').on('click', function() {
            var state = $(this).attr('data-state');
            if (state === "still") {
                $(this).attr({
                    src: $(this).attr('data-animate'),
                    'data-state': 'animate'
                });
            }
            if (state === "animate") {
                $(this).attr({
                    src: $(this).attr('data-still'),
                    'data-state': 'still'
                });
            }
        });
    });
    
}

$('#add-button').on('click', function() {
    event.preventDefault();
    var searchText = $('#search-text').val().trim();
    greatBooks.push(searchText);
    $('#buttons').append('<button class="btn btn-outline-info">' + searchText + '</button>');
    $('#search-text').val("");
    $('button').on('click', bookButtonPush);
});

$('button').on('click', bookButtonPush);