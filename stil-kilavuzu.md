# 🎨 Tıbbi Dedektiflik - Stil Kılavuzu (Versiyon 1.0)

Bu belge, "Tıbbi Dedektiflik" web sitesinin görsel kimliğini ve kullanıcı arayüzü standartlarını tanımlar. Amaç, "Derinlemesine Araştırma ve Aydınlatıcı Rehberlik" temasını yansıtan, profesyonel, güvenilir, erişilebilir ve modern bir tasarım dili oluşturmaktır.

## 1. Renk Paleti

**Tema:** "Derinlemesine Araştırma ve Aydınlatıcı Rehberlik"

*   **Ana Renkler (Güven, Sağlık, Netlik):**
    *   Sağlık Yeşili (Ana Marka Rengi): `#059669` (Koyu Yeşil - Başlıklar, Vurgular)
    *   Sağlık Yeşili (Geçiş/Gradient): `#10b981` (Orta Yeşil)
    *   Sağlık Yeşili (İkincil): `#0D9488` (Daha Koyu Teal/Yeşil)
    *   Saf Beyaz (Arka Planlar, Metin): `#FFFFFF`
    *   Çok Açık Gri (İnce Çizgiler, Hafif Arka Planlar): `#F3F4F6` (Tailwind `gray-100`)

*   **İkincil ve Vurgu Renkleri (Bilgi, Güven, Profesyonellik, Dikkat Çekme):**
    *   **Sakin Mavi Tonları (Bilgi & Güven):**
        *   Açık Lacivert: `#2563EB` (Tailwind `blue-600` - İkincil Başlıklar, Linkler)
        *   Yumuşak Mavi: `#60A5FA` (Tailwind `blue-400` - Hafif Vurgular, İkonlar)
    *   **Nötr ve Toprak Tonları (Denge & Ciddiyet & Okunabilirlik):**
        *   Koyu Gri (Ana Metin Rengi): `#1F2937` (Tailwind `gray-800`)
        *   Orta Gri (İkincil Metin, Açıklamalar): `#4B5563` (Tailwind `gray-600`)
        *   Açık Gri (Borderlar, Ayırıcılar): `#D1D5DB` (Tailwind `gray-300`)
    *   **Vurgu Rengi (CTA, Önemli Noktalar - Dikkat Çekici Ama Rahatsız Etmeyen):**
        *   Yumuşak Altın Sarısı: `#FACC15` (Tailwind `yellow-400`)
        *   Alternatif Yumuşak Turuncu: `#FB923C` (Tailwind `orange-400`) - *Daha az kullanılacak*

*   **Gradient Önerisi (Hero ve diğer uygun yerler için):**
    *   `linear-gradient(to right, #059669, #10b981, #0D9488)` (Mevcut yeşil gradient)
    *   Alternatif: `linear-gradient(to right, #2563EB, #60A5FA)` (Mavi tonlarında)

## 2. Tipografi

**Öncelik:** Okunabilirlik, profesyonellik, modern görünüm. Hedef kitle (30 yaş üstü) için rahat okunabilir puntolar ve satır aralıkları.

*   **Ana İçerik Fontu (Paragraflar, Açıklamalar):**
    *   Font Ailesi: `Inter` (Google Fonts)
    *   Ağırlık: Regular (400), Medium (500)
    *   Boyut: 16px - 18px (Mobil için 15px-16px)
    *   Satır Yüksekliği: 1.6 - 1.8

*   **Ana Başlıklar (H1, H2 - Bölüm Başlıkları):**
    *   Font Ailesi: `Poppins` (Google Fonts)
    *   Ağırlık: SemiBold (600), Bold (700)
    *   Boyut: H1: 32px-48px, H2: 24px-36px (Responsive)
    *   Harf Aralığı: Hafif negatif (örn: -0.02em) daha tok bir görünüm için.

*   **İkincil Başlıklar (H3, H4 - Alt Başlıklar, Kart Başlıkları):**
    *   Font Ailesi: `Poppins` veya `Inter`
    *   Ağırlık: Medium (500), SemiBold (600)
    *   Boyut: H3: 20px-28px, H4: 18px-22px

