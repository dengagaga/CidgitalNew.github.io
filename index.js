const btnBurger = document.querySelector('.nav_right-burger')
const headerBurger = document.querySelector('.header_burger')
const headerBurgerMobil = document.querySelector('.header_burger--mobil')
btnBurger.onclick = () => {
    btnBurger.classList.toggle('nav_right-burger--active')
    document.body.classList.toggle('body--active')
    headerBurger.classList.toggle('header_burger--none')
    headerBurgerMobil.classList.toggle('header_burger--mobil--active')
    
}



document.addEventListener('DOMContentLoaded', function () {
    var buttonElements = document.querySelectorAll('.nav_right-link');
  
    buttonElements.forEach(function(button) {
      button.addEventListener('mouseenter', function (e) {
        var rect = button.getBoundingClientRect();
        var relX = e.clientX - rect.left;
        var relY = e.clientY - rect.top;
        var span = button.querySelector('span');
        span.style.top = relY + 'px';
        span.style.left = relX + 'px';
        span.style.position = 'absolute'; // Ensure span is positioned absolutely
      });
  
      button.addEventListener('mouseout', function (e) {
        var rect = button.getBoundingClientRect();
        var relX = e.clientX - rect.left;
        var relY = e.clientY - rect.top;
        var span = button.querySelector('span');
        span.style.top = relY + 'px';
        span.style.left = relX + 'px';
        span.style.position = 'absolute'; // Ensure span is positioned absolutely
      });
    });
  
    // Prevent default action for links with href="#"
    var links = document.querySelectorAll('a[href="#"]');
    links.forEach(function(link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
      });
    });
  });