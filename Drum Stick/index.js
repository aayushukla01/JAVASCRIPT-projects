for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var x=this.innerHTML;
    sound(x);   
    anime(x);
}
);
}
document.addEventListener("keydown",function()
{
    sound(event.key);
    anime(event.key);
});

function sound(x)
{
    switch (x) {
            case "w": var audio=new Audio("sounds/tom-1.mp3");
                 audio.play(); 
            break;
            case "a": var audio=new Audio("sounds/tom-2.mp3");
                 audio.play(); 
            break;
            case "s": var audio=new Audio("sounds/tom-3.mp3");
                 audio.play(); 
            break;
            case "d": var audio=new Audio("sounds/tom-4.mp3");
                 audio.play(); 
            break;
            case "j": var audio=new Audio("sounds/crash.mp3");
                 audio.play(); 
            break;
            case "k": var audio=new Audio("sounds/kick-bass.mp3");
                 audio.play(); 
            break;
            case "l": var audio=new Audio("sounds/snare.mp3");
                 audio.play(); 
            break;
    }
}

function anime(key)
{
     var current=document.querySelector("."+key);

     current.classList.add("pressed");

     setTimeout(function()
{
     current.classList.remove("pressed");
},200);
}
