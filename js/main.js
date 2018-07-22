function changeClass() {

  let pageHeight = window.innerHeight;
  let scrollPosition = document.body.scrollTop ? document.body.scrollTop :  document.documentElement.scrollTop;
  let watto=document.getElementById("strong-watto");
  let gradientTop=document.getElementById("gradient-top");
  let gradientBottom=document.getElementById("gradient-bottom");

  if (scrollPosition > pageHeight*10){
  	  	watto.classList.add("fix");
  	gradientTop.classList.add("hidden");
  	gradientBottom.classList.add("hidden");
  }
  else if (scrollPosition > pageHeight){
  	watto.classList.add("fix");
  	gradientTop.classList.remove("hidden");
  	gradientBottom.classList.remove("hidden");
  }else{
  	watto.classList.remove("fix"); 
  	gradientTop.classList.add("hidden");
  	gradientBottom.classList.add("hidden");
  }
}

window.onscroll = function() {changeClass();};