// scripts.js

document.addEventListener('DOMContentLoaded', function(){
  // Initialisation de Typed.js pour les titres dans le carousel
  const typedHeaders = document.querySelectorAll('.typed-header');
  typedHeaders.forEach((el, index) => {
    let strings = [];
    switch(index) {
      case 0:
        strings = ["Bienvenue à l'UPL"];
        break;
      case 1:
        strings = ["Inspiration et Innovation"];
        break;
      case 2:
        strings = ["Excellence Académique"];
        break;
      default:
        strings = [""];
    }
    new Typed(el, {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });
  });
});
