// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
        }
    });
}, { threshold: 0.1 });
reveals.forEach(r => revealObs.observe(r));

// Skill Bar Animation
const bars = document.querySelectorAll('.skill-bar');
const barObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const w = parseFloat(e.target.dataset.width);
            e.target.style.transform = `scaleX(${w})`;
            e.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });
bars.forEach(b => barObs.observe(b));

// Active Nav
const sections = document.querySelectorAll('section, .hero');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id || '';
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
    });
});

