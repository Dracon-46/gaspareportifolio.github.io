const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  const footer = document.querySelector('footer');
  footer.classList.toggle('dark');

  const skills = document.querySelector('skills');
  skills.classList.toggle('dark');
});


