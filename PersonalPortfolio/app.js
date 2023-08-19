var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks")
var links = document.querySelector(".navlinks li")

 

togglebtn.addEventListener("click" , function() {
    this.classList.toggle('click');
    nav.classList.toggle('open');
})

 

var typed = new Typed(".input",{
    strings : ["Web Developer","UX Designer","Frontend Developer"],
    typedSpeed:70,
    backSpeed :40,
    loop : true,
})