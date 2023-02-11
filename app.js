var slides = document.getElementsByClassName('carousel-item');
// console.log(slides); // HTML Collection
var getdots = document.querySelectorAll('.dot');
// console.log(getdots);

var currslide = 1;

// for previous
document.getElementById('prev').addEventListener('click',function(){
    carousel(currslide -= 1)
})

// for next
document.getElementById('next').addEventListener('click',function(){
    carousel(currslide += 1)
})

carousel(currslide);

for( var q = 0 ; q < getdots.length ; q++ ){
    // console.log(q);
    getdots[q].addEventListener('click',function(){
        // console.log(this.getAttribute("data-bs-slide-to"))
        currslide=this.getAttribute("data-bs-slide-to");
        carousel(currslide);
    });
}

function carousel(slidenum){
    var x,y;
    for(x = 0; x < slides.length; x++){
        slides[x].style.display = "none";
    }

    for(y = 0; y < getdots.length; y++){
        // getdots[y].className = "dot";
        // getdots[y].classList.remove("active");
        getdots[y].className = getdots[y].className.replace("active","")
    }

    if(slidenum > slides.length){
        currslide = 1
    } else if(slidenum < 1){
        currslide = slides.length
    }
    console.log(currslide);

    slides[currslide-1].style.display = "block";
    // getdots[currslide-1].className = "dot active";
    getdots[currslide-1].className += " active";
    // getdots[currslide-1].classList.add("active");
}


// getdots,slides  0     1      2
// currslide       1-1   2-1    3-1