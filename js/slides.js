let slides = document.querySelectorAll(".slide");
let index = 0;
let timer;

function showSlide(n) {
    slides.forEach((slides, i) => {
        slides.classList.remove("active");

        if(i === n) {
            slides.classList.add("active");
        }
    });
    index = n;
}

function nextSlide(){
    index = (index + 1) % slides.length;
    showSlide(index);
}

function autoSlide(){
    timer = setInterval(nextSlide, 15000);
}

showSlide(Math.round(Math.random()*slides.length));
autoSlide();