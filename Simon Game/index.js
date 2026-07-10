const buttoncolor =["red","blue","green","yellow"];

var gamepattern =[];
var userClickedPattern =[];

var level=0;

$(document).keypress(function() {
    nextSequence();
});

function nextSequence()
{
    userClickedPattern=[];
    var randomNumber =Math.floor(Math.random()*4);
    var randomChosenColor =buttoncolor[randomNumber];
    gamepattern.push(randomChosenColor);
    $("h1").text("Level "+level);
    level++;
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playsound(randomChosenColor);
}

$(".btn").click(function(){

    var userchoosencolor = $(this).attr("id");
    userClickedPattern.push(userchoosencolor);
    console.log(userClickedPattern);
    animatePress(userchoosencolor);
    playsound(userchoosencolor);
    check(userClickedPattern.length-1);
});

function playsound(x)
{
    var audio =new Audio("sounds/"+x+".mp3");
    audio.play();
}

function animatePress(x)
{
    $("#"+x).addClass("pressed");
    setTimeout(function(){
     $("#"+x).removeClass("pressed");
},100);
}

function check(x)
{
    if(gamepattern[x]===userClickedPattern[x])
    {
        if(x===gamepattern.length-1)
        {
           setTimeout(function () {
          nextSequence();
        }, 1000);
        
        }        
    }
    else
    {
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");
        },200);
        
        var audio =new Audio("sounds/wrong.mp3");
        audio.play(); 
        level=0;
        userClickedPattern=[];
        gamepattern=[];
        $("h1").text("Wrong Move !! Press A key to Start ");   
        restart();       

    }

}