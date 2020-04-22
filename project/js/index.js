let slider1 =['imeg/img1.jpg','imeg/img2.jpg','imeg/img3.jpg']
i=0
//let trn= document.querySelector(".slid").innerHTML
//let img =document.querySelector(".imges1")
let sliderShow= function () {

   
    document.img.src=slider[i]
    if (i<slider1.length-1)  {
        console.log(slider1[i]);
        document.img.src=slider1[i]
        
        img.style.marginLeft="-100%"
        i++ 
    }else{
        i=0
    }

console.log();

setTimeout("sliderShow()",2000)


}
sliderShow()

