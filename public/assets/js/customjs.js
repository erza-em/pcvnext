var hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", function(){
    console.log('clicked');
    document.querySelector("body").classList.toggle("active");
});



