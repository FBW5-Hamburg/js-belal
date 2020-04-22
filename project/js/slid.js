window.addEventListener('load',()=>{
   let key ='f6c0c5f1bd04c8e04684ff252b56eb66'
    let tre=document.querySelector('#tenperatur')
    let temp =document.querySelector('.temp')
  let city ='germany'
  let state ='hamburg'
           const proxy="https://cors-anywhere.herokuapp.com/";
   //  let api= `api.openweathermap.org/data/2.5/weather?q=hamburg&appid=${key}` 
  // let api =`${proxy}https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589`;    
 // const api =`https://api.openweathermap.org/data/2.5/weather?lat=53.529582&lon=9.987500&units=metric&appid=${key}`;
  let url = 'https://api.openweathermap.org/data/2.5/weather?q='+state+'&units=metric&APPID=d05af9477b0f46101352d52dfb650f46'
    fetch(url)
   
        .then(response => {
            return response.json();
            
            
        })
        .then(data => {
            console.log(data);
            
            const ff= data.main.temp;
            console.log(ff);
         temp.innerText=data.main.temp+" ";
           tre.innerHTML='<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">';
            console.log(data.name);
            
        })
        
        })
        let container=document.querySelector('#container')
        window.addEventListener('scroll',function(){
            let offset =window.pageYOffset;
            console.log('offset:'+offset);
            container.style.backgroundPositionY =offset * 0.7+'px'
            
        })

function clock() {
    let hour =document.querySelector('#hour')
    let minut =document.querySelector('#minutes')
    let second =document.querySelector('#secondes')
    let amp =document.querySelector('#am')
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let am ='AM'
    if (h>12) {
        h=h-12
        let am='AM' 
    }
    
    h=(h<10)? '0' +h:h
    m=(m<10)? '0' +m:m
    s=(s<10)? '0' +s:s
    hour.innerHTML=h
    minut.innerHTML=m
    second.innerHTML=s
    amp.innerHTML=am

}
setInterval(clock,1000)
function left1() {
    let slider =document.querySelector("#slider")
    slider.style.marginLeft='-100%'
    function left2() {
        let slider =document.querySelector("#slider")
            slider.style.marginLeft='-200%'
            function left3() {
                let slider =document.querySelector("#slider")
                    slider.style.marginLeft='-300%'
                    function left0() {
                        let slider =document.querySelector("#slider")
                        slider.style.marginLeft='0' 
                       
                        
                        setTimeout(left1,8000)
                    }
                    setTimeout(left0,8000)
            }
            setTimeout(left3,8000)
    }
    setTimeout(left2,8000)
}
setInterval(slid,7700)
setTimeout(left1,8000)
setInterval(slid1,8200)
 function slid() {
     let sli=document.querySelectorAll(".slid")
  
     for (let i = 0; i < sli.length; i++) {
         sli[i].style.transform='scale(.6)'
       
   
     }
 }
 function slid1() {
     let sli=document.querySelectorAll(".slid")
  
     for (let i = 0; i < sli.length; i++) {
         sli[i].style.transform='scale(1)'
       
     
    }
 }
 let p=document.querySelector('.p')
 let txt= p.innerText
 console.log(txt);
 let str=0
 
 function sub1() {   
    
     let sub=setInterval(() => {
        let b= txt.substr(0,str)
  
        p.innerText=b
        str++
        if(str>txt.length){
         clearInterval(sub)
        }
        
     }, 50);
   

 }
 sub1()

 ///////////
 
 function imges2() {
    let img2 =document.querySelector('#div2')
   
    img2.addEventListener('click',function(){
        let img1 =document.querySelector('#img1')
        let f2=document.getElementsByClassName("ml");
        console.log(f2);
        
        let txt=document.querySelector('#txt')
        let txt2 =document.querySelector('#txt2')
        let txt3 =document.querySelector("#txt3")
        let txt4 =document.querySelector("#txt4")
       img1.style. display= 'none';
       img4.style. display= 'none';
       img3.style. display= 'none';
       img5.style. display= 'none';
       txt.style. display= 'none';
       txt3.style.display= 'none';
       txt4.style.display= 'none';
       txt5.style.display= 'none'
       txt2.style. display= 'block';
        f2[0].style.display='block'
      
    } ) 
 }
 imges2()
 function imeges3() {
     let img3 = document.querySelector('#div3')

     img3.addEventListener('click',function () {
        let img1 =document.querySelector('#img1')
        let f2=document.getElementsByClassName("ml");
      
        let txt=document.querySelector('#txt')
        let txt2 =document.querySelector('#txt2')
        let txt3 =document.querySelector("#txt3")
        let txt4 =document.querySelector("#txt4")
        img1.style. display= 'none';
        img2.style. display= 'none';
        img4.style. display= 'none';
        img5.style. display= 'none';
        f2[1].style.display='block' 
        f2[1].style.left= '60%';  
        txt.style. display= 'none';
        txt2.style.display= 'none';
        txt4.style.display='none'
        txt5.style.display= 'none'
        txt3.style.display='block'
        txt3.style.left='-335px';
       
      
     })  
 }
 imeges3()
function imeges4() {
    let img4 =document.querySelector('#div4')
        img4.addEventListener('click',function (){
        let img1 =document.querySelector('#img1')
     
        let f3=document.getElementsByClassName("ml")
        let txt=document.querySelector('#txt')
        let txt2 =document.querySelector('#txt2')
        let txt3 =document.querySelector("#txt3")
        let txt4 =document.querySelector("#txt4")
        img1.style. display= 'none';
        img2.style. display= 'none';
        img3.style. display= 'none';
        img5.style. display= 'none';
        txt5.style.display= 'none';
        f3[2].style.display='block';
        f3[2].style.left= '-43%';  
        txt.style. display= 'none';
        txt2.style.display= 'none';
        txt3.style.display= 'none';
        txt4.style.display= 'block';
        txt4.style.left='-670px';
       
    })
}
imeges4()
function imeges5() {
    let img5 =document.querySelector('#div5')
        img5.addEventListener('click',function (){
        let img1 =document.querySelector('#img1')
       
        let f3=document.getElementsByClassName("ml")
        let f4=document.getElementsByClassName("ml")
        let txt=document.querySelector('#txt')
        let txt2 =document.querySelector('#txt2')
        let txt3 =document.querySelector("#txt3")
        let txt4 =document.querySelector("#txt4")
        let txt5 =document.querySelector("#txt5")
        img1.style. display= 'none';
        img2.style. display= 'none';
        img3.style. display= 'none';
        img4.style. display= 'none';
        f4[3].style.display='block'
        f4[3].style.left= '-146%';  
        txt.style. display= 'none';
        txt2.style.display= 'none';
        txt3.style.display= 'none';
        txt4.style.display= 'none';
        txt5.style.display= 'block';
        txt5.style.left='-1000px';
       
    })
}
imeges5()