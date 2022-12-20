// $(function(){

//     $("#exzoom").exzoom({
//       // options here
//     });
  
//   });

$("img").on("click",function(){
        $("#exzoom").exzoom({
  
      // thumbnail nav options
      "navWidth": 60,
      "navHeight": 60,
      "navItemNum": 5,
      "navItemMargin": 7,
      "navBorder": 1,
  
      // autoplay
  
      // autoplay interval in milliseconds
      "autoPlayTimeout": 2000
      
    });
  

})
