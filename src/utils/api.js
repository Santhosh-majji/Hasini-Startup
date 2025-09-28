// API configuration and utilities
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.hasiniinfotech.com';

export const submitContactForm = async (formData) => {
  try {
    // For now, simulate API call - replace with actual endpoint
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    // Fallback: Send email using mailto (temporary solution)
    const subject = encodeURIComponent(`Course Inquiry - ${formData.course}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Course: ${formData.course}\n` +
      `Experience: ${formData.experience}\n` +
      `Message: ${formData.message}`
    );
    
    window.open(`mailto:hr@hasiniinfotech.com?subject=${subject}&body=${body}`);
    
    return { success: true, message: 'Email client opened. Please send the email.' };
  }
};

export const subscribeNewsletter = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Failed to subscribe');
    }

    return await response.json();
  } catch (error) {
    console.error('Newsletter subscription failed:', error);
    throw error;
  }
};