/* TWC Theme JS */
(function() {
    'use strict';

    /* ── Mobile nav toggle ── */
    var toggle = document.getElementById('nav-toggle');
    var menu   = document.getElementById('nav-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('open');
            toggle.classList.toggle('open');
        });
    }

    /* ── Dropdown menus ── */
    document.querySelectorAll('.nav-drop-toggle').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            var li = btn.closest('.nav-dropdown');
            var isOpen = li.classList.contains('open');
            /* Close all others */
            document.querySelectorAll('.nav-dropdown').forEach(function(d) {
                d.classList.remove('open');
            });
            if (!isOpen) li.classList.add('open');
        });
    });
    /* Close dropdowns when clicking outside */
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.nav-dropdown').forEach(function(d) {
                d.classList.remove('open');
            });
        }
    });

    /* ── Nav scroll shadow ── */
    var nav = document.getElementById('twc-nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            nav.style.boxShadow = window.scrollY > 10
                ? '0 4px 32px rgba(0,0,0,.4)'
                : 'none';
        }, { passive: true });
    }

    /* ── Smooth scroll for anchor links ── */
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
        a.addEventListener('click', function(e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    /* ── Fade-in on scroll ── */
    if ('IntersectionObserver' in window) {
        var style = document.createElement('style');
        style.textContent = '.fade-in{opacity:0;transform:translateY(20px);transition:opacity .5s ease,transform .5s ease;}.fade-in.visible{opacity:1;transform:none;}';
        document.head.appendChild(style);

        var io = new IntersectionObserver(function(entries) {
            entries.forEach(function(e) {
                if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.task-card,.post-card,.chart-card,.about-chapter').forEach(function(el) {
            el.classList.add('fade-in');
            io.observe(el);
        });
    }

})();
