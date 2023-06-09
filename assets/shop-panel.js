const menuButton = document.querySelector('#menu-button');
const sidebar = document.querySelector('#sidebar');

menuButton.addEventListener('click', (event) => {
  sidebar.classList.toggle('-translate-x-full');
});
