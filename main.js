
    
        // Theme Toggle
        function toggleTheme() {
            const body = document.body;
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        }

        // Language Toggle
        function toggleLanguage() {
            const body = document.body;
            const currentLang = body.getAttribute('data-lang');
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            
            body.setAttribute('data-lang', newLang);
            localStorage.setItem('language', newLang);
            
            // Update HTML lang attribute for SEO
            document.documentElement.lang = newLang;
        }

        // WhatsApp Chat
        function openWhatsApp() {
            window.open('https://wa.me/77018968628?text=Здравствуйте%2C%20хочу%20заказать%20запчасти', '_blank', 'noopener,noreferrer');
        }

        // Initialize theme and language based on user preferences
        function initializePreferences() {
            // Theme
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = savedTheme || (prefersDark ? 'dark' : 'light');
            document.body.setAttribute('data-theme', theme);

            // Language
            const savedLang = localStorage.getItem('language');
            const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';
            const language = savedLang || browserLang;
            document.body.setAttribute('data-lang', language);
            document.documentElement.lang = language;
        }

        // Smooth scrolling for anchor links
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

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', initializePreferences);

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                document.body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });

        // Header scroll effect
        let lastScrollTop = 0;
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);

        // Service cards interaction
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

