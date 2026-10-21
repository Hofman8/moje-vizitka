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
    const progressBar = document.getElementById('scroll-progress');

    function handleScroll() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // 4a. Scroll Progress Bar
        if (progressBar) {
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollY / height) * 100;
            progressBar.style.width = scrolled + '%';
        }

        // 4b. Zvýraznění aktivní sekce v menu
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

    window.addEventListener('scroll', handleScroll);

    // ==========================================
    // 5. EFEKT PSACÍHO STROJE (TYPING ANIMATION)
    // ==========================================
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const phrases = [
            "student elektrotechniky",
            "aktivní sportovec (hokej & florbal)",
            "tvůrce projektu PoweRent",
            "budoucí specialista na automatizaci"
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 80;
        const erasingSpeed = 40;
        const pauseDelay = 1800;

        function typeLoop() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let nextSpeed = isDeleting ? erasingSpeed : typingSpeed;

            if (!isDeleting && charIndex === currentPhrase.length) {
                nextSpeed = pauseDelay;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                nextSpeed = 400;
            }

            setTimeout(typeLoop, nextSpeed);
        }

        // Spuštění efektu psaní
        setTimeout(typeLoop, 500);
    }

    // ==========================================
    // 6. INTERAKTIVNÍ KALKULÁTOR POWERENT
    // ==========================================
    const batterySlider = document.getElementById('battery-slider');
    const batteryValLabel = document.getElementById('battery-val');
    const chargeTimeEl = document.getElementById('charge-time');
    const chargeCyclesEl = document.getElementById('charge-cycles');

    if (batterySlider && batteryValLabel && chargeTimeEl && chargeCyclesEl) {
        function updatePoweRentCalc() {
            const capacity = parseInt(batterySlider.value, 10);
            
            // Formát čísla s mezerou (např. 4 200 mAh)
            batteryValLabel.textContent = capacity.toLocaleString('cs-CZ') + ' mAh';

            // PoweRentka: 10 000 mAh baterie, 88% efektivita měniče (usable ~8 800 mAh)
            const usablePowerbank = 8800;
            const cycles = (usablePowerbank / capacity).toFixed(1);
            chargeCyclesEl.textContent = cycles + '×';

            // Odhad doby do 80 % (při inteligentním rychlonabíjení ~3.5A avg)
            // Základní čas + proporcionální čas podle kapacity
            const minutesTo80 = Math.round((capacity * 0.8 / 3800) * 60 + 8);
            chargeTimeEl.textContent = '~' + minutesTo80 + ' min';
        }

        batterySlider.addEventListener('input', updatePoweRentCalc);
        // Inicializace výchozího stavu
        updatePoweRentCalc();
    }
});