*   **Vurgulu Metinler/Alıntılar:**
    *   Ana içerik fontunun (Inter) Italic veya Medium Italic versiyonu.
    *   "Neden Ücretsiz?" bölümündeki özel mesajlar için.

## 3. İkonografi

*   **Stil:** Minimalist, modern, çizgi (outline) tabanlı veya dolu (solid) ama sade. Tutarlı bir set kullanılmalı.
*   **Format:** SVG (Ölçeklenebilirlik ve performans için).
*   **Boyut:** Metin boyutlarıyla orantılı, genellikle 20px-24px civarı.
*   **Renk:** Genellikle Orta Gri (`#4B5563`) veya Sakin Mavi Tonları (`#60A5FA`). Hover durumunda Vurgu Rengi (`#FACC15`) veya ana marka rengi (`#059669`).
*   **Örnek İkon Temaları (Daha önce konuşulanlar):**
    *   **Genel:** Stetoskop (Sağlık), Pusula (Rehberlik), Işık/Ampul (Aydınlanma), Kitap/Belge (Bilgi), Büyüteç (Araştırma).
    *   **Nasıl İşliyor:** Dosya, Veri Grafikleri, Dişliler, Yol Haritası, İletişim Balonları.
    *   **Neden Ücretsiz:** Açık El, Kalp, Denge Okları, Yeşeren Filiz.
    *   **Randevu:** Takvim, Saat.
    *   **SSS:** Soru İşareti, Bilgi, Oklar (Aç/Kapa).

## 4. Anahtar Görsel Metaforlar (Soyut ve Destekleyici)

Bu metaforlar, sitenin genelinde ince detaylar, arka plan öğeleri veya illüstrasyonlar için ilham kaynağı olabilir.

*   **Yol Gösteren Işık / Aydınlanan Bir Yol:** Çözüm, netlik, umut.
*   **Pusula / Yol Haritası:** Rehberlik, yönlendirme.
*   **Bilgi Katmanları / Soyut Veri Görselleştirmeleri:**
    *   Referans 1: Adobe Stock, iStockPhoto, Shutterstock gibi platformlarda "abstract data layers background", "futuristic information visualization", "plexus background", "digital information stream", "network connection abstract" gibi aramalarla bulunabilir. Üst üste binen yarı saydam katmanlar, karmaşık ama düzenli görünen veri ağları, ışıklı çizgilerden oluşan akışlar veya parçacık sistemleri bu metaforu destekler.
    *   Teorik İlham: Lev Manovich'in "Abstraction and Complexity" makalesi (NeMe.org) bu tür görsellerin altında yatan kavramsal çerçeveye dair fikir verebilir.
    *   Örnek Stil (Plexus): `https://stock.adobe.com/search?k=%22plexus+background%22` (Bu aramadaki görseller, özellikle mavi, yeşil ve beyaz tonlarındaki bağlantılı nokta ve çizgi ağları, hem bu metafor hem de "Bağlantılı Noktalar / Ağ Yapıları" için iyi bir başlangıç noktasıdır.)
    *   Örnek Stil (Veri Akışı): `https://stock.adobe.com/search?k=digital+information+stream` (Daha çok hareket ve akışkanlık vurgulayan görseller.)
*   **Bağlantılı Noktalar / Ağ Yapıları:**
    *   Referans 1: "Bilgi Katmanları / Soyut Veri Görselleştirmeleri" başlığı altında listelenen "plexus background" ve "abstract network data visualization" aramalarıyla çıkan görseller bu metafor için de oldukça uygundur. Özellikle birbirine bağlı noktalar ve çizgilerden oluşan ağ yapıları, karmaşıklığın çözümlenmesi ve bağlantıların kurulması temalarını destekler.
    *   Ek Arama Terimleri: "neural network visualization", "interconnected nodes graphic"
