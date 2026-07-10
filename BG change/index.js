

$(".btn").click(function(){
    var colour =$(this).attr("id");

    $("body").css("background-color",colour);

    $("#"+colour).addClass("pressed");
    setTimeout(function(){
        $("#"+colour).removeClass("pressed");
    },100);
    
});