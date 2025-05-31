# 🩺 Tıbbi Dedektiflik - Geliştirme Görevleri ve Yol Haritası

Bu dosya, "Tıbbi Dedektiflik" web sitesinin mevcut durumunu, potansiyel iyileştirmeleri ve gelecekteki geliştirme planlarını içermektedir.

## 📌 Mevcut Durum (Versiyon 2.1)

### ✨ Temel Özellikler
- **Sayfa Yapısı**: Tek sayfa (Single Page Application - SPA) yapısında, 6 ana bölümden oluşuyor:
    1. Hero (Karşılama)
    2. Giriş (Bu sayfa neden var?)
    3. Nasıl İşliyor? (5 Adımlı Süreç)
    4. Neden Ücretsiz?
    5. Randevu Al (Google Calendar Entegrasyonu)
    6. Sıkça Sorulanlar (SSS)
- **Tasarım**:
    - Modern, sağlık odaklı ve güven veren estetik (Yeşil tonlar ağırlıklı)
    - Mobil öncelikli (Mobile-first) tam responsive tasarım
    - Glassmorphism, gradient ve yumuşak animasyonlar
    - CSS Custom Properties ile tutarlı tasarım sistemi (renk, boşluk, tipografi, gölge)
- **Fonksiyonellik**:
    - **Çoklu Dil Desteği (Türkçe/İngilizce)**:
        - Otomatik dil algılama (URL parametresi > Local Storage > Tarayıcı dili)
        - Modern dil seçici (bayrak ikonları, dropdown)
        - `languages.js` ile merkezi çeviri yönetimi
    - **Scroll Animasyonları**: Intersection Observer API ile sayfa elemanları scroll edildikçe görünür hale geliyor.
    - **Paralaks Efekti**: Hero bölümünde mouse hareketi ve scroll ile hafif paralaks.
    - **Google Calendar Entegrasyonu**: Randevu bölümünde `iframe` ile gömülü.
- **SEO & Performans**:
    - Temel SEO meta tag'leri (title, description, keywords)
    - Open Graph ve Twitter Card meta tag'leri
    - Schema.org (MedicalBusiness, Person) yapısal veri entegrasyonu (çoklu dil destekli)
    - Temiz ve semantik HTML5 yapısı, ARIA rolleri
    - Optimize edilmiş CSS ve JavaScript dosyaları
    - Google Fonts kullanımı (Poppins, Playfair Display)
    - SVG Favicon
- **Erişilebilirlik (Temel Seviye)**:
    - ARIA rolleri ve `aria-label` kullanımı
    - Klavye ile navigasyon (odaklanma stilleri)
    - Renk kontrastları sağlık temasına uygun.

### ⚙️ Teknik Altyapı
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Deployment**: GitHub Pages (`https://baro007.github.io/tibbidedektif/`)
- **Versiyon Kontrolü**: Git & GitHub

## 🚀 İyileştirme ve Güncelleme Önerileri

Aşağıdaki öneriler, sitenin kullanıcı deneyimini, performansını, erişilebilirliğini ve genel profesyonelliğini daha da artırmaya yöneliktir.

### 🌟 Kategori 1: Kullanıcı Deneyimi (UX) ve Arayüz (UI) Geliştirmeleri

1.  **Görev**: Gelişmiş SSS (FAQ) Akordiyonu
    *   **Açıklama**: SSS bölümünü daha interaktif hale getirmek için açılır/kapanır akordiyon menü uygulaması.
    *   **Plan**:
        *   JavaScript ile tıklama olaylarını yöneterek cevapların gösterilip gizlenmesi.
        *   CSS ile akordiyon ikonları (örn: +/- veya chevron) ve geçiş animasyonları eklenmesi.
        *   Erişilebilirlik (`aria-expanded`, `aria-controls`) özelliklerinin güncellenmesi.
    *   **Öncelik**: Yüksek
    *   **Tahmini Süre**: 2-3 saat

