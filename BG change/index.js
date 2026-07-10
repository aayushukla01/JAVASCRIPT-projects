

// $(".btn").click(function(){
//     var colour =$(this).attr("id");

//     $("body").css("background-color",colour);

//     $("#"+colour).addClass("pressed");
//     setTimeout(function(){
//         $("#"+colour).removeClass("pressed");
//     },100);

// });

for( var i=0;i<document.querySelectorAll(".btn").length;i++)
{
document.querySelectorAll(".btn")[i].addEventListener("click",function(){

    var colour=this.id;

    document.querySelector("body").style.backgroundColor=colour;     

    document.querySelector("#"+colour).classList.add("pressed");   //this.classList.add("pressed")
    setTimeout(function(){
       document.querySelector("#"+colour).classList.remove("pressed");
    },100);

});
}

document.addEventListener("keydown",function(){
    changeBG(event.key); 

});

function changeBG(x)
{
    switch(x){
        case "t":document.querySelector("body").style.backgroundColor="turquoise";
        break;
        case "y":document.querySelector("body").style.backgroundColor="yellow";
        break;
        case "b":document.querySelector("body").style.backgroundColor="Beige";
        break;
        case "p":document.querySelector("body").style.backgroundColor="purple";
        break;
    }
}