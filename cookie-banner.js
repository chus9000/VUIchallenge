// GDPR Cookie Banner
(function() {
  'use strict';
  
  // Check if user has already made a choice
  if (localStorage.getItem('cookieConsent')) {
    return;
  }
  
  // Create cookie banner
  function createCookieBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-content">
        <div class="cookie-text">
          <p><strong>We use cookies to improve your experience</strong></p>
          <p>We use cookies for authentication, analytics, and to remember your preferences. By continuing to use VUIchallenge, you agree to our use of cookies.</p>
          <p><a href="privacy.html">Privacy Policy</a> | <a href="terms.html">Terms of Service</a></p>
        </div>
        <div class="cookie-buttons">
          <button class="cookie-btn accept" onclick="acceptCookies()">Accept All</button>
          <button class="cookie-btn decline" onclick="declineCookies()">Decline</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(banner);
    
    // Show banner after a short delay
    setTimeout(() => {
      banner.classList.add('show');
    }, 1000);
  }
  
  // Accept cookies
  window.acceptCookies = function() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideBanner();
    
    // Initialize analytics if accepted
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };
  
  // Decline cookies
  window.declineCookies = function() {
    localStorage.setItem('cookieConsent', 'declined');
    hideBanner();
    
    // Disable analytics if declined
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };
  
  // Hide banner
  function hideBanner() {
    const banner = document.querySelector('.cookie-banner');
    if (banner) {
      banner.classList.remove('show');
      setTimeout(() => {
        banner.remove();
      }, 300);
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createCookieBanner);
  } else {
    createCookieBanner();
  }
})();