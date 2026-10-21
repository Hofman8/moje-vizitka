/**
 * JAVASCRIPT: Lukáš Hofman - Digitální vizitka & Portfolio
 * Funkce:
 *  1. Přepínání Dark / Light režimu s uložením do LocalStorage (Splnění interaktivního požadavku)
 *  2. Interaktivní filtrování kategorií dovedností
 *  3. Responzivní mobilní navigace (hamburger menu)
 *  4. Zvýrazňování aktivního odkazu při rolování
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. PŘEPÍNÁNÍ DARK / LIGHT MÓDU
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Kontrola uložené předvolby nebo systémového nastavení
    if (currentTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.add('dark-theme');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-theme');
            document.body.classList.toggle('dark-theme', !isLight);
            
            // Uložení stavu do prohlížeče
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    // ==========================================
    // 2. INTERAKTIVNÍ FILTROVÁNÍ DOVEDNOSTÍ
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillPills = document.querySelectorAll('.skill-pill');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Odstranění aktivní třídy ze všech tlačítek
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            skillPills.forEach(pill => {
                const category = pill.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    pill.classList.remove('hidden');
                    // Plynulý fade-in efekt
                    pill.style.opacity = '0';
                    pill.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        pill.style.opacity = '1';
                        pill.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    pill.classList.add('hidden');
                }
            });
        });
    });

    // ==========================================
    // 3. MOBILNÍ NAVIGACE (HAMBURGER)
    // ==========================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            mobileToggle.classList.toggle('active');
        });

        // Zavřít menu po kliknutí na odkaz
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileToggle.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 4. ZVÝRAZNĚNÍ AKTIVNÍHO ODKAZU PŘI SCROLLU
    // ==========================================
    const sections = document.querySelectorAll('section[id]');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);
});
