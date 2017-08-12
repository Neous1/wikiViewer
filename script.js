$(document).ready(function () {

    // use the users input to search view on button 

    $("#search").on("click", function () {
        var query = $("#entry").val();
        console.log(query)
        // create a API url
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + query + "&format=json&callback=?"

        $.getJSON(url, function (data) {
            console.log(data)
//iterate thru search result
            for (var i = 0; i < data[1].length; i++) {
                // console.log(data[1][i])
                // console.log(data[3][i])
// $("#results").html(" ");
                $("#results").append("<li data-link= '" + data[3][i]+" '>" + data[1][i] + "<br>" + data[2][i]+"</li>")

            }
        })
    })
    $("#results").on("click", "li",function(){
        var link = $(this).attr("data-link");
        window.open(link);
    })
})


Document.write(getelementbyID)