2.  **Görev**: "Yukarı Çık" (Back to Top) Butonu
    *   **Açıklama**: Uzun sayfalarda kullanıcıların kolayca sayfa başına dönebilmesi için sabit bir "Yukarı Çık" butonu eklenmesi.
    *   **Plan**:
        *   Belirli bir scroll mesafesinden sonra görünür olan bir buton oluşturulması.
        *   JavaScript ile `window.scrollTo({ top: 0, behavior: 'smooth' })` fonksiyonunun kullanılması.
        *   CSS ile butonun stilinin ve pozisyonunun ayarlanması.
    *   **Öncelik**: Orta
    *   **Tahmini Süre**: 1-2 saat

3.  **Görev**: Gelişmiş Form Doğrulama ve Geri Bildirim (Randevu Formu İçin)
    *   **Açıklama**: Google Calendar iframe'i yerine özel bir form oluşturulursa, bu form için daha detaylı istemci ve sunucu tarafı doğrulama ve kullanıcıya anlık geri bildirimler.
    *   **Plan**: (Eğer özel form implemente edilirse geçerli)
        *   HTML5 form doğrulama özellikleri (`required`, `pattern` vb.).
        *   JavaScript ile anlık doğrulama ve hata mesajları.
        *   Başarılı gönderim veya hata durumları için net mesajlar.
    *   **Öncelik**: Düşük (Mevcut Google Takvim çözümü yeterliyse)
    *   **Tahmini Süre**: 4-6 saat

4.  **Görev**: Koyu Mod (Dark Mode) Desteği
    *   **Açıklama**: Kullanıcıların tercihine göre siteyi koyu renk temasıyla görüntüleyebilmesi için bir seçenek sunulması.
    *   **Plan**:
        *   CSS Custom Properties kullanarak renk paletinin koyu mod versiyonunun oluşturulması.
        *   JavaScript ile tema değiştirici buton ve `localStorage`'e tema tercihinin kaydedilmesi.
        *   `prefers-color-scheme` media query'si ile sistem tercihine otomatik uyum.
    *   **Öncelik**: Orta
    *   **Tahmini Süre**: 5-8 saat

5.  **Görev**: Mikro Animasyonlar ve Etkileşimler
    *   **Açıklama**: Butonlara, linklere ve kartlara hover/focus durumlarında daha belirgin ve tatmin edici mikro animasyonlar eklenmesi.
    *   **Plan**:
        *   CSS `transform`, `transition` ve `animation` özelliklerinin daha etkin kullanılması.
        *   JavaScript ile tetiklenebilecek bazı ince animasyonlar (örn: ikon animasyonları).
    *   **Öncelik**: Orta
    *   **Tahmini Süre**: 3-4 saat

### ⚡ Kategori 2: Performans Optimizasyonu

1.  **Görev**: Resim Optimizasyonu ve WebP Formatı
    *   **Açıklama**: Eğer siteye resimler eklenecekse (örn: doktor fotoğrafı, blog görselleri), bunların optimize edilmesi ve modern WebP formatında sunulması.
    *   **Plan**:
        *   Resimleri sıkıştırmak için araçlar (örn: TinyPNG, Squoosh) kullanılması.
        *   `<picture>` elementi veya `content-negotiation` ile WebP formatı desteği.
        *   Lazy loading (tembel yükleme) özelliğinin `loading="lazy"` attribute'ü ile tüm resimlere uygulanması.
    *   **Öncelik**: Yüksek (Resim eklendiğinde)
    *   **Tahmini Süre**: 2-3 saat

2.  **Görev**: Kritik CSS (Critical CSS) Entegrasyonu
    *   **Açıklama**: Sayfanın ilk yüklemede görünen kısmı (above-the-fold) için gerekli olan minimum CSS'in HTML içine inline olarak eklenmesi, kalan CSS'in ise asenkron yüklenmesi.
    *   **Plan**:
        *   Kritik CSS üreten araçlar (örn: Penthouse, Critical) kullanılması.
        *   Inline CSS'in `<style>` tag'i içinde `<head>` bölümüne eklenmesi.
        *   Ana CSS dosyasının `<link rel="preload" as="style" onload="this.rel='stylesheet'">` ile yüklenmesi.
    *   **Öncelik**: Orta
    *   **Tahmini Süre**: 3-4 saat

