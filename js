window.onscroll = function() {
  // Example: Add a class to change the icon's appearance on scroll
  const socialIcons = document.querySelector('.social-icons');
  
  if (window.scrollY > 100) {
    socialIcons.style.transform = "rotate(0deg)";  // Change rotation when scrolling past 100px
  } else {
    socialIcons.style.transform = "rotate(45deg)";
  }
};
