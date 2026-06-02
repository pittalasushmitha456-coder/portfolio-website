const roles = [
    "Aspiring Software Engineer",
    "Problem Solver",
    "Frontend Developer",
    "Java Enthusiast",
    "CSE Student"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const textElement = document.getElementById("changing-text");

function typeEffect() {

    const currentText = roles[roleIndex];

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex--);
    } else {
        textElement.textContent = currentText.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();