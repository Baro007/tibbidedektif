document.addEventListener('DOMContentLoaded', () => {
    // Dil Seçici İşlevselliği
    const langDropdown = document.querySelector('.lang-dropdown');
    if (langDropdown) {
        const langCurrent = langDropdown.querySelector('.lang-current');
        const langOptions = langDropdown.querySelector('.lang-options');

        langCurrent.addEventListener('click', (event) => {
            event.stopPropagation(); // Sayfanın diğer yerlerine tıklamayı engelle
            const isOpen = langDropdown.classList.toggle('open');
            langCurrent.setAttribute('aria-expanded', isOpen.toString());
        });

        document.addEventListener('click', () => {
            if (langDropdown.classList.contains('open')) {
                langDropdown.classList.remove('open');
                langCurrent.setAttribute('aria-expanded', 'false');
            }
        });

        langOptions.addEventListener('click', (event) => {
            event.stopPropagation(); // langCurrent'a tıklama olayının yayılmasını engelle
        });

        const optionButtons = langOptions.querySelectorAll('.lang-option');
        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const selectedLang = button.dataset.lang;
                const selectedFlag = button.querySelector('.lang-flag').textContent;
                const selectedText = button.querySelector('.lang-text').textContent.substring(0, 2).toUpperCase(); // 'Türkçe' -> TR, 'English' -> EN

                langCurrent.querySelector('.lang-flag').textContent = selectedFlag;
                langCurrent.querySelector('.lang-text').textContent = selectedText;

                // Aktif seçimi güncelle
                optionButtons.forEach(btn => btn.setAttribute('aria-selected', 'false'));
                button.setAttribute('aria-selected', 'true');

                langDropdown.classList.remove('open');
                langCurrent.setAttribute('aria-expanded', 'false');

                // Burada dil değiştirme mantığı eklenebilir (örneğin, sayfa içeriğini yükleme)
                console.log(`Dil değişti: ${selectedLang}`);
                // Basit bir sayfa yenileme örneği (gerçek uygulamada daha gelişmiş olabilir)
                // window.location.href = window.location.pathname + '?lang=' + selectedLang;
            });
        });
    }

    // SSS Akordeon İşlevselliği
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = header.querySelector('.accordion-icon');

        header.addEventListener('click', () => {
            const isActive = item.classList.toggle('active');
            header.setAttribute('aria-expanded', isActive.toString());

            if (isActive) {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.textContent = '−';
            } else {
                content.style.maxHeight = '0';
                icon.textContent = '+';
            }
        });
    });

    // Yukarı Çık Butonu İşlevselliği
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}); 