/* TWC Theme JS */
(function() {
    'use strict';

    /* ── Theme toggle (dark/light) ── */
    var themeBtn  = document.getElementById('theme-toggle');
    var themeIcon = document.getElementById('theme-icon');

    function applyTheme(mode) {
        if (mode === 'light') {
            document.body.classList.add('light-mode');
            document.documentElement.classList.remove('light-mode-pre');
            if (themeIcon) themeIcon.textContent = '🌙';
        } else {
            document.body.classList.remove('light-mode');
            if (themeIcon) themeIcon.textContent = '☀️';
        }
    }

    /* Apply saved preference immediately */
    var saved = localStorage.getItem('twc-theme') || 'dark';
    applyTheme(saved);

    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            var current = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            var next = current === 'dark' ? 'light' : 'dark';
            localStorage.setItem('twc-theme', next);
            applyTheme(next);
        });
    }

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


    /* ── Guest contributions week grid ── */
    var visibleBox = document.querySelector('.links-visible');
    var hiddenBox  = document.querySelector('.links-hidden');

    if (visibleBox || hiddenBox) {
        /* Collect all links from both containers */
        var allLinks = [];
        [visibleBox, hiddenBox].forEach(function(box) {
            if (!box) return;
            box.querySelectorAll('.link-item a').forEach(function(a) {
                var num  = a.textContent.replace(/[\[\]\s ]/g, '').trim();
                var href = a.getAttribute('href');
                if (num) allLinks.push({ num: num, href: href });
            });
        });

        if (allLinks.length) {
            var COLS     = 20;
            var ROWS     = 4;
            var VISIBLE  = COLS * ROWS; /* 80 slots */

            /* Build grid from an array slice */
            function buildGrid(links) {
                var grid = document.createElement('div');
                grid.className = 'guest-week-grid';
                links.forEach(function(l) {
                    var a = document.createElement('a');
                    a.href = l.href;
                    a.textContent = l.num;
                    grid.appendChild(a);
                });
                return grid;
            }

            var wrap = document.createElement('div');
            wrap.className = 'guest-week-wrap';

            var mainGrid = buildGrid(allLinks.slice(0, VISIBLE));
            wrap.appendChild(mainGrid);

            /* Older weeks toggle */
            if (allLinks.length > VISIBLE) {
                var older     = allLinks.slice(VISIBLE);
                var olderGrid = buildGrid(older);
                olderGrid.style.display = 'none';
                olderGrid.style.marginTop = '10px';

                var btn = document.createElement('button');
                btn.className = 'guest-show-more';
                btn.textContent = 'Show older weeks ↓';
                btn.addEventListener('click', function() {
                    var open = olderGrid.style.display !== 'none';
                    olderGrid.style.display = open ? 'none' : 'grid';
                    btn.textContent = open ? 'Show older weeks ↓' : 'Hide older weeks ↑';
                });

                wrap.appendChild(btn);
                wrap.appendChild(olderGrid);
            }

            /* Insert wrap right after the last container */
            var lastBox = hiddenBox || visibleBox;
            lastBox.parentNode.insertBefore(wrap, lastBox.nextSibling);
        }
    }

})();