*   **Büyüteç Etkisi / Odaklanmış Detay (Soyut):**
    *   Referans 1: Adobe Stock, Depositphotos, Freepik gibi platformlarda "abstract magnifying glass effect", "focused detail abstract illustration", "zoom burst background", "light focus effect abstract" gibi aramalarla bulunabilir. Bir alanın aydınlatıldığı veya netleştirildiği, geri kalanının ise daha karanlık/bulanık olduğu soyut kompozisyonlar, bir noktaya doğru yakınlaşan ışık huzmeleri veya radyal çizgiler bu metaforu destekler.
    *   Örnek Stil (Odaklanmış Işık): `https://stock.adobe.com/search?k=%22zoom+effect%22` (Bu aramadaki, özellikle belirli bir alana ışıkla veya netlikle odaklanan, geri kalanı flu bırakan soyut görseller.)
    *   Örnek Stil (Soyut Büyüteç): Gerçekçi bir büyüteç yerine, dairesel bir alanın etrafındaki elementleri büyüten veya bozan soyut bir etki.
*   **Açılan Kitap / Belgeler (Soyut):**
    *   Referans 1: Adobe Stock, Vecteezy, iStockPhoto gibi platformlarda "abstract open book pages illustration", "flowing pages background", "stylized document layers", "minimalist hand drawn abstract notebook cover pages" gibi aramalarla bulunabilir. Sayfaları uçuşan, ışık yayan veya soyut desenlerle birleşen kitap/belge görselleri; bilgiye erişimi ve derinliği estetik bir şekilde vurgulayabilir.
    *   Örnek Stil (Soyut Kitap/Sayfalar): `https://stock.adobe.com/search?k=open+book+vector` (Bu aramadaki daha soyut ve sanatsal yorumlar, özellikle ışıkla veya akışkan çizgilerle birleştirilenler.)
    *   Örnek Stil (Belge Katmanları): Üst üste gelen, yarı saydam, belki hafifçe kıvrımlı veya dalgalanan belge/sayfa katmanları.
*   **İnsan Silüetleri (Soyut - Dikkatli Kullanılmalı):** Empati, destek, hasta odaklılık (çok dikkatli kullanılmalı, klişeden kaçınılmalı).

## 5. Temel UI Prensipleri

*   **Boşluk Sistemi (Spacing):**
    *   Tutarlı bir 8px tabanlı grid sistemi (örn: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px) kullanılmalı. Bu, CSS değişkenleriyle (`--space-xs`, `--space-sm` vb.) yönetilebilir.
    *   Bölümler, kartlar ve metin blokları arasında yeterli beyaz alan bırakılarak ferah ve okunabilir bir düzen sağlanmalı.
*   **Görsel Hiyerarşi:**
    *   Başlık boyutları, font ağırlıkları, renkler ve boşluklar kullanılarak net bir görsel hiyerarşi oluşturulmalı. Kullanıcının gözü önemli öğelere kolayca yönlendirilmeli.
*   **Kartlar ve Paneller (Glassmorphism - İsteğe Bağlı ve Hafif):**
    *   Eğer kullanılacaksa, `backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2);` gibi hafif ve modern bir glassmorphism efekti tercih edilebilir. Arka planla kontrastı iyi ayarlanmalı.
*   **Butonlar:**
    *   Net birincil ve ikincil buton stilleri.
    *   Birincil butonlar için Vurgu Rengi (`#FACC15`) veya Ana Yeşil (`#059669`).
    *   Hover ve active durumları için belirgin ama zarif geçişler.
*   **Köşeler (Border Radius):**
    *   Genel olarak yumuşak köşeler (örn: 4px, 6px, 8px) modern bir görünüm sağlar. Kartlar, butonlar için tutarlı kullanılmalı.

## 6. Erişilebilirlik (WCAG AA Hedefli)

*   Renk kontrastları yeterli olmalı (Özellikle metin ve arka plan arasında).
*   Odak (focus) durumları tüm interaktif öğeler için net bir şekilde belirtilmeli.
*   ARIA etiketleri uygun yerlerde kullanılmalı.

## 7. İkon ve Görsel Metafor Referansları

