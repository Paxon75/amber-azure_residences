document.addEventListener('DOMContentLoaded', () => {

    // === SŁOWNIK TŁUMACZEŃ ===
    const translations = {
        pl: {
            // SEO
            metaDescription: 'Odkryj luksusowe apartamenty Amber & Azure w Międzyzdrojach. Twoja prywatna przystań w sercu kompleksu Sea & Forest, gdzie natura spotyka się z komfortem. Zarezerwuj pobyt.',
            metaKeywords: 'apartamenty Międzyzdroje, luksusowe apartamenty, wynajem apartamentów, Sea & Forest, Woliński Park Narodowy, Amber & Azure, noclegi Międzyzdroje',
            // Nawigacja i Nagłówek
            pageTitle: 'Amber & Azure Residences | Luksusowe Apartamenty w Sea & Forest',
            logo: 'Amber & Azure <span class="logo-accent">Residences</span>',
            navPhilosophy: 'Filozofia',
            navApartments: 'Apartamenty',
            navAmenities: 'Udogodnienia',
            navContact: 'Kontakt',
            // Hero
            videoError: 'Twoja przeglądarka nie obsługuje wideo w tle.',
            heroTitle: 'Amber & Azure Residences',
            heroSubtitle: 'Twoja Przystań, Gdzie Las Całuje Morze',
            heroCta: 'Poznaj Nasze Apartamenty',
            // Filozofia
            philosophyTitle: 'Prawdziwy luksus to czas i przestrzeň.',
            philosophySubtitle: 'W Amber & Azure Residences wierzymy, że autentyczny odpoczynek rodzi się z harmonii z naturą. Stworzyliśmy dwa wyjątkowe apartamenty w sercu kompleksu Sea & Forest, które pozwalają zwolnić, odetchnąć i na nowo połączyć się ze sobą i z otoczeniem.',
            introText: 'Jako nasi Goście, otrzymujecie klucze nie tylko do luksusowego wnętrza, ale także do bogactwa udogodnień całego resortu, wkomponowanego w malowniczą otulinę Wolińskiego Parku Narodowego. To zaproszenie do doświadczania, odczuwania i czerpania z natury pełnymi garściami.',
            // Apartamenty
            apartmentsMainTitle: 'Twoje Prywatne Apartamenty',
            apartmentsMainSubtitle: 'Każdy z naszych apartamentów to unikalna historia opowiedziana przez design, komfort i bliskość natury. Wybierz swoją idealną przestrzeň do relaksu.',
            amberSoonTitle: 'Apartament Amber Suite – Wkrótce Dostępny!',
            amberSoonDesc: 'Ten zupełnie nowy, wyjątkowy apartament, inspirowany ciepłem bursztynu, czeka, aby gościć Państwa w swoich progach. Oferuje niezapomniane wrażenia z pobytu w sercu Wolińskiego Parku Narodowego. Idealny dla tych, którzy cenią sobie przytulny luksus i bliskość natury.',
            amberSoonContact: 'Przygotuj się na swój wymarzony pobyt! Skontaktuj się z nami, aby dowiedzieć się więcej o terminach dostępności i rezerwacji.',
            amberContactBtn: 'Sprawdź Dostępność i Zarezerwuj',
            azureTitle: 'Apartament Azure Suite',
            azureDesc: 'Zanurz się w klasycznej elegancji połączonej z nowoczesną funkcjonalnością. Apartament Azure o powierzchni 37 m² to przestrzeń, która otula i pozwala w pełni cieszyć się każdą chwilą pobytu. Jasne, przestronne wnętrza i starannie dobrane dodatki tworzą atmosferę spokoju, a imponujący, 15-metrowy taras z widokiem na las jest idealnym miejscem na poranną kawę i wieczorny relaks.',
            azureDetail1: '<b>Salon:</b> Przestronny i jasny, z komfortową sofą, eleganckim stolikiem kawowym i nowoczesnym TV.',
            azureDetail2: '<b>Aneks Kuchenny:</b> Pełna swoboda i niezależność dzięki nowoczesnej płycie, zmywarce i kompletnemu wyposażeniu.',
            azureDetail3: '<b>Część jadalniana:</b> Piękny, okrągły stół z krzesłami tworzy przytulny kącik do wspólnych posiłków.',
            azureDetail4: '<b>Sypialnia:</b> Luksusowe, podwójne łóżko (160x200 cm) i osobny telewizor dla pełnego relaksu.',
            azureDetail5: '<b>Taras:</b> Imponujący, 15-metrowy taras z widokiem na las, dostępny z obu pokoi.',
            azureDetail6: '<b>Klimatyzacja:</b> Indywidualnie sterowana dla idealnej temperatury o każdej porze roku.',
            wifi: '<b>Internet:</b> Szybkie, darmowe Wi-Fi dostępne w całym apartamencie.',
            // Udogodnienia (Akordeon)
            detailedInfoMainTitle: 'Szczegółowe Informacje i Udogodnienia',
            detailedInfoMainSubtitle: 'Wszystko, co musisz wiedzieć o Twoim pobycie w Sea & Forest Resort.',
            mealsTitle: 'Wyżywienie',
            mealsDesc: 'Apartamenty wyposażone są w aneksy kuchenne umożliwiające samodzielne przygotowywanie posiłków. Na terenie resortu znajduje się restauracja a la carte oraz bar.',
            foodFeaturesTitle: 'Co wyróżnia kuchnię resortu:',
            foodFeature1: '<b>Zero waste na talerzu</b> – przygotowywane są pyszne zestawy, wykorzystując każdy składnik do końca.',
            foodFeature2: '<b>Sea & Forest to Table</b> – współpraca z lokalnymi rybakami i dostawcami, by podawać świeże i sezonowe produkty.',
            foodFeature3: '<b>Jemy na świeżym powietrzu</b> – posiłki smakują lepiej, gdy można je zjeść na tarasie lub zabrać na piknik.',
            foodFeature4: '<b>Kameralnie i w rytmie slow</b> – bez pośpiechu, tylko dobre jedzenie i spokój wokół.',
            restaurantHoursTitle: 'Godziny otwarcia gastronomii:',
            restaurantHours: 'Restauracja a la carte For Rest: codziennie 12:00 – 23:00',
            lobbyBarHours: 'Lobby Café & Bar: codziennie 12:00 – 23:00',
            takeawaySnacks: 'Przekąski na wynos: zestawy piknikowe, kanapki, sałatki – gotowe, by zabrać na plażę lub wyprawę.',
            sportEntertainmentTitle: 'Sport i rozrywka',
            sportEntertainmentSubtitle: 'Czas na relaks, ruch i przygodę – tak, jak lubisz!',
            sportEntertainment1: '<b>Transport na plażę melexem</b> – kilka razy dziennie hotelowy melex dowiezie Cię na plażę.',
            sportEntertainment2: '<b>Rowerowe przygody</b> – wypożycz rower (dodatkowa opłata) i ruszaj w trasę.',
            sportEntertainment3: '<b>Ruch dla ciała, oddech dla głowy</b> – sala fitness, baseny, jacuzzi, sauny i zajęcia sportowe.',
            sportEntertainment4: '<b>Sezon pełny atrakcji</b> – koncerty, ogniska i sezonowe animacje dla dzieci.',
            sportEntertainment5: '<b>Las, który koi</b> – Woliński Park Narodowy tuż za progiem.',
            sportEntertainment6: '<b>Digital Detox</b> – strefy „no phone zone” dla tych, którzy chcą odpocząć od ekranu.',
            wellnessSpaTitle: 'Wellness & SPA',
            wellnessSpaSubtitle: 'Tu ciało się odpręża, a głowa odpoczywa.',
            wellnessSpa1: '<b>Baseny i jacuzzi</b> – wewnętrzny basen z brodzikiem oraz całoroczny, podgrzewany basen zewnętrzny i dwa jacuzzi.',
            wellnessSpa2: '<b>Sauna fińska</b> – rozgrzej ciało, a potem odpocznij w leśnej strefie relaksu.',
            wellnessSpa3: '<b>Siłownia</b> – nowoczesny sprzęt do ćwiczeń siłowych i wytrzymałościowych oraz zajęcia fitness.',
            wellnessSpa4: '<b>SPA Shept</b> – autorskie zabiegi inspirowane naturą i holistycznym podejściem.',
            wellnessSpa5: '<b>Cryo-sauna & kąpiele leśne</b> – terapie zimnem i spacery wśród drzew dla wzmocnienia i dotlenienia.',
            spaSheptHours: 'SPA Shept: codziennie 9:00 – 21:00',
            poolGymSaunaHours: 'Basen, siłownia, sauny: codziennie 7:00 – 21:00 (21:00 – 23:00 tylko dla dorosłych)',
            fitnessClasses: 'Zajęcia Fitness: według grafiku',
            kidsAmenitiesTitle: 'Udogodnienia dla dzieci',
            kidsAmenitiesSubtitle: 'Dzieci u nas nie mają czasu na nudę, bo świat Sea & Forest to wielki plac zabaw.',
            kidsAmenities1: 'Sala zabaw Mewa Śmieszka',
            kidsAmenities2: 'Zewnętrzny plac zabaw',
            kidsAmenities3: 'Zorganizowane animacje (atrakcja sezonowa)',
            kidsAmenities4: 'Quest of the Wolin Tribe – gra terenowa dla dzieci 7+.',
            kidsAmenities5: 'Eko-Detektywi – edukacyjna gra dla najmłodszych.',
            kidsAmenities6: 'Baseny z akcesoriami do pływania',
            kidsAmenities7: 'Na życzenie: wanienka, podest, nakładka na toaletę',
            kidsAmenities8: 'W restauracji: krzesełka do karmienia, w toaletach przewijaki.',
            kidsAmenities9: 'Dzieci do 3 lat, śpiące z rodzicami, pobyt bez opłat',
            kidsAmenities10: 'Dodatkowe łóżeczko - 30 PLN/doba',
            additionallyPaidTitle: 'Dodatkowo płatne',
            infoParking: 'Miejsce parkingowe w garażu podziemnym (70 PLN/doba) – rezerwacja zalecana.',
            infoPets: 'Pobyt zwierzęcia (100 PLN/doba) – prosimy o wcześniejsze zgłoszenie.',
            infoCrib: 'Łóżeczko dla dzieci (0-3 lat): 30 PLN/doba.',
            infoBikeRental: 'Wypożyczalnia rowerów – więcej informacji na recepcji.',
            infoEVCharging: 'Stacja do ładowania samochodów elektrycznych.',
            infoClimateTax: 'Obowiązkowa opłata klimatyczna naliczana zgodnie z lokalnymi stawkami.',
            goodToKnowTitle: 'Warto wiedzieć',
            goodToKnowWifi: 'Szybkie, darmowe Wi-Fi dostępne w całym apartamencie i na terenie resortu.',
            goodToKnowBedding: 'Pościel i ręczniki wliczone w cenę pobytu.',
            goodToKnowCleaning: 'Sprzątanie końcowe apartamentu wliczone w cenę.',
            goodToKnowCheckIn: 'Zameldowanie od godziny 16:00.',
            goodToKnowCheckOut: 'Wymeldowanie do godziny 11:00.',
            // Kontakt i stopka
            locationTitle: 'Nasza Lokalizacja',
            locationDesc: 'Znajdziesz nas w kompleksie Sea & Forest, w otulinie Wolińskiego Parku Narodowego, zaledwie krótki spacer od plaży.',
            contactTitle: 'Zarezerwuj Pobyt',
            contactDesc: 'Wybierz Amber lub Azure Suite i zanurz się w luksusie, spokoju i naturze. Czekamy na Twój kontakt.',
            contactBtnMail: 'Napisz do nas',
            contactBtnCallDarek: 'Darek: +48 602 229 707',
            contactBtnCallBeata: 'Beata: +48 606 410 041',
            footerRights: '© 2025 Amber & Azure Residences. Wszelkie prawa zastrzeżone.',
            footerPrivacy: 'Polityka Prywatności',
            // CTA Bubble
            ctaTitle: 'Chcesz zarezerwować pobyt?',
            ctaDesc: 'Skontaktuj się z nami bezpośrednio:<br><a href="mailto:amberazure.residences@gmail.com">amberazure.residences@gmail.com</a><br>Darek: <a href="tel:+48602229707">+48 602 229 707</a><br>Beata: <a href="tel:+48606410041">+48 606 410 041</a>',
            // Cookies
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
            // Polityka Prywatności
            privacyTitle: 'Polityka Prywatności i Plików Cookies',
            privacyLastUpdated: 'Data ostatniej aktualizacji: 22.07.2024 r.',
            privacyS1Title: '§1 Postanowienia Ogólne',
            privacyS1P1: 'Niniejsza polityka prywatności (zwana dalej „Polityką”) ma charakter informacyjny i określa zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies na stronie internetowej dostępnej pod adresem: https://aaresidences.github.io/amberazure/ (zwanej dalej „Serwisem”).',
            privacyS1P2: 'Dbamy o Twoją prywatność i bezpieczeństwo Twoich danych osobowych, przetwarzając je zgodnie z wymogami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).',
            privacyS2Title: '§2 Administrator Danych Osobowych',
            privacyS2P1: 'Administratorem Twoich danych osobowych jest MTM Dariusz Seferyński, ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka (zwany dalej „Administratorem”).',
            privacyS2P2: 'W sprawach związanych z danymi osobowymi możesz kontaktować się z Administratorem:',
            privacyS2Email: 'E-mail: amberazure.residences@gmail.com',
            privacyS2Phone: 'Telefon: +48 602 229 707',
            privacyS2Address: 'Adres pocztowy: ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka',
            privacyS3Title: '§3 Cele i Podstawy Prawne Przetwarzania Danych',
            privacyS3P1: 'Administrator przetwarza Twoje dane osobowe w następujących celach:',
            privacyS3S1Title: 'Obsługa zapytań i rezerwacji:',
            privacyS3S1P1: 'Cel: Udzielanie odpowiedzi na zapytania, przedstawienie oferty oraz realizacja umowy rezerwacji.',
            privacyS3S1P2: 'Zakres danych: Imię i nazwisko, e-mail, telefon, treść wiadomości.',
            privacyS3S1P3: 'Podstawa prawna: Art. 6 ust. 1 lit. b RODO – niezbędność do wykonania umowy lub podjęcia działań przed jej zawarciem.',
            privacyS3S1P4: 'Okres przechowywania: Czas niezbędny do obsługi zapytania, a w przypadku zawarcia umowy – przez okres jej obowiązywania i wymagany prawem okres archiwizacji.',
            privacyS3S2Title: 'Działania marketingowe:',
            privacyS3S2P1: 'Cel: Przesyłanie informacji handlowych i marketingowych.',
            privacyS3S2P2: 'Zakres danych: Adres e-mail, numer telefonu.',
            privacyS3S2P3: 'Forma kontaktu: E-mail, SMS, WhatsApp, Messenger.',
            privacyS3S2P4: 'Podstawa prawna: Art. 6 ust. 1 lit. a RODO – Twoja dobrowolna zgoda.',
            privacyS3S2P5: 'Okres przechowywania: Do momentu wycofania zgody.',
            privacyS4Title: '§4 Odbiorcy Danych',
            privacyS4P1: 'Korzystamy z usług podmiotów zewnętrznych, którym mogą być przekazywane Twoje dane (np. dostawca hostingu).',
            privacyS4P2: 'Odbiorcami Twoich danych mogą być:',
            privacyS4R1: 'Dostawca hostingu: GitHub, Inc. – w celu przechowywania danych Serwisu.',
            privacyS4R2: 'Dostawcy komunikatorów: Meta Platforms, Inc. (WhatsApp, Messenger) – w celu komunikacji marketingowej za Twoją zgodą.',
            privacyS4R3: 'Operatorzy telekomunikacyjni: w celu wysyłki wiadomości SMS.',
            privacyS4P3: 'Dane przekazywane są na podstawie umów powierzenia przetwarzania danych.',
            privacyS5Title: '§5 Twoje Prawa',
            privacyS5P1: 'Przysługują Ci następujące prawa:',
            privacyS5R1: 'Prawo dostępu do danych.',
            privacyS5R2: 'Prawo do sprostowania danych.',
            privacyS5R3: 'Prawo do usunięcia danych („prawo do bycia zapomnianym”).',
            privacyS5R4: 'Prawo do ograniczenia przetwarzania.',
            privacyS5R5: 'Prawo do przenoszenia danych.',
            privacyS5R6: 'Prawo do wniesienia sprzeciwu.',
            privacyS5R7: 'Prawo do wycofania zgody w dowolnym momencie.',
            privacyS5R8: 'Prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.',
            privacyS5P2: 'Aby skorzystać z praw, skontaktuj się z nami.',
            privacyS6Title: '§6 Pliki Cookies',
            privacyS6P1: 'Serwis nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem informacji zawartych w plikach cookies.',
            privacyS6P2: 'Pliki cookies (ciasteczka) to małe pliki tekstowe przechowywane na Twoim urządzeniu.',
            privacyS6P3: 'Stosujemy cookies niezbędne do działania strony. Serwis jest hostowany na GitHub Pages i może używać technicznych cookies.',
            privacyS6P4: 'Serwis nie używa cookies do celów analitycznych ani marketingowych bez Twojej zgody.',
            privacyS6P5: 'Możesz zarządzać zgodami za pomocą banera cookie.',
            privacyS7Title: '§7 Przekazywanie Danych Poza EOG',
            privacyS7P1: 'W związku z korzystaniem z usług GitHub, Inc. oraz Meta Platforms, Inc., Twoje dane mogą być przekazywane do USA.',
            privacyS7P2: 'Przekazywanie danych odbywa się na podstawie standardowych klauzul umownych (SCC) zatwierdzonych przez Komisję Europejską.',
            privacyS8Title: '§8 Postanowienia Końcowe',
            privacyS8P1: 'Zastrzegamy sobie prawo do wprowadzania zmian w Polityce Prywatności.',
            privacyS8P2: 'O wszelkich zmianach będziemy informować, publikując nową wersję Polityki w Serwisie.',
            privacyS8P3: 'Niniejsza Polityka obowiązuje od dnia 22.07.2024 r.',
        },
        en: {
            // SEO
            metaDescription: 'Discover luxury apartments Amber & Azure in Międzyzdroje. Your private haven in the heart of the Sea & Forest complex, where nature meets comfort. Book your stay.',
            metaKeywords: 'apartments Międzyzdroje, luxury apartments, apartment rental, Sea & Forest, Wolin National Park, Amber & Azure, accommodation Międzyzdroje',
            // Navigation & Header
            pageTitle: 'Amber & Azure Residences | Luxury Apartments in Sea & Forest',
            logo: 'Amber & Azure <span class="logo-accent">Residences</span>',
            navPhilosophy: 'Philosophy',
            navApartments: 'Apartments',
            navAmenities: 'Amenities',
            navContact: 'Contact',
            // Hero
            videoError: 'Your browser does not support the background video.',
            heroTitle: 'Amber & Azure Residences',
            heroSubtitle: 'Your Haven, Where the Forest Kisses the Sea',
            heroCta: 'Explore Our Apartments',
            // Philosophy
            philosophyTitle: 'True luxury is time and space.',
            philosophySubtitle: 'At Amber & Azure Residences, we believe that authentic rest is born from harmony with nature. We have created two unique apartments in the heart of the Sea & Forest complex that allow you to slow down, breathe, and reconnect with yourself and your surroundings.',
            introText: 'As our Guests, you receive the keys not only to a luxurious interior but also to the wealth of amenities of the entire resort, nestled in the picturesque surroundings of the Wolin National Park. This is an invitation to experience, feel, and draw from nature to the fullest.',
            // Apartments
            apartmentsMainTitle: 'Your Private Apartments',
            apartmentsMainSubtitle: 'Each of our apartments tells a unique story through design, comfort, and proximity to nature. Choose your perfect space for relaxation.',
            amberSoonTitle: 'Amber Suite Apartment – Coming Soon!',
            amberSoonDesc: 'This brand new, unique apartment, inspired by the warmth of amber, is waiting to welcome you. It offers an unforgettable stay in the heart of the Wolin National Park. Perfect for those who value cozy luxury and closeness to nature.',
            amberSoonContact: 'Get ready for your dream stay! Contact us to learn more about availability and reservations.',
            amberContactBtn: 'Check Availability & Book',
            azureTitle: 'Azure Suite Apartment',
            azureDesc: 'Immerse yourself in classic elegance combined with modern functionality. The 37 m² Azure apartment is a space that envelops you, allowing you to fully enjoy every moment of your stay. Bright, spacious interiors and carefully selected accessories create an atmosphere of peace, and the impressive 15-meter terrace with a forest view is the perfect place for morning coffee and evening relaxation.',
            azureDetail1: '<b>Living Room:</b> Spacious and bright, with a comfortable sofa, an elegant coffee table, and a modern TV.',
            azureDetail2: '<b>Kitchenette:</b> Complete freedom and independence thanks to a modern stove, dishwasher, and full equipment.',
            azureDetail3: '<b>Dining Area:</b> A beautiful, round table with chairs creates a cozy corner for shared meals.',
            azureDetail4: '<b>Bedroom:</b> A luxurious double bed (160x200 cm) and a separate TV for complete relaxation.',
            azureDetail5: '<b>Terrace:</b> An impressive 15-meter terrace with a forest view, accessible from both rooms.',
            azureDetail6: '<b>Air Conditioning:</b> Individually controlled for the perfect temperature in any season.',
            wifi: '<b>Internet:</b> Fast, free Wi-Fi available throughout the apartment.',
            // Amenities (Accordion)
            detailedInfoMainTitle: 'Detailed Information & Amenities',
            detailedInfoMainSubtitle: 'Everything you need to know about your stay at Sea & Forest Resort.',
            mealsTitle: 'Dining',
            mealsDesc: 'The apartments are equipped with kitchenettes for self-catering. There is also an a la carte restaurant and a bar within the resort.',
            foodFeaturesTitle: 'What distinguishes the resort\'s cuisine:',
            foodFeature1: '<b>Zero waste on a plate</b> - delicious sets are prepared, using every ingredient to the end.',
            foodFeature2: '<b>Sea & Forest to Table</b> - cooperation with local fishermen and suppliers to serve fresh and seasonal products.',
            foodFeature3: '<b>Eating outdoors</b> - meals taste better when you can eat them on the terrace or take them for a picnic.',
            foodFeature4: '<b>Intimate and in a slow rhythm</b> - no rush, just good food and peace around.',
            restaurantHoursTitle: 'Gastronomy Opening Hours:',
            restaurantHours: 'For Rest a la carte Restaurant: daily 12:00 PM – 11:00 PM',
            lobbyBarHours: 'Lobby Café & Bar: daily 12:00 PM – 11:00 PM',
            takeawaySnacks: 'Takeaway snacks: picnic sets, sandwiches, salads - ready to take to the beach or on a trip.',
            sportEntertainmentTitle: 'Sports & Entertainment',
            sportEntertainmentSubtitle: 'Time for relaxation, activity, and adventure - just the way you like it!',
            sportEntertainment1: '<b>Beach transport by electric cart</b> - the hotel\'s cart will take you to the beach several times a day.',
            sportEntertainment2: '<b>Bike adventures</b> - rent a bike (additional fee) and hit the road.',
            sportEntertainment3: '<b>Movement for the body, breath for the mind</b> - fitness room, pools, jacuzzi, saunas, and sports classes.',
            sportEntertainment4: '<b>A season full of attractions</b> - concerts, bonfires, and seasonal animations for children.',
            sportEntertainment5: '<b>The soothing forest</b> - Wolin National Park right at your doorstep.',
            sportEntertainment6: '<b>Digital Detox</b> - "no phone zones" for those who want to rest from the screen.',
            wellnessSpaTitle: 'Wellness & SPA',
            wellnessSpaSubtitle: 'Here the body relaxes, and the mind rests.',
            wellnessSpa1: '<b>Pools and jacuzzi</b> - an indoor pool with a paddling pool, a year-round heated outdoor pool, and two jacuzzis.',
            wellnessSpa2: '<b>Finnish sauna</b> - warm up your body, then relax in the forest relaxation zone.',
            wellnessSpa3: '<b>Gym</b> - modern equipment for strength and endurance training, plus fitness classes.',
            wellnessSpa4: '<b>SPA Shept</b> - original treatments inspired by nature and a holistic approach.',
            wellnessSpa5: '<b>Cryo-sauna & forest baths</b> - cold therapies and walks among the trees for strengthening and oxygenation.',
            spaSheptHours: 'SPA Shept: daily 9:00 AM – 9:00 PM',
            poolGymSaunaHours: 'Pool, gym, saunas: daily 7:00 AM – 9:00 PM (9:00 PM – 11:00 PM adults only)',
            fitnessClasses: 'Fitness Classes: according to the schedule',
            kidsAmenitiesTitle: 'Amenities for Children',
            kidsAmenitiesSubtitle: 'Kids have no time for boredom here, because the world of Sea & Forest is one big playground.',
            kidsAmenities1: 'Mewa Śmieszka Playroom',
            kidsAmenities2: 'Outdoor playground',
            kidsAmenities3: 'Organized animations (seasonal attraction)',
            kidsAmenities4: 'Quest of the Wolin Tribe - a field game for children 7+.',
            kidsAmenities5: 'Eco-Detectives - an educational game for the youngest.',
            kidsAmenities6: 'Pools with swimming accessories',
            kidsAmenities7: 'On request: baby bath, step stool, toilet seat cover',
            kidsAmenities8: 'In the restaurant: high chairs; in the restrooms: changing tables.',
            kidsAmenities9: 'Children up to 3 years old, sleeping with parents, stay free of charge',
            kidsAmenities10: 'Extra cot - 30 PLN/day',
            additionallyPaidTitle: 'Additionally Paid',
            infoParking: 'Parking space in the underground garage (70 PLN/day) - reservation recommended.',
            infoPets: 'Pet stay (100 PLN/day) - please notify us in advance.',
            infoCrib: 'Cot for children (0-3 years): 30 PLN/day.',
            infoBikeRental: 'Bike rental - more information at the reception.',
            infoEVCharging: 'Electric car charging station.',
            infoClimateTax: 'Mandatory climate fee charged according to local rates.',
            goodToKnowTitle: 'Good to Know',
            goodToKnowWifi: 'Fast, free Wi-Fi available throughout the apartment and resort area.',
            goodToKnowBedding: 'Bed linen and towels included in the price.',
            goodToKnowCleaning: 'Final cleaning of the apartment included in the price.',
            goodToKnowCheckIn: 'Check-in from 4:00 PM.',
            goodToKnowCheckOut: 'Check-out until 11:00 AM.',
            // Contact & Footer
            locationTitle: 'Our Location',
            locationDesc: 'You will find us in the Sea & Forest complex, in the buffer zone of the Wolin National Park, just a short walk from the beach.',
            contactTitle: 'Book Your Stay',
            contactDesc: 'Choose the Amber or Azure Suite and immerse yourself in luxury, tranquility, and nature. We look forward to hearing from you.',
            contactBtnMail: 'Email Us',
            contactBtnCallDarek: 'Darek: +48 602 229 707',
            contactBtnCallBeata: 'Beata: +48 606 410 041',
            footerRights: '© 2025 Amber & Azure Residences. All rights reserved.',
            footerPrivacy: 'Privacy Policy',
            // CTA Bubble
            ctaTitle: 'Want to book your stay?',
            ctaDesc: 'Contact us directly:<br><a href="mailto:amberazure.residences@gmail.com">amberazure.residences@gmail.com</a><br>Darek: <a href="tel:+48602229707">+48 602 229 707</a><br>Beata: <a href="tel:+48606410041">+48 606 410 041</a>',
            // Cookies
            cookieTitle: 'We Value Your Privacy',
            cookieText: 'We use cookies to personalize content, provide social media features, and analyze our traffic. We also share information about your use of our site with our partners.',
            cookieDeny: 'Decline',
            cookieCustomize: 'Customize',
            cookieAccept: 'Accept All',
            cookieDetailsTitle: 'Customize Consent',
            cookieNecessaryDesc: 'These cookies are essential for the proper functioning of the site and cannot be disabled.',
            cookieAnalyticsDesc: 'These cookies allow us to analyze site traffic and improve its performance.',
            cookieMarketingDesc: 'These cookies help us deliver personalized ads that may interest you.',
            cookieSave: 'Save Settings',
             // Privacy Policy
            privacyTitle: 'Privacy and Cookies Policy',
            privacyLastUpdated: 'Last updated: July 22, 2024',
            privacyS1Title: '§1 General Provisions',
            privacyS1P1: 'This privacy policy (hereinafter the "Policy") is for informational purposes and defines the rules for processing personal data and using cookies on the website available at: https://aaresidences.github.io/amberazure/ (hereinafter the "Service").',
            privacyS1P2: 'We care about your privacy and the security of your personal data, processing them in accordance with the requirements of the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (GDPR).',
            privacyS2Title: '§2 Personal Data Administrator',
            privacyS2P1: 'The administrator of your personal data is MTM Dariusz Seferyński, ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka (hereinafter the "Administrator").',
            privacyS2P2: 'In matters related to personal data, you can contact the Administrator:',
            privacyS2Email: 'Email: amberazure.residences@gmail.com',
            privacyS2Phone: 'Phone: +48 602 229 707',
            privacyS2Address: 'Mailing address: ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka',
            privacyS3Title: '§3 Purposes and Legal Bases for Data Processing',
            privacyS3P1: 'The Administrator processes your personal data for the following purposes:',
            privacyS3S1Title: 'Handling inquiries and reservations:',
            privacyS3S1P1: 'Purpose: Responding to inquiries, presenting offers, and executing reservation agreements.',
            privacyS3S1P2: 'Scope of data: Name, email, phone number, message content.',
            privacyS3S1P3: 'Legal basis: Art. 6(1)(b) GDPR – necessity to perform a contract or take steps before entering into a contract.',
            privacyS3S1P4: 'Storage period: Time necessary to handle the inquiry, and in the case of a contract, for its duration and the legally required archival period.',
            privacyS3S2Title: 'Marketing activities:',
            privacyS3S2P1: 'Purpose: Sending commercial and marketing information.',
            privacyS3S2P2: 'Scope of data: Email address, phone number.',
            privacyS3S2P3: 'Form of contact: Email, SMS, WhatsApp, Messenger.',
            privacyS3S2P4: 'Legal basis: Art. 6(1)(a) GDPR – your voluntary consent.',
            privacyS3S2P5: 'Storage period: Until you withdraw your consent.',
            privacyS4Title: '§4 Data Recipients',
            privacyS4P1: 'We use the services of external entities to whom your data may be transferred (e.g., hosting provider).',
            privacyS4P2: 'The recipients of your data may be:',
            privacyS4R1: 'Hosting provider: GitHub, Inc. – to store the Service data.',
            privacyS4R2: 'Messenger providers: Meta Platforms, Inc. (WhatsApp, Messenger) – for marketing communication with your consent.',
            privacyS4R3: 'Telecommunication operators: to send SMS messages.',
            privacyS4P3: 'Data is transferred based on data processing agreements.',
            privacyS5Title: '§5 Your Rights',
            privacyS5P1: 'You have the following rights:',
            privacyS5R1: 'The right to access your data.',
            privacyS5R2: 'The right to rectify your data.',
            privacyS5R3: 'The right to erase your data ("right to be forgotten").',
            privacyS5R4: 'The right to restrict processing.',
            privacyS5R5: 'The right to data portability.',
            privacyS5R6: 'The right to object to processing.',
            privacyS5R7: 'The right to withdraw consent at any time.',
            privacyS5R8: 'The right to lodge a complaint with the President of the Personal Data Protection Office.',
            privacyS5P2: 'To exercise your rights, please contact us.',
            privacyS6Title: '§6 Cookies',
            privacyS6P1: 'The Service does not automatically collect any information, except for the information contained in cookies.',
            privacyS6P2: 'Cookies are small text files stored on your device.',
            privacyS6P3: 'We use essential cookies for the site to function. The service is hosted on GitHub Pages and may use technical cookies.',
            privacyS6P4: 'The Service does not use cookies for analytical or marketing purposes without your consent.',
            privacyS6P5: 'You can manage your consents using the cookie banner.',
            privacyS7Title: '§7 Data Transfer Outside the EEA',
            privacyS7P1: 'Due to the use of services from GitHub, Inc., and Meta Platforms, Inc., your data may be transferred to the USA.',
            privacyS7P2: 'Data transfer is based on standard contractual clauses (SCC) approved by the European Commission.',
            privacyS8Title: '§8 Final Provisions',
            privacyS8P1: 'We reserve the right to make changes to the Privacy Policy.',
            privacyS8P2: 'We will inform you of any changes by publishing the new version of the Policy on the Service.',
            privacyS8P3: 'This Policy is effective from July 22, 2024.',
        },
        de: {
            // SEO
            metaDescription: 'Entdecken Sie die Luxusapartments Amber & Azure in Misdroy. Ihr privater Rückzugsort im Herzen des Sea & Forest-Komplexes, wo Natur auf Komfort trifft. Buchen Sie Ihren Aufenthalt.',
            metaKeywords: 'ferienwohnung Misdroy, luxus-apartments, ferienwohnung mieten, Sea & Forest, Nationalpark Wolin, Amber & Azure, unterkunft Misdroy',
            // Navigation & Header
            pageTitle: 'Amber & Azure Residences | Luxusapartments in Sea & Forest',
            logo: 'Amber & Azure <span class="logo-accent">Residences</span>',
            navPhilosophy: 'Philosophie',
            navApartments: 'Apartments',
            navAmenities: 'Annehmlichkeiten',
            navContact: 'Kontakt',
            // Hero
            videoError: 'Ihr Browser unterstützt keine Hintergrundvideos.',
            heroTitle: 'Amber & Azure Residences',
            heroSubtitle: 'Ihr Hafen, wo der Wald das Meer küsst',
            heroCta: 'Entdecken Sie unsere Apartments',
            // Philosophy
            philosophyTitle: 'Wahrer Luxus ist Zeit und Raum.',
            philosophySubtitle: 'Bei Amber & Azure Residences glauben wir, dass wahre Erholung aus der Harmonie mit der Natur entsteht. Wir haben zwei einzigartige Apartments im Herzen des Sea & Forest-Komplexes geschaffen, die es Ihnen ermöglichen, zu entschleunigen, durchzuatmen und sich wieder mit sich selbst und Ihrer Umgebung zu verbinden.',
            introText: 'Als unsere Gäste erhalten Sie nicht nur die Schlüssel zu einem luxuriösen Interieur, sondern auch zum Reichtum der Annehmlichkeiten des gesamten Resorts, eingebettet in die malerische Pufferzone des Nationalparks Wolin. Dies ist eine Einladung, die Natur in vollen Zügen zu erleben, zu fühlen und zu genießen.',
            // Apartments
            apartmentsMainTitle: 'Ihre privaten Apartments',
            apartmentsMainSubtitle: 'Jedes unserer Apartments erzählt eine einzigartige Geschichte durch Design, Komfort und Naturverbundenheit. Wählen Sie Ihren idealen Ort zur Entspannung.',
            amberSoonTitle: 'Amber Suite Apartment – Bald verfügbar!',
            amberSoonDesc: 'Dieses brandneue, einzigartige Apartment, inspiriert von der Wärme des Bernsteins, erwartet Sie, um Sie willkommen zu heißen. Es bietet unvergessliche Erlebnisse während Ihres Aufenthalts im Herzen des Nationalparks Wolin. Perfekt für diejenigen, die gemütlichen Luxus und die Nähe zur Natur schätzen.',
            amberSoonContact: 'Bereiten Sie sich auf Ihren Traumaufenthalt vor! Kontaktieren Sie uns, um mehr über Verfügbarkeit und Buchung zu erfahren.',
            amberContactBtn: 'Verfügbarkeit prüfen und buchen',
            azureTitle: 'Azure Suite Apartment',
            azureDesc: 'Tauchen Sie ein in klassische Eleganz, kombiniert mit moderner Funktionalität. Das 37 m² große Azure-Apartment ist ein Raum, der Sie umhüllt und Sie jeden Moment Ihres Aufenthalts genießen lässt. Helle, geräumige Innenräume und sorgfältig ausgewählte Accessoires schaffen eine Atmosphäre der Ruhe, und die beeindruckende, 15 Quadratmeter große Terrasse mit Waldblick ist der perfekte Ort für einen Morgenkaffee und abendliche Entspannung.',
            azureDetail1: '<b>Wohnzimmer:</b> Geräumig und hell, mit einem bequemen Sofa, einem eleganten Couchtisch und einem modernen Fernseher.',
            azureDetail2: '<b>Küchenzeile:</b> Volle Freiheit und Unabhängigkeit dank eines modernen Kochfelds, eines Geschirrspülers und einer kompletten Ausstattung.',
            azureDetail3: '<b>Essbereich:</b> Ein schöner, runder Tisch mit Stühlen schafft eine gemütliche Ecke für gemeinsame Mahlzeiten.',
            azureDetail4: '<b>Schlafzimmer:</b> Ein luxuriöses Doppelbett (160x200 cm) und ein separater Fernseher für vollkommene Entspannung.',
            azureDetail5: '<b>Terrasse:</b> Eine beeindruckende, 15 Quadratmeter große Terrasse mit Waldblick, zugänglich von beiden Zimmern.',
            azureDetail6: '<b>Klimaanlage:</b> Individuell regulierbar für die perfekte Temperatur zu jeder Jahreszeit.',
            wifi: '<b>Internet:</b> Schnelles, kostenloses WLAN in der gesamten Wohnung verfügbar.',
            // Amenities (Accordion)
            detailedInfoMainTitle: 'Detaillierte Informationen & Annehmlichkeiten',
            detailedInfoMainSubtitle: 'Alles, was Sie über Ihren Aufenthalt im Sea & Forest Resort wissen müssen.',
            mealsTitle: 'Verpflegung',
            mealsDesc: 'Die Apartments sind mit Küchenzeilen zur Selbstverpflegung ausgestattet. Auf dem Gelände des Resorts gibt es auch ein À-la-carte-Restaurant und eine Bar.',
            foodFeaturesTitle: 'Was die Küche des Resorts auszeichnet:',
            foodFeature1: '<b>Zero Waste auf dem Teller</b> – es werden köstliche Sets zubereitet, bei denen jede Zutat bis zum Ende verwendet wird.',
            foodFeature2: '<b>Sea & Forest to Table</b> – Zusammenarbeit mit lokalen Fischern und Lieferanten, um frische und saisonale Produkte zu servieren.',
            foodFeature3: '<b>Essen im Freien</b> – Mahlzeiten schmecken besser, wenn man sie auf der Terrasse essen oder zum Picknick mitnehmen kann.',
            foodFeature4: '<b>Intim und im Slow-Rhythmus</b> – keine Eile, nur gutes Essen und Ruhe ringsum.',
            restaurantHoursTitle: 'Öffnungszeiten der Gastronomie:',
            restaurantHours: 'À-la-carte-Restaurant For Rest: täglich 12:00 – 23:00 Uhr',
            lobbyBarHours: 'Lobby Café & Bar: täglich 12:00 – 23:00 Uhr',
            takeawaySnacks: 'Snacks zum Mitnehmen: Picknick-Sets, Sandwiches, Salate – bereit zum Mitnehmen an den Strand oder für einen Ausflug.',
            sportEntertainmentTitle: 'Sport und Unterhaltung',
            sportEntertainmentSubtitle: 'Zeit für Entspannung, Bewegung und Abenteuer – ganz nach Ihrem Geschmack!',
            sportEntertainment1: '<b>Strandtransport mit dem Elektrowagen</b> – mehrmals täglich bringt Sie der Hotelwagen zum Strand.',
            sportEntertainment2: '<b>Fahrradabenteuer</b> – mieten Sie ein Fahrrad (gegen Aufpreis) und erkunden Sie die Gegend.',
            sportEntertainment3: '<b>Bewegung für den Körper, Atem für den Geist</b> – Fitnessraum, Pools, Whirlpool, Saunen und Sportkurse.',
            sportEntertainment4: '<b>Eine Saison voller Attraktionen</b> – Konzerte, Lagerfeuer und saisonale Animationen für Kinder.',
            sportEntertainment5: '<b>Der beruhigende Wald</b> – der Nationalpark Wolin direkt vor der Haustür.',
            sportEntertainment6: '<b>Digital Detox</b> – „No-Phone-Zonen“ für diejenigen, die sich vom Bildschirm erholen möchten.',
            wellnessSpaTitle: 'Wellness & SPA',
            wellnessSpaSubtitle: 'Hier entspannt sich der Körper, und der Geist erholt sich.',
            wellnessSpa1: '<b>Pools und Whirlpool</b> – Innenpool mit Kinderbecken, ganzjährig beheizter Außenpool und zwei Whirlpools.',
            wellnessSpa2: '<b>Finnische Sauna</b> – wärmen Sie Ihren Körper auf und entspannen Sie sich dann in der Wald-Entspannungszone.',
            wellnessSpa3: '<b>Fitnessraum</b> – moderne Geräte für Kraft- und Ausdauertraining sowie Fitnesskurse.',
            wellnessSpa4: '<b>SPA Shept</b> – originelle Behandlungen, inspiriert von der Natur und einem ganzheitlichen Ansatz.',
            wellnessSpa5: '<b>Kryo-Sauna & Waldbäder</b> – Kältetherapien und Spaziergänge zwischen den Bäumen zur Stärkung und Sauerstoffversorgung.',
            spaSheptHours: 'SPA Shept: täglich 9:00 – 21:00 Uhr',
            poolGymSaunaHours: 'Pool, Fitnessraum, Saunen: täglich 7:00 – 21:00 Uhr (21:00 – 23:00 Uhr nur für Erwachsene)',
            fitnessClasses: 'Fitnesskurse: laut Zeitplan',
            kidsAmenitiesTitle: 'Annehmlichkeiten für Kinder',
            kidsAmenitiesSubtitle: 'Kinder haben bei uns keine Zeit für Langeweile, denn die Welt von Sea & Forest ist ein großer Spielplatz.',
            kidsAmenities1: 'Spielzimmer Mewa Śmieszka',
            kidsAmenities2: 'Außenspielplatz',
            kidsAmenities3: 'Organisierte Animationen (saisonale Attraktion)',
            kidsAmenities4: 'Quest des Wolin-Stammes – ein Geländespiel für Kinder ab 7 Jahren.',
            kidsAmenities5: 'Öko-Detektive – ein Lernspiel für die Kleinsten.',
            kidsAmenities6: 'Pools mit Schwimmzubehör',
            kidsAmenities7: 'Auf Anfrage: Babywanne, Hocker, Toilettensitz',
            kidsAmenities8: 'Im Restaurant: Hochstühle; in den Toiletten: Wickeltische.',
            kidsAmenities9: 'Kinder bis 3 Jahre, die bei den Eltern schlafen, übernachten kostenfrei',
            kidsAmenities10: 'Zusätzliches Babybett - 30 PLN/Tag',
            additionallyPaidTitle: 'Zusätzlich kostenpflichtig',
            infoParking: 'Tiefgaragenstellplatz (70 PLN/Tag) – Reservierung empfohlen.',
            infoPets: 'Aufenthalt für Haustiere (100 PLN/Tag) – bitte im Voraus anmelden.',
            infoCrib: 'Babybett für Kinder (0-3 Jahre): 30 PLN/Tag.',
            infoBikeRental: 'Fahrradverleih – weitere Informationen an der Rezeption.',
            infoEVCharging: 'Ladestation für Elektroautos.',
            infoClimateTax: 'Obligatorische Kurtaxe gemäß den örtlichen Tarifen.',
            goodToKnowTitle: 'Gut zu wissen',
            goodToKnowWifi: 'Schnelles, kostenloses WLAN im gesamten Apartment und auf dem Resortgelände verfügbar.',
            goodToKnowBedding: 'Bettwäsche und Handtücher im Preis inbegriffen.',
            goodToKnowCleaning: 'Endreinigung des Apartments im Preis inbegriffen.',
            goodToKnowCheckIn: 'Check-in ab 16:00 Uhr.',
            goodToKnowCheckOut: 'Check-out bis 11:00 Uhr.',
            // Contact & Footer
            locationTitle: 'Unser Standort',
            locationDesc: 'Sie finden uns im Sea & Forest-Komplex, in der Pufferzone des Nationalparks Wolin, nur einen kurzen Spaziergang vom Strand entfernt.',
            contactTitle: 'Buchen Sie Ihren Aufenthalt',
            contactDesc: 'Wählen Sie die Amber- oder Azure-Suite und tauchen Sie ein in Luxus, Ruhe und Natur. Wir freuen uns auf Ihre Kontaktaufnahme.',
            contactBtnMail: 'E-Mail Senden',
            contactBtnCallDarek: 'Darek: +48 602 229 707',
            contactBtnCallBeata: 'Beata: +48 606 410 041',
            footerRights: '© 2025 Amber & Azure Residences. Alle Rechte vorbehalten.',
            footerPrivacy: 'Datenschutzrichtlinie',
            // CTA Bubble
            ctaTitle: 'Möchten Sie Ihren Aufenthalt buchen?',
            ctaDesc: 'Kontaktieren Sie uns direkt:<br><a href="mailto:amberazure.residences@gmail.com">amberazure.residences@gmail.com</a><br>Darek: <a href="tel:+48602229707">+48 602 229 707</a><br>Beata: <a href="tel:+48606410041">+48 606 410 041</a>',
            // Cookies
            cookieTitle: 'Wir schätzen Ihre Privatsphäre',
            cookieText: 'Wir verwenden Cookies, um Inhalte zu personalisieren, Social-Media-Funktionen bereitzustellen und unseren Traffic zu analysieren. Wir teilen auch Informationen über Ihre Nutzung unserer Website mit unseren Partnern.',
            cookieDeny: 'Ablehnen',
            cookieCustomize: 'Anpassen',
            cookieAccept: 'Alle akzeptieren',
            cookieDetailsTitle: 'Zustimmung anpassen',
            cookieNecessaryDesc: 'Diese Cookies sind für das reibungslose Funktionieren der Website unerlässlich und können nicht deaktiviert werden.',
            cookieAnalyticsDesc: 'Diese Cookies ermöglichen es uns, den Website-Verkehr zu analysieren und deren Leistung zu verbessern.',
            cookieMarketingDesc: 'Diese Cookies helfen uns, personalisierte Anzeigen zu liefern, die Sie interessieren könnten.',
            cookieSave: 'Einstellungen speichern',
             // Privacy Policy
            privacyTitle: 'Datenschutz- und Cookie-Richtlinie',
            privacyLastUpdated: 'Zuletzt aktualisiert: 22. Juli 2024',
            privacyS1Title: '§1 Allgemeine Bestimmungen',
            privacyS1P1: 'Diese Datenschutzrichtlinie (im Folgenden „Richtlinie“) dient zu Informationszwecken und legt die Regeln für die Verarbeitung personenbezogener Daten und die Verwendung von Cookies auf der Website fest, die unter folgender Adresse verfügbar ist: https://aaresidences.github.io/amberazure/ (im Folgenden „Dienst“).',
            privacyS1P2: 'Wir kümmern uns um Ihre Privatsphäre und die Sicherheit Ihrer personenbezogenen Daten und verarbeiten diese gemäß den Anforderungen der Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates vom 27. April 2016 (DSGVO).',
            privacyS2Title: '§2 Verantwortlicher für personenbezogene Daten',
            privacyS2P1: 'Der Verantwortliche für Ihre personenbezogenen Daten ist MTM Dariusz Seferyński, ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka (im Folgenden „Verantwortlicher“).',
            privacyS2P2: 'In Angelegenheiten bezüglich personenbezogener Daten können Sie den Verantwortlichen kontaktieren:',
            privacyS2Email: 'E-Mail: amberazure.residences@gmail.com',
            privacyS2Phone: 'Telefon: +48 602 229 707',
            privacyS2Address: 'Postanschrift: ul. Księcia Józefa Poniatowskiego 11, 05-230 Kobyłka',
            privacyS3Title: '§3 Zwecke und Rechtsgrundlagen der Datenverarbeitung',
            privacyS3P1: 'Der Verantwortliche verarbeitet Ihre personenbezogenen Daten zu folgenden Zwecken:',
            privacyS3S1Title: 'Bearbeitung von Anfragen und Reservierungen:',
            privacyS3S1P1: 'Zweck: Beantwortung von Anfragen, Unterbreitung von Angeboten und Ausführung von Reservierungsverträgen.',
            privacyS3S1P2: 'Datenumfang: Name, E-Mail, Telefonnummer, Nachrichteninhalt.',
            privacyS3S1P3: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO – Notwendigkeit zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen.',
            privacyS3S1P4: 'Speicherfrist: Zeit, die zur Bearbeitung der Anfrage erforderlich ist, und im Falle eines Vertrags für dessen Dauer und die gesetzlich vorgeschriebene Archivierungsfrist.',
            privacyS3S2Title: 'Marketingaktivitäten:',
            privacyS3S2P1: 'Zweck: Versand von kommerziellen und Marketinginformationen.',
            privacyS3S2P2: 'Datenumfang: E-Mail-Adresse, Telefonnummer.',
            privacyS3S2P3: 'Kontaktform: E-Mail, SMS, WhatsApp, Messenger.',
            privacyS3S2P4: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO – Ihre freiwillige Einwilligung.',
            privacyS3S2P5: 'Speicherfrist: Bis Sie Ihre Einwilligung widerrufen.',
            privacyS4Title: '§4 Datenempfänger',
            privacyS4P1: 'Wir nutzen die Dienste externer Unternehmen, an die Ihre Daten weitergegeben werden können (z. B. Hosting-Anbieter).',
            privacyS4P2: 'Die Empfänger Ihrer Daten können sein:',
            privacyS4R1: 'Hosting-Anbieter: GitHub, Inc. – zur Speicherung der Dienstdaten.',
            privacyS4R2: 'Messenger-Anbieter: Meta Platforms, Inc. (WhatsApp, Messenger) – für Marketingkommunikation mit Ihrer Zustimmung.',
            privacyS4R3: 'Telekommunikationsbetreiber: zum Versand von SMS-Nachrichten.',
            privacyS4P3: 'Die Datenübermittlung erfolgt auf der Grundlage von Datenverarbeitungsverträgen.',
            privacyS5Title: '§5 Ihre Rechte',
            privacyS5P1: 'Sie haben folgende Rechte:',
            privacyS5R1: 'Das Recht auf Auskunft über Ihre Daten.',
            privacyS5R2: 'Das Recht auf Berichtigung Ihrer Daten.',
            privacyS5R3: 'Das Recht auf Löschung Ihrer Daten („Recht auf Vergessenwerden“).',
            privacyS5R4: 'Das Recht auf Einschränkung der Verarbeitung.',
            privacyS5R5: 'Das Recht auf Datenübertragbarkeit.',
            privacyS5R6: 'Das Recht auf Widerspruch gegen die Verarbeitung.',
            privacyS5R7: 'Das Recht, die Einwilligung jederzeit zu widerrufen.',
            privacyS5R8: 'Das Recht, eine Beschwerde beim Präsidenten des Amtes für den Schutz personenbezogener Daten einzureichen.',
            privacyS5P2: 'Um Ihre Rechte auszuüben, kontaktieren Sie uns bitte.',
            privacyS6Title: '§6 Cookies',
            privacyS6P1: 'Der Dienst sammelt automatisch keine Informationen, mit Ausnahme der in Cookies enthaltenen Informationen.',
            privacyS6P2: 'Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden.',
            privacyS6P3: 'Wir verwenden unbedingt notwendige Cookies, damit die Website funktioniert. Der Dienst wird auf GitHub Pages gehostet und kann technische Cookies verwenden.',
            privacyS6P4: 'Der Dienst verwendet ohne Ihre Zustimmung keine Cookies für Analyse- oder Marketingzwecke.',
            privacyS6P5: 'Sie können Ihre Einwilligungen über das Cookie-Banner verwalten.',
            privacyS7Title: '§7 Datenübermittlung außerhalb des EWR',
            privacyS7P1: 'Aufgrund der Nutzung von Diensten von GitHub, Inc. und Meta Platforms, Inc. können Ihre Daten in die USA übermittelt werden.',
            privacyS7P2: 'Die Datenübermittlung basiert auf Standardvertragsklauseln (SCC), die von der Europäischen Kommission genehmigt wurden.',
            privacyS8Title: '§8 Schlussbestimmungen',
            privacyS8P1: 'Wir behalten uns das Recht vor, Änderungen an der Datenschutzrichtlinie vorzunehmen.',
            privacyS8P2: 'Wir werden Sie über alle Änderungen informieren, indem wir die neue Version der Richtlinie im Dienst veröffentlichen.',
            privacyS8P3: 'Diese Richtlinie tritt am 22. Juli 2024 in Kraft.',
        }
    };

    // === Logika Menu Hamburger ===
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-links');
    const navLinks = navMenu.querySelectorAll('a');

    const toggleMenu = () => {
        const isOpen = navMenu.classList.toggle('is-open');
        hamburgerBtn.classList.toggle('is-active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
    };

    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('is-open')) {
                toggleMenu();
            }
        });
    });
    
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = navMenu.contains(e.target);
        const isClickOnHamburger = hamburgerBtn.contains(e.target);
        if (navMenu.classList.contains('is-open') && !isClickInsideMenu && !isClickOnHamburger) {
            toggleMenu();
        }
    });

    // === Logika Przełączania Języków ===
    const languageSwitcher = document.querySelector('.language-switcher');
    const flags = languageSwitcher.querySelectorAll('img');

    const setLanguage = (lang) => {
        const langTranslations = translations[lang];
        if (!langTranslations) return;

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (langTranslations[key]) {
                if (element.tagName === 'META') {
                    element.content = langTranslations[key];
                } else {
                    element.innerHTML = langTranslations[key];
                }
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
            setLanguage(e.target.dataset.lang);
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
        document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
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

    // === Logika Galerii ===
    function initializeGallery(suiteId) {
        const gallery = document.getElementById(suiteId);
        if (!gallery) return;

        const mainImage = gallery.querySelector('.gallery-main-image img');
        const thumbnailsContainer = gallery.querySelector('.thumbnail-scroll-container');
        const thumbnails = gallery.querySelectorAll('.thumbnail-item');
        const scrollLeftBtn = gallery.querySelector('.scroll-arrow.left');
        const scrollRightBtn = gallery.querySelector('.scroll-arrow.right');

        if (!mainImage || !thumbnailsContainer || thumbnails.length === 0) return;

        // Click to change image
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function(e) {
                // Prevent drag from triggering click
                if(thumbnailsContainer.dataset.dragged === 'true') {
                    e.preventDefault();
                    return;
                }
                const newImageSrc = this.dataset.image;
                thumbnails.forEach(t => t.classList.remove('active-thumb'));
                this.classList.add('active-thumb');
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.src = newImageSrc;
                    mainImage.alt = this.querySelector('img').alt.replace('Miniatura', 'Widok na');
                    mainImage.style.opacity = '1';
                }, 300);
            });
        });

        // Arrow button scrolling
        if (scrollLeftBtn && scrollRightBtn) {
            scrollLeftBtn.addEventListener('click', () => thumbnailsContainer.scrollBy({ left: -200, behavior: 'smooth' }));
            scrollRightBtn.addEventListener('click', () => thumbnailsContainer.scrollBy({ left: 200, behavior: 'smooth' }));
        }

        // Touch and mouse drag scrolling
        let isDown = false;
        let startX;
        let scrollLeft;

        thumbnailsContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            thumbnailsContainer.classList.add('grabbing');
            startX = e.pageX - thumbnailsContainer.offsetLeft;
            scrollLeft = thumbnailsContainer.scrollLeft;
            thumbnailsContainer.dataset.dragged = 'false';
        });

        thumbnailsContainer.addEventListener('mouseleave', () => {
            isDown = false;
            thumbnailsContainer.classList.remove('grabbing');
        });

        thumbnailsContainer.addEventListener('mouseup', () => {
            isDown = false;
            thumbnailsContainer.classList.remove('grabbing');
            // Use a timeout to reset dragged state, allowing click to process
            setTimeout(() => {
                thumbnailsContainer.dataset.dragged = 'false';
            }, 0);
        });

        thumbnailsContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - thumbnailsContainer.offsetLeft;
            const walk = (x - startX) * 2; //scroll-fast
            if (Math.abs(walk) > 10) { // Threshold to detect drag
                 thumbnailsContainer.dataset.dragged = 'true';
            }
            thumbnailsContainer.scrollLeft = scrollLeft - walk;
        });
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
        closeBubble.addEventListener('click', () => ctaBubble.classList.remove('active'));
        document.addEventListener('click', (e) => {
            if (!ctaButton.contains(e.target) && !ctaBubble.contains(e.target)) {
                ctaBubble.classList.remove('active');
            }
        });
    }

    // === Logika Accordion ===
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;
            
            if (accordionItem.classList.contains('active')) {
                accordionItem.classList.remove('active');
            } else {
                document.querySelectorAll('.accordion-item.active').forEach(item => item.classList.remove('active'));
                accordionItem.classList.add('active');
            }
        });
    });

    // === Logika Polityki Prywatności ===
    const privacyPage = document.getElementById('privacy-policy-page');
    const privacyLink = document.querySelector('.privacy-link');
    const privacyCloseBtn = document.querySelector('.privacy-close-btn');

    const togglePrivacyPolicy = (show) => {
        if (privacyPage) {
            privacyPage.classList.toggle('is-visible', show);
            document.body.style.overflow = show ? 'hidden' : '';
        }
    };
    
    if (privacyLink) {
        privacyLink.addEventListener('click', (e) => {
            e.preventDefault();
            togglePrivacyPolicy(true);
        });
    }
    if (privacyCloseBtn) {
        privacyCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            togglePrivacyPolicy(false);
        });
    }

    // === Inicjalizacja Aplikacji ===
    initializeGallery('azure-suite');
    
    const savedLang = localStorage.getItem('preferredLanguage') || 'pl';
    setLanguage(savedLang);
});
