let isDragging = false;
let startX, startY, startRotateX = 0, startRotateY = 0;
const cube = document.getElementById('cube');

// Function to handle mouse down (start dragging)
cube.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    cube.style.cursor = 'grabbing';
});

// Function to handle mouse move (during dragging)
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        // Update rotation based on mouse movement
        cube.style.transform = `rotateX(${startRotateX - deltaY * 0.5}deg) rotateY(${startRotateY + deltaX * 0.5}deg)`;

        // Optional: to prevent scrolling the page while dragging
        e.preventDefault();
    }
});

// Function to handle mouse up (end dragging)
document.addEventListener('mouseup', () => {
    isDragging = false;
    startRotateX = parseFloat(cube.style.transform.match(/rotateX\((.*?)deg\)/)[1] || 0);
    startRotateY = parseFloat(cube.style.transform.match(/rotateY\((.*?)deg\)/)[1] || 0);
    cube.style.cursor = 'grab';
});

// Optional: handle touch events for mobile users
cube.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) => {
    if (isDragging) {
        const deltaX = e.touches[0].clientX - startX;
        const deltaY = e.touches[0].clientY - startY;

        cube.style.transform = `rotateX(${startRotateX - deltaY * 0.5}deg) rotateY(${startRotateY + deltaX * 0.5}deg)`;
        e.preventDefault();
    }
});

document.addEventListener('touchend', () => {
    isDragging = false;
    startRotateX = parseFloat(cube.style.transform.match(/rotateX\((.*?)deg\)/)[1] || 0);
    startRotateY = parseFloat(cube.style.transform.match(/rotateY\((.*?)deg\)/)[1] || 0);
});

