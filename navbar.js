const mobileMenu = document.getElementById('mobileMenu');
const closingButton = document.getElementById('close');

function toggleMenu() {
  const nav = document.getElementById('nav');
  document.getElementById('body').style.cursor = 'none';
  nav.classList.toggle('open');
}

mobileMenu.addEventListener('click', toggleMenu);
closingButton.addEventListener('click', toggleMenu);

document.querySelectorAll('.link').forEach((item) => {
  const nav = document.getElementById('nav');

  item.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});