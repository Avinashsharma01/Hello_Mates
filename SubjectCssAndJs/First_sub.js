document.addEventListener("DOMContentLoaded", function () {
    // Navigation menu elements
    let nav = document.querySelector('.headul');
    let open = document.querySelector('#open');
    let close = document.querySelector('#close');
    let left = document.querySelector('#left');
    let rightarrow = document.querySelector("#rightarrow");
    let leftarrow = document.querySelector("#leftarrow");

    // Function to open the main navigation menu
    function clickon() {
        nav.classList.add('show'); // Add 'show' class
        open.style.display = 'none';
        close.style.display = 'block';
        closeSideMenu()
    }

    // Function to close the main navigation menu
    function clickoff() {
        nav.classList.remove('show'); // Remove 'show' class
        close.style.display = 'none';
        open.style.display = 'block';
    }

    // Function to open the side navigation menu
    function openSideMenu() {
        left.classList.add('show'); // Add 'show' class for side menu
        rightarrow.style.display = 'none';
        leftarrow.style.display = 'block';
        clickoff()
    }

    // Function to close the side navigation menu
    function closeSideMenu() {
        left.classList.remove('show'); // Remove 'show' class for side menu
        leftarrow.style.display = 'none';
        rightarrow.style.display = 'block';
    }

    // Event listeners for menu buttons
    open.addEventListener("click", clickon);
    close.addEventListener("click", clickoff);
    rightarrow.addEventListener("click", openSideMenu);
    leftarrow.addEventListener("click", closeSideMenu);

    // Ensure only one of the toggle buttons is visible at page load
    function initializeMenu() {
        left.classList.remove('show'); // Hide side menu initially
        leftarrow.style.display = 'none'; // Hide close button for side menu
        rightarrow.style.display = 'block'; // Show open button for side menu
        close.style.display = 'none'; // Hide close button for main menu
    }

    initializeMenu();
});
