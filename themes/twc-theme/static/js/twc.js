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

/* ── Copy Code Buttons ── */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.prose pre').forEach(function(pre) {
        var code = pre.querySelector('code');
        if (!code) return;

        var btn = document.createElement('button');
        btn.className = 'copy-code-btn';
        btn.setAttribute('aria-label', 'Copy code');
        btn.setAttribute('title', 'Copy to clipboard');
        btn.innerHTML =
            '<svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                '<rect x="9" y="9" width="13" height="13" rx="2"/>' +
                '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>' +
            '</svg>' +
            '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:none">' +
                '<polyline points="20 6 9 17 4 12"/>' +
            '</svg>';

        btn.addEventListener('click', function() {
            var text = code.innerText;
            var copy = navigator.clipboard
                ? navigator.clipboard.writeText(text)
                : new Promise(function(res) {
                    var ta = document.createElement('textarea');
                    ta.value = text;
                    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand('copy');
                    document.body.removeChild(ta);
                    res();
                });

            copy.then(function() {
                btn.querySelector('.copy-icon').style.display = 'none';
                btn.querySelector('.check-icon').style.display = '';
                btn.classList.add('copied');
                setTimeout(function() {
                    btn.querySelector('.copy-icon').style.display = '';
                    btn.querySelector('.check-icon').style.display = 'none';
                    btn.classList.remove('copied');
                }, 2000);
            });
        });

        pre.appendChild(btn);
    });
});


/* ── Reading Progress Bar ── */
(function() {
    var bar = document.getElementById('reading-progress');
    if (!bar) return;
    window.addEventListener('scroll', function() {
        var doc    = document.documentElement;
        var total  = doc.scrollHeight - doc.clientHeight;
        var pct    = total > 0 ? (window.scrollY / total) * 100 : 0;
        bar.style.width = pct + '%';
    }, { passive: true });
})();

/* ── Keyboard shortcut: press / to focus search ── */
document.addEventListener('keydown', function(e) {
    /* Ignore if typing in an input/textarea */
    var tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (e.key === '/') {
        e.preventDefault();
        window.location.href = '/search';
    }
});


/* ── Code block language labels ── */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.prose pre').forEach(function(pre) {
        /* Hugo Chroma: <div class="highlight"><pre class="chroma"><code class="language-perl" data-lang="perl"> */
        var code = pre.querySelector('code');
        if (!code) return;

        /* Try data-lang first, then class */
        var lang = code.getAttribute('data-lang');
        if (!lang) {
            var m = (code.className || '').match(/language-(\w+)/);
            lang = m ? m[1] : null;
        }
        if (!lang || lang === 'plaintext' || lang === 'text' || lang === 'fallback') return;

        var label = document.createElement('span');
        label.className = 'code-lang-label code-lang-' + lang;
        label.textContent = lang;
        pre.appendChild(label);
    });
});

/* ── Anchor links on headings ── */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.prose h1, .prose h2, .prose h3, .prose h4').forEach(function(h) {
        /* Generate an id if Hugo didn't add one */
        if (!h.id) {
            h.id = h.textContent.trim()
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-');
        }
        if (!h.id) return;
        var a = document.createElement('a');
        a.href = '#' + h.id;
        a.className = 'heading-anchor';
        a.setAttribute('aria-label', 'Link to this section');
        a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
        h.appendChild(a);
    });
});
