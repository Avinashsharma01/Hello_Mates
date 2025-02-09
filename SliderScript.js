
// let images = document.querySelectorAll('.imgBox')
// let pre = document.querySelector('.pre');
// let next = document.querySelector('.next');


// console.log(images);
// images.forEach((image) => {
//     console.log(image);
// })


const imageBox = document.getElementById("imagebox");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("pre");
let buttons_container = document.querySelector('.button-box');


let currentIndex = 0;
// Get the total number of images
const totalImages = imageBox.children.length;

// Function to slide to the current index
function slideTo(index) {
    // Ensure index wraps around for infinite sliding
    if (index < 0) {
        currentIndex = totalImages - 1;
    } else if (index >= totalImages) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    // Calculate the offset for translateX
    // const offset = -currentIndex * 100; // Each image takes 100% of the parent width
    imageBox.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Event listeners for buttons
nextButton.addEventListener("click", () => {
    slideTo(currentIndex + 1)
    updateButtonStyles()
});
prevButton.addEventListener("click", () => {
    slideTo(currentIndex - 1)
    updateButtonStyles()
});

// Initial styling
imageBox.style.display = "flex"; // Ensures horizontal alignment of images
imageBox.style.transition = "transform 0.8s ease-in-out"; // Smooth sliding effect
imageBox.style.transition = "transform 1.5s ease-in-out"; // Smooth sliding effect
imageBox.style.transition = "transform 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)";
imageBox.style.transition = "transform 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)";
imageBox.style.willChange = "transform";
imageBox.style.transform = "translate3d(0, 0, 0)";


// automatic slide the images after 5 seconds
setInterval(() => {
    slideTo(currentIndex + 1)
    updateButtonStyles()
}, 5000)



// specific buttons specific buttons specific buttons
for (let i = 0; i < totalImages; i++) {
    let div = document.createElement('div');
    div.className = 'button';
    buttons_container.appendChild(div);
}

// let buttons = document.querySelectorAll('.button');
// console.log(buttons);
// buttons.forEach(function (button, index) {
//     console.log(button, index);

//     button.addEventListener('click', () => {
//         slideTo(index)
//     });
// });

let buttons = document.querySelectorAll('.button');

function updateButtonStyles() {
    // Remove active class from all buttons
    // buttons.forEach(btn => btn.style.background = 'rgba(0, 0, 0, 0.5)');
    buttons.forEach(btn => btn.style.background = 'rgba(232, 227, 227, 0.8)');

    // Add active style to the current button
    buttons[currentIndex].style.background = 'lime'; // Highlighted color
}

// Attach click event listeners
buttons.forEach(function (button, index) {
    button.style.background = 'rgba(0, 0, 0, 0.5)'; // Default button color

    button.addEventListener('click', () => {
        slideTo(index); // Slide to the clicked image
        updateButtonStyles(); // Update button styles
    });
});

// Initial update to highlight the first button
updateButtonStyles();
