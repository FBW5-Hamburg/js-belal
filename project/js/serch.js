window.onload = function(){
    getData(arr)
}
let arr =''
function getData(arr){
    cat1 =arr
    fetch("https://api.serpwow.com/live/search?api_key=6393BAF7FDAA4D1DBFB44EA12AADEEB2&q=pizza", {
    "method": "GET",
   
})

.then(response => {
   let data = response.json().then(d=>{
    
        console.log(d);
        
         

            let title= document.createElement("li");
           
            let imgesNews =document.createElement('li')
            let ul = document.createElement("ul")
        
        
        
        
         
         
         /////
         title.textContent=d.knowledge_graph.description
        
       
        
         imgesNews .innerHTML +=`<img src="${d.knowledge_graph.lplan_a_trip}" width="600">`
         console.log(d.knowledge_graph.lplan_a_trip);
         
      
        
      
        
         
         
         
       

         res.appendChild(ul)
         ul.appendChild(title )
        
         ul.appendChild(imgesNews)
        
         
         ul.classList.add('mystyle')
         
         

    })
  
   
})


.catch(err => {
    console.log(err);
});

}
