document.addEventListener('DOMContentLoaded', () => {

    // === SŁOWNIK TŁUMACZEŃ ===
    const translations = {
        pl: {
            pageTitle: 'Amber & Azure Residences | Luksusowe Apartamenty w Sea & Forest',
            logo: 'Amber & Azure Residences',
            navPhilosophy: 'Filozofia',
            navApartments: 'Apartamenty',
            navAzureCalendar: 'Kalendarz Azure',
            navFood: 'Wyżywienie', // Nowy element nawigacji
            navPackageInfo: 'Szczegóły Pakietu',
            navAmenities: 'Udogodnienia',
            navAttractions: 'Atrakcje',
            navPracticalInfo: 'Informacje praktyczne',
            navContact: 'Kontakt',
            videoError: 'Twoja przeglądarka nie obsługuje wideo w tle.',
            heroTitle: 'Amber & Azure Residences',
            heroSubtitle: 'Twoja Przystań, Gdzie Las Całuje Morze',
            heroCta: 'Poznaj Nasze Apartamenty',
            philosophyTitle: 'Prawdziwy luksus to czas i przestrzeń.',
            philosophySubtitle: 'W Amber & Azure Residences wierzymy, że autentyczny odpoczynek rodzi się z harmonii z naturą. Stworzyliśmy dwa wyjątkowe apartamenty w sercu kompleksu Sea & Forest, które pozwalają zwolnić, odetchnąć i na nowo połączyć się ze sobą i z otoczeniem.',
            introText: 'Jako nasi Goście, otrzymujecie klucze nie tylko do luksusowego wnętrza, ale także do bogactwa udogodnień całego resortu, wkomponowanego w malowniczą otulinę Wolińskiego Parku Narodowego. To zaproszenie do doświadczania, odczuwania i czerpania z natury pełnymi garściami.',
            apartmentsMainTitle: 'Twoje Prywatne Apartamenty',
            apartmentsMainSubtitle: 'Każdy z naszych apartamentów to unikalna historia opowiedziana przez design, komfort i bliskość natury. Wybierz swoją idealną przestrzeň do relaksu.',
            
            // Zaktualizowane tłumaczenia dla sekcji "Amber wkrótce dostępny"
            amberSoonTitle: 'Apartament Amber Suite - Już Dostępny!',
            amberSoonDesc: 'Z radością informujemy, że Apartament Amber Suite jest już dostępny! Ten zupełnie nowy, wyjątkowy apartament, inspirowany ciepłem bursztynu, czeka, aby gościć Państwa w swoich progach. Oferuje niezapomniane wrażenia z pobytu w sercu Wolińskiego Parku Narodowego. Idealny dla tych, którzy cenią sobie przytulny luksus i bliskość natury.',
            amberSoonContact: 'Nie czekaj, zarezerwuj swój wymarzony pobyt już dziś i odkryj piękno Międzyzdrojów w luksusowym otoczeniu!',

            azureTitle: 'Apartament Azure Suite',
            azureDesc: 'Zanurz się w klasycznej elegancji połączonej z nowoczesną funkcjonalnością. Apartament Azure o powierzchni 37 m² to przestrzeń, która otula i pozwala w pełni cieszyć się każdą chwilą pobytu. Jasne, przestronne wnętrza i starannie dobrane dodatki tworzą atmosferę spokoju, a imponujący, 15-metrowy taras z widokiem na las jest idealnym miejscem na poranną kawę i wieczorny relaks.',
            azureDetail1: '<b>Salon:</b> Przestronny i jasny, z komfortową sofą, eleganckim stolikiem kawowym i nowoczesnym TV.',
            azureDetail2: '<b>Aneks Kuchenny:</b> Pełna swoboda i niezależność dzięki nowoczesnej płycie, zmywarce i kompletnemu wyposażeniu.',
            azureDetail3: '<b>Część jadalniana:</b> Piękny, okrągły stół z krzesłami tworzy przytulny kącik do wspólnych posiłków.',
            azureDetail4: '<b>Sypialnia:</b> Luksusowe, podwójne łóżko (160x200 cm) i osobny telewizor dla pełnego relaksu.',
            azureDetail5: '<b>Taras:</b> Imponujący, 15-metrowy taras z widokiem na las, dostępny z obu pokoi.',
            azureDetail6: '<b>Klimatyzacja:</b> Indywidualnie sterowana dla idealnej temperatury o każdej porze roku.',
            wifi: '<b>Internet:</b> Szybkie, darmowe Wi-Fi dostępne w całym apartamencie.',
            calendarTitle: 'Zaplanuj Swój Wypoczynek',
            calendarDesc: 'Poniższy kalendarz w czasie rzeczywistym odzwierciedla dostępne terminy. Zapraszamy do rezerwacji, aby zapewnić sobie niezapomniane chwile w sercu natury.',
            ctaTitle: 'Chcesz zarezerwować pobyt?',
            ctaDesc: 'Skontaktuj się z nami bezpośrednio:<br><a href="mailto:amberazure.residences@gmail.com">amberazure.residences@gmail.com</a><br>Darek: <a href="tel:+48602229707">+48 602 229 707</a><br>Beata: <a href="tel:+48606410041">+48 606 410 041</a>',
            
            // Nowe i zaktualizowane tłumaczenia dla sekcji pakietu
            packageInfoTitle: 'Pobyt bez wyżywienia - bezkosztowa anulacja',
            packageInfoSubtitle: 'Szczegóły pakietu, który pozwoli Ci cieszyć się swobodą i naturą.',
            packageIncludedTitle: 'W cenie pakietu',
            packageIncluded1: 'Noclegi w komfortowych apartamentach z w pełni wyposażonym aneksem kuchennym, umożliwiającym samodzielne przygotowywanie posiłków.',
            packageIncluded2: 'Nieograniczony dostęp do kompleksu Wellness, Aqua & Sport (podgrzewany basen zewnętrzny, basen wewnętrzny, jacuzzi, sauny oraz siłownia).',
            packageIncluded3: 'Dostęp do atrakcji dla dzieci (sala zabaw, plac zabaw zewnętrzny, sezonowe programy animacyjne).',
            packageIncluded4: 'Lokalizacja w cichej, leśnej okolicy z bezpośrednim dostępem do Wolińskiego Parku Narodowego.',
            
            additionalAttractionsTitle: 'Dodatkowe atrakcje (za opłatą)', // Przeniesiono do informacji praktycznych
            additionalAttractions1: 'Restauracja For Rest.', // Przeniesiono do informacji praktycznych
            additionalAttractions2: 'Lobby Cafe & Bar.', // Przeniesiono do informacji praktycznych
            additionalAttractions3: 'Wypożyczalnia rowerów.', // Przeniesiono do informacji praktycznych
            additionalAttractions4: 'SPA Shept.', // Przeniesiono do informacji praktycznych

            mealsTitle: 'Wyżywienie',
            mealsDesc: 'Pakiet "Pobyt bez wyżywienia" nie obejmuje posiłków. Apartamenty wyposażone są w aneksy kuchenne umożliwiające samodzielne przygotowywanie posiłków.',
            foodFeaturesTitle: 'Co wyróżnia naszą kuchnię:',
            foodFeature1: '<b>Zero waste na talerzu</b> – nie mamy bufetów, za to przygotowujemy pyszne zestawy, tylko tyle ile potrzeba, wykorzystujemy każdy składnik do końca.',
            foodFeature2: '<b>Sea & Forest to Table</b> – współpracujemy z lokalnymi rybakami i dostawcami, by podawać świeże i sezonowe produkty.',
            foodFeature3: '<b>Jemy na świeżym powietrzu</b> – posiłki smakują lepiej, gdy można je zjeść na tarasie lub zabrać na piknik.',
            foodFeature4: '<b>Kameralnie i w rytmie slow</b> – bez pośpiechu, tylko dobre jedzenie i spokój wokół.',
            restaurantHoursTitle: 'Godziny otwarcia gastronomii:', // Nowy tytuł dla godzin
            restaurantHours: 'Restauracja a la carte For Rest: codziennie 12:00 – 23:00',
            lobbyBarHours: 'Lobby Café & Bar: codziennie 12:00 – 23:00',
            takeawaySnacks: 'Przekąski na wynos: oferujemy zestawy piknikowe, chrupiące kanapki, świeże sałatki – wszystko gotowe, by zabrać na plażę, do lasu albo na rowerową wyprawę.',

            importantInfoTitle: 'Ważne informacje',
            importantInfo1: 'Wymagana jest przedpłata w wysokości 30% wartości rezerwacji.',
            importantInfo2: 'Bezkosztowa anulacja możliwa do 7 dni przed przyjazdem.',

            amenitiesComplexTitle: 'Udogodnienia Kompleksu Sea & Forest',
            amenitiesComplexSubtitle: 'Jako Goście Amber & Azure Residences macie Państwo nieograniczony dostęp do wszystkich atrakcji i udogodnień resortu.',
            wellnessPoolsTitle: 'Dwa Baseny i Jacuzzi',
            wellnessPoolsDesc: 'Do Państwa dyspozycji oddajemy całoroczny, podgrzewany basen zewnętrzny, basen wewnętrzny z brodzikiem dla dzieci oraz dwa zewnętrzne jacuzzi, idealne na relaks pod gwiazdami.',
            wellnessSaunaTitle: 'Świat Saun',
            wellnessSaunaDesc: 'Poczujcie, jak uchodzi z Was całe napięcie w saunie o delikatnym, leśnym aromacie żywicy. To prawdziwy detoks dla ciała i umysłu.',
            wellnessSpaTitle: 'Wellness & SPA', // Zaktualizowano tytuł
            wellnessSpaDesc: 'Poczujcie, jak uchodzi z Was całe napięcie w strefie basenowej z jacuzzi i saunami. Dodatkowo, w Strefie SPA "Shept" (za opłatą) czekają kameralne gabinety z autorskimi zabiegami i masażami inspirowanymi bogactwem lasu, zapewniające pełną regenerację.',
            kidsAmenitiesTitle: 'Udogodnienia dla dzieci',
            kidsAmenitiesDesc: 'Dla najmłodszych Gości przygotowaliśmy salę zabaw, zewnętrzny plac zabaw oraz sezonowe programy animacyjne, zapewniające rozrywkę na najwyższym poziomie i niezapomniane wakacje.',
            sportEntertainmentTitle: 'Sport i rozrywka',
            sportEntertainmentDesc: 'Kompleks oferuje siłownię, baseny, a także dostęp do terenów zielonych idealnych do aktywności na świeżym powietrzu, takich jak spacery i jogging. Organizujemy również sezonowe programy animacyjne dla całej rodziny.',
            restoBarTitle: "Restauracja i Bar \"For Rest\"", // Przeniesiono do sekcji Wyżywienie
            restoBarDesc: 'Restauracja a\'la carte serwująca dania oparte na lokalnych, sezonowych produktach oraz elegancki Lobby Café & Bar na poranną kawę lub wieczornego drinka.', // Przeniesiono do sekcji Wyżywienie

            attractionsTitle: 'Atrakcje i lokalizacja', // Zaktualizowano tytuł
            attractionsSubtitle: 'Wyjątkowa lokalizacja w otulinie Wolińskiego Parku Narodowego zapewnia nieograniczone możliwości odkrywania uroków regionu Międzyzdrojów.',
            attraction1Title: 'Plaża na Wyciągnięcie Ręki',
            attraction1Desc: 'Na piękną, szeroką plażę dotrzesz malowniczym spacerem przez las (ok. 10 minut) lub korzystając z komfortowego, cichego busika elektrycznego (kursuje sezonowo).',
            attraction2Title: 'Woliński Park Narodowy',
            attraction2Desc: 'Ruszaj na szlaki prosto z apartamentu. Czekają na Ciebie zapierające dech w piersiach widoki z klifu Gosaň, urokliwe Jezioro Turkusowe oraz edukacyjna Zagroda Pokazowa Żubrów.',
            attraction3Title: 'Uroki Międzyzdrojów',
            attraction3Desc: 'Spaceruj słynną Aleją Gwiazd, podziwiaj widoki z 395-metrowego molo, odwiedź fascynujące Oceanarium i realistyczny Gabinet Figur Woskowych.',
            infoTitle: 'Informacje praktyczne',
            additionallyPaidTitle: 'Dodatkowo płatne',
            infoParking: 'Miejsce parkingowe w garażu podziemnym (70 PLN/doba) – rezerwacja zalecana.',
            infoPets: 'Pobyt zwierzęcia (100 PLN/doba) – prosimy o wcześniejsze zgłoszenie.',
            goodToKnowTitle: 'Warto wiedzieć',
            goodToKnowWifi: 'Szybkie, darmowe Wi-Fi dostępne w całym apartamencie i na terenie resortu.',
            goodToKnowBedding: 'Pościel i ręczniki wliczone w cenę pobytu.',
            goodToKnowCleaning: 'Sprzątanie końcowe apartamentu wliczone w cenę.',
            goodToKnowCheckIn: 'Zameldowanie od godziny 16:00.',
            goodToKnowCheckOut: 'Wymeldowanie do godziny 11:00.',
            locationTitle: 'Nasza Lokalizacja',
            locationDesc: 'Znajdziesz nas w kompleksie Sea & Forest, w otulinie Wolińskiego Parku Narodowego, zaledwie krótki spacer od plaży.',
            contactTitle: 'Zarezerwuj Pobyt',
            contactDesc: 'Wybierz Amber lub Azure Suite i zanurz się w luksusie, spokoju i naturze. Czekamy na Twój kontakt.',
            contactRole: 'Twoja Luksusowa Przystaň w Sea & Forest',
            contactBtnMail: 'Napisz: amberazure.residences@gmail.com',
            contactBtnCallDarek: 'Darek: +48 602 229 707',
            contactBtnCallBeata: 'Beata: +48 606 410 041',
            footerRights: '© 2025 Amber & Azure Residences. Wszelkie prawa zastrzeżone.',
            footerPrivacy: 'Polityka Prywatności',
            cookieTitle: 'Cenimy Twoją prywatność',
            cookieText: 'Używamy plików cookie, aby personalizować treści, udostępniać funkcje mediów społecznościowych i analizować nasz ruch. Udostępniamy również informacje o Twoim korzystaniu z naszej witryny naszym partnerom.',
            cookieDeny: 'Odrzuć',
            cookieCustomize: 'Dostosuj',
            cookieAccept: 'Akceptuj wszystkie',
            cookieDetailsTitle: 'Dostosuj zgodę',
            cookieNecessaryDesc: 'Te pliki cookie są niezbędne do prawidłowego funkcjonowania strony i nie mogą zostać wyłączone.',
            cookieAnalyticsDesc: 'Te pliki cookie pozwalają nam analizować ruch na stronie i ulepszać jej działanie.',
            cookieMarketingDesc: 'Te pliki cookie pomagają nam dostarczać spersonalizowane reklamy, które mogą Cię zainteresować.',
            cookieSave: 'Zapisz ustawienia',
            
            // Polityka Prywatności Tłumaczenia
            privacyTitle: 'Polityka Prywatności i Plików Cookies Strony Internetowej Amber & Azure Residences',
            privacyLastUpdated: 'Data ostatniej aktualizacji: 16.07.2025 r.',
            privacyS1Title: '§1 Postanowienia Ogólne',
            privacyS1P1: 'Niniejsza polityka prywatności (zwana dalej „Polityką”) ma charakter informacyjny i określa zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies na stronie internetowej dostępnej pod adresem: https://aaresidences.github.io/amberazure/ (zwanej dalej „Serwisem”).',
            privacyS1P2: 'Dbamy o Twoją prywatność i bezpieczeństwo Twoich danych osobowych, przetwarzając je zgodnie z wymogami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnym przepływem takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych), zwanego dalej „RODO”.',
            privacyS2Title: '§2 Administrator Danych Osobowych',
            privacyS2P1: 'Administratorem Twoich danych osobowych jest MTM Dariusz Seferyński, prowadzący działalność gospodarczą pod adresem: ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka (zwany dalej „Administratorem”).',
            privacyS2P2: 'We wszystkich sprawach związanych z przetwarzaniem danych osobowych oraz realizacją przysługujących Ci praw możesz kontaktować się z Administratorem:',
            privacyS2Email: 'Pocztą elektroniczną: amberazure.residences@gmail.com',
            privacyS2Phone: 'Telefonicznie: +48 602 229 707',
            privacyS2Address: 'Pocztą tradycyjną: ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka',
            privacyS3Title: '§3 Cele, Podstawy Prawne i Okres Przetwarzania Danych',
            privacyS3P1: 'Administrator przetwarza Twoje dane osobowe w następujących celach:',
            privacyS3S1Title: 'Obsługa zapytań i rezerwacji:',
            privacyS3S1P1: 'Cel przetwarzania: Udzielanie odpowiedzi na zapytania skierowane poprzez e-mail lub telefon, przedstawienie oferty oraz zawarcie i realizacja umowy o świadczenie usług (rezerwacji).',
            privacyS3S1P2: 'Zakres danych: Imię i nazwisko, adres e-mail, numer telefonu, treść wiadomości oraz inne dane podane dobrowolnie w trakcie kontaktu.',
            privacyS3S1P3: 'Podstawa prawna: Art. 6 ust. 1 lit. b RODO – przetwarzanie jest niezbędne do podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy lub do wykonania umowy.',
            privacyS3S1P4: 'Okres przechowywania: Dane będą przechowywane przez czas niezbędny do obsługi zapytania. W przypadku zawarcia umowy, dane będą przechowywane przez cały okres jej obowiązywania, a po jej zakończeniu – przez okres wymagany przepisami prawa, np. dla celów podatkowych i księgowych (tj. 5 lat, licząc od końca roku kalendarzowego, w którym upłynął termin płatności podatku).',
            privacyS3S2Title: 'Działania marketingowe:',
            privacyS3S2P1: 'Cel przetwarzania: Przesyłanie informacji handlowych i marketingowych dotyczących oferty Administratora.',
            privacyS3S2P2: 'Zakres danych: Adres e-mail, numer telefonu.',
            privacyS3S2P3: 'Forma kontaktu: Wiadomości e-mail, SMS, wiadomości w aplikacjach WhatsApp oraz Messenger.',
            privacyS3S2P4: 'Podstawa prawna: Art. 6 ust. 1 lit. a RODO – Twoja dobrowolna zgoda. Wyrażenie zgody na marketing jest całkowicie dobrowolne.',
            privacyS3S2P5: 'Okres przechowywania: Do momentu wycofania przez Ciebie zgody na przetwarzanie danych w tym celu. Uwaga: Przesyłanie informacji handlowych za pomocą środków komunikacji elektronicznej (e-mail, SMS, WhatsApp, Messenger) wymaga Twojej odrębnej, wyraźnej zgody zgodnie z Ustawą o świadczeniu usług drogą elektroniczną oraz Prawem telekomunikacyjnym.',
            privacyS4Title: '§4 Odbiorcy Danych',
            privacyS4P1: 'W celu prawidłowego funkcjonowania Serwisu i świadczenia usług, Administrator korzysta z usług podmiotów zewnętrznych. Przekazujemy Twoje dane wyłącznie wtedy, gdy jest to niezbędne do realizacji danego celu przetwarzania i tylko w koniecznym zakresie.',
            privacyS4P2: 'Odbiorcami Twoich danych mogą być:',
            privacyS4R1: 'Dostawca hostingu: GitHub, Inc. – w celu przechowywania danych Serwisu na serwerze.',
            privacyS4R2: 'Dostawcy komunikatorów internetowych: Meta Platforms, Inc. (właściciel WhatsApp i Messenger) – w celu prowadzenia komunikacji marketingowej, jeśli wyrazisz na to zgodę.',
            privacyS4R3: 'Operatorzy telekomunikacyjni: w celu realizacji wysyłki marketingowych wiadomości SMS.',
            privacyS4P3: 'Twoje dane są przetwarzane przez naszych partnerów z zachowaniem wszelkich zasad bezpieczeństwa i zgodnie z umowami powierzenia przetwarzania danych.',
            privacyS5Title: '§5 Prawa Osób, Których Dane Dotyczą',
            privacyS5P1: 'W związku z przetwarzaniem Twoich danych osobowych przysługują Ci następujące prawa:',
            privacyS5R1: 'Prawo dostępu do danych (art. 15 RODO).',
            privacyS5R2: 'Prawo do sprostowania danych (art. 16 RODO).',
            privacyS5R3: 'Prawo do usunięcia danych („prawo do bycia zapomnianym”) (art. 17 RODO).',
            privacyS5R4: 'Prawo do ograniczenia przetwarzania (art. 18 RODO).',
            privacyS5R5: 'Prawo do przenoszenia danych (art. 20 RODO).',
            privacyS5R6: 'Prawo do wniesienia sprzeciwu wobec przetwarzania danych (art. 21 RODO).',
            privacyS5R7: 'Prawo do wycofania zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. Dotyczy to w szczególności przetwarzania danych w celach marketingowych.',
            privacyS5R8: 'Prawo do wniesienia skargi do organu nadzorczego, tj. Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa), jeśli uznasz, że przetwarzanie Twoich danych narusza przepisy RODO.',
            privacyS5P2: 'Aby skorzystać z powyższych praw, skontaktuj się z Administratorem, korzystając z danych kontaktowych podanych w §2.',
            privacyS6Title: '§6 Pliki Cookies',
            privacyS6P1: 'Serwis nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem informacji zawartych w plikach cookies.',
            privacyS6P2: 'Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w Twoim urządzeniu końcowym (np. komputerze, smartfonie) i przeznaczone są do korzystania ze stron internetowych Serwisu.',
            privacyS6P3: 'W ramach Serwisu stosowane są przede wszystkim niezbędne pliki cookies, które są wymagane do prawidłowego działania strony. Serwis jest hostowany na platformie GitHub Pages i może wykorzystywać techniczne pliki cookies do utrzymania sesji i zapewnienia podstawowych funkcjonalności.',
            privacyS6P4: 'Serwis nie wykorzystuje plików cookies do celów analitycznych (śledzenia ruchu) ani marketingowych (wyświetlania spersonalizowanych reklam).',
            privacyS6P5: 'Jeśli na stronie znajduje się baner cookies, masz możliwość zarządzania swoimi preferencjami.',
            privacyS7Title: '§7 Przekazywanie Danych Poza Europejski Obszar Gospodarczy (EOG)',
            privacyS7P1: 'W związku z korzystaniem przez Administratora z usług podmiotów takich jak GitHub, Inc. oraz Meta Platforms, Inc. (WhatsApp, Messenger), Twoje dane osobowe mogą być przekazywane do państw trzecich, w szczególności do Stanów Zjednoczonych Ameryki (USA).',
            privacyS7P2: 'Przekazywanie danych odbywa się na podstawie mechanizmów zgodnych z RODO, przede wszystkim z wykorzystaniem standardowych klauzul umownych (SCC) zatwierdzonych przez Komisję Europejską, które zapewniają odpowiedni poziom ochrony Twoich danych osobowych.',
            privacyS8Title: '§8 Postanowienia Końcowe',
            privacyS8P1: 'Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. Zmiany mogą być podyktowane rozwojem technologii, zmianami w przepisach prawa lub rozwojem Serwisu.',
            privacyS8P2: 'O wszelkich zmianach będziemy informować poprzez opublikowanie nowej wersji Polityki w Serwisie.',
            privacyS8P3: 'Niniejsza Polityka obowiązuje od dnia 16.07.2025 r.',
        }
    };
    
    // === Logika Menu Hamburger ===
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-links');

    const toggleMenu = () => {
        const isOpen = navMenu.classList.toggle('is-open');
        hamburgerBtn.classList.toggle('is-active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', (e) => {
        const isClickInsideMenu = navMenu.contains(e.target);
        const isClickOnHamburger = hamburgerBtn.contains(e.target);
        if (navMenu.classList.contains('is-open') && !isClickInsideMenu && !isClickOnHamburger) {
            toggleMenu();
        }
    });

    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && navMenu.classList.contains('is-open')) {
            toggleMenu();
        }
    });


    // === Logika Przełączania Języków ===
    const languageSwitcher = document.querySelector('.language-switcher');
    const flags = languageSwitcher.querySelectorAll('img');
    const translatableElements = document.querySelectorAll('[data-key]');

    const setLanguage = (lang) => {
        const langTranslations = translations[lang];
        if (!langTranslations) return;

        translatableElements.forEach(element => {
            const key = element.dataset.key;
            if (langTranslations[key]) {
                 element.innerHTML = langTranslations[key];
            }
        });

        flags.forEach(flag => {
            flag.classList.toggle('lang-active', flag.dataset.lang === lang);
        });
        
        document.documentElement.lang = lang;
        localStorage.setItem('preferredLanguage', lang);
    };

    languageSwitcher.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && e.target.dataset.lang) {
            const selectedLang = e.target.dataset.lang;
            setLanguage(selectedLang);
        }
    });

    // === Logika Monitu Cookie ===
    const cookiePopup = document.getElementById('cookie-consent-popup');
    const cookieOverlay = document.getElementById('cookie-overlay');
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');
    const customizeBtn = document.getElementById('cookie-customize');
    const saveBtn = document.getElementById('cookie-save');
    const mainCookieContent = document.getElementById('cookie-main');
    const detailsCookieContent = document.getElementById('cookie-details');

    const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    const getCookie = (name) => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i=0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    const hidePopup = () => {
        if(cookiePopup) cookiePopup.classList.remove('active');
        if(cookieOverlay) cookieOverlay.classList.remove('active');
    };

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            setCookie('cookie_consent_given', 'true', 365);
            setCookie('cookie_analytics', 'true', 365);
            setCookie('cookie_marketing', 'true', 365);
            hidePopup();
        });
    }

    if(rejectBtn) {
        rejectBtn.addEventListener('click', () => {
            setCookie('cookie_consent_given', 'true', 365);
            setCookie('cookie_analytics', 'false', 365);
            setCookie('cookie_marketing', 'false', 365);
            hidePopup();
        });
    }

    if(customizeBtn) {
        customizeBtn.addEventListener('click', () => {
            if(mainCookieContent) mainCookieContent.style.display = 'none';
            if(detailsCookieContent) detailsCookieContent.style.display = 'block';
        });
    }
    
    if(saveBtn) {
        saveBtn.addEventListener('click', () => {
            const analyticsConsent = document.getElementById('cookie-analytics').checked;
            const marketingConsent = document.getElementById('cookie-marketing').checked;
            setCookie('cookie_consent_given', 'true', 365);
            setCookie('cookie_analytics', analyticsConsent, 365);
            setCookie('cookie_marketing', marketingConsent, 365);
            hidePopup();
        });
    }

    if (!getCookie('cookie_consent_given') && cookiePopup) {
        setTimeout(() => {
            cookiePopup.classList.add('active');
            cookieOverlay.classList.add('active');
        }, 2000);
    }

    // === NOWA LOGIKA GALERII (BEZ ZEWNĘTRZNYCH BIBLIOTEK) ===
    // Funkcja initializeGallery jest teraz używana tylko dla Azure Suite
    function initializeGallery(suiteId) {
        const gallery = document.getElementById(suiteId);
        if (!gallery) return;

        const mainImage = gallery.querySelector('.gallery-main-image img');
        const thumbnailsContainer = gallery.querySelector('.thumbnail-scroll-container');
        const thumbnails = gallery.querySelectorAll('.thumbnail-item');
        const scrollLeftBtn = gallery.querySelector('.scroll-arrow.left');
        const scrollRightBtn = gallery.querySelector('.scroll-arrow.right');

        if (!mainImage || !thumbnailsContainer || thumbnails.length === 0) {
            return;
        }

        // Obsługa kliknięcia w miniaturkę
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                const newImageSrc = this.dataset.image;

                // Usuń klasę aktywną ze wszystkich miniaturek w tej galerii
                thumbnails.forEach(t => t.classList.remove('active-thumb'));
                // Dodaj klasę aktywną do klikniętej miniaturki
                this.classList.add('active-thumb');

                // Efekt płynnego przejścia dla głównego obrazka
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.src = newImageSrc;
                    mainImage.style.opacity = '1';
                }, 300); // Czas musi być zgodny z transition w CSS
            });
        });

        // Obsługa przewijania strzałkami
        if (scrollLeftBtn && scrollRightBtn) {
            scrollLeftBtn.addEventListener('click', () => {
                thumbnailsContainer.scrollBy({ left: -200, behavior: 'smooth' });
            });
    
            scrollRightBtn.addEventListener('click', () => {
                thumbnailsContainer.scrollBy({ left: 200, behavior: 'smooth' });
            });
        }
    }
    
    // === Logika ładowania kalendarzy (Poprawka dla Safari) ===
    // Funkcja loadCalendars jest teraz używana tylko dla Azure Suite
    function loadCalendars() {
        // Pobieramy tylko kalendarz Azure
        const azureCalendarWrapper = document.getElementById('azure-calendar-wrapper');
        const calendarWrappers = azureCalendarWrapper ? [azureCalendarWrapper] : [];
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const wrapper = entry.target;
                        const iframeSrc = wrapper.dataset.src;
                        if (iframeSrc && wrapper.childElementCount === 0) {
                            const iframe = document.createElement('iframe');
                            iframe.setAttribute('src', iframeSrc);
                            iframe.setAttribute('style', 'border: 0');
                            iframe.setAttribute('width', '800');
                            iframe.setAttribute('height', '600');
                            iframe.setAttribute('frameborder', '0');
                            iframe.setAttribute('scrolling', 'no');
                            wrapper.appendChild(iframe);
                        }
                        observer.unobserve(wrapper);
                    }
                });
            });

            calendarWrappers.forEach(wrapper => {
                observer.observe(wrapper);
            });
        } else {
            // Fallback dla starszych przeglądarek
            calendarWrappers.forEach(wrapper => {
                 const iframeSrc = wrapper.dataset.src;
                if (iframeSrc && wrapper.childElementCount === 0) {
                    const iframe = document.createElement('iframe');
                    iframe.setAttribute('src', iframeSrc);
                    iframe.setAttribute('style', 'border: 0');
                    iframe.setAttribute('width', '800');
                    iframe.setAttribute('height', '600');
                    iframe.setAttribute('frameborder', '0');
                    iframe.setAttribute('scrolling', 'no');
                    wrapper.appendChild(iframe);
                }
            });
        }
    }

    // === Logika Pływającego Przycisku CTA ===
    const ctaButton = document.getElementById('cta-button');
    const ctaBubble = document.getElementById('cta-bubble');
    const closeBubble = document.getElementById('close-bubble');

    if(ctaButton && ctaBubble && closeBubble) {
        ctaButton.addEventListener('click', (e) => {
            e.stopPropagation();
            ctaBubble.classList.toggle('active');
        });

        closeBubble.addEventListener('click', () => {
            ctaBubble.classList.remove('active');
        });

        document.addEventListener('click', (e) => {
            if (!ctaButton.contains(e.target) && !ctaBubble.contains(e.target)) {
                ctaBubble.classList.remove('active');
            }
        });
    }


    // Inicjalizacja galerii tylko dla Azure
    initializeGallery('azure-suite');

    // Ładowanie kalendarzy tylko dla Azure
    loadCalendars();


    // === Polityka Prywatności ===
    const privacyPage = document.getElementById('privacy-policy-page');
    const privacyLink = document.querySelector('.privacy-link');
    const privacyCloseBtn = document.querySelector('.privacy-close-btn');

    if (privacyLink) {
        privacyLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (privacyPage) privacyPage.classList.add('is-visible');
        });
    }

    if (privacyCloseBtn) {
        privacyCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (privacyPage) privacyPage.classList.remove('is-visible');
        });
    }

    // Ustawienie języka na starcie (z pamięci lub domyślny)
    const savedLang = localStorage.getItem('preferredLanguage') || 'pl';
    setLanguage(savedLang);
});
