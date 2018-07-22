function changeClass() {

  let pageHeight = window.innerHeight;
  let scrollPosition = document.body.scrollTop ? document.body.scrollTop :  document.documentElement.scrollTop;
  console.log(pageHeight);
  console.log(scrollPosition);
  let watto=document.getElementById("strong-watto");
  if (scrollPosition > pageHeight){
  	watto.classList.add("fix");
  }else{
  	watto.classList.remove("fix"); 
  }
}

window.onscroll = function() {changeClass()};