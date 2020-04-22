window.addEventListener('load', () => {
    let key = 'f6c0c5f1bd04c8e04684ff252b56eb66'
    let tre = document.querySelector('#tenperatur')
    let temp = document.querySelector('.temp')
    let city = 'germany'
    let state = 'hamburg'
    const proxy = "https://cors-anywhere.herokuapp.com/";
    //  let api= `api.openweathermap.org/data/2.5/weather?q=hamburg&appid=${key}` 
    // let api =`${proxy}https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589`;    
    // const api =`https://api.openweathermap.org/data/2.5/weather?lat=53.529582&lon=9.987500&units=metric&appid=${key}`;
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + state + '&units=metric&APPID=d05af9477b0f46101352d52dfb650f46'
    fetch(url)

        .then(response => {
            return response.json();


        })
        .then(data => {
            // console.log(data);

            const ff = data.main.temp;
            // console.log(ff);
            temp.innerText = data.main.temp + " ";
            tre.innerHTML = '<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png">';
            // console.log(data.name);

        })

})
let container = document.querySelector('#container')
window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;

    container.style.backgroundPositionY = offset * 0.7 + 'px'

})

function clock() {
    let hour = document.querySelector('#hour')
    let minut = document.querySelector('#minutes')
    let second = document.querySelector('#secondes')
    let amp = document.querySelector('#am')
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = 'AM'
    if (h > 12) {
        h = h - 12
        let am = 'AM'
    }

    h = (h < 10) ? '0' + h : h
    m = (m < 10) ? '0' + m : m
    s = (s < 10) ? '0' + s : s
    hour.innerHTML = h
    minut.innerHTML = m
    second.innerHTML = s
    amp.innerHTML = am

}
setInterval(clock, 1000)

function left1() {
    let slider = document.querySelector("#slider")
    slider.style.marginLeft = '-100%'

    function left2() {
        let slider = document.querySelector("#slider")
        slider.style.marginLeft = '-200%'

        function left3() {
            let slider = document.querySelector("#slider")
            slider.style.marginLeft = '-300%'

            function left0() {
                let slider = document.querySelector("#slider")
                slider.style.marginLeft = '0'


                setTimeout(left1, 8000)
            }
            setTimeout(left0, 8000)
        }
        setTimeout(left3, 8000)
    }
    setTimeout(left2, 8000)
}
setInterval(slid, 7700)
setTimeout(left1, 8000)
setInterval(slid1, 8200)

function slid() {
    let sli = document.querySelectorAll(".slid")

    for (let i = 0; i < sli.length; i++) {
        sli[i].style.transform = 'scale(.6)'


    }
}

function slid1() {
    let sli = document.querySelectorAll(".slid")

    for (let i = 0; i < sli.length; i++) {
        sli[i].style.transform = 'scale(1)'


    }
}
let p = document.querySelector('.p')
let txt = p.innerText

let str = 0

function sub1() {

    let sub = setInterval(() => {
        let b = txt.substr(0, str)

        p.innerText = b
        str++
        if (str > txt.length) {
            clearInterval(sub)
        }

    }, 50);


}
sub1()
//   /////  imgCont   /////////   /////
// let im1 = document.querySelectorAll('.f')

// let img1 = document.querySelector('.img1')
// let txt1 = document.querySelector('.txt1')
// let close = document.querySelector('.close')
//////////////////////////////////////////////////////////////////////////////////////////
const section = document.querySelectorAll(".section");
// const locationImage = {
//     x: 15,
//     y: 15,
//     prevImage:{
//         x:15,
//         y:15
//     }
// }
// const increasement = {
//     x:222,
//     y:170
// }

section.forEach(element => {
    Array.from(element.children).forEach(f => {
        // console.log(f)
        f.classList.add("hov")
        
        f.style.backgroundImage = `url('${f.children[1].children[0].children[0].src}')`
        // f.style.top = locationImage.y + "px"
        // f.style.left = locationImage.x + "px"
        // console.log(f.children[1].children[0].children[0].src)
        f.addEventListener("click", e => {
            if (f !== e.target) return;
            f.classList.remove("hov")
            let model = f.children[1]
            // console.log(model)
            model.style.display = 'block'
            model.style.transform = "scale(1)";
            let close = model.children[2]
            // console.log(close);
            
            close.addEventListener("click", ev => {
                // console.log(ev.target.parentElement)
                f.style.backgroundImage = `url('${f.children[1].children[0].children[0].src}')`
                ev.target.parentElement.style.transform = "scale(0)";
                model.style.transform = "scale(0)";
                f.classList.add("hov")
            });
            // event listener for images
            Array.from(f.children[1].children[0].children[1].children).forEach(evt => {
                evt.addEventListener("mouseover", evtt => {
                    // console.log(evtt.target.parentElement.parentElement.parentElement.children[0])
                    evtt.target.parentElement.parentElement.parentElement.children[0].src = evtt.target.src
                })

            })
        }, false)
        // console.log(f.parentElement.offsetHeight - f.offsetTop)
    //     if (locationImage.y > f.parentElement.offsetHeight - f.offsetTop) {
    //        increasement.y = -increasement.y
    //      }

    //      locationImage.x = increasement.x+locationImage.prevImage.x
    //      locationImage.y = increasement.y + locationImage.prevImage.y
    //      locationImage.prevImage.x=locationImage.x
    //      locationImage.prevImage.y = locationImage.y
        
     })
});
/////////////////////////////////////////////////////////////////////////////////////////

