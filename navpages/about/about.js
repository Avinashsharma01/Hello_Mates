let nav = document.querySelector('.nav-links');
let open = document.querySelector('#open-menu');
let close = document.querySelector('#close-menu');

// Function to open the menu
function openMenu() {
    nav.classList.remove('hidden');
    open.classList.add('hidden');
    close.classList.remove('hidden');
}

// Function to close the menu
function closeMenu() {
    nav.classList.add('hidden');
    close.classList.add('hidden');
    open.classList.remove('hidden');
}

// Event listeners
open.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
