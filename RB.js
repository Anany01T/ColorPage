var rect = document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
  var rectangleLoation = rect.getBoundingClientRect();//this returns info about the container and where our pointer is
  var insideRect = details.clientX - rectangleLoation.left;//tells mouse pointer location

  if(insideRect < rectangleLoation.width/2){
     var redColor = gsap.utils.mapRange(0,
       rectangleLoation.width/2,
       255,
       0,
       insideRect
     );//(width,width,color,color,current pointer)
    gsap.to(rect,{
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: Power4,//rate of change of color
    });
  }
  else{
    var blueColor = gsap.utils.mapRange(rectangleLoation.width/2,
      rectangleLoation.width,
      0,
      255,
      insideRect
    );//(width,width,color,color,current pointer)
   gsap.to(rect,{
     backgroundColor: `rgb(0,0,${blueColor})`,
     ease: Power4,//rate of change of color
   });
  }
})

rect.addEventListener("mouseleave",function(){
  gsap.to(rect,{
    backgroundColor: "white",
  });
});
