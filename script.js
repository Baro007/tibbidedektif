// Modern JavaScript - Tıbbi Dedektiflik
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Tıbbi Dedektiflik sayfası yüklendi!');
    
    // Scroll animasyonları için Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Tüm section'ları gözlemle
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Step kartlarını gözlemle
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.classList.add('fade-in');
        step.style.animationDelay = `${index * 0.2}s`;
        observer.observe(step);
    });

    // FAQ itemlarını gözlemle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.animationDelay = `${index * 0.15}s`;
        observer.observe(item);
    });

    // Smooth scrolling için internal linkler
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Paralaks efekti için hero arka planı
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);

    // Loading animasyonu (sayfa yüklendiğinde)
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Hero elementlerini sırayla animasyonla göster
        const heroElements = document.querySelectorAll('.hero h1, .hero .subtitle, .hero .tagline');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 300 + 500);
        });
    });

    // Navbar scroll efekti (gelecekte navbar eklerseniz)
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Scroll direction detection
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            document.body.classList.add('scrolling-down');
            document.body.classList.remove('scrolling-up');
        } else {
            // Scrolling up
            document.body.classList.add('scrolling-up');
            document.body.classList.remove('scrolling-down');
        }
        lastScrollTop = scrollTop;
    });

    // FAQ toggle functionality (gelecekte accordion eklerseniz)
    function initFAQToggles() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('h3');
            const answer = item.querySelector('p');
            
            if (question && answer) {
                question.style.cursor = 'pointer';
                question.addEventListener('click', function() {
                    const isOpen = item.classList.contains('open');
                    
                    // Tüm diğer FAQ'ları kapat
                    faqItems.forEach(otherItem => {
                        otherItem.classList.remove('open');
                    });
                    
                    // Bu FAQ'ı aç/kapat
                    if (!isOpen) {
                        item.classList.add('open');
                    }
                });
            }
        });
    }

    // Performance optimized scroll listener
    let scrollTimer = null;
    window.addEventListener('scroll', function() {
        if (scrollTimer !== null) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(function() {
            // Scroll işlemleri burada
        }, 150);
    });

    // Touch gestures için (mobile)
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleGesture();
    });

    function handleGesture() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndY - touchStartY;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe down
                console.log('Swipe down detected');
            } else {
                // Swipe up
                console.log('Swipe up detected');
            }
        }
    }

    // Calendar iframe yükleme optimizasyonu
    const calendarEmbed = document.querySelector('.calendar-embed iframe');
    if (calendarEmbed) {
        calendarEmbed.addEventListener('load', function() {
            console.log('📅 Takvim yüklendi!');
            this.style.opacity = '1';
        });
    }

    // Error handling
    window.addEventListener('error', function(e) {
        console.error('Sayfa hatası:', e.error);
    });

    // Preloader (eğer eklerseniz)
    function hidePreloader() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }
    }

    // Sayfa yüklendiğinde preloader'ı gizle
    setTimeout(hidePreloader, 1000);

    // Console welcome message
    console.log(`
    🩺 Tıbbi Dedektiflik
    ═══════════════════
    Modern, responsive ve akıcı tasarım yüklendi!
    
    ✅ Scroll animasyonları aktif
    ✅ Paralaks efektleri aktif  
    ✅ Modern CSS Grid layout
    ✅ Responsive tasarım
    ✅ Glassmorphism efektleri
    ✅ Smooth scrolling
    
    Geliştirici: AI Assistant
    `);
}); 