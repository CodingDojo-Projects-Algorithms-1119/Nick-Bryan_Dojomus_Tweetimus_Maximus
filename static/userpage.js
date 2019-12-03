$(document).ready(function(){
// delete button
    $('#idea_feed').on('click','#delete_button',function(){
        var del_id = $(this).attr('class');
        var link ="/delete_idea/"+del_id
        $.ajax({
            url: link
            // data: $("#idea").serialize()
        })
        .done(function(response){
            $("#board").html(response)
        })
        return false
    });
// submit idea
    $('#idea').submit(function(){
        $.ajax({
            url: "/create_idea",
            method: "POST",
            data: $("#idea").serialize()
        })
        .done(function(response){
            $("#board").html(response)
            $('#idea_textarea').val('');
        })
        return false
    });
// edit button
    $('#edit_idea{{idea.idea_id}}').click(function(){
        $("#idea{{idea.idea_id}}").html("<p>test<p>")
    });
    $('.testbutton').click(function(){
        $(".testdiv").html("not working?")
    });
})