Bu bölümde, yukarıda bahsedilen ikon temaları ve görsel metaforlar için ilham verici referans görseller (veya linkleri) listelenecektir. Amaç, tasarımın ve kullanılacak spesifik varlıkların (assets) stilini netleştirmektir.

### 7.1. Genel İkonlar
*   **Stetoskop (Sağlık):**
    *   Referans 1: Vecteezy, Adobe Stock, Icons8 gibi platformlarda "minimalist outline stethoscope icon svg", "simple medical icon" gibi aramalarla bulunabilir. Tarz olarak ince çizgili, modern ve kolay anlaşılır olmalı.
    *   Örnek Stil Linki (Genel Fikir Vermesi Açısından): `https://www.flaticon.com/free-icon/stethoscope_3004557` (Bu spesifik ikon değil, genel stil için bir örnektir.)
*   **Pusula (Rehberlik):**
    *   Referans 1: Vecteezy, IconArchive, Flaticon gibi platformlarda "minimalist outline compass icon svg", "simple navigation icon" gibi aramalarla bulunabilir. İnce çizgili, geometrik ve modern bir tarz hedeflenmeli.
    *   Örnek Stil Linki: `https://www.flaticon.com/free-icon/compass_7792350` (Genel stil için bir örnektir.)
*   **Işık/Ampul (Aydınlanma):**
    *   Referans 1: Adobe Stock, Noun Project, Iconduck, Flaticon gibi platformlarda "minimalist outline lightbulb icon svg", "simple idea icon svg" gibi aramalarla bulunabilir. Klasik ampul formunun sadeleştirilmiş, ince çizgili bir temsili olmalı.
    *   Örnek Stil Linki: `https://www.flaticon.com/free-icon/idea_123725` (Genel stil için bir örnektir.)
*   **Kitap/Belge (Bilgi):**
    *   Referans 1: Icons8, Iconduck, Shareicon.net, Flaticon gibi platformlarda "minimalist outline book icon svg", "simple document icon svg", "outline file icon" gibi aramalarla bulunabilir. Açık bir kitap veya sade bir doküman sayfası temsili olabilir.
    *   Örnek Stil Linki (Kitap): `https://www.flaticon.com/free-icon/open-book_270219`
    *   Örnek Stil Linki (Belge): `https://www.flaticon.com/free-icon/document_763356`
*   **Büyüteç (Araştırma):**
    *   Referans 1: Flaticon, Vecteezy, Icon0.com gibi platformlarda "minimalist outline magnifying glass icon svg", "simple search icon" gibi aramalarla bulunabilir. İnce çizgili, klasik büyüteç formunun sade bir yorumu olmalı.
    *   Örnek Stil Linki: `https://www.flaticon.com/free-icon/magnifying-glass_54481` (Genel stil için bir örnektir.)

### 7.2. "Nasıl İşliyor?" Bölümü İkonları
*   **Dosya/Klasör (Durum Tespiti):**
    *   Referans 1: Healthicons.org (örn: "Clinical Record", "UI Folder" ikonları), Icons8, Flaticon gibi platformlarda "minimalist outline folder icon svg", "medical record icon svg" gibi aramalarla bulunabilir. Üzerinde artı (+) veya sağlık sembolü olan sade bir klasör veya doküman yığını ikonu olabilir.
    *   Örnek Stil Linki (Genel Klasör): `https://www.flaticon.com/free-icon/folder_149320`
    *   Örnek Stil Linki (Tıbbi Vurgulu): `https://healthicons.org/icons/outline/clinical-record` (Bu sitedeki ikonlar genel olarak iyi bir referans.)
*   **Veri Grafikleri (Kanıt Toplama):**
    *   Referans 1: Adobe Stock, Iconfinder, UXWing, Flaticon gibi platformlarda "minimalist outline data graph icon svg", "simple line chart icon svg", "analytics icon outline" gibi aramalarla bulunabilir. Basit bir yukarı yönlü çizgi grafik, birkaç sütundan oluşan bar grafik veya soyut bir veri görselleştirmesi ikonu olabilir.
    *   Örnek Stil Linki (Çizgi Grafik): `https://www.flaticon.com/free-icon/line-graph_2785819`
    *   Örnek Stil Linki (Bar Grafik): `https://www.flaticon.com/free-icon/bar-chart_747731`
