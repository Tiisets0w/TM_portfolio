// Particles.js configuration
particlesJS("particles-js", {
    particles: {
        number: {
            value: 400, // Number of particles
            density: {
                enable: true,
                value_area: 800, // Adjust density
            },
        },
        color: {
            value: "#ffffff", // White particles
        },
        shape: {
            type: "circle", // Circle shape
            stroke: {
                width: 0,
                color: "#000000",
            },
        },
        opacity: {
            value: 0.5,
            random: false,
        },
        size: {
            value: 4,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2, // Speed of movement
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse", // Particles repel when hovered over
            },
            onclick: {
                enable: true,
                mode: "push", // Add particles on click
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 1,
                },
            },
            repulse: {
                distance: 100,  // How far the particles will repel
                duration: 0.4,  // Speed of the repulse effect
            },
            push: {
                particles_nb: 5, // Add 5 particles per click
            },
        },
    },
    retina_detect: true,
});

// Handle project links
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = link.href; // Navigate to project page
    });
});

// Typewriter animation
const typewriterText = "Software Developer & Aspiring Cloud Solutions Architect";
const typingSpeed = 100; // Speed of typing (in milliseconds)
const pauseBetweenLoops = 1500; // Pause before restarting the typing effect (in milliseconds)

const typewriterElement = document.getElementById("typewriter");

// Function to type the text
function typeText(text, i, callback) {
    if (i < text.length) {
        typewriterElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeText(text, i, callback);
        }, typingSpeed);
    } else {
        // Call the callback to restart after a pause
        setTimeout(callback, pauseBetweenLoops);
    }
}

// Function to restart the typing effect
function restartTyping() {
    typewriterElement.innerHTML = ""; // Clear the current text
    typeText(typewriterText, 0, restartTyping); // Start typing again
}

// Start typing the text initially
restartTyping();


// Start typewriter animation when the page loads
/*window.onload = () => {
    typeWriter();
};*/

window.onload = () => {
    typeWriter();
    const titleElement = document.querySelector('.animated-title');
    titleElement.style.animation = 'slideIn 2s ease-out forwards';
};
