const mobileNavBtn = document.querySelector('.mobile-navbar-btn');
const navHeader = document.querySelector('.navbar');
const menuItems = document.querySelectorAll('#MenuItems li a');

const toggleNavbar = () => {
  navHeader.classList.toggle('active');
};

mobileNavBtn.addEventListener('click', toggleNavbar);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    navHeader.classList.remove('active');
  });
});
