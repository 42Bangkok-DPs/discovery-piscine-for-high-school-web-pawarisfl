const balloon = document.getElementById('balloon');
let size = 200; // Initial size
const colors = ['red', 'green', 'blue'];
let currentColorIndex = 0;

balloon.addEventListener('click', () => {
    size += 10; // Increase size by 10px
    if (size > 420) {
        size = 200; // Reset size if it exceeds 420px
    }
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;

    // Change color
    balloon.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Cycle through colors
});

balloon.addEventListener('mouseleave', () => {
    if (size > 200) {
        size -= 5; // Decrease size by 5px
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size}px`;
    }

    // Reverse color change
    currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
    balloon.style.backgroundColor = colors[currentColorIndex];
});
