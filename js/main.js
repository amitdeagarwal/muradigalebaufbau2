// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
      
      // Set --item-index for each nav item to create staggered animation
      const navItems = document.querySelectorAll('.nav-list li');
      navItems.forEach((item, index) => {
        item.style.setProperty('--item-index', index);
      });
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
  
  // Services Carousel
  const serviceItems = document.querySelectorAll('.services-carousel-item');
  const servicePrevBtn = document.querySelector('.services-carousel-control.prev');
  const serviceNextBtn = document.querySelector('.services-carousel-control.next');
  const serviceDots = document.querySelectorAll('.services-dot');
  
  let serviceCurrentIndex = 0;
  
  // Function to show a specific service slide
  function showServiceSlide(index) {
    // Hide all service slides
    serviceItems.forEach(item => {
      item.classList.remove('active');
    });
    
    // Update service indicators
    serviceDots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show the current service slide and indicator
    if (serviceItems[index]) {
      serviceItems[index].classList.add('active');
    }
    
    if (serviceDots[index]) {
      serviceDots[index].classList.add('active');
    }
    
    serviceCurrentIndex = index;
  }
  
  // Previous service button
  if (servicePrevBtn) {
    servicePrevBtn.addEventListener('click', () => {
      let newIndex = serviceCurrentIndex - 1;
      if (newIndex < 0) {
        newIndex = serviceItems.length - 1;
      }
      showServiceSlide(newIndex);
    });
  }
  
  // Next service button
  if (serviceNextBtn) {
    serviceNextBtn.addEventListener('click', () => {
      let newIndex = serviceCurrentIndex + 1;
      if (newIndex >= serviceItems.length) {
        newIndex = 0;
      }
      showServiceSlide(newIndex);
    });
  }
  
  // Service indicator clicks
  serviceDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      showServiceSlide(index);
    });
  });
  
  // Auto-slide for services carousel
  let serviceAutoSlideInterval;
  
  function startServiceAutoSlide() {
    serviceAutoSlideInterval = setInterval(() => {
      let newIndex = serviceCurrentIndex + 1;
      if (newIndex >= serviceItems.length) {
        newIndex = 0;
      }
      showServiceSlide(newIndex);
    }, 6000); // Change service slide every 6 seconds
  }
  
  function stopServiceAutoSlide() {
    clearInterval(serviceAutoSlideInterval);
  }
  
  // Start auto-slide for services
  if (serviceItems.length > 0) {
    startServiceAutoSlide();
    
    // Pause auto-slide on hover
    const servicesContainer = document.querySelector('.services-carousel-container');
    if (servicesContainer) {
      servicesContainer.addEventListener('mouseenter', stopServiceAutoSlide);
      servicesContainer.addEventListener('mouseleave', startServiceAutoSlide);
    }
  }
  
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