*   **Dişliler/Mekanizma (Analiz):**
    *   Referans 1: Vecteezy, Flaticon, Icons8 gibi platformlarda "minimalist outline gears icon svg", "simple cogwheel icon svg", "settings icon outline" gibi aramalarla bulunabilir. Birbirine geçmiş iki veya üç dişlinin sade bir çizgisel temsili veya tek bir stilize dişli ikonu olabilir.
    *   Örnek Stil Linki (İki Dişli): `https://www.flaticon.com/free-icon/settings_263074`
    *   Örnek Stil Linki (Tek Dişli): `https://www.flaticon.com/free-icon/gear_149314`
*   **Yol Haritası (Sonuç):**
    *   Referans 1: UXWing, VeryIcon, Flaticon gibi platformlarda "minimalist outline roadmap icon svg", "simple map icon svg", "destination flag icon" veya "report icon outline" gibi aramalarla bulunabilir. Kıvrımlı bir yol, üzerinde varış noktası olan bir harita kesiti veya onay işareti taşıyan bir rapor/belge ikonu olabilir.
    *   Örnek Stil Linki (Yol Haritası): `https://uxwing.com/road-map-icon/` (Bu sitedeki genel stil uygun.)
    *   Örnek Stil Linki (Rapor/Sonuç): `https://www.flaticon.com/free-icon/report_2535149`
*   **İletişim Balonları (Takip):**
    *   Referans 1: Vecteezy, Iconduck, Flaticon, Vexels gibi platformlarda "minimalist outline chat bubbles icon svg", "simple speech balloon icon" gibi aramalarla bulunabilir. Üst üste veya yan yana duran iki adet sade, çizgisel konuşma balonu olabilir.
    *   Örnek Stil Linki: `https://www.flaticon.com/free-icon/chat_134808` (İki balonlu versiyonlar tercih edilebilir.)

### 7.3. "Neden Ücretsiz?" Bölümü İkonları
*   **Açık El (Sosyal Sorumluluk/Erişilebilirlik):**
    *   Referans 1: Adobe Stock, Noun Project, Flaticon gibi platformlarda "minimalist outline open hand icon svg", "helping hand icon line", "support icon outline" gibi aramalarla bulunabilir. Tek bir açık avuç içi veya sembolik bir yardım eli ikonu olabilir.
    *   Örnek Stil Linki (Tek El): `https://www.flaticon.com/free-icon/hand_38129` (Daha stilize ve outline versiyonları aranabilir)
    *   Örnek Stil Linki (Yardım Eli): `https://thenounproject.com/icon/helping-hands-107513/` (Bu sitedeki genel stil ve sadelik uygun.)
*   **Kalp İçinde Sağlık Sembolü (Sosyal Sorumluluk):**
    *   Referans 1: Adobe Stock, Dreamstime, Flaticon, Vecteezy gibi platformlarda "minimalist outline heart with cross icon svg", "heartbeat pulse line icon svg", "health in heart icon outline" gibi aramalarla bulunabilir. Bir kalp içerisinde artı (+) işareti veya stilize bir nabız (EKG) çizgisi olan ikonlar uygundur.
    *   Örnek Stil Linki (Kalp & Artı): `https://www.flaticon.com/free-icon/ngo_2927347` (Bu genel stilde bir ikon olabilir.)
    *   Örnek Stil Linki (Kalp & Nabız): `https://www.flaticon.com/free-icon/heartbeat_2098363`
