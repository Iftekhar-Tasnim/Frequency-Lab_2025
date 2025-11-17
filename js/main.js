// Main JavaScript file for F Lab website

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('F Lab website loaded');
    
    // Add any initialization code here
    initializeNavigation();
    initializeCarousel();
    initializeMobileMenu();
    initializeNavbarScroll();
    initializeTestimonialsSlider();
});

// Navigation active state management
function initializeNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Remove active class first
        link.classList.remove('active');
        
        // Check if this link matches the current page
        const linkFileName = linkHref.split('/').pop();
        const isHomePage = (currentPage === '' || currentPage === 'index.html' || currentPage.endsWith('/'));
        const isCurrentPage = linkFileName === currentPage || 
                             (isHomePage && (linkHref === 'index.html' || linkHref === '../index.html' || linkHref.endsWith('/index.html'))) ||
                             (linkFileName && currentPage.includes(linkFileName));
        
        if (isCurrentPage) {
            link.classList.add('active');
        }
    });
}

// Mobile menu toggle
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (!mobileMenuBtn || !mobileMenu) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
}

// Navbar scroll effect
function initializeNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// Carousel functionality
function initializeCarousel() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let autoPlayInterval = null;
    let isUserInteracting = false;
    
    // Function to scroll to a specific slide
    function goToSlide(slideIndex) {
        if (slideIndex < 0 || slideIndex >= totalSlides) return;
        
        currentSlide = slideIndex;
        const slideWidth = carousel.offsetWidth;
        carousel.scrollTo({
            left: slideWidth * slideIndex,
            behavior: 'smooth'
        });
        updateCarouselNavigation();
    }
    
    // Update carousel navigation
    function updateCarouselNavigation() {
        // Update indicator buttons
        const indicators = document.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('bg-white', 'bg-opacity-80');
                indicator.classList.remove('bg-white', 'bg-opacity-50');
            } else {
                indicator.classList.remove('bg-white', 'bg-opacity-80');
                indicator.classList.add('bg-white', 'bg-opacity-50');
            }
        });
    }
    
    // Auto-play carousel
    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            if (!isUserInteracting) {
                currentSlide = (currentSlide + 1) % totalSlides;
                goToSlide(currentSlide);
            }
        }, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }
    
    // Handle indicator button clicks
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function(e) {
            e.preventDefault();
            isUserInteracting = true;
            goToSlide(index);
            setTimeout(() => {
                isUserInteracting = false;
            }, 6000); // Reset after 6 seconds
        });
    });
    
    // Handle arrow button clicks
    const prevArrow = document.querySelector('.carousel-arrow-prev');
    const nextArrow = document.querySelector('.carousel-arrow-next');
    
    if (prevArrow) {
        prevArrow.addEventListener('click', function(e) {
            e.preventDefault();
            isUserInteracting = true;
            const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(prevSlide);
            setTimeout(() => {
                isUserInteracting = false;
            }, 6000);
        });
    }
    
    if (nextArrow) {
        nextArrow.addEventListener('click', function(e) {
            e.preventDefault();
            isUserInteracting = true;
            const nextSlide = (currentSlide + 1) % totalSlides;
            goToSlide(nextSlide);
            setTimeout(() => {
                isUserInteracting = false;
            }, 6000);
        });
    }
    
    // Detect scroll position to update current slide
    carousel.addEventListener('scroll', function() {
        const slideWidth = carousel.offsetWidth;
        const scrollLeft = carousel.scrollLeft;
        const newSlide = Math.round(scrollLeft / slideWidth);
        if (newSlide !== currentSlide && newSlide >= 0 && newSlide < totalSlides) {
            currentSlide = newSlide;
            updateCarouselNavigation();
        }
    });
    
    // Pause auto-play on user interaction
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    carousel.addEventListener('touchstart', stopAutoPlay);
    carousel.addEventListener('touchend', function() {
        setTimeout(startAutoPlay, 3000);
    });
    
    // Initialize
    updateCarouselNavigation();
    startAutoPlay();
}

// Testimonials Slider functionality
function initializeTestimonialsSlider() {
    const slider = document.getElementById('testimonials-slider');
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    const indicators = document.querySelectorAll('.testimonial-indicator');
    
    let currentIndex = 0;
    let slidesPerView = 1;
    let autoPlayInterval = null;
    let isUserInteracting = false;
    
    // Calculate slides per view based on screen width
    function updateSlidesPerView() {
        const width = window.innerWidth;
        if (width >= 1024) {
            slidesPerView = 3;
        } else if (width >= 768) {
            slidesPerView = 2;
        } else {
            slidesPerView = 1;
        }
    }
    
    // Calculate max index
    function getMaxIndex() {
        return Math.max(0, totalSlides - slidesPerView);
    }
    
    // Update slider position
    function updateSliderPosition() {
        const slideWidth = slider.offsetWidth / slidesPerView;
        const offset = -(currentIndex * slideWidth);
        slider.style.transform = `translateX(${offset}px)`;
        updateIndicators();
    }
    
    // Update indicators
    function updateIndicators() {
        const maxIndex = getMaxIndex();
        const totalGroups = maxIndex + 1;
        
        indicators.forEach((indicator, index) => {
            if (index < totalGroups) {
                indicator.style.display = 'block';
                if (index === currentIndex) {
                    indicator.classList.remove('bg-platinum-300');
                    indicator.classList.add('bg-yale-blue-500');
                } else {
                    indicator.classList.remove('bg-yale-blue-500');
                    indicator.classList.add('bg-platinum-300');
                }
            } else {
                indicator.style.display = 'none';
            }
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        const maxIndex = getMaxIndex();
        currentIndex = Math.max(0, Math.min(index, maxIndex));
        updateSliderPosition();
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // Next slide
    function nextSlide() {
        const maxIndex = getMaxIndex();
        if (currentIndex < maxIndex) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0); // Loop back to start
        }
    }
    
    // Auto-play functionality
    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            if (!isUserInteracting) {
                nextSlide();
            }
        }, 5000); // Change every 5 seconds
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }
    
    // Event listeners for navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            isUserInteracting = true;
            prevSlide();
            setTimeout(() => {
                isUserInteracting = false;
            }, 6000);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            isUserInteracting = true;
            nextSlide();
            setTimeout(() => {
                isUserInteracting = false;
            }, 6000);
        });
    }
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            isUserInteracting = true;
            goToSlide(index);
            setTimeout(() => {
                isUserInteracting = false;
            }, 6000);
        });
    });
    
    // Pause auto-play on hover
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const oldSlidesPerView = slidesPerView;
            updateSlidesPerView();
            if (oldSlidesPerView !== slidesPerView) {
                currentIndex = 0; // Reset to first slide on breakpoint change
            }
            updateSliderPosition();
        }, 250);
    });
    
    // Initialize
    updateSlidesPerView();
    updateSliderPosition();
    startAutoPlay();
}

