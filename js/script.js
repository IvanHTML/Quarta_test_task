window.addEventListener('DOMContentLoaded', () => {

    // show sidebar
    
    const floatButton = document.querySelector('.float-button'),
          sidebar = document.querySelector('.sidebar'),
          backdrop = document.querySelector('.backdrop');

    floatButton.addEventListener('click', () => {
        sidebar.classList.add('active');
    });

    backdrop.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
    
});