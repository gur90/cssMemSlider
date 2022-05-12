var ind = 1;
show(ind)
function show (n) {
    let i;
    let slides = document.querySelectorAll(".slide")
    let controlls = document.querySelectorAll(".controll-dot")
    if (n> slides.length) {
        ind =1
    }
    if(n<1){
        ind = slides.length
    }
    for (i=0; i<slides.length; i++){
        slides[i].style.display = "none"
    }
    for (i=0; i<controlls.length; i++){
        controlls[i].className = controlls[i].className.replace(" active", "")
    }
slides[ind-1].style.display = "block"
controlls[ind-1].className += " active"
}
function currentSlide (n) {
    show(ind=n)
}