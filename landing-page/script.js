document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(3, 7, 18, 0.9)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.background = 'rgba(3, 7, 18, 0.7)';
            navbar.style.padding = '1rem 0';
        }
    });

    // Reveal elements on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // We apply this to elements that don't have the initial 'fade-up' animation
    // or we can just ensure they all trigger nicely.
    // For this simple version, the CSS animations handle the initial load.
    // We could add more complex scroll reveals here if needed.

    // Form submission handling (Mock)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input').value;
            alert(`${email}님, 상담 신청이 완료되었습니다! 곧 연락드리겠습니다.`);
            form.reset();
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
