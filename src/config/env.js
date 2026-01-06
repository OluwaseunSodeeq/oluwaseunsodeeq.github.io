const env = {
  emailJsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  emailJsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  emailJsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

// Optional safety check
Object.entries(env).forEach(([key, value]) => {
  if (!value) {
    console.warn(`Missing environment variable: ${key}`);
  }
});

export default env;
