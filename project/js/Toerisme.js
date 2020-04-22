window.onload=function() {
   height();
   setTimeout(rotate,500);
   setTimeout(tittel,1500)
  
  
   imges2()
  
}
function height() {
   let left =document.querySelector('#left')
   let right =document.querySelector('#right')
   left.style.top='0';
   right.style.bottom='0';
 
}
function rotate() {
   let m=document.querySelector('#mitte');
   m.style.transform= 'rotateX(0deg)';
   
}


function imges2() {
   let som =document.querySelectorAll('.somDiv')
  
  console.log(som[1]);
 for (let i = 0; i < som.length; i++) {
   console.log([i]);
   
   som[i].addEventListener('click',function(){
         let img=document.querySelectorAll(".img1");
         for (let x = 0; x < img.length; x++) {
            if (som.length=img.length) {
              
             img[i].style. display= 'block';
             
              
      }
     
   }
  
      })
   
   }
}


function tittel() {
   let h3=document.querySelector('.h3')
   h3.style.top='20px';
   h3.style.left='10%'
   h3.style.opacity='1'
   h3.style. zIndex= '1';
}
