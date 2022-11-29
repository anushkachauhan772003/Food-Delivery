let navbar = document.querySelector('.navbar');
let loginForm=document.querySelector('.form-container');
let searchForm = document.querySelector('.search-form');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}





document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween:60,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


document.getElementById('bookNow').addEventListener('click', function() {
    location.href = 'registrationForm.html';
}, false);


document.getElementById('login-btn').addEventListener('click', function() {
    location.href = '/login page/HtmlCode.html';
}, false);

document.getElementById('read-more').addEventListener('click', function() {
    location.href = 'readmore.html';
}, false);

document.getElementById("toprated").addEventListener('click', function() {
    location.href = 'toprated.html';
}, false);

document.getElementById('combo-offers').addEventListener('click', function() {
    location.href = 'combo.html';
}, false);


document.getElementById('sumbmit-log-in').addEventListener('click', function() {
    location.href = 'index.html';
}, false);






