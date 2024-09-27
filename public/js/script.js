
document.addEventListener('DOMContentLoaded', function () {
    // Scroll detection for navbar
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hamburger menu toggle for mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});



//home page
// Change autoplay interval
var myCarousel = document.querySelector('#carouselExampleAutoplaying');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // 3 seconds
    ride: 'carousel'
});

// Services page
// Scroll to services section
document.addEventListener('DOMContentLoaded', function () {
    const heroButton = document.querySelector('.hero-btn');
    
    heroButton.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
    });
});

// FAQ Section Interactivity
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const ctaButtons = document.querySelectorAll('.cta-btn');

    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