*   **Denge Okları / İç İçe Halkalar (Alma-Verme Dengesi):**
    *   Referans 1: Iconfinder, Noun Project, Flaticon, iStockPhoto gibi platformlarda "minimalist outline balance icon svg", "yin yang outline icon", "intertwined circles icon svg", "circular arrows icon outline" gibi aramalarla bulunabilir. Stilize edilmiş bir Yin Yang sembolü, birbirini takip eden/dairesel oklar veya iç içe geçmiş halkalar olabilir.
    *   Örnek Stil Linki (Yin Yang): `https://www.iconfinder.com/icons/2437589/balance_line_outline_yan_yang_yin_ying_icon`
    *   Örnek Stil Linki (Dairesel Oklar): `https://www.flaticon.com/free-icon/recycle_3208801` (Daha sade ve 2-3 oklu versiyonları tercih edilebilir)
*   **Yeşeren Filiz (Karşılıklı Gelişim):**
    *   Referans 1: Vexels, Adobe Stock, Noun Project, Flaticon, Vecteezy gibi platformlarda "minimalist outline sprout icon svg", "simple growing plant icon line", "seedling icon outline" gibi aramalarla bulunabilir. Topraktan yeni çıkmış iki yapraklı sade bir filiz veya soyut bir büyüme/gelişim ikonu olabilir.
    *   Örnek Stil Linki (Filiz): `https://www.flaticon.com/free-icon/sprout_61961` (Bu stilde, daha ince çizgili versiyonları aranabilir.)
    *   Örnek Stil Linki (Büyüyen Bitki): `https://thenounproject.com/icon/plant-sprout-1887040/` (Genel sadelik uygun.)

### 7.4. "Randevu Alın" Bölümü İkonları
*   **Takvim İkonu:**
    *   Referans 1: IconArchive, Untitled UI, Flaticon gibi platformlarda "minimalist outline calendar icon svg", "simple date icon line" gibi aramalarla bulunabilir. Üzerinde birkaç yatay çizgi veya nokta bulunan, sayfa kıvrımı detayına sahip olabilen, sade bir takvim yaprağı ikonu uygundur.
    *   Örnek Stil Linki: `https://www.iconarchive.com/show/minimal-outline-icons-by-praveen/calendar-icon.html` (Bu setteki stil genel olarak uygun.)
    *   Örnek Stil Linki 2: `https://www.flaticon.com/free-icon/calendar_2593609`
*   **Saat İkonu:**
    *   Referans 1: IconScout, Adobe Stock, Iconduck, Flaticon, SimpleIcon gibi platformlarda "minimalist outline clock icon svg", "simple time icon line" gibi aramalarla bulunabilir. Akrep ve yelkovanı belirgin, sade bir analog saat ikonu veya basit bir dijital saat göstergesi olabilir.
    *   Örnek Stil Linki (Analog): `https://www.flaticon.com/free-icon/clock_3239948`
    *   Örnek Stil Linki (Minimal): `https://iconduck.com/icons/117457/time` (Bu setteki sadelik referans alınabilir.)

### 7.5. "SSS" Bölümü İkonları
*   **Soru İşareti İkonu (Genel):**
    *   Referans 1: Iamvector, Icons8, Friconix, Flaticon, HolaSVG gibi platformlarda "minimalist outline question mark icon svg", "simple help icon line" gibi aramalarla bulunabilir. Klasik soru işareti formunun sade bir çizgisel temsili veya bir daire/baloncuk içinde yer alan soru işareti olabilir.
    *   Örnek Stil Linki: `https://www.flaticon.com/free-icon/question-mark_545679`
    *   Örnek Stil Linki 2 (Daire içinde): `https://icons8.com/icon/85090/question-mark` (Outline versiyonu tercih edilebilir)
*   **Oklar (Aç/Kapa Paneli - örn: Sağ/Aşağı Ok):**
    *   Referans 1: Reshot, Heroicons, Flaticon, iconmonstr, 366icons gibi platformlarda "minimalist outline arrow icon svg right", "simple arrow icon down line", "chevron icon outline" gibi aramalarla bulunabilir. İnce çizgili, sade bir sağa bakan ok (kapalı durum için) ve aşağı bakan ok (açık durum için) veya benzer şekilde çalışan chevron ikonları olabilir.
    *   Örnek Stil Linki (Sağ Ok/Chevron): `https://heroicons.com/` (Buradaki `chevron-right` ve `chevron-down` ikonları stil olarak uygun.)
    *   Örnek Stil Linki (Basit Ok): `https://www.flaticon.com/free-icon/right-arrow_271228` (ve bunun aşağı bakan versiyonu)