3.  **Görev**: JavaScript Kod Ayrıştırma (Code Splitting)
    *   **Açıklama**: `script.js` ve `languages.js` dosyalarını daha küçük parçalara bölerek sadece ihtiyaç duyulan kodun yüklenmesini sağlamak (özellikle gelecekte daha fazla JS eklenecekse).
    *   **Plan**:
        *   Dinamik `import()` kullanımı.
        *   Build araçları (Webpack, Rollup) ile otomatik code splitting.
    *   **Öncelik**: Düşük (Mevcut JS boyutu küçükse)
    *   **Tahmini Süre**: 4-6 saat

4.  **Görev**: Service Worker ile Caching Stratejileri
    *   **Açıklama**: Statik varlıkların (CSS, JS, fontlar) Service Worker ile cache'lenerek sonraki ziyaretlerde sayfa yükleme hızının artırılması ve offline erişim sağlanması.
    *   **Plan**:
        *   Temel bir `sw.js` dosyası oluşturulması.
        *   `install`, `activate`, `fetch` event listener'larının implemente edilmesi.
        *   Cache-first veya stale-while-revalidate gibi caching stratejilerinin uygulanması.
    *   **Öncelik**: Orta
    *   **Tahmini Süre**: 5-8 saat

### ♿ Kategori 3: Erişilebilirlik (Accessibility - a11y) İyileştirmeleri

1.  **Görev**: Detaylı ARIA İyileştirmeleri
    *   **Açıklama**: Tüm interaktif elementler (butonlar, linkler, form elemanları) için doğru ARIA rolleri, state'leri ve property'lerinin gözden geçirilip eksiklerin tamamlanması.
    *   **Plan**:
        *   `aria-label`, `aria-labelledby`, `aria-describedby` kullanımlarının kontrolü.
        *   Dil seçici, SSS akordiyonu gibi dinamik bileşenler için `aria-live` bölgeleri.
        *   WAI-ARIA Authoring Practices rehberinin takip edilmesi.
    *   **Öncelik**: Yüksek
    *   **Tahmini Süre**: 3-5 saat

2.  **Görev**: Odak Yönetimi (Focus Management)
    *   **Açıklama**: Modal dialoglar, dropdown menüler gibi dinamik bileşenlerde klavye odağının doğru yönetilmesi.
    *   **Plan**:
        *   JavaScript ile odak tuzağı (focus trap) implementasyonu.
        *   Bir bileşen açıldığında odağın ilk interaktif elemana, kapandığında ise tetikleyici elemana geri dönmesi.
    *   **Öncelik**: Yüksek
    *   **Tahmini Süre**: 2-4 saat

3.  **Görev**: Yüksek Kontrast Modu ve Font Boyutu Ayarları
    *   **Açıklama**: Kullanıcıların siteyi yüksek kontrast modunda görüntüleyebilmesi ve font boyutunu ayarlayabilmesi için kontroller eklenmesi.
    *   **Plan**:
        *   CSS ile yüksek kontrast renk paleti tanımlanması.
        *   JavaScript ile tema değiştirici ve font boyutu ayarlayıcı (localStorage destekli).
    *   **Öncelik**: Orta
    *   **Tahmini Süre**: 4-6 saat

4.  **Görev**: Hareket Azaltma (Reduce Motion) Desteği
    *   **Açıklama**: Kullanıcıların işletim sistemi seviyesinde hareket azaltma tercihine saygı duyarak animasyonların ve geçişlerin devre dışı bırakılması veya azaltılması.
    *   **Plan**:
        *   `prefers-reduced-motion` media query'si kullanılarak animasyonların CSS üzerinden yönetilmesi.
    *   **Öncelik**: Orta
    *   **Tahmini Süre**: 1-2 saat

### 📈 Kategori 4: SEO ve Analitik Geliştirmeleri

