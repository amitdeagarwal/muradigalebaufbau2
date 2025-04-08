// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
  }
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mainNav && mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        }
      }
    });
  });
  
  // Carousel Functionality
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  const indicators = document.querySelectorAll('.indicator');
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  let currentIndex = 0;
  
  // Function to show a specific slide
  function showSlide(index) {
    // Hide all slides
    carouselItems.forEach(item => {
      item.classList.remove('active');
    });
    
    // Update indicators
    indicators.forEach(ind => {
      ind.classList.remove('active');
    });
    
    // Update thumbnails
    thumbnails.forEach(thumb => {
      thumb.classList.remove('active');
    });
    
    // Show the current slide and indicator
    if (carouselItems[index]) {
      carouselItems[index].classList.add('active');
    }
    
    if (indicators[index]) {
      indicators[index].classList.add('active');
    }
    
    if (thumbnails[index]) {
      thumbnails[index].classList.add('active');
    }
    
    currentIndex = index;
  }
  
  // Previous button
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = carouselItems.length - 1;
      }
      showSlide(newIndex);
    });
  }
  
  // Next button
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let newIndex = currentIndex + 1;
      if (newIndex >= carouselItems.length) {
        newIndex = 0;
      }
      showSlide(newIndex);
    });
  }
  
  // Indicator clicks
  indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
      const index = parseInt(indicator.getAttribute('data-index'));
      showSlide(index);
    });
  });
  
  // Thumbnail clicks
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      const index = parseInt(thumbnail.getAttribute('data-index'));
      showSlide(index);
    });
  });
  
  // Zoom functionality for carousel images
  const zoomImages = document.querySelectorAll('.zoom-image');
  
  zoomImages.forEach(img => {
    img.addEventListener('click', function() {
      this.classList.toggle('zoomed');
    });
  });
  
  // Auto-slide (optional)
  let autoSlideInterval;
  
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      let newIndex = currentIndex + 1;
      if (newIndex >= carouselItems.length) {
        newIndex = 0;
      }
      showSlide(newIndex);
    }, 5000); // Change slide every 5 seconds
  }
  
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }
  
  // Start auto-slide
  if (carouselItems.length > 0) {
    startAutoSlide();
    
    // Pause auto-slide on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', stopAutoSlide);
      carouselContainer.addEventListener('mouseleave', startAutoSlide);
    }
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (carouselItems.length > 0) {
      if (e.key === 'ArrowLeft') {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
          newIndex = carouselItems.length - 1;
        }
        showSlide(newIndex);
      } else if (e.key === 'ArrowRight') {
        let newIndex = currentIndex + 1;
        if (newIndex >= carouselItems.length) {
          newIndex = 0;
        }
        showSlide(newIndex);
      }
    }
  });
  
  // Header scroll effect
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
});