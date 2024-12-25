const menuToggle = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
