// Analytics and tracking utilities
export const trackEvent = (eventName, properties = {}) => {
  // Google Analytics 4 tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, properties);
  }
  
  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, properties);
  }
};

export const trackPageView = (pageName) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href
  });
};

export const trackFormSubmission = (formType, success = true) => {
  trackEvent('form_submit', {
    form_type: formType,
    success: success,
    timestamp: new Date().toISOString()
  });
};

export const trackCourseInterest = (courseName) => {
  trackEvent('course_interest', {
    course_name: courseName,
    timestamp: new Date().toISOString()
  });
};

export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
    timestamp: new Date().toISOString()
  });
};