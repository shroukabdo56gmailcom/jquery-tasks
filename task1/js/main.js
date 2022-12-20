$("img").animate({
    left:"1000px"
},1000)
var timer=setInterval(function(){
$("p").text("<img src='../imgs/12.gif' style='left:"+$("img").css("left")+"'>");
if($("img").css("left")=="1000px"){
   clearInterval(timer)
}
},100)
