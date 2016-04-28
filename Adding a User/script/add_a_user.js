/**
 * Created by Klutey on 4/27/2016.
 */
$(document).ready(function(){
    $('form').submit(function(){
        var values= $(this).serializeArray();
        $('tbody').append("<tr></tr>");
        for(var i=0; i<values.length;i++){
            $('tbody tr:last-of-type').append("<td>" + values[i].value +"</td>")
        }
        return false;

    })
})