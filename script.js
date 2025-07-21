document.addEventListener('DOMContentLoaded', () => {

    // === SŁOWNIK TŁUMACZEŃ ===
    const translations = {
        pl: {
            pageTitle: 'Amber & Azure Residences | Luksusowe Apartamenty w Sea & Forest',
            logo: 'Amber & Azure Residences',
            navPhilosophy: 'Filozofia',
            navApartments: 'Apartamenty',
            navAzureCalendar: 'Kalendarz Azure',
            navAmenities: 'Udogodnienia',
            navAttractions: 'Atrakcje',
            navPracticalInfo: 'Informacje praktyczne', // Nowy element nawigacji
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
            amberSoonTitle: 'Apartament Amber Suite - Wkrótce Dostępny!',
            amberSoonDesc: 'Z niecierpliwością oczekujemy na otwarcie Apartamentu Amber Suite, który wkrótce będzie gotowy, aby gościć Państwa w swoich progach. Ten zupełnie nowy, wyjątkowy apartament, inspirowany ciepłem bursztynu, oferuje niezapomniane wrażenia z pobytu w sercu Wolińskiego Parku Narodowego. Idealny dla tych, którzy cenią sobie przytulny luksus i bliskość natury.',
            amberSoonContact: 'Chcesz być pierwszym, który dowie się o dostępności i specjalnych ofertach? Skontaktuj się z nami już dziś, aby wyrazić swoje zainteresowanie i otrzymać powiadomienie o otwarciu rezerwacji!',

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
            additionalAttractionsTitle: 'Dodatkowe atrakcje (za opłatą)',
            additionalAttractions1: 'Restauracja For Rest.',
            additionalAttractions2: 'Lobby Cafe & Bar.',
            additionalAttractions3: 'Wypożyczalnia rowerów.',
            additionalAttractions4: 'SPA Shept.',
            mealsTitle: 'Wyżywienie',
            mealsDesc: 'Pakiet "Pobyt bez wyżywienia" nie obejmuje posiłków. Apartamenty wyposażone są w aneksy kuchenne umożliwiające samodzielne przygotowywanie posiłków.',
            importantInfoTitle: 'Ważne informacje',
            importantInfo1: 'Zameldowanie od godziny 16:00, wymeldowanie do godziny 11:00.',
            importantInfo2: 'Wymagana jest przedpłata w wysokości 30% wartości rezerwacji.',
            importantInfo3: 'Bezkosztowa anulacja możliwa do 7 dni przed przyjazdem.',

            amenitiesComplexTitle: 'Udogodnienia Kompleksu Sea & Forest',
            amenitiesComplexSubtitle: 'Jako Goście Amber & Azure Residences macie Państwo nieograniczony dostęp do wszystkich atrakcji i udogodnień resortu.',
            wellnessPoolsTitle: 'Dwa Baseny i Jacuzzi',
            wellnessPoolsDesc: 'Do Państwa dyspozycji oddajemy całoroczny, podgrzewany basen zewnętrzny, basen wewnętrzny z brodzikiem dla dzieci oraz dwa zewnętrzne jacuzzi, idealne na relaks pod gwiazdami.',
            wellnessSaunaTitle: 'Świat Saun',
            wellnessSaunaDesc: 'Poczujcie, jak uchodzi z Was całe napięcie w saunie o delikatnym, leśnym aromacie żywicy. To prawdziwy detoks dla ciała i umysłu.',
            wellnessSpaTitle: 'Strefa SPA "Shept"',
            wellnessSpaDesc: 'Dwa kameralne gabinety, w których można doświadczyć autorskich zabiegów i masaży inspirowanych bogactwem lasu, aby zapewnić pełną regenerację.',
            kidsAmenitiesTitle: 'Udogodnienia dla dzieci', // Nowe udogodnienie
            kidsAmenitiesDesc: 'Dla najmłodszych Gości przygotowaliśmy salę zabaw, zewnętrzny plac zabaw oraz sezonowe programy animacyjne, zapewniające rozrywkę na najwyższym poziomie.', // Nowe udogodnienie
            sportEntertainmentTitle: 'Sport i rozrywka', // Nowe udogodnienie
            sportEntertainmentDesc: 'Kompleks oferuje siłownię, baseny, a także dostęp do terenów zielonych idealnych do aktywności na świeżym powietrzu, takich jak spacery i jogging.', // Nowe udogodnienie
            restoBarTitle: "Restauracja i Bar \"For Rest\"",
            restoBarDesc: 'Restauracja a\'la carte serwująca dania oparte na lokalnych, sezonowych produktach oraz elegancki Lobby Café & Bar na poranną kawę lub wieczornego drinka.',
            attractionsTitle: 'Odkryj Skarby Wyspy Wolin',
            attractionsSubtitle: 'Wyjątkowa lokalizacja zapewnia nieograniczone możliwości odkrywania uroków regionu.',
            attraction1Title: 'Plaża na Wyciągnięcie Ręki',
            attraction1Desc: 'Na piękną, szeroką plażę dotrzesz malowniczym spacerem przez las lub korzystając z komfortowego, cichego busika elektrycznego.',
            attraction2Title: 'Woliński Park Narodowy',
            attraction2Desc: 'Ruszaj na szlaki prosto z apartamentu. Czekają na Ciebie klif Gosaň, Jezioro Turkusowe oraz Zagroda Pokazowa Żubrów.',
            attraction3Title: 'Uroki Międzyzdrojów',
            attraction3Desc: 'Spaceruj słynną Aleją Gwiazd, wejdź na 395-metrowe molo, odwiedź Oceanarium i Gabinet Figur Woskowych.',
            infoTitle: 'Informacje praktyczne',
            additionallyPaidTitle: 'Dodatkowo płatne', // Nowe
            infoParking: 'Miejsce parkingowe w garażu podziemnym (70 PLN/doba).', // Zaktualizowano
            infoPets: 'Pobyt zwierzęcia (100 PLN/doba).', // Zaktualizowano
            goodToKnowTitle: 'Warto wiedzieć', // Nowe
            goodToKnowWifi: 'Szybkie, darmowe Wi-Fi dostępne w całym apartamencie.', // Nowe
            goodToKnowBedding: 'Pościel i ręczniki wliczone w cenę.', // Nowe
            goodToKnowCleaning: 'Sprzątanie końcowe wliczone w cenę.', // Nowe
            locationTitle: 'Nasza Lokalizacja',
            locationDesc: 'Znajdziesz nas w kompleksie Sea & Forest, w otulinie Wolińskiego Parku Narodowego, zaledwie krótki spacer od plaży.',
            contactTitle: 'Zarezerwuj Pobyt',
            contactDesc: 'Wybierz Amber lub Azure Suite i zanurz się w luksusie, spokoju i naturze. Czekamy na Twój kontakt.',
            contactRole: 'Twoja Luksusowa Przystań w Sea & Forest',
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
        },
        en: {
            pageTitle: 'Amber & Azure Residences | Luxury Apartments in Sea & Forest',
            logo: 'Amber & Azure Residences',
            navPhilosophy: 'Philosophy',
            navApartments: 'Apartments',
            navAzureCalendar: 'Azure Calendar',
            navAmenities: 'Amenities',
            navAttractions: 'Attractions',
            navPracticalInfo: 'Practical Info', // New nav item
            navContact: 'Contact',
            videoError: 'Your browser does not support background video.',
            heroTitle: 'Amber & Azure Residences',
            heroSubtitle: 'Your Haven, Where the Forest Kisses the Sea',
            heroCta: 'Discover the Suites',
            philosophyTitle: 'True luxury is time and space.',
            philosophySubtitle: 'At Amber & Azure Residences, we believe that authentic rest is born from harmony with nature. We have created two unique apartments in the heart of the Sea & Forest complex that allow you to slow down, breathe, and reconnect with yourself and your surroundings.',
            introText: 'As our Guests, you receive keys not only to a luxurious interior but also to the wealth of amenities of the entire resort, nestled in the picturesque buffer zone of the Woliński National Park. This is an invitation to experience, feel, and draw from nature to the fullest.',
            apartmentsMainTitle: 'Your Private Apartments',
            apartmentsMainSubtitle: 'Each of our apartments tells a unique story through design, comfort, and closeness to nature. Choose your ideal space for relaxation.',
            
            // Updated translations for "Amber coming soon" section
            amberSoonTitle: 'Amber Suite Apartment - Coming Soon!',
            amberSoonDesc: 'We are eagerly awaiting the opening of the Amber Suite Apartment, which will soon be ready to welcome you. This brand new, unique apartment, inspired by the warmth of amber, offers an unforgettable stay in the heart of the Woliński National Park. Perfect for those who appreciate cozy luxury and proximity to nature.',
            amberSoonContact: 'Want to be the first to know about availability and special offers? Contact us today to express your interest and receive a notification when bookings open!',

            azureTitle: 'Azure Suite Apartment',
            azureDesc: 'Immerse yourself in classic elegance combined with modern functionality. The 37 m² Azure apartment is a space that envelops and allows you to fully enjoy every moment of your stay. Bright, spacious interiors and carefully selected accessories create an atmosphere of peace, and the impressive, 15-square-meter terrace with a forest view is the perfect place for a morning coffee and evening relaxation.',
            azureDetail1: '<b>Living Room:</b> Spacious and bright, with a comfortable sofa, an elegant coffee table, and a modern TV.',
            azureDetail2: '<b>Kitchenette:</b> Full freedom and independence thanks to a modern hob, dishwasher, and complete equipment.',
            azureDetail3: '<b>Dining Area:</b> A beautiful, round table with chairs creates a cozy corner for shared meals.',
            azureDetail4: '<b>Bedroom:</b> A luxurious double bed (160x200 cm) and a separate television for complete relaxation.',
            azureDetail5: '<b>Terrace:</b> An impressive, 15-square-meter terrace with a view of the forest, accessible from both rooms.',
            azureDetail6: '<b>Air Conditioning:</b> Individually controlled for the perfect temperature at any time of the year.',
            wifi: '<b>Internet:</b> Fast, free Wi-Fi available throughout the apartment.',
            calendarTitle: 'Plan Your Getaway',
            calendarDesc: 'The calendar below reflects real-time availability. We invite you to make a reservation to ensure unforgettable moments in the heart of nature.',
            ctaTitle: 'Want to book your stay?',
            ctaDesc: 'Contact us directly:<br><a href="mailto:amberazure.residences@gmail.com">amberazure.residences@gmail.com</a><br>Darek: <a href="tel:+48602229707">+48 602 229 707</a><br>Beata: <a href="tel:+48606410041">+48 606 410 041</a>',
            
            // New and updated translations for package section
            packageInfoTitle: 'Stay without meals - free cancellation',
            packageInfoSubtitle: 'Package details that will allow you to enjoy freedom and nature.',
            packageIncludedTitle: 'Included in the package',
            packageIncluded1: 'Accommodation in comfortable apartments with a fully equipped kitchenette, allowing guests to prepare their own meals.',
            packageIncluded2: 'Unlimited access to the Wellness, Aqua & Sport complex (heated outdoor pool, indoor pool, jacuzzi, saunas, and gym).',
            packageIncluded3: 'Access to attractions for children (playroom, outdoor playground, seasonal animation programs).',
            packageIncluded4: 'Location in a quiet, forest area with direct access to the Woliński National Park.',
            additionalAttractionsTitle: 'Additional attractions (for a fee)',
            additionalAttractions1: 'For Rest Restaurant.',
            additionalAttractions2: 'Lobby Cafe & Bar.',
            additionalAttractions3: 'Bicycle rental.',
            additionalAttractions4: 'SPA Shept.',
            mealsTitle: 'Meals',
            mealsDesc: 'The "Stay without meals" package does not include meals. Apartments are equipped with kitchenettes allowing guests to prepare their own meals.',
            importantInfoTitle: 'Important information',
            importantInfo1: 'Check-in from 4:00 PM, check-out until 11:00 AM.',
            importantInfo2: 'A prepayment of 30% of the reservation value is required.',
            importantInfo3: 'Free cancellation possible up to 7 days before arrival.',

            amenitiesComplexTitle: 'Sea & Forest Complex Amenities',
            amenitiesComplexSubtitle: 'As Guests of Amber & Azure Residences, you have unlimited access to all the attractions and amenities of the resort.',
            wellnessPoolsTitle: 'Two Pools and Jacuzzi',
            wellnessPoolsDesc: 'We offer a year-round, heated outdoor pool, an indoor pool with a paddling area for children, and two outdoor jacuzzis, perfect for relaxing under the stars.',
            wellnessSaunaTitle: 'World of Saunas',
            wellnessSaunaDesc: 'Feel the tension release in the sauna with a delicate, forest aroma of resin. It is a true detox for body and mind.',
            wellnessSpaTitle: 'SPA Zone "Shept"',
            wellnessSpaDesc: 'Two intimate treatment rooms where you can experience original treatments and massages inspired by the richness of the forest to ensure full regeneration.',
            kidsAmenitiesTitle: 'Amenities for children',
            kidsAmenitiesDesc: 'For our youngest guests, we have prepared a playroom, an outdoor playground, and seasonal animation programs, ensuring top-level entertainment.',
            sportEntertainmentTitle: 'Sport and entertainment',
            sportEntertainmentDesc: 'The complex offers a gym, swimming pools, and access to green areas ideal for outdoor activities such as walking and jogging.',
            restoBarTitle: 'Restaurant and Bar "For Rest"',
            restoBarDesc: 'An a\'la carte restaurant serving dishes based on local, seasonal products, and an elegant Lobby Café & Bar for a morning coffee or an evening drink.',
            attractionsTitle: 'Discover the Treasures of Wolin Island',
            attractionsSubtitle: 'The unique location provides unlimited opportunities to discover the charms of the region.',
            attraction1Title: 'Beach at Your Fingertips',
            attraction1Desc: 'You can reach the beautiful, wide beach via a scenic walk through the forest or by using a comfortable, quiet electric shuttle bus.',
            attraction2Title: 'Woliński National Park',
            attraction2Desc: 'Hit the trails straight from your apartment. The Gosań cliff, the Turquoise Lake, and the European Bison Show Reserve await you.',
            attraction3Title: 'Charms of Międzyzdroje',
            attraction3Desc: 'Stroll along the famous Avenue of Stars, walk the 395-meter pier, visit the Oceanarium, and the Wax Museum.',
            infoTitle: 'Practical Information',
            additionallyPaidTitle: 'Additionally paid',
            infoParking: 'Parking space in the underground garage (70 PLN/day).',
            infoPets: 'Pet stay (100 PLN/day).',
            goodToKnowTitle: 'Good to know',
            goodToKnowWifi: 'Fast, free Wi-Fi available throughout the apartment.',
            goodToKnowBedding: 'Bed linen and towels included in the price.',
            goodToKnowCleaning: 'Final cleaning included in the price.',
            locationTitle: 'Our Location',
            locationDesc: 'You will find us in the Sea & Forest complex, in the buffer zone of the Woliński National Park, just a short walk from the beach.',
            contactTitle: 'Book Your Stay',
            contactDesc: 'Choose the Amber or Azure Suite and immerse yourself in luxury, peace, and nature. We await your contact.',
            contactRole: 'Your Luxury Haven at Sea & Forest',
            contactBtnMail: 'Email: amberazure.residences@gmail.com',
            contactBtnCallDarek: 'Darek: +48 602 229 707',
            contactBtnCallBeata: 'Beata: +48 606 410 041',
            footerRights: '© 2025 Amber & Azure Residences. All rights reserved.',
            footerPrivacy: 'Privacy Policy',
            cookieTitle: 'We value your privacy', cookieText: 'We use cookies to personalize content, provide social media features, and analyze our traffic. We also share information about your use of our site with our partners.', cookieDeny: 'Deny', cookieCustomize: 'Customize', cookieAccept: 'Allow all',
            cookieDetailsTitle: 'Customize consent', cookieNecessaryDesc: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
            cookieAnalyticsDesc: 'These cookies allow us to analyze site traffic and improve its performance.',
            cookieMarketingDesc: 'These cookies help us deliver personalized ads that may be of interest to you.',
            cookieSave: 'Save settings',

            // Privacy Policy Translations
            privacyTitle: 'Privacy and Cookies Policy of Amber & Azure Residences Website',
            privacyLastUpdated: 'Last updated: 16.07.2025',
            privacyS1Title: '§1 General Provisions',
            privacyS1P1: 'This privacy policy (hereinafter referred to as the "Policy") is for informational purposes and defines the rules for processing personal data and using cookies on the website available at: https://aaresidences.github.io/amberazure/ (hereinafter referred to as the "Service").',
            privacyS1P2: 'We care about your privacy and the security of your personal data, processing it in accordance with the requirements of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation), hereinafter referred to as "GDPR".',
            privacyS2Title: '§2 Personal Data Administrator',
            privacyS2P1: 'The administrator of your personal data is MTM Dariusz Seferyński, conducting business activity at: ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka (hereinafter referred to as the "Administrator").',
            privacyS2P2: 'In all matters related to the processing of personal data and the exercise of your rights, you can contact the Administrator:',
            privacyS2Email: 'By email: amberazure.residences@gmail.com',
            privacyS2Phone: 'By phone: +48 602 229 707',
            privacyS2Address: 'By traditional mail: ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka',
            privacyS3Title: '§3 Purposes, Legal Bases, and Period of Data Processing',
            privacyS3P1: 'The Administrator processes your personal data for the following purposes:',
            privacyS3S1Title: 'Handling inquiries and reservations:',
            privacyS3S1P1: 'Purpose of processing: Responding to inquiries sent via email or phone, presenting an offer, and concluding and performing a service agreement (reservation).',
            privacyS3S1P2: 'Scope of data: Name and surname, email address, phone number, content of the message, and other data provided voluntarily during contact.',
            privacyS3S1P3: 'Legal basis: Art. 6 para. 1 lit. b GDPR – processing is necessary for taking action at the request of the data subject prior to entering into a contract or for the performance of a contract.',
            privacyS3S1P4: 'Storage period: Data will be stored for the time necessary to handle the inquiry. In the case of concluding a contract, data will be stored for the entire period of its validity, and after its termination – for the period required by law, e.g., for tax and accounting purposes (i.e., 5 years, counting from the end of the calendar year in which the tax payment deadline expired).',
            privacyS3S2Title: 'Marketing activities:',
            privacyS3S2P1: 'Purpose of processing: Sending commercial and marketing information regarding the Administrator\'s offer.',
            privacyS3S2P2: 'Scope of data: Email address, phone number.',
            privacyS3S2P3: 'Form of contact: Wiadomości e-mail, SMS, wiadomości w aplikacjach WhatsApp oraz Messenger.',
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
        },
        en: {
            pageTitle: 'Amber & Azure Residences | Luxury Apartments in Sea & Forest',
            logo: 'Amber & Azure Residences',
            navPhilosophy: 'Philosophy',
            navApartments: 'Apartments',
            navAzureCalendar: 'Azure Calendar',
            navAmenities: 'Amenities',
            navAttractions: 'Attractions',
            navPracticalInfo: 'Practical Info', // New nav item
            navContact: 'Contact',
            videoError: 'Your browser does not support background video.',
            heroTitle: 'Amber & Azure Residences',
            heroSubtitle: 'Your Haven, Where the Forest Kisses the Sea',
            heroCta: 'Discover the Suites',
            philosophyTitle: 'True luxury is time and space.',
            philosophySubtitle: 'At Amber & Azure Residences, we believe that authentic rest is born from harmony with nature. We have created two unique apartments in the heart of the Sea & Forest complex that allow you to slow down, breathe, and reconnect with yourself and your surroundings.',
            introText: 'As our Guests, you receive keys not only to a luxurious interior but also to the wealth of amenities of the entire resort, nestled in the picturesque buffer zone of the Woliński National Park. This is an invitation to experience, feel, and draw from nature to the fullest.',
            apartmentsMainTitle: 'Your Private Apartments',
            apartmentsMainSubtitle: 'Each of our apartments tells a unique story through design, comfort, and closeness to nature. Choose your ideal space for relaxation.',
            
            // Updated translations for "Amber coming soon" section
            amberSoonTitle: 'Amber Suite Apartment - Coming Soon!',
            amberSoonDesc: 'We are eagerly awaiting the opening of the Amber Suite Apartment, which will soon be ready to welcome you. This brand new, unique apartment, inspired by the warmth of amber, offers an unforgettable stay in the heart of the Woliński National Park. Perfect for those who appreciate cozy luxury and proximity to nature.',
            amberSoonContact: 'Want to be the first to know about availability and special offers? Contact us today to express your interest and receive a notification when bookings open!',

            azureTitle: 'Azure Suite Apartment',
            azureDesc: 'Immerse yourself in classic elegance combined with modern functionality. The 37 m² Azure apartment is a space that envelops and allows you to fully enjoy every moment of your stay. Bright, spacious interiors and carefully selected accessories create an atmosphere of peace, and the impressive, 15-square-meter terrace with a forest view is the perfect place for a morning coffee and evening relaxation.',
            azureDetail1: '<b>Living Room:</b> Spacious and bright, with a comfortable sofa, an elegant coffee table, and a modern TV.',
            azureDetail2: '<b>Kitchenette:</b> Full freedom and independence thanks to a modern hob, dishwasher, and complete equipment.',
            azureDetail3: '<b>Dining Area:</b> A beautiful, round table with chairs creates a cozy corner for shared meals.',
            azureDetail4: '<b>Bedroom:</b> A luxurious double bed (160x200 cm) and a separate television for complete relaxation.',
            azureDetail5: '<b>Terrace:</b> An impressive, 15-square-meter terrace with a view of the forest, accessible from both rooms.',
            azureDetail6: '<b>Air Conditioning:</b> Individually controlled for the perfect temperature at any time of the year.',
            wifi: '<b>Internet:</b> Fast, free Wi-Fi available throughout the apartment.',
            calendarTitle: 'Plan Your Getaway',
            calendarDesc: 'The calendar below reflects real-time availability. We invite you to make a reservation to ensure unforgettable moments in the heart of nature.',
            ctaTitle: 'Want to book your stay?',
            ctaDesc: 'Contact us directly:<br><a href="mailto:amberazure.residences@gmail.com">amberazure.residences@gmail.com</a><br>Darek: <a href="tel:+48602229707">+48 602 229 707</a><br>Beata: <a href="tel:+48606410041">+48 606 410 041</a>',
            
            // New and updated translations for package section
            packageInfoTitle: 'Stay without meals - free cancellation',
            packageInfoSubtitle: 'Package details that will allow you to enjoy freedom and nature.',
            packageIncludedTitle: 'Included in the package',
            packageIncluded1: 'Accommodation in comfortable apartments with a fully equipped kitchenette, allowing guests to prepare their own meals.',
            packageIncluded2: 'Unlimited access to the Wellness, Aqua & Sport complex (heated outdoor pool, indoor pool, jacuzzi, saunas, and gym).',
            packageIncluded3: 'Access to attractions for children (playroom, outdoor playground, seasonal animation programs).',
            packageIncluded4: 'Location in a quiet, forest area with direct access to the Woliński National Park.',
            additionalAttractionsTitle: 'Additional attractions (for a fee)',
            additionalAttractions1: 'For Rest Restaurant.',
            additionalAttractions2: 'Lobby Cafe & Bar.',
            additionalAttractions3: 'Bicycle rental.',
            additionalAttractions4: 'SPA Shept.',
            mealsTitle: 'Meals',
            mealsDesc: 'The "Stay without meals" package does not include meals. Apartments are equipped with kitchenettes allowing guests to prepare their own meals.',
            importantInfoTitle: 'Important information',
            importantInfo1: 'Check-in from 4:00 PM, check-out until 11:00 AM.',
            importantInfo2: 'A prepayment of 30% of the reservation value is required.',
            importantInfo3: 'Free cancellation possible up to 7 days before arrival.',

            amenitiesComplexTitle: 'Sea & Forest Complex Amenities',
            amenitiesComplexSubtitle: 'As Guests of Amber & Azure Residences, you have unlimited access to all the attractions and amenities of the resort.',
            wellnessPoolsTitle: 'Two Pools and Jacuzzi',
            wellnessPoolsDesc: 'We offer a year-round, heated outdoor pool, an indoor pool with a paddling area for children, and two outdoor jacuzzis, perfect for relaxing under the stars.',
            wellnessSaunaTitle: 'World of Saunas',
            wellnessSaunaDesc: 'Feel the tension release in the sauna with a delicate, forest aroma of resin. It is a true detox for body and mind.',
            wellnessSpaTitle: 'SPA Zone "Shept"',
            wellnessSpaDesc: 'Two intimate treatment rooms where you can experience original treatments and massages inspired by the richness of the forest to ensure full regeneration.',
            kidsAmenitiesTitle: 'Amenities for children',
            kidsAmenitiesDesc: 'For our youngest guests, we have prepared a playroom, an outdoor playground, and seasonal animation programs, ensuring top-level entertainment.',
            sportEntertainmentTitle: 'Sport and entertainment',
            sportEntertainmentDesc: 'The complex offers a gym, swimming pools, and access to green areas ideal for outdoor activities such as walking and jogging.',
            restoBarTitle: 'Restaurant and Bar "For Rest"',
            restoBarDesc: 'An a\'la carte restaurant serving dishes based on local, seasonal products, and an elegant Lobby Café & Bar for a morning coffee or an evening drink.',
            attractionsTitle: 'Discover the Treasures of Wolin Island',
            attractionsSubtitle: 'The unique location provides unlimited opportunities to discover the charms of the region.',
            attraction1Title: 'Beach at Your Fingertips',
            attraction1Desc: 'You can reach the beautiful, wide beach via a scenic walk through the forest or by using a comfortable, quiet electric shuttle bus.',
            attraction2Title: 'Woliński National Park',
            attraction2Desc: 'Hit the trails straight from your apartment. The Gosań cliff, the Turquoise Lake, and the European Bison Show Reserve await you.',
            attraction3Title: 'Charms of Międzyzdroje',
            attraction3Desc: 'Stroll along the famous Avenue of Stars, walk the 395-meter pier, visit the Oceanarium, and the Wax Museum.',
            infoTitle: 'Practical Information',
            additionallyPaidTitle: 'Additionally paid',
            infoParking: 'Parking space in the underground garage (70 PLN/day).',
            infoPets: 'Pet stay (100 PLN/day).',
            goodToKnowTitle: 'Good to know',
            goodToKnowWifi: 'Fast, free Wi-Fi available throughout the apartment.',
            goodToKnowBedding: 'Bed linen and towels included in the price.',
            goodToKnowCleaning: 'Final cleaning included in the price.',
            locationTitle: 'Our Location',
            locationDesc: 'You will find us in the Sea & Forest complex, in the buffer zone of the Woliński National Park, just a short walk from the beach.',
            contactTitle: 'Book Your Stay',
            contactDesc: 'Choose the Amber or Azure Suite and immerse yourself in luxury, peace, and nature. We await your contact.',
            contactRole: 'Your Luxury Haven at Sea & Forest',
            contactBtnMail: 'Email: amberazure.residences@gmail.com',
            contactBtnCallDarek: 'Darek: +48 602 229 707',
            contactBtnCallBeata: 'Beata: +48 606 410 041',
            footerRights: '© 2025 Amber & Azure Residences. All rights reserved.',
            footerPrivacy: 'Privacy Policy',
            cookieTitle: 'We value your privacy', cookieText: 'We use cookies to personalize content, provide social media features, and analyze our traffic. We also share information about your use of our site with our partners.', cookieDeny: 'Deny', cookieCustomize: 'Customize', cookieAccept: 'Allow all',
            cookieDetailsTitle: 'Customize consent', cookieNecessaryDesc: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
            cookieAnalyticsDesc: 'These cookies allow us to analyze site traffic and improve its performance.',
            cookieMarketingDesc: 'These cookies help us deliver personalized ads that may be of interest to you.',
            cookieSave: 'Save settings',

            // Privacy Policy Translations
            privacyTitle: 'Privacy and Cookies Policy of Amber & Azure Residences Website',
            privacyLastUpdated: 'Last updated: 16.07.2025',
            privacyS1Title: '§1 General Provisions',
            privacyS1P1: 'This privacy policy (hereinafter referred to as the "Policy") is for informational purposes and defines the rules for processing personal data and using cookies on the website available at: https://aaresidences.github.io/amberazure/ (hereinafter referred to as the "Service").',
            privacyS1P2: 'We care about your privacy and the security of your personal data, processing it in accordance with the requirements of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation), hereinafter referred to as "GDPR".',
            privacyS2Title: '§2 Personal Data Administrator',
            privacyS2P1: 'The administrator of your personal data is MTM Dariusz Seferyński, conducting business activity at: ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka (hereinafter referred to as the "Administrator").',
            privacyS2P2: 'In all matters related to the processing of personal data and the exercise of your rights, you can contact the Administrator:',
            privacyS2Email: 'By email: amberazure.residences@gmail.com',
            privacyS2Phone: 'By phone: +48 602 229 707',
            privacyS2Address: 'By traditional mail: ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka',
            privacyS3Title: '§3 Purposes, Legal Bases, and Period of Data Processing',
            privacyS3P1: 'The Administrator processes your personal data for the following purposes:',
            privacyS3S1Title: 'Handling inquiries and reservations:',
            privacyS3S1P1: 'Purpose of processing: Responding to inquiries sent via email or phone, presenting an offer, and concluding and performing a service agreement (reservation).',
            privacyS3S1P2: 'Scope of data: Name and surname, email address, phone number, content of the message, and other data provided voluntarily during contact.',
            privacyS3S1P3: 'Legal basis: Art. 6 para. 1 lit. b GDPR – processing is necessary for taking action at the request of the data subject prior to entering into a contract or for the performance of a contract.',
            privacyS3S1P4: 'Storage period: Data will be stored for the time necessary to handle the inquiry. In the case of concluding a contract, data will be stored for the entire period of its validity, and after its termination – for the period required by law, e.g., for tax and accounting purposes (i.e., 5 years, counting from the end of the calendar year in which the tax payment deadline expired).',
            privacyS3S2Title: 'Marketing activities:',
            privacyS3S2P1: 'Purpose of processing: Sending commercial and marketing information regarding the Administrator\'s offer.',
            privacyS3S2P2: 'Scope of data: Email address, phone number.',
            privacyS3S2P3: 'Form of contact: Email messages, SMS, messages in WhatsApp and Messenger applications.',
            privacyS3S2P4: 'Legal basis: Art. 6 para. 1 lit. a GDPR – Your voluntary consent. Expressing consent to marketing is entirely voluntary.',
            privacyS3S2P5: 'Storage period: Until you withdraw your consent to data processing for this purpose. Note: Sending commercial information by electronic means of communication (email, SMS, WhatsApp, Messenger) requires your separate, explicit consent in accordance with the Act on Providing Services by Electronic Means and Telecommunications Law.',
            privacyS4Title: '§4 Data Recipients',
            privacyS4P1: 'For the proper functioning of the Service and provision of services, the Administrator uses the services of external entities. We transfer your data only when it is necessary to achieve a given processing purpose and only to the necessary extent.',
            privacyS4P2: 'Recipients of your data may be:',
            privacyS4R1: 'Hosting provider: GitHub, Inc. – for storing Service data on the server.',
            privacyS4R2: 'Instant messenger providers: Meta Platforms, Inc. (owner of WhatsApp and Messenger) – for conducting marketing communication, if you give your consent.',
            privacyS4R3: 'Telecommunications operators: for sending marketing SMS messages.',
            privacyS4P3: 'Your data is processed by our partners with all security principles and in accordance with data processing entrustment agreements.',
            privacyS5Title: '§5 Rights of Data Subjects',
            privacyS5P1: 'In connection with the processing of your personal data, you have the following rights:',
            privacyS5R1: 'Right of access to data (Art. 15 GDPR).',
            privacyS5R2: 'Right to rectification of data (Art. 16 GDPR).',
            privacyS5R3: 'Right to erasure of data ("right to be forgotten") (Art. 17 GDPR).',
            privacyS5R4: 'Right to restriction of processing (Art. 18 GDPR).',
            privacyS5R5: 'Right to data portability (Art. 20 GDPR).',
            privacyS5R6: 'Right to object to data processing (Art. 21 GDPR).',
            privacyS5R7: 'Right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal. This applies in particular to data processing for marketing purposes.',
            privacyS5R8: 'Right to lodge a complaint with the supervisory authority, i.e., the President of the Personal Data Protection Office (ul. Stawki 2, 00-193 Warszawa), if you believe that the processing of your data violates GDPR provisions.',
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
        },
        de: {
            pageTitle: 'Amber & Azure Residences | Luxusapartments in Sea & Forest',
            logo: 'Amber & Azure Residences',
            navPhilosophy: 'Philosophie',
            navApartments: 'Apartments',
            navAzureCalendar: 'Azure Kalender',
            navAmenities: 'Annehmlichkeiten',
            navAttractions: 'Attraktionen',
            navPracticalInfo: 'Praktische Informationen', // Neuer Navigationspunkt
            navContact: 'Kontakt',
            videoError: 'Ihr Browser unterstützt keine Hintergrundvideos.',
            heroTitle: 'Amber & Azure Residences',
            heroSubtitle: 'Ihr Hafen, wo der Wald das Meer küsst',
            heroCta: 'Entdecken Sie die Suiten',
            philosophyTitle: 'Wahrer Luxus ist Zeit und Raum.',
            philosophySubtitle: 'Bei Amber & Azure Residences glauben wir, dass wahre Erholung aus der Harmonie mit der Natur entsteht. Wir haben zwei einzigartige Apartments im Herzen des Sea & Forest-Komplexes geschaffen, die es Ihnen ermöglichen, zu entschleunigen, durchzuatmen und sich wieder mit sich selbst und Ihrer Umgebung zu verbinden.',
            introText: 'Als unsere Gäste erhalten Sie nicht nur die Schlüssel zu einem luxuriösen Interieur, sondern auch zum Reichtum der Annehmlichkeiten des gesamten Resorts, eingebettet in die malerische Pufferzone des Nationalparks Wolin. Dies ist eine Einladung, die Natur in vollen Zügen zu erleben, zu fühlen und zu genießen.',
            apartmentsMainTitle: 'Ihre privaten Suiten',
            apartmentsMainSubtitle: 'Jedes unserer Apartments erzählt eine einzigartige Geschichte durch Design, Komfort und Naturverbundenheit. Wählen Sie Ihren idealen Ort zur Entspannung.',
            
            // Aktualisierte Übersetzungen für den Bereich "Amber bald verfügbar"
            amberSoonTitle: 'Amber Suite Apartment - Bald verfügbar!',
            amberSoonDesc: 'Wir freuen uns auf die Eröffnung des Amber Suite Apartments, das bald wieder bereit sein wird, Sie willkommen zu heißen. Dieses brandneue, einzigartige Apartment, inspiriert von der Wärme des Bernsteins, bietet ein unvergessliches Aufenthaltserlebnis im Herzen des Nationalparks Wolin. Ideal für alle, die gemütlichen Luxus und die Nähe zur Natur schätzen.',
            amberSoonContact: 'Möchten Sie als Erster über Verfügbarkeit und Sonderangebote informiert werden? Kontaktieren Sie uns noch heute, um Ihr Interesse zu bekunden und eine Benachrichtigung zu erhalten, wenn die Buchungen geöffnet werden!',

            azureTitle: 'Azure Suite Apartment',
            azureDesc: 'Tauchen Sie ein in klassische Eleganz, kombiniert mit moderner Funktionalität. Das 37 m² große Azure-Apartment ist ein Raum, der Sie umhüllt und Sie jeden Moment Ihres Aufenthalts genießen lässt. Helle, geräumige Innenräume und sorgfältig ausgewählte Accessoires schaffen eine Atmosphäre der Ruhe, und die beeindruckende, 15 Quadratmeter große Terrasse mit Waldblick ist der perfekte Ort für einen Morgenkaffee und abendliche Entspannung.',
            azureDetail1: '<b>Wohnzimmer:</b> Geräumig und hell, mit einem bequemen Sofa, einem eleganten Couchtisch und einem modernen Fernseher.',
            azureDetail2: '<b>Küchenzeile:</b> Volle Freiheit und Unabhängigkeit dank eines modernen Kochfelds, eines Geschirrspülers und einer kompletten Ausstattung.',
            azureDetail3: '<b>Essbereich:</b> Ein schöner, runder Tisch mit Krzeseln schafft eine gemütliche Ecke für gemeinsame Mahlzeiten.',
            azureDetail4: '<b>Schlafzimmer:</b> Ein luxuriöses Doppelbett (160x200 cm) und ein separater Fernseher für vollkommene Entspannung.',
            azureDetail5: '<b>Taras:</b> Eine beeindruckende, 15 Quadratmeter große Terrasse mit Waldblick, zugänglich von beiden Zimmern.',
            azureDetail6: '<b>Klimaanlage:</b> Individuell regulierbar für die perfekte Temperatur zu jeder Jahreszeit.',
            wifi: '<b>Internet:</b> Schnelles, kostenloses WLAN in der gesamten Wohnung verfügbar.',
            calendarTitle: 'Planen Sie Ihren Aufenthalt',
            calendarDesc: 'Der folgende Kalender zeigt die Verfügbarkeit in Echtzeit. Wir laden Sie ein, eine Reservierung vorzunehmen, um unvergessliche Momente im Herzen der Natur zu gewährleisten.',
            ctaTitle: 'Möchten Sie Ihren Aufenthalt buchen?',
            ctaDesc: 'Kontaktieren Sie uns direkt:<br><a href="mailto:amberazure.residences@gmail.com">amberazure.residences@gmail.com</a><br>Darek: <a href="tel:+48602229707">+48 602 229 707</a><br>Beata: <a href="tel:+48606410041">+48 606 410 041</a>',
            
            // Neue und aktualisierte Übersetzungen für den Paketbereich
            packageInfoTitle: 'Aufenthalt ohne Verpflegung - kostenlose Stornierung',
            packageInfoSubtitle: 'Paketdetails, die Ihnen die Freiheit und Natur genießen lassen.',
            packageIncludedTitle: 'Im Paket enthalten',
            packageIncluded1: 'Übernachtungen in komfortablen Apartments mit voll ausgestatteter Küchenzeile, die die Selbstverpflegung ermöglichen.',
            packageIncluded2: 'Unbegrenzter Zugang zum Wellness-, Aqua- & Sportkomplex (beheizter Außenpool, Innenpool, Whirlpool, Saunen und Fitnessraum).',
            packageIncluded3: 'Zugang zu Attraktionen für Kinder (Spielzimmer, Außenspielplatz, saisonale Animationsprogramme).',
            packageIncluded4: 'Lage in einer ruhigen Waldgegend mit direktem Zugang zum Nationalpark Wolin.',
            additionalAttractionsTitle: 'Zusätzliche Attraktionen (kostenpflichtig)',
            additionalAttractions1: 'Restaurant For Rest.',
            additionalAttractions2: 'Lobby Café & Bar.',
            additionalAttractions3: 'Fahrradverleih.',
            additionalAttractions4: 'SPA Shept.',
            mealsTitle: 'Verpflegung',
            mealsDesc: 'Das Paket "Aufenthalt ohne Verpflegung" beinhaltet keine Mahlzeiten. Die Apartments sind mit Küchenzeilen ausgestattet, die die Selbstverpflegung ermöglichen.',
            importantInfoTitle: 'Wichtige Informationen',
            importantInfo1: 'Check-in ab 16:00 Uhr, Check-out bis 11:00 Uhr.',
            importantInfo2: 'Eine Vorauszahlung in Höhe von 30% des Buchungswertes ist erforderlich.',
            importantInfo3: 'Kostenlose Stornierung bis zu 7 Tage vor Anreise möglich.',

            amenitiesComplexTitle: 'Annehmlichkeiten des Sea & Forest Komplexes',
            amenitiesComplexSubtitle: 'Als Gäste der Amber & Azure Residences haben Sie uneingeschränkten Zugang zu allen Attraktionen und Annehmlichkeiten des Resorts.',
            wellnessPoolsTitle: 'Zwei Pools und Jacuzzi',
            wellnessPoolsDesc: 'Wir bieten einen ganzjährig beheizten Außenpool, einen Innenpool mit Kinderbecken und zwei Außen-Whirlpools, ideal zur Entspannung unter den Sternen.',
            wellnessSaunaTitle: 'Welt der Saunen',
            wellnessSaunaDesc: 'Spüren Sie, wie die Anspannung in der Sauna mit einem zarten Waldharz-Aroma von Ihnen abfällt. Ein echtes Detox für Körper und Geist.',
            wellnessSpaTitle: 'SPA-Zone "Shept"',
            wellnessSpaDesc: 'Zwei intime Behandlungsräume, in denen Sie einzigartige, von der Natur inspirierte Behandlungen und Massagen für eine vollständige Regeneration erleben können.',
            kidsAmenitiesTitle: 'Annehmlichkeiten für Kinder',
            kidsAmenitiesDesc: 'Für unsere jüngsten Gäste haben wir ein Spielzimmer, einen Außenspielplatz und saisonale Animationsprogramme vorbereitet, die Unterhaltung auf höchstem Niveau garantieren.',
            sportEntertainmentTitle: 'Sport und Unterhaltung',
            sportEntertainmentDesc: 'Der Komplex bietet einen Fitnessraum, Schwimmbäder sowie Zugang zu Grünflächen, die sich ideal für Outdoor-Aktivitäten wie Spaziergänge und Joggen eignen.',
            restoBarTitle: 'Restaurant und Bar "For Rest"',
            restoBarDesc: 'Ein A-la-carte-Restaurant mit Gerichten, die auf lokalen, saisonalen Produkten basieren, und eine elegante Lobby Café & Bar für einen Morgenkaffee oder einen abendlichen Drink.',
            attractionsTitle: 'Entdecken Sie die Schätze der Insel Wolin',
            attractionsSubtitle: 'Die einzigartige Lage bietet unbegrenzte Möglichkeiten, die Reize der Region zu entdecken.',
            attraction1Title: 'Der Strand zum Greifen nah',
            attraction1Desc: 'Den schönen, breiten Strand erreichen Sie über einen malerischen Waldspaziergang oder mit einem komfortablen, leisen Elektro-Shuttlebus.',
            attraction2Title: 'Nationalpark Wolin',
            attraction2Desc: 'Starten Sie direkt von Ihrem Apartment aus auf die Wanderwege. Es erwarten Sie die Gosań-Klippe, der Türkissee und das Wisent-Schaugehege.',
            attraction3Title: 'Die Reize von Misdroy',
            attraction3Desc: 'Schlendern Sie über die berühmte Promenade der Stars, gehen Sie auf die 395 Meter lange Seebrücke, besuchen Sie das Ozeanarium und das Wachsfigurenkabinett.',
            infoTitle: 'Praktische Informationen',
            additionallyPaidTitle: 'Zusätzlich kostenpflichtig',
            infoParking: 'Parkplatz in der Tiefgarage (70 PLN/Tag).',
            infoPets: 'Aufenthalt von Haustieren (100 PLN/Tag).',
            goodToKnowTitle: 'Gut zu wissen',
            goodToKnowWifi: 'Schnelles, kostenloses WLAN in der gesamten Wohnung verfügbar.',
            goodToKnowBedding: 'Bettwäsche und Handtücher im Preis inbegriffen.',
            goodToKnowCleaning: 'Endreinigung im Preis inbegriffen.',
            locationTitle: 'Unser Standort',
            locationDesc: 'Sie finden uns im Sea & Forest-Komplex, in der Pufferzone des Nationalparks Wolin, nur einen kurzen Spaziergang vom Strand entfernt.',
            contactTitle: 'Buchen Sie Ihren Aufenthalt',
            contactDesc: 'Wählen Sie die Amber oder Azure Suite und tauchen Sie ein in Luxus, Ruhe und Natur. Wir erwarten Ihren Kontakt.',
            contactRole: 'Ihre Luxusoase im Sea & Forest',
            contactBtnMail: 'Schreiben: amberazure.residences@gmail.com',
            contactBtnCallDarek: 'Darek: +48 602 229 707',
            contactBtnCallBeata: 'Beata: +48 606 410 041',
            footerRights: '© 2025 Amber & Azure Residences. Alle Rechte vorbehalten.',
            footerPrivacy: 'Datenschutz-Bestimmungen',
            cookieTitle: 'We value your privacy', cookieText: 'We use cookies to personalize content, provide social media features, and analyze our traffic. We also share information about your use of our site with our partners.', cookieDeny: 'Deny', cookieCustomize: 'Customize', cookieAccept: 'Allow all',
            cookieDetailsTitle: 'Customize consent', cookieNecessaryDesc: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
            cookieAnalyticsDesc: 'These cookies allow us to analyze site traffic and improve its performance.',
            cookieMarketingDesc: 'These cookies help us deliver personalized ads that may be of interest to you.',
            cookieSave: 'Save settings',

            // Privacy Policy Translations
            privacyTitle: 'Datenschutz- und Cookie-Richtlinie der Amber & Azure Residences Website',
            privacyLastUpdated: 'Zuletzt aktualisiert: 16.07.2025',
            privacyS1Title: '§1 Allgemeine Bestimmungen',
            privacyS1P1: 'Diese Datenschutzrichtlinie (im Folgenden „Richtlinie“) dient zu Informationszwecken und legt die Regeln für die Verarbeitung personenbezogener Daten und die Verwendung von Cookies auf der Website unter folgender Adresse fest: https://aaresidences.github.io/amberazure/ (im Folgenden „Dienst“).',
            privacyS1P2: 'Wir legen Wert auf Ihre Privatsphäre und die Sicherheit Ihrer personenbezogenen Daten und verarbeiten diese gemäß den Anforderungen der Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates vom 27. April 2016 zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten und zum freien Datenverkehr und zur Aufhebung der Richtlinie 95/46/EG (Datenschutz-Grundverordnung), im Folgenden „DSGVO“ genannt.',
            privacyS2Title: '§2 Verantwortlicher für die Datenverarbeitung',
            privacyS2P1: 'Verantwortlicher für Ihre personenbezogenen Daten ist MTM Dariusz Seferyński, der seine Geschäftstätigkeit unter der Adresse: ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka (im Folgenden „Verantwortlicher“) ausübt.',
            privacyS2P2: 'In allen Angelegenheiten, die die Verarbeitung personenbezogener Daten und die Ausübung Ihrer Rechte betreffen, können Sie sich an den Verantwortlichen wenden:',
            privacyS2Email: 'Per E-Mail: amberazure.residences@gmail.com',
            privacyS2Phone: 'Telefonisch: +48 602 229 707',
            privacyS2Address: 'Per Post: ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka',
            privacyS3Title: '§3 Zwecke, Rechtsgrundlagen und Dauer der Datenverarbeitung',
            privacyS3P1: 'Der Verantwortliche verarbeitet Ihre personenbezogenen Daten zu folgenden Zwecken:',
            privacyS3S1Title: 'Bearbeitung von Anfragen und Buchungen:',
            privacyS3S1P1: 'Zweck der Verarbeitung: Beantwortung von Anfragen per E-Mail oder Telefon, Unterbreitung eines Angebots sowie Abschluss und Durchführung eines Dienstleistungsvertrags (Buchung).',
            privacyS3S1P2: 'Umfang der Daten: Vor- und Nachname, E-Mail-Adresse, Telefonnummer, Inhalt der Nachricht und andere freiwillig während des Kontakts angegebene Daten.',
            privacyS3S1P3: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO – die Verarbeitung ist für die Durchführung vorvertraglicher Maßnahmen auf Anfrage der betroffenen Person oder zur Erfüllung eines Vertrags erforderlich.',
            privacyS3S1P4: 'Speicherdauer: Die Daten werden so lange gespeichert, wie es für die Bearbeitung der Anfrage erforderlich ist. Im Falle eines Vertragsabschlusses werden die Daten für die gesamte Dauer des Vertrags und nach dessen Beendigung für den gesetzlich vorgeschriebenen Zeitraum gespeichert, z.B. für steuerliche und buchhalterische Zwecke (d.h. 5 Jahre, gerechnet ab dem Ende des Kalenderjahres, in dem die Steuerzahlungsfrist abgelaufen ist).',
            privacyS3S2Title: 'Marketingaktivitäten:',
            privacyS3S2P1: 'Zweck der Verarbeitung: Zusendung von kommerziellen und Marketinginformationen über das Angebot des Verantwortlichen.',
            privacyS3S2P2: 'Umfang der Daten: E-Mail-Adresse, Telefonnummer.',
            privacyS3S2P3: 'Kontaktformular: E-Mail-Nachrichten, SMS, Nachrichten in WhatsApp- und Messenger-Anwendungen.',
            privacyS3S2P4: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO – Ihre freiwillige Einwilligung. Die Erteilung der Marketing-Einwilligung ist völlig freiwillig.',
            privacyS3S2P5: 'Speicherdauer: Bis Sie Ihre Einwilligung zur Datenverarbeitung zu diesem Zweck widerrufen. Hinweis: Die Zusendung kommerzieller Informationen mittels elektronischer Kommunikationsmittel (E-Mail, SMS, WhatsApp, Messenger) erfordert Ihre gesonderte, ausdrückliche Einwilligung gemäß dem Gesetz über die Erbringung elektronischer Dienstleistungen und dem Telekommunikationsgesetz.',
            privacyS4Title: '§4 Empfänger der Daten',
            privacyS4P1: 'Für den ordnungsgemäßen Betrieb des Dienstes und die Erbringung von Dienstleistungen nutzt der Verantwortliche die Dienste externer Unternehmen. Wir geben Ihre Daten nur dann weiter, wenn dies zur Erreichung des jeweiligen Verarbeitungszwecks erforderlich ist und nur im notwendigen Umfang.',
            privacyS4P2: 'Empfänger Ihrer Daten können sein:',
            privacyS4R1: 'Hosting-Anbieter: GitHub, Inc. – zur Speicherung der Dienstdaten auf dem Server.',
            privacyS4R2: 'Anbieter von Instant Messengern: Meta Platforms, Inc. (Eigentümer von WhatsApp und Messenger) – zur Durchführung der Marketingkommunikation, sofern Sie dem zugestimmt haben.',
            privacyS4R3: 'Telekommunikationsbetreiber: zur Durchführung des Versands von Marketing-SMS-Nachrichten.',
            privacyS4P3: 'Ihre Daten werden von unseren Partnern unter Einhaltung aller Sicherheitsgrundsätze und gemäß den Datenverarbeitungsverträgen verarbeitet.',
            privacyS5Title: '§5 Rechte der betroffenen Personen',
            privacyS5P1: 'Im Zusammenhang mit der Verarbeitung Ihrer personenbezogenen Daten stehen Ihnen folgende Rechte zu:',
            privacyS5R1: 'Recht auf Auskunft (Art. 15 DSGVO).',
            privacyS5R2: 'Recht auf Berichtigung (Art. 16 DSGVO).',
            privacyS5R3: 'Recht auf Löschung („Recht auf Vergessenwerden“) (Art. 17 DSGVO).',
            privacyS5R4: 'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO).',
            privacyS5R5: 'Recht auf Datenübertragbarkeit (Art. 20 DSGVO).',
            privacyS5R6: 'Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).',
            privacyS5R7: 'Recht, die Einwilligung jederzeit zu widerrufen, ohne die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung zu berühren. Dies gilt insbesondere für die Datenverarbeitung zu Marketingzwecken.',
            privacyS5R8: 'Recht, Beschwerde bei einer Aufsichtsbehörde einzulegen, d.h. dem Präsidenten des Amtes für den Schutz personenbezogener Daten (ul. Stawki 2, 00-193 Warszawa), wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die Bestimmungen der DSGVO verstößt.',
            privacyS5P2: 'Um die oben genannten Rechte auszuümen, wenden Sie sich bitte an den Verantwortlichen unter Verwendung der in §2 angegebenen Kontaktdaten.',
            privacyS6Title: '§6 Cookies',
            privacyS6P1: 'Der Dienst sammelt keine Informationen automatisch, mit Ausnahme der in Cookies enthaltenen Informationen.',
            privacyS6P2: 'Cookies (sog. „Kekse“) sind IT-Daten, insbesondere Textdateien, die auf Ihrem Endgerät (z.B. Computer, Smartphone) gespeichert werden und für die Nutzung der Websites des Dienstes bestimmt sind.',
            privacyS6P3: 'Im Rahmen des Dienstes werden hauptsächlich notwendige Cookies verwendet, die für den ordnungsgemäßen Betrieb der Website erforderlich sind. Der Dienst wird auf der GitHub Pages-Plattform gehostet und kann technische Cookies zur Aufrechterhaltung der Sitzung und zur Bereitstellung grundlegender Funktionen verwenden.',
            privacyS6P4: 'Der Dienst verwendet keine Cookies für Analysezwecke (Verkehrsverfolgung) oder Marketingzwecke (Anzeige personalisierter Werbung).',
            privacyS6P5: 'Wenn auf der Website ein Cookie-Banner vorhanden ist, haben Sie die Möglichkeit, Ihre Präferenzen zu verwalten.',
            privacyS7Title: '§7 Datenübermittlung außerhalb des Europäischen Wirtschaftsraums (EWR)',
            privacyS7P1: 'Aufgrund der Nutzung von Diensten von Unternehmen wie GitHub, Inc. und Meta Platforms, Inc. (WhatsApp, Messenger) durch den Verantwortlichen können Ihre personenbezogenen Daten in Drittländer, insbesondere in die Vereinigten Staaten von Amerika (USA), übermittelt werden.',
            privacyS7P2: 'Die Datenübermittlung erfolgt auf der Grundlage von Mechanismen, die der DSGVO entsprechen, hauptsächlich unter Verwendung von von der Europäischen Kommission genehmigten Standardvertragsklauseln (SCC), die ein angemessenes Schutzniveau für Ihre personenbezogenen Daten gewährleisten.',
            privacyS8Title: '§8 Schlussbestimmungen',
            privacyS8P1: 'Der Verantwortliche behält sich das Recht vor, Änderungen an dieser Datenschutzrichtlinie vorzunehmen. Änderungen können durch technologische Entwicklungen, Änderungen der gesetzlichen Bestimmungen oder die Entwicklung des Dienstes bedingt sein.',
            privacyS8P2: 'Über alle Änderungen werden wir Sie durch die Veröffentlichung einer neuen Version der Richtlinie im Dienst informieren.',
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