*   **Artı/Eksi İkonları (Aç/Kapa Paneli Alternatifi):**
    *   Referans 1: Heroicons, Icons8, UXWing, Flaticon, Icon-Icons, Untitled UI gibi platformlarda "minimalist outline plus icon svg", "simple minus icon line", "add icon outline", "remove icon outline" gibi aramalarla bulunabilir. Sade bir artı (+) ve eksi (-) işareti, tercihen ince çizgili ve hafif yuvarlatılmış köşelere sahip olabilir.
    *   Örnek Stil Linki (Artı): `https://heroicons.com/` (Buradaki `plus` ikonu stil olarak uygun.)
    *   Örnek Stil Linki (Eksi): `https://heroicons.com/` (Buradaki `minus` ikonu stil olarak uygun.)
    *   Örnek Stil Linki (Daire İçinde Artı/Eksi): `https://www.flaticon.com/free-icon/add_1828817` ve `https://www.flaticon.com/free-icon/minus_1828906` (Outline versiyonları tercih edilmeli)

### 7.6. Anahtar Görsel Metaforlar İçin İlham Verici Görseller
*   **Yol Gösteren Işık / Aydınlanan Bir Yol:**
    *   Referans 1: Adobe Stock, iStockPhoto, Freepik gibi platformlarda "guiding light illustration", "illuminated path concept art", "abstract light beam background", "hope light in dark tunnel" gibi aramalarla bulunabilir. Karanlık veya belirsiz bir arka plandan çıkarak ileriyi aydınlatan, soyut veya yarı soyut ışık huzmeleri, parlayan bir yol, tünel sonundaki ışık gibi görseller bu metaforu destekler.
    *   Örnek Stil Linki (Genel Fikir): `https://stock.adobe.com/images/an-artistic-3d-maze-depiction-with-a-pathway-guiding-to-a-shining-light-bulb-embodying-the-quest-for-groundbreaking-ideas-suitable-for-innovation-focused-business-slides/692005979` (Daha soyut ve tıbbi temaya uygun hale getirilebilir.)
    *   Örnek Stil Linki 2: `https://www.istockphoto.com/photo/futuristic-background-glowing-lines-signal-data-transmission-concept-gm1494060573-517581755` (Yol ve ışık hissi veren soyut bir görsel.)
*   **Pusula / Yol Haritası (İkon dışında, daha büyük bir görsel olarak):**
    *   Referans 1: VectorStock, Adobe Stock, iStockPhoto, Vecteezy gibi platformlarda "vintage compass illustration", "abstract roadmap background", "stylized map texture", "old map background" gibi aramalarla bulunabilir. Detaylı ve sanatsal bir pusula çizimi, eskitilmiş bir harita dokusu veya modern, soyut bir yol/rota grafiği bu metaforu destekleyebilir.
    *   Örnek Stil Linki (Vintage Pusula/Harita): `https://www.vectorstock.com/royalty-free-vector/vintage-world-map-with-compass-vector-22982433` (Bu tarzda, daha az karmaşık ve arka plan olarak kullanılabilecek versiyonlar.)
    *   Örnek Stil Linki (Soyut Yol Haritası): `https://stock.adobe.com/images/hand-drawn-roadmap-pattern-organic-lines-seamless-design-for-travel-adventure-and-journey-concepts/690900458` (Bu tür soyut desenler arka plan veya bölümleyici olarak kullanılabilir.)
*   **Bilgi Katmanları / Soyut Veri Görselleştirmeleri:**
    *   Referans 1: (Arama yapılacak)
*   **Bağlantılı Noktalar / Ağ Yapıları:**
    *   Referans 1: (Arama yapılacak)
*   **Açılan Kitap / Belgeler (İkon dışında, daha büyük bir görsel olarak):**
    *   Referans 1: (Arama yapılacak)

--- 