// Array.from(im1).forEach(el => {
//     // let model = el.childElements[1]
//     console.log(el)
//     el.addEventListener('click', function () {
//         model.style.display = 'block'
//         model.style.transform = "scale(1)";
//         txt1.innerText = this.alt
//     })
//     close.onclick = function () {

//         model.style.transform = "scale(0)";
//     }
//     document.onkeydown = function (e) {
//         if (e.keyCode = 27) {
//             model.style.transform = "scale(0)";
//         }
//     }
// });
// let som1 = document.querySelectorAll('.som1 >img')
// let img = document.querySelector('.img')

// som1.forEach(el => {

//     el.onmouseover = function () {


//         img.src = el.src

//     }

// });

/////%%%%%%%%////////
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // console.log(slides);

    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// &&&&&&&&&&
var slideIndex = 1;
showSlides1(slideIndex);

// Next/previous controls
function plusSlides1(n) {
    showSlides1(slideIndex += n);
}

// Thumbnail image controls
function currentSlide1(n) {
    showSlides1(slideIndex = n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    // console.log(slides);

    var dots = document.getElementsByClassName("dot1");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//&&&&&&&&&&&&&
let trn = document.querySelectorAll('.trn')
let flip = document.querySelector('.flip')
// console.log(trn.length);
let rotate = 0
flip.onclick = function(){
    // console.log(trn.length);
    if(flip.style.animation){
        flip.style.animation = ""
    }else{
        flip.style.animation = `rotate 2s linear`
        flip.style.transition="all 2s linear"
    }
    
    // if (trn.length > 0) {
    //     flip.classList.remove('tran')
    // }else{
    //     flip.classList.add('tran')
    // }


}
///// map   ////////////////
//    var map;
//       var service;
//       var infowindow;
//         var  marker
//       function initMap() {
//         var sydney = new google.maps.LatLng(53.551086, 9.993682);

//         infowindow = new google.maps.InfoWindow();


//         map = new google.maps.Map(
//             document.getElementById('map'), {center: sydney, zoom: 12});

//         var request = {
//           query: 'Museum of Hamburg Art Germany',
//           fields: ['name', 'geometry'],
//         };

//         service = new google.maps.places.PlacesService(map);

//         service.findPlaceFromQuery(request, function(results, status) {
//           if (status === google.maps.places.PlacesServiceStatus.OK) {
//             for (var i = 0; i < results.length; i++) {
//               createMarker(results[i]);
//             }

//             map.setCenter(results[0].geometry.location);
//           }
//         });
//       }
//       var marker =new google.maps.Marker({
//         position:{lat:-33.867,lng: 151.195},
//         title:'Admiralitätsstraße 4,20459 Hamburg',
//         map:map,
//     })
//       function createMarker(place) {
//         var marker = new google.maps.Marker({
//           map: map,
//           position: place.geometry.location
//         });

//         google.maps.event.addListener(marker, 'click', function() {
//           infowindow.setContent(place.name);
//           infowindow.open(map, this);
//         });
//       }

var mapProp
var marker
var infowindow
var markers = [{
        position: {
            lat: 53.550090,
            lng: 9.991636
        },
        title: 'Hamburger Rathaus',
        info: 'Hamburger Rathaus',
    },
    {
        position: {
            lat: 53.55307,
            lng: 9.991941
        },
        title: 'Jungfernstieg Alster',
        info: 'Hamburg Alster',
    },
    {
        position: {
            lat: 53.527206,
            lng: 9.918959
        },
        title: 'Hamburg Hafen',
        info: 'Hamburg Hafen',
    },
    {
        position: {
            lat: 53.541331,
            lng: 9.984127
        },
        title: 'Hamburg Elbphilharmonie',
        info: 'Hamburg Elbphilharmonie',
    },
    {
        position: {
            lat: 53.596984,
            lng: 10.020696
        },
        title: 'hamburg stadtpark',
        info: 'hamburg stadtpark',
    },

]

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(53.551086, 9.993682),
        zoom: 11,
    };

    var map = new google.maps.Map(document.getElementById("map"), mapProp, marker, infowindow);

    markers.forEach(loc => {

        var marker = new google.maps.Marker({
            position: loc.position,
            title: loc.title,
            map: map,
        });
        var infowindow = new google.maps.InfoWindow({
            content: loc.infowindow
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker)
        })
    })

}
// var mapProp
// var mark
// var infowindow
//  function mapMin() {
//      var mapmin= {
//        center:new google.maps.LatLng(53.543729,9.988516),
//        zoom:12,
//      };

//      var map = new google.maps.Map(document.getElementById("mapNin"),mapmin,mark,infow);
//      var mark =new google.maps.Marker({
//          position:{lat:53.543729,lng:9.988516},
//          title:'Miniatur Wunderland',
//          map:map,
//      });
//      var infow =new google.maps.InfoWindow({
//          content:'<h3> hello</h3>'
//      });
//      mark.addListener('click',function (){
//          infow.open(map,mark)
//      });
//      }
                //////slidImg5//////////////////
      const slidImg4 =document.querySelectorAll('.sliderImg4') 
      slidImg4.forEach(element => {
          
        Array.from(element.children).forEach((f2, index) => {
            // console.log(f2)
            f2.addEventListener('click',em =>{
                // console.log(index);
                f2.style.transition = "2s"
                 if (f2 === em.target){
                     f2.style.transform = "scale(0)"
                    
                  }
                  if (f2 !== em.target) {
                      return f2
                  }
               if(index === 0){
                    console.log("Last")
                    // element.children[2].style.transform = ""
                    Array.from(element.children).forEach(t=>{
                        t.style.transform = ""
                        
                    })
                }
                
                   
                
                
             
            })

        })  
     });