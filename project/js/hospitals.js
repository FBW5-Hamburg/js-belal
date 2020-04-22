
    // fetch the data as soon as the page loaded 
    let msg = 'Hello World';
    console.log(msg)

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

