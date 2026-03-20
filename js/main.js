// ========================================
// JEN'S CHEER — Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // --- Sticky Navbar hide/show on scroll ---
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 120) {
            navbar.style.top = currentScrollY > lastScrollY ? '-110px' : '0';
            navbar.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
        } else {
            navbar.style.top = '38px';
            navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        }

        lastScrollY = currentScrollY;
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll(
        '.collection-card, .product-card, .testimonial-card, .about-content, .about-image, .custom-content, .newsletter-content, .section-header'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });

    // --- Newsletter Form ---
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            const email = input.value.trim();

            if (email) {
                const btn = newsletterForm.querySelector('button');
                btn.textContent = 'SUBSCRIBED!';
                btn.style.background = '#22c55e';
                input.value = '';

                setTimeout(() => {
                    btn.textContent = 'SIGN UP';
                    btn.style.background = '';
                }, 3000);
            }
        });
    }

    // --- Quick Add Buttons ---
    document.querySelectorAll('.quick-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                const current = parseInt(cartCount.textContent);
                cartCount.textContent = current + 1;
                cartCount.style.transform = 'scale(1.4)';
                setTimeout(() => {
                    cartCount.style.transform = 'scale(1)';
                }, 200);
            }

            btn.textContent = 'ADDED!';
            btn.style.background = '#22c55e';
            setTimeout(() => {
                btn.textContent = '+ QUICK ADD';
                btn.style.background = '';
            }, 1500);
        });
    });

    // --- Smooth Scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Duplicate marquee text for seamless loop ---
    const marqueeTrack = document.querySelector('.marquee-track');
    if (marqueeTrack) {
        marqueeTrack.innerHTML += marqueeTrack.innerHTML;
    }

});
