// JavaScript for handling button clicks

// Navigation Links
document.querySelector('.nav-links li:nth-child(1) a').addEventListener('click', function() {
    alert('Redirecting to the About section.');
});

document.querySelector('.nav-links li:nth-child(2) a').addEventListener('click', function() {
    alert('Redirecting to the Apps section.');
});

document.querySelector('.nav-links li:nth-child(3) a').addEventListener('click', function() {
    alert('Redirecting to the Pricing section.');
});

document.querySelector('.nav-links li:nth-child(4) a').addEventListener('click', function() {
    alert('Redirecting to the Contact section.');
});

// Authentication Buttons
document.querySelector('.login-btn').addEventListener('click', function() {
    alert('Redirecting to the Log In page.');
});

document.querySelector('.register-btn').addEventListener('click', function() {
    alert('Redirecting to the Register page.');
});

// Call-to-Action Button
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Starting your free trial!');
});
// Optional JS for interactivity (hover effects or link actions)
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.borderColor = "#02B77A";
    });

    card.addEventListener('mouseout', () => {
        card.style.borderColor = "#046c62";
    });
});


document.getElementById('cta-button').addEventListener('click', function() {
    alert('Thank you for your interest! We will contact you with a free proposal.');
});

document.querySelector('.see-all-team').addEventListener('click', function(event) {
    event.preventDefault();
    alert('See all team button clicked!');
});
// Get the testimonials container element
const testimonialsContainer = document.querySelector('.testimonials-container');

// Set the scroll speed (in milliseconds)
const scrollSpeed = 30; // Adjust this value to control the speed
let scrollAmount = 0; // Variable to keep track of the amount scrolled
const scrollStep = 1; // Pixels to scroll in each step

// Function to scroll testimonials
function scrollTestimonials() {
    // Check if we've reached the end of the testimonials
    if (scrollAmount >= testimonialsContainer.scrollWidth - testimonialsContainer.clientWidth) {
        scrollAmount = 0; // Reset scroll amount to start over
    }
    // Scroll the container
    testimonialsContainer.scrollLeft += scrollStep;
    scrollAmount += scrollStep;

    // Call the function again after a short delay
    requestAnimationFrame(scrollTestimonials);
}

// Start the scrolling function
scrollTestimonials();
document.querySelector('.subscribe-btn').addEventListener('click', function() {
    const emailInput = document.getElementById('email-input').value;
    if (emailInput === '') {
        alert('Please enter your email address.');
    } else {
        alert('Thank you for subscribing!');
        // Here you can handle the form submission
    }
});
// Frontend Creation: 
// Function to handle navigation link clicks
function handleNavLinkClick(section) {
    alert(`Navigating to ${section} section.`);
    // Implement your navigation logic here
    // For example, you could redirect to a specific URL
    // window.location.href = `/${section.toLowerCase()}`;
}

// Function to handle social media logo clicks
function handleSocialMediaClick(platform) {
    alert(`Redirecting to ${platform} page.`);
    // Replace with the actual URLs for your social media pages
    const urls = {
        facebook: 'https://www.facebook.com',
        twitter: 'https://www.twitter.com',
        linkedin: 'https://www.linkedin.com',
    };

    if (urls[platform]) {
        window.open(urls[platform], '_blank');
    }
}

// Function to handle subscription form submission
function handleSubscribe(event) {
    event.preventDefault(); // Prevent the default form submission

    const emailInput = document.getElementById('subscribe-email');
    const email = emailInput.value;

    if (validateEmail(email)) {
        alert(`Thank you for subscribing with the email: ${email}`);
        // Implement your subscription logic here, like sending data to your server
    } else {
        alert('Please enter a valid email address.');
    }

    emailInput.value = ''; // Clear the input field after submission
}

// Simple email validation
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Adding event listeners to navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.footer-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => handleNavLinkClick(link.textContent));
    });

    // Adding event listeners for social media logos
    const socialMediaLinks = document.querySelectorAll('.footer-social a');
    socialMediaLinks.forEach(link => {
        link.addEventListener('click', () => handleSocialMediaClick(link.dataset.platform));
    });

// Function to handle subscription
function handleSubscribe() {
    const emailInput = document.getElementById('email-input'); // Get email input by ID
    const email = emailInput.value; // Get the value of the input
    const messageDiv = document.querySelector('.subscribe-message'); // Get message area

    if (email) {
        // Display success message in the message area
        messageDiv.textContent = 'You have subscribed successfully!';
        messageDiv.style.color = 'green'; // Change text color if desired

        // Optionally, log or send the email
        console.log(`Subscribed with email: ${email}`);
        emailInput.value = ''; // Clear the input field
    } else {
        // Display error message
        messageDiv.textContent = 'Please enter a valid email address.';
        messageDiv.style.color = 'red'; // Change text color for error
    }
}

// Add event listener to the subscribe button
document.getElementById('subscribe-button').addEventListener('click', handleSubscribe);
