/**
 * Created by Klutey on 4/27/2016.
 */
$(document).ready(function(){
    var data;
    $('form').submit(function(){
        data = $(this).serializeArray();
        console.log(data);
        $("#contact_card").append("<div></div>");
        $("#contact_card div:last-of-type").append("<h1>" + data[0].value + " " + data[1].value +"</h1>");
        $("#contact_card div:last-of-type").append("<h3>click for a description...</h3>");
        $("#contact_card div:last-of-type").data("description", data[2].value);
        return false;
        })
    $("#contact_card").on("click","div", function(){
        $(this).html("<p>"+ $(this).data("description") +"</p>");
    })
})