1.  **Görev**: Google Analytics 4 (GA4) Entegrasyonu
    *   **Açıklama**: Site trafiğini ve kullanıcı davranışlarını izlemek için GA4 entegrasyonu.
    *   **Plan**:
        *   GA4 takip kodunun `<head>` bölümüne eklenmesi.
        *   Dil değişimi, randevu butonu tıklaması gibi önemli olayların (event) GA4'e gönderilmesi.
        *   `languages.js` içinde `gtag` event'lerinin tetiklenmesi.
    *   **Öncelik**: Yüksek
    *   **Tahmini Süre**: 2-3 saat

2.  **Görev**: XML Sitemap Oluşturma
    *   **Açıklama**: Arama motorlarının site içeriğini daha kolay tarayabilmesi için `sitemap.xml` dosyası oluşturulması.
    *   **Plan**:
        *   Ana sayfa ve çoklu dil versiyonları için URL'leri içeren bir XML dosyası oluşturulması.
        *   Eğer blog vb. eklenecekse, bu sayfaların da sitemap'e dahil edilmesi.
    *   **Öncelik**: Yüksek
    *   **Tahmini Süre**: 1-2 saat

3.  **Görev**: `robots.txt` Dosyası Oluşturma
    *   **Açıklama**: Arama motoru botlarına hangi sayfaların taranıp taranmayacağını bildiren `robots.txt` dosyası.
    *   **Plan**:
        *   `User-agent: *`, `Allow: /`, `Sitemap: [URL-to-sitemap.xml]` gibi temel direktifleri içeren bir `robots.txt` dosyası oluşturulması.
    *   **Öncelik**: Yüksek
    *   **Tahmini Süre**: 0.5 saat

4.  **Görev**: Gelişmiş Schema.org Entegrasyonu
    *   **Açıklama**: `FAQPage`, `WebSite`, `Article` (blog için) gibi daha spesifik Schema.org türlerinin eklenmesi.
    *   **Plan**:
        *   SSS bölümü için `FAQPage` şeması.
        *   Genel site bilgileri için `WebSite` şeması.
        *   JSON-LD formatında script tag'leri ile implementasyon.
    *   **Öncelik**: Orta
    *   **Tahmini Süre**: 3-4 saat

### 🛠️ Kategori 5: Fonksiyonel Geliştirmeler ve Yeni Özellikler

1.  **Görev**: Blog/Makale Sistemi
    *   **Açıklama**: Dr. Sadık Barış Adıgüzel'in sağlıkla ilgili bilgilendirici yazılar paylaşabileceği, çoklu dil destekli bir blog sistemi.
    *   **Plan**:
        *   Statik site üreteçleri (Jekyll, Hugo, Eleventy) veya headless CMS (Contentful, Strapi) ile entegrasyon.
        *   Markdown formatında yazı yazma desteği.
        *   Kategoriler, etiketler, RSS feed.
        *   Her yazı için ayrı SEO ve Open Graph tag'leri.
    *   **Öncelik**: Gelecek Fazı
    *   **Tahmini Süre**: 15-25 saat (Seçilen teknolojiye göre değişir)

2.  **Görev**: Canlı Sohbet (Chatbot) Entegrasyonu
    *   **Açıklama**: Kullanıcıların hızlıca soru sorabileceği veya destek alabileceği bir canlı sohbet widget'ı (örn: Tawk.to, Zendesk Chat).
    *   **Plan**:
        *   Seçilen chatbot servisinin script kodunun siteye eklenmesi.
        *   Dil seçimine göre chatbot arayüz dilinin ayarlanması (eğer destekleniyorsa).
    *   **Öncelik**: Orta
    *   **Tahmini Süre**: 2-3 saat

3.  **Görev**: E-posta Abonelik Formu (Newsletter)
    *   **Açıklama**: Kullanıcıların güncellemeler ve yeni yazılardan haberdar olmak için e-posta listesine abone olabileceği bir form.
    *   **Plan**:
        *   Mailchimp, ConvertKit gibi bir e-posta pazarlama servisi ile entegrasyon.
        *   Basit bir form ve API aracılığıyla abone kaydı.
    *   **Öncelik**: Orta
    *   **Tahmini Süre**: 3-5 saat

