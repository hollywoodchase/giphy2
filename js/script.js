var greatBooks = ["The Great Gatsby", "On the Road", "100 Years of Solitude", "The Kite Runner", "Invisible Man", "Catcher in the Rye", "Othello", "The Piano Lesson", "Their Eyes Were Watching God", "Lord of the Flies", "The Outsiders"];

for (let i = 0; i < greatBooks.length; i++) {
    $('#buttons').append('<button class="btn btn-outline-info">' + greatBooks[i] + '</button>');
}

$('button').on('click', function() {
    var query = "http://api.giphy.com/v1/gifs/search?q=" + this.innerText + "&api_key=aORSyh3OYX52nRTFnKFPMTC6ijlqSOee&limit=5";

    $.get(query).then(function(response) {
        var rData = response.data;
        for (let j = 0; j < rData.length; j++) {
            
            console.log(rData[j].url);
        }
    });
});