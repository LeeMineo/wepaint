// scripts/modal.js

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuModal = document.getElementById('menuModal');
    const menuClose = document.getElementById('menuClose');
  
    if (menuToggle && menuModal && menuClose) {
      menuToggle.addEventListener('click', () => {
        menuModal.classList.add('active');
        setTimeout(() => {
          menuModal.classList.add('show');
        }, 10);
      });
  
      menuClose.addEventListener('click', () => {
        menuModal.classList.remove('show');
        setTimeout(() => {
          menuModal.classList.remove('active');
        }, 400);
      });
    }
  });
  