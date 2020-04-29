
    // fetch the data as soon as the page loaded 
   

   let output = document.getElementById('output');
   let url = './js/hospitals.json';
   fetch(url)
   .then(response  => response.json())
   .then(data => {      
       
       //output.textContent   =  data;
       console.log(data.featureMember);
       data.featureMember.map(item=>{
          // console.log(item)
           let ul = document.createElement("ul");
           let name = document.createElement("li");
           let street = document.createElement("li");
           let city = document.createElement("li");
           let homepage = document.createElement("li");
           let link ;
           let pos = document.createElement("li");
           let teilmhem = document.createElement("li");
           let notversorgung =document.createElement('li')
           
           name.textContent=item.krankenhaeuser_hh.name;
           street.textContent=item.krankenhaeuser_hh.strasse;
           city.textContent=item.krankenhaeuser_hh.ort;
           link=item.krankenhaeuser_hh.homepage;
           homepage.innerHTML=`<a href='${link}' target="_blank" > homepage </a>` ; 
           pos.textContent=item.krankenhaeuser_hh.geom.Point.pos;
           teilmhem.textContent='geburtsklinik' + ': ' +item.krankenhaeuser_hh.teilnahme_geburtsklinik;
           notversorgung.textContent='geburtsklinik' + ': ' +item.krankenhaeuser_hh.teilnahme_notversorgung
           ul.appendChild(name);
           ul.appendChild(street);
           ul.appendChild(city);
           ul.appendChild(homepage);
           ul.appendChild(pos)
           ul.appendChild(teilmhem)
           ul.appendChild(notversorgung)
           
           
           output.appendChild(ul)
           
       })
      
       
   });
//////////
  

  let nachrecht = document.getElementById('nachrecht');
  let url1 = './js/news-hamburg.json';
  fetch(url1)
  .then(response  => response.json())
  .then(data => {      
      
      //output.textContent   =  data;
     console.log(data.channel.item);
      data.channel.item.map(item=>{
          console.log(item)
           let ul = document.createElement("ul");
           ul.style.listStyleType='none'
          let title = document.createElement("li");
          let category = document.createElement("li");
           let description = document.createElement("li");
           let imgLi = document.createElement("li");
           let img = document.createElement("img");
           let homepage = document.createElement("li");
          let link ;
           let pubDate = document.createElement("li");
          // let teilmhem = document.createElement("li");
          // let notversorgung =document.createElement('li')
          
           title.textContent=item.title;
           title.classList.add('titl')
           img.src=item.enclosure['@url'];
           img.style.width="480px"
           imgLi.appendChild(img);
           console.log(img);
           
           category.textContent=item.category;
           description.textContent=item.description;
           link=item.link;
          homepage.innerHTML=`<a href='${link}' target="_blank" > homepage </a>` ; 
          pubDate.textContent=item.pubDate;
          // teilmhem.textContent='geburtsklinik' + ': ' +item.krankenhaeuser_hh.teilnahme_geburtsklinik;
          // notversorgung.textContent='geburtsklinik' + ': ' +item.krankenhaeuser_hh.teilnahme_notversorgung
          ul.appendChild(imgLi);

          ul.appendChild(title);
           ul.appendChild(category);
           ul.appendChild(description);
          ul.appendChild(homepage);
          ul.appendChild(pubDate)
          // ul.appendChild(teilmhem)
          // ul.appendChild(notversorgung)
          
          
          nachrecht.appendChild(ul)
          
      })
     
      
  });