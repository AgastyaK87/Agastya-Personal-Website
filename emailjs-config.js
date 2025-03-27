// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'Wd_Oc5Pu9Hs-Gy_Aq';
const EMAILJS_SERVICE_ID = 'service_agastya';
const EMAILJS_TEMPLATE_ID = 'template_contact';

// Initialize EmailJS with error handling
try {
    emailjs.init(EMAILJS_PUBLIC_KEY);
} catch (error) {
    console.error('Failed to initialize EmailJS:', error);
}

// Export the constants for use in script.js
window.EMAILJS_SERVICE_ID = EMAILJS_SERVICE_ID;
window.EMAILJS_TEMPLATE_ID = EMAILJS_TEMPLATE_ID;