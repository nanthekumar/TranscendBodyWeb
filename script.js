// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



// Music Player Variables
let isMusicPlaying = false;
let isMusicMuted = false;

// Auto-show welcome message when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Show welcome message
    showModal('Welcome to TranscendBody!', 'Your fitness transformation journey starts now!');
    
    // Initialize animated counters
    initCounters();
    
    // Initialize music player
    initMusicPlayer();
});

// Modal Functionality
function showModal(title, message) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Program Selection
function selectProgram(program) {
    const programNames = {
        'beginner': 'Beginner',
        'pro': 'Pro',
        'master': 'Master'
    };
    
    showModal(
        `Program Selected: ${programNames[program]}`,
        `Great choice! You've selected our ${programNames[program]} program. Our team will contact you soon to get started on your fitness journey.`
    );
}

// Start Workout Function
function startWorkout() {
    showModal(
        'Ready to Work Out?',
        'Let\'s get you started! Choose your fitness level and we\'ll create a personalized workout plan just for you.'
    );
}

// Scroll to Programs Section
function scrollToPrograms() {
    const programsSection = document.getElementById('programs');
    if (programsSection) {
        programsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll to Contact Section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Music Player Functions
function initMusicPlayer() {
    const audio = document.getElementById('backgroundMusic');
    const musicControl = document.getElementById('musicControl');
    const musicIcon = document.getElementById('musicIcon');
    
    // Check if audio file loaded successfully
    audio.addEventListener('loadeddata', () => {
        console.log('Audio file loaded successfully');
    });
    
    audio.addEventListener('error', (e) => {
        console.error('Audio loading error:', e);
        showModal('Audio Error', 'Unable to load music file. Please check your internet connection.');
    });
    
    // Try to play music when user interacts with the page
    const playMusic = () => {
        if (!isMusicMuted) {
            // Set volume to a reasonable level
            audio.volume = 0.7;
            
            audio.play().then(() => {
                isMusicPlaying = true;
                updateMusicIcon();
                console.log('Music started playing');
            }).catch(error => {
                console.log('Auto-play prevented:', error);
                // Show a message to user about enabling audio
                showModal('Enable Audio', 'Click the music button to start your fitness motivation music!');
            });
        }
    };
    
    // Add click event to the entire page to enable audio
    document.addEventListener('click', playMusic, { once: true });
    
    // Also try to play on any user interaction
    document.addEventListener('keydown', playMusic, { once: true });
    document.addEventListener('touchstart', playMusic, { once: true });
    
    // Update music icon based on state
    function updateMusicIcon() {
        const musicStatus = document.getElementById('musicStatus');
        
        if (isMusicMuted) {
            musicIcon.className = 'fas fa-volume-mute';
            musicControl.classList.add('muted');
            musicStatus.textContent = 'Music muted';
        } else if (isMusicPlaying) {
            musicIcon.className = 'fas fa-volume-up';
            musicControl.classList.remove('muted');
            musicStatus.textContent = 'Music playing';
        } else {
            musicIcon.className = 'fas fa-volume-up';
            musicControl.classList.remove('muted');
            musicStatus.textContent = 'Click to enable music';
        }
    }
    
    // Initialize icon
    updateMusicIcon();
}

function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    const musicControl = document.getElementById('musicControl');
    const musicIcon = document.getElementById('musicIcon');
    
    if (isMusicMuted) {
        // Unmute
        isMusicMuted = false;
        audio.muted = false;
        if (isMusicPlaying) {
            audio.play().then(() => {
                console.log('Music resumed');
            }).catch(error => {
                console.error('Error resuming music:', error);
            });
        }
        musicIcon.className = 'fas fa-volume-up';
        musicControl.classList.remove('muted');
    } else {
        // Mute
        isMusicMuted = true;
        audio.muted = true;
        musicIcon.className = 'fas fa-volume-mute';
        musicControl.classList.add('muted');
        console.log('Music muted');
    }
}

// Animated Counter Function
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start animation when element comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const program = formData.get('program');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !program || !message) {
        showModal('Form Error', 'Please fill in all fields before submitting.');
        return;
    }
    
    // Show success message
    showModal(
        'Message Sent Successfully!',
        `Thank you ${name}! We've received your message and will get back to you within 24 hours. Welcome to the TranscendBody family!`
    );
    
    // Reset form
    contactForm.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .program-card, .about-content, .contact-content');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation for images
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Enhanced button interactions
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Touch gesture support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could be used for quick actions
            console.log('Swipe up detected');
        } else {
            // Swipe down - could be used for quick actions
            console.log('Swipe down detected');
        }
    }
}

// Performance optimization - throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll handling code is already optimized above
}, 16)); // 60fps

// Add some fun interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add click effect to floating cards
    document.querySelectorAll('.floating-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Add hover effect to service icons
    document.querySelectorAll('.service-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});



// Add loading states
function showLoading(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
}

function hideLoading(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Enhanced form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

contactForm.addEventListener('input', (e) => {
    const field = e.target;
    const value = field.value;
    
    if (field.type === 'email' && value) {
        if (!validateEmail(value)) {
            field.style.borderColor = '#ef4444';
        } else {
            field.style.borderColor = '#10b981';
        }
    } else if (field.required && !value) {
        field.style.borderColor = '#ef4444';
    } else {
        field.style.borderColor = '#e5e7eb';
    }
});
