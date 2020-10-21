var playing = false;
var score;
var life;
var step;
var action;
var fruits=['pineapple','apple'];

$(function(){
   //if we are playing
    $("#Start").click(function(){
        if(playing == true){
            location.reload();//reload the page
            
             
            
        }
        else{//if we are not playing
            playing = true;
            score=0;
            $("#scorevalue").html(score);
            
            //show the life reamining box
             $("#liferemaining").show(); 
             life=3;
            addHearts();
            $("#Start").html("Reset Game");    
            } 
         startaction();
        $("#gameover").hide();
        
    });
    
    

$("#fruit1").mouseover(function(){
   score++;
    $("#scorevalue").html(score);
    
   // document.getElementById("slicesound").play();    
    $("#slicesound")[0].play();
    
    
    clearInterval(action);
    
    $("#fruit1").hide("explode",500);
    
    setTimeout(startaction,500);
    
});






function addHearts(){
    $("#liferemaining").empty();
    for(i=0;i<life;i++){
         $("#liferemaining").append('<img src="slicelife.png" class="life">');
}
}
function startaction()
{
//    $("#question").append('<img src="pineapple.png" class="fruit">');
    $("#fruit1").show();
    choosefruit();
$("#fruit1").css({'left': Math.round(570*Math.random()),'top':-50});
    
    
    step=1+Math.round(5*Math.random());
    
    
    action=setInterval(function(){
       $("#fruit1").css('top',$("#fruit1").position().top+step);
    
       if($("#fruit1").position().top>$("#question").height()){
          if(life>1){
           $("#fruit1").show();
    choosefruit();
$("#fruit1").css({'left': Math.round(570*Math.random()),'top':-50});
    
    
    step=1+Math.round(5*Math.random());
              life--;
              addHearts();
       }else{
          playing=false;
          $("#Start").html("Start Game");
           
       $("#gameover").show();
       $("#gameover").html("Game over Your Score is \:" +score);
        $("#liferemaining").hide();   
       }
     }        
},20);
     
}

function choosefruit()
{
    $("#fruit1").attr('src',fruits[Math.round(1*Math.random())]+'.png');
}
function stopaction()
    {
        clearInterval(action);
        $("#fruit1").hide();
        
    }
});