4.  **Görev**: Push Bildirimleri
    *   **Açıklama**: Yeni blog yazıları veya önemli duyurular için tarayıcı tabanlı push bildirimleri.
    *   **Plan**:
        *   Service Worker ve Push API kullanımı.
        *   Kullanıcıdan bildirim izni alma.
        *   Firebase Cloud Messaging (FCM) gibi bir servis ile entegrasyon.
    *   **Öncelik**: Gelecek Fazı
    *   **Tahmini Süre**: 8-12 saat

### 🔒 Kategori 6: Güvenlik ve Bakım

1.  **Görev**: İçerik Güvenlik Politikası (CSP - Content Security Policy)
    *   **Açıklama**: XSS gibi bazı saldırı türlerini engellemek için HTTP başlığı ile CSP tanımlanması.
    *   **Plan**:
        *   `default-src 'self'`, `script-src 'self' https://calendar.google.com https://www.google-analytics.com`, `style-src 'self' https://fonts.googleapis.com 'unsafe-inline'` gibi direktiflerin belirlenmesi.
        *   GitHub Pages için `_headers` dosyası veya meta tag ile implementasyon.
    *   **Öncelik**: Yüksek
    *   **Tahmini Süre**: 2-4 saat

2.  **Görev**: Bağımlılıkların Güncellenmesi ve Denetimi
    *   **Açıklama**: (Eğer `npm` vb. ile yönetilen bağımlılıklar eklenecekse) Periyodik olarak bağımlılıkların güncellenmesi ve güvenlik açıklarına karşı denetlenmesi.
    *   **Plan**:
        *   `npm audit` veya GitHub Dependabot kullanımı.
    *   **Öncelik**: Orta (Bağımlılık eklendiğinde)
    *   **Tahmini Süre**: Sürekli

3.  **Görev**: Test Otomasyonu (Temel Seviye)
    *   **Açıklama**: Dil değiştirme, temel UI etkileşimleri gibi kritik fonksiyonların çalışıp çalışmadığını kontrol eden basit testler.
    *   **Plan**:
        *   Jest, Cypress gibi bir test framework'ü ile birkaç E2E veya birim testi yazılması.
        *   GitHub Actions ile CI/CD sürecine entegrasyonu.
    *   **Öncelik**: Gelecek Fazı
    *   **Tahmini Süre**: 8-10 saat

## 📅 Önceliklendirme ve Zaman Çizelgesi (Örnek)

### Faz 1: Temel İyileştirmeler (Sonraki 1-2 Hafta)
*   [Yüksek] Gelişmiş SSS Akordiyonu
*   [Yüksek] Google Analytics 4 Entegrasyonu
*   [Yüksek] XML Sitemap ve `robots.txt`
*   [Yüksek] Detaylı ARIA İyileştirmeleri
*   [Yüksek] İçerik Güvenlik Politikası (CSP)
*   [Orta] "Yukarı Çık" Butonu

### Faz 2: UX ve Performans Artışı (Sonraki 1 Ay)
*   [Orta] Koyu Mod Desteği
*   [Orta] Mikro Animasyonlar ve Etkileşimler
*   [Orta] Kritik CSS Entegrasyonu
*   [Orta] Service Worker ile Caching
*   [Orta] Canlı Sohbet Entegrasyonu
*   [Orta] Odak Yönetimi

### Faz 3: Gelecek Özellikler (Uzun Vadeli)
*   [Gelecek Fazı] Blog/Makale Sistemi
*   [Gelecek Fazı] E-posta Abonelik Formu
*   [Gelecek Fazı] Push Bildirimleri
*   [Gelecek Fazı] Test Otomasyonu

Bu `task.md` dosyası, projenin gelişimini takip etmek ve organize bir şekilde ilerlemek için bir rehber niteliğindedir. Görevlerin öncelikleri ve tahmini süreleri, ihtiyaçlara ve kaynaklara göre yeniden değerlendirilebilir. 