// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }
  
  // Close menu when clicking on a nav link (for mobile)
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      mainNav.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Header scroll effect
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Initialize gallery lightbox effect
  const galleryItems = document.querySelectorAll('.gallery-item img');
  
  if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        const imgSrc = this.getAttribute('src');
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        
        const img = document.createElement('img');
        img.setAttribute('src', imgSrc);
        
        const closeBtn = document.createElement('span');
        closeBtn.classList.add('lightbox-close');
        closeBtn.innerHTML = '×';
        
        lightbox.appendChild(img);
        lightbox.appendChild(closeBtn);
        document.body.appendChild(lightbox);
        
        // Prevent scrolling when lightbox is open
        document.body.style.overflow = 'hidden';
        
        // Close lightbox when clicking on it
        lightbox.addEventListener('click', function() {
          document.body.removeChild(lightbox);
          document.body.style.overflow = 'auto';
        });
      });
    });
  }
});