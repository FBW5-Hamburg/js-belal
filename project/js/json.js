window.onload = function(){
     fetch("http://suche.transparenz.hamburg.de/api/3/action/package_search?q=kliniken", {
 	"method": "GET",
	
 })
 .then(response => {
    let data = response.json().then(d=>{
         console.log(d);
         let ul = document.createElement("ul")
         res.append(ul)
        d.result.results.forEach(element =>{
             let li = this.document.createElement("li")
             li.innerHTML = element.groups
             let uli = this.document.createElement("ul")
             li.append(uli)
             element.groups.forEach(f=>{
                let lii = this.document.createElement("li")
                 lii.innerHTML =f.resources+" "+f.title
                 uli.append(lii)
                 console.log(lii);
                
             })

            ul.append(li)
       });

     })
	
 })
 .catch(err => {
 	console.log(err);
 });
    
  
 
 
 

}

   
   
  

