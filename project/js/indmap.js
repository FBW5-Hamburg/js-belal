let url = '"https://google-maps-geocoding.p.rapidapi.com/geocode/json'
fetch(url)

    .then(response => {
        return response.json();
        
        
    })
    .then(data => {
        console.log(data);
    })