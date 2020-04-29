window.onload = function(){
     navAbaut()
//  let arr=['business','entertainment','health','science','sports','technology'];


function getData(arr){
    
     fetch("http://newsapi.org/v2/top-headlines?country=de&category="+arr+"&apiKey=901399a7a26d409b9e62a188e0d974ab", {
 	"method": "GET",
	
 })

 .then(response => {
    let data = response.json().then(d=>{
     
         console.log(d);
         
          let mar =document.querySelector('.mar')
          
          let marText = '<marquee  direction="left" loop="true" onmouseover="this.stop();" onmouseout="this.start();">'
          res.innerHTML='';
         d.articles.map(item=>{
             // console.log(item);

             let title= document.createElement("li");
             let description= document.createElement("li");
             let imgesNews =document.createElement('li')
             let ul = document.createElement("ul")
         
          let publishedAt = document.createElement("li");
         
          let url= document.createElement("li");
          let link ;
          let marker;
          
          /////
          title.textContent=item.title
          marker+=item.title 
          link=item.url
          
          marText+=`  <a class='mar' target="_blank" href="${link}"> ${item.title}</a>`+'&nbsp;'+'&nbsp;'+'&nbsp;'
          imgesNews .innerHTML +=`<img class='imNew' alt="img-api" src="${item.urlToImage}" width="500" height='350'>`
          description.textContent= item.description
          
       
          publishedAt.textContent= item.publishedAt
         
          
          
          
          url.innerHTML=`<a href='${link}' target="_blank" > homepage </a>`
         
          ////

          res.appendChild(ul)
          ul.appendChild(title )
         
          ul.appendChild(imgesNews)
          ul.appendChild(description)
          
          ul.appendChild(url )
          ul.appendChild(publishedAt )
          ul.classList.add('mystyle')
          

     })
     mar.innerHTML = marText + '</marquee>'
    
})
 
 })
 .catch(err => {
 	console.log(err);
 });
 
}
getData('')
 
let catBtns = document.querySelectorAll('.bt1');
catBtns.forEach(btn => {
     btn.addEventListener('click',function () {
          getData(btn.innerHTML);
     })
   
}); 

}
function navAbaut() {
     let burger=document.querySelector('#burger')
     let navAbaut =document.querySelector('nav>ul')
     burger.addEventListener('click',function () {
          navAbaut.style.display= 'block'; 
          navAbaut.classList.toggle('navActive')
         
         
     })
 
 }
   
   
  


    
  