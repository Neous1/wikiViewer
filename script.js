$(document).ready(function () {

    // use the users input to search view on button 

    $("#search").on("click", function () {
        var query = $("#entry").val();
        console.log(query)
        // create a API url
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + query + "&format=json&callback=?"

        $.getJSON(url, function (data) {
            // console.log(data)

            for (var i = 0; i < data[1].length; i++) {
                console.log(data[1][i])
                // console.log(data[3][i])

                $("#results").append("<li>" + data[1][i] + "<br>" + data[2][i] + "<br>" + data[3][i] + "</li>")

                //data[1][i]
            }
        })
    })
})