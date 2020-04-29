window.onload = function(){
let arr=[]
     fetch("http://newsapi.org/v2/top-headlines?country=de&category='+apiKey=6d46b90a21ae4bc09ae45128beeac1b5", {
 	"method": "GET",
	
 })
 .then(response => {
    let data = response.json().then(d=>{

         console.log(d.articles);
         d.articles.map(item=>{
             // console.log(item);

          let ul = document.createElement("ul")
          let title= document.createElement("li");
          let description= document.createElement("li");
          let imgesNews =document.createElement('li')
          let content = document.createElement("li");
         
          let publishedAt = document.createElement("li");
         
          let url= document.createElement("li");
          let link ;
         
          /////
          title.textContent=item.title
        
          imgesNews .innerHTML=`<img src="${item.urlToImage}" width="300">`
          description.textContent= item.description
         
       
          publishedAt.textContent= item.publishedAt
         
          link=item.url
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
})
 })
 .catch(err => {
 	console.log(err);
 });
    
  
 
 
 

}

   
   
  

