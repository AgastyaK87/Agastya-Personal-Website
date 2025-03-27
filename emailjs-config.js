// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'public_key';
const EMAILJS_SERVICE_ID = 'service_id';
const EMAILJS_TEMPLATE_ID = 'template_id';

// Initialize EmailJS with error handling
try {
    emailjs.init(EMAILJS_PUBLIC_KEY);
} catch (error) {
    console.error('Failed to initialize EmailJS:', error);
}

// Export the constants for use in script.js
window.EMAILJS_SERVICE_ID = EMAILJS_SERVICE_ID;
window.EMAILJS_TEMPLATE_ID = EMAILJS_TEMPLATE_ID;