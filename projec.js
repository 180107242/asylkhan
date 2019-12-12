var i = 0;       
var images = [];  
var time = 1000;  

images[0] = "111.jpg";
images[1] = "222.jpg";
images[2] = "333.jpg";
images[3] = "444.jpg";
images[4] = "555.jfif";
images[5] = "666.svg";
images[6] = "777.jfif";
images[7] = "888.jpg";


function changeImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++; 
  } else { 
    i = 0;
  }

  setTimeout("changeImg()", time);
}
window.onload=changeImg;