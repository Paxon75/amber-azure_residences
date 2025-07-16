document.addEventListener('DOMContentLoaded', () => {

    // === SŁOWNIK TŁUMACZEŃ ===
    const translations = {
        pl: {
            logo: 'Amber & Azure Residences',
            navPhilosophy: 'Filozofia',
            navApartments: 'Apartamenty',
            navAmberCalendar: 'Kalendarz Amber',
            navAzureCalendar: 'Kalendarz Azure',
            navAmenities: 'Udogodnienia',
            navAttractions: 'Atrakcje',
            navContact: 'Kontakt',
            videoError: 'Twoja przeglądarka nie obsługuje wideo w tle.',
            heroTitle: 'Amber & Azure Residences',
            heroSubtitle: 'Twoja Przystań, Gdzie Las Całuje Morze',
            heroCta: 'Odkryj Apartamenty',
            philosophyTitle: 'Prawdziwy luksus to czas i przestrzeń.',
            philosophySubtitle: 'W Amber & Azure Residences wierzymy, że autentyczny odpoczynek rodzi się z harmonii z naturą. Stworzyliśmy dwa wyjątkowe apartamenty w sercu kompleksu Sea & Forest, które pozwalają zwolnić, odetchnąć i na nowo połączyć się ze sobą i z otoczeniem.',
            introText: 'Jako nasi Goście, otrzymujecie klucze nie tylko do luksusowego wnętrza, ale także do bogactwa udogodnień całego resortu, wkomponowanego w malowniczą otulinę Wolińskiego Parku Narodowego. To zaproszenie do doświadczania, odczuwania i czerpania z natury pełnymi garściami.',
            apartmentsMainTitle: 'Twoje Prywatne Apartamenty',
            apartmentsMainSubtitle: 'Każdy z naszych apartamentów to unikalna historia opowiedziana przez design, komfort i bliskość natury. Wybierz swoją idealną przestrzeň do relaksu.',
            amberTitle: 'Apartament Amber Suite',
            amberDesc: 'Wejdź do świata ciepła i elegancji inspirowanej bursztynem. Apartament o powierzchni 37 m² został zaprojektowany z myślą o Gościach ceniących sobie przytulny luksus i atmosferę domowego ciepła. To idealne miejsce na relaks po dniu pełnym wrażeń, z kojącym widokiem na las Wolińskiego Parku Narodowego bezpośrednio z Twojego prywatnego, 15-metrowego tarasu.',
            amberDetail1: '<b>Salon:</b> Wygodna, rozkładana sofa, nowoczesny TV i duża ława dopełniają strefę wypoczynku.',
            amberDetail2: '<b>Aneks Kuchenny:</b> W pełni wyposażony, z elegancką wyspą i hokerami, idealny do wspólnych śniadań.',
            amberDetail3: '<b>Sypialnia:</b> Intymna oaza z podwójnym łóżkiem (160x200 cm) i osobnym telewizorem.',
            amberDetail4: '<b>Taras:</b> Ogromny, 15-metrowy, umeblowany taras z kojącym widokiem na Wolińskiego Parku Narodowego.',
            amberDetail5: '<b>Klimatyzacja:</b> Pełen komfort termiczny w obu pomieszczeniach.',
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
            ctaDesc: 'Skontaktuj się z nami bezpośrednio:<br><a href="mailto:rezerwacja@seaforest.pl">rezerwacja@seaforest.pl</a><br><a href="tel:+48914660501">+48 914 660 501</a>',
            amenitiesComplexTitle: 'Udogodnienia Kompleksu Sea & Forest',
            amenitiesComplexSubtitle: 'Jako Goście Amber & Azure Residences macie Państwo nieograniczony dostęp do wszystkich atrakcji i udogodnień resortu.',
            wellnessPoolsTitle: 'Dwa Baseny i Jacuzzi',
            wellnessPoolsDesc: 'Do Państwa dyspozycji oddajemy całoroczny, podgrzewany basen zewnętrzny, basen wewnętrzny z brodzikiem dla dzieci oraz dwa zewnętrzne jacuzzi, idealne na relaks pod gwiazdami.',
            wellnessSaunaTitle: 'Świat Saun',
            wellnessSaunaDesc: 'Poczujcie, jak uchodzi z Was całe napięcie w saunie o delikatnym, leśnym aromacie żywicy. To prawdziwy detoks dla ciała i umysłu.',
            wellnessSpaTitle: 'Strefa SPA "Shept"',
            wellnessSpaDesc: 'Dwa kameralne gabinety, w których można doświadczyć autorskich zabiegów i masaży inspirowanych bogactwem lasu, aby zapewnić pełną regenerację.',
            restoBarTitle: "Restauracja i Bar \"For Rest\"",
            restoBarDesc: 'Restauracja a\'la carte serwująca dania oparte na lokalnych, sezonowych produktach oraz elegancki Lobby Café & Bar na poranną kawę lub wieczornego drinka.',
            attractionsTitle: 'Odkryj Skarby Wyspy Wolin',
            attractionsSubtitle: 'Wyjątkowa lokalizacja zapewnia nieograniczone możliwości odkrywania uroków regionu.',
            attraction1Title: 'Plaża na Wyciągnięcie Ręki',
            attraction1Desc: 'Na piękną, szeroką plażę dotrzesz malowniczym spacerem przez las lub korzystając z komfortowego, cichego busika elektrycznego.',
            attraction2Title: 'Woliński Park Narodowy',
            attraction2Desc: 'Ruszaj na szlaki prosto z apartamentu. Czekają na Ciebie klif Gosań, Jezioro Turkusowe oraz Zagroda Pokazowa Żubrów.',
            attraction3Title: 'Uroki Międzyzdrojów',
            attraction3Desc: 'Spaceruj słynną Aleją Gwiazd, wejdź na 395-metrowe molo, odwiedź Oceanarium i Gabinet Figur Woskowych.',
            infoTitle: 'Informacje praktyczne',
            infoParking: 'Do każdego apartamentu przypisane jest miejsce parkingowe w garażu podziemnym (płatne dodatkowo 70 PLN/doba).',
            infoPets: 'Akceptujemy zwierzęta – zabierz swojego pupila na wakacje (obowiązuje dodatkowa opłata 100 PLN/doba).',
            locationTitle: 'Nasza Lokalizacja',
            locationDesc: 'Znajdziesz nas w kompleksie Sea & Forest, w otulinie Wolińskiego Parku Narodowego, zaledwie krótki spacer od plaży.',
            contactTitle: 'Zarezerwuj Pobyt',
            contactDesc: 'Wybierz Amber lub Azure Suite i zanurz się w luksusie, spokoju i naturze. Czekamy na Twój kontakt.',
            contactRole: 'Twoja Luksusowa Przystań w Sea & Forest',
            contactBtnCall: 'Zadzwoń: +48 123 456 789',
            contactBtnMail: 'Napisz: kontakt@amberandazure.pl',
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
            privacyTitle: 'Polityka Prywatności',
            privacyIntro: 'Niniejsza polityka prywatności opisuje, w jaki sposób zbieramy, wykorzystujemy i chronimy Twoje dane osobowe. Dbamy o Twoją prywatność i dokładamy wszelkich starań, aby Twoje dane były u nas bezpieczne.',
            privacyAdminTitle: 'Administrator Danych',
            privacyAdminText: 'Administratorem Twoich danych osobowych jest Amber & Azure Residences. W sprawach związanych z przetwarzaniem danych możesz się z nami skontaktować pod adresem email: kontakt@amberandazure.pl.',
            privacyDataTitle: 'Jakie dane zbieramy?',
            privacyDataText: 'Zbieramy dane, które nam podajesz w sposób dobrowolny podczas kontaktu telefonicznego lub mailowego, takie jak imię i nazwisko, numer telefonu, adres e-mail, w celu obsługi Twojego zapytania i rezerwacji.',
            privacyCookiesTitle: 'Pliki Cookie',
            privacyCookiesText: 'Nasza strona internetowa używa plików cookie, aby zapamiętać Twoją zgodę na ich używanie. Są to małe pliki tekstowe przechowywane na Twoim urządzeniu. Używamy tylko niezbędnych plików cookie do podstawowego funkcjonowania serwisu.',
            privacyRightsTitle: 'Twoje Prawa',
            privacyRightsText: 'Zgodnie z RODO, masz prawo do:',
            privacyRight1: 'Dostępu do swoich danych osobowych.',
            privacyRight2: 'Sprostowania swoich danych.',
            privacyRight3: 'Usunięcia danych („prawo do bycia zapomnianym”).',
            privacyRight4: 'Ograniczenia przetwarzania danych.',
            privacyRight5: 'Wniesienia sprzeciwu wobec przetwarzania.',
            privacyChangesTitle: 'Zmiany w polityce',
            privacyChangesText: 'Zastrzegamy sobie prawo do wprowadzania zmian w polityce prywatności. O wszelkich zmianach będziemy informować poprzez publikację nowej wersji polityki na tej stronie.'
        },
        en: {
            logo: 'Amber & Azure Residences',
            navPhilosophy: 'Philosophy',
            navApartments: 'Apartments',
            navAmberCalendar: 'Amber Calendar',
            navAzureCalendar: 'Azure Calendar',
            navAmenities: 'Amenities',
            navAttractions: 'Attractions',
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
            amberTitle: 'Amber Suite Apartment',
            amberDesc: 'Step into a world of warmth and elegance inspired by amber. This 37 m² apartment is designed for guests who appreciate cozy luxury and a homely atmosphere. It is the perfect place to relax after a day full of impressions, with a soothing view of the Woliński National Park forest directly from your private, 15-square-meter terrace.',
            amberDetail1: '<b>Living Room:</b> A comfortable sofa bed, modern TV, and a large coffee table complete the relaxation area.',
            amberDetail2: '<b>Kitchenette:</b> Fully equipped, with an elegant island and bar stools, perfect for shared breakfasts.',
            amberDetail3: '<b>Bedroom:</b> An intimate oasis with a double bed (160x200 cm) and a separate television.',
            amberDetail4: '<b>Terrace:</b> A huge, 15-square-meter furnished terrace with a soothing view of the Woliński National Park.',
            amberDetail5: '<b>Air Conditioning:</b> Full thermal comfort in both rooms.',
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
            ctaDesc: 'Contact us directly:<br><a href="mailto:rezerwacja@seaforest.pl">rezerwacja@seaforest.pl</a><br><a href="tel:+48914660501">+48 914 660 501</a>',
            amenitiesComplexTitle: 'Sea & Forest Complex Amenities',
            amenitiesComplexSubtitle: 'As Guests of Amber & Azure Residences, you have unlimited access to all the attractions and amenities of the resort.',
            wellnessPoolsTitle: 'Two Pools and Jacuzzi',
            wellnessPoolsDesc: 'We offer a year-round, heated outdoor pool, an indoor pool with a paddling area for children, and two outdoor jacuzzis, perfect for relaxing under the stars.',
            wellnessSaunaTitle: 'World of Saunas',
            wellnessSaunaDesc: 'Feel the tension release in the sauna with a delicate, forest aroma of resin. It is a true detox for body and mind.',
            wellnessSpaTitle: 'SPA Zone "Shept"',
            wellnessSpaDesc: 'Two intimate treatment rooms where you can experience original treatments and massages inspired by the richness of the forest to ensure full regeneration.',
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
            infoParking: 'A parking space in the underground garage is assigned to each apartment (additional fee of 70 PLN/day).',
            infoPets: 'We accept pets – bring your furry friend on vacation (additional fee of 100 PLN/day applies).',
            locationTitle: 'Our Location',
            locationDesc: 'You will find us in the Sea & Forest complex, in the buffer zone of the Woliński National Park, just a short walk from the beach.',
            contactTitle: 'Book Your Stay',
            contactDesc: 'Choose the Amber or Azure Suite and immerse yourself in luxury, peace, and nature. We await your contact.',
            contactRole: 'Your Luxury Haven at Sea & Forest',
            contactBtnCall: 'Call: +48 123 456 789',
            contactBtnMail: 'Email: kontakt@amberandazure.pl',
            footerRights: '© 2025 Amber & Azure Residences. All rights reserved.',
            footerPrivacy: 'Privacy Policy',
            cookieTitle: 'We value your privacy', cookieText: 'We use cookies to personalize content, provide social media features, and analyze our traffic. We also share information about your use of our site with our partners.', cookieDeny: 'Deny', cookieCustomize: 'Customize', cookieAccept: 'Allow all',
            cookieDetailsTitle: 'Customize consent', cookieNecessaryDesc: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
            cookieAnalyticsDesc: 'These cookies allow us to analyze site traffic and improve its performance.',
            cookieMarketingDesc: 'These cookies help us deliver personalized ads that may be of interest to you.',
            cookieSave: 'Save settings',
            privacyTitle: 'Privacy Policy', privacyIntro: 'This privacy policy describes how we collect, use, and protect your personal data. We care about your privacy and make every effort to ensure your data is secure with us.',
            privacyAdminTitle: 'Data Administrator', privacyAdminText: 'The administrator of your personal data is Amber & Azure Residences. For matters related to data processing, you can contact us at the email address: contact@amberandazure.pl.',
            privacyDataTitle: 'What data do we collect?', privacyDataText: 'We collect data that you voluntarily provide to us during phone or email contact, such as your name, phone number, and email address, to handle your inquiry and reservation.',
            privacyCookiesTitle: 'Cookies', privacyCookiesText: 'Our website uses cookies to remember your consent to their use. These are small text files stored on your device. We only use essential cookies for the basic functionality of the service.',
            privacyRightsTitle: 'Your Rights', privacyRightsText: 'In accordance with GDPR, you have the right to:',
            privacyRight1: 'Access your personal data.', privacyRight2: 'Rectify your data.', privacyRight3: 'Erase your data ("right to be forgotten").', privacyRight4: 'Restrict data processing.', privacyRight5: 'Object to processing.',
            privacyChangesTitle: 'Changes to the policy', privacyChangesText: 'We reserve the right to make changes to the privacy policy. We will inform you of any changes by publishing a new version of the policy on this page.'
        },
        de: {
            logo: 'Amber & Azure Residences',
            navPhilosophy: 'Philosophie',
            navApartments: 'Apartments',
            navAmberCalendar: 'Amber Kalender',
            navAzureCalendar: 'Azure Kalender',
            navAmenities: 'Annehmlichkeiten',
            navAttractions: 'Attraktionen',
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
            amberTitle: 'Amber Suite Apartment',
            amberDesc: 'Treten Sie ein in eine Welt der Wärme und Eleganz, inspiriert von Bernstein. Dieses 37 m² große Apartment wurde für Gäste entworfen, die gemütlichen Luxus und eine heimelige Atmosphäre schätzen. Es ist der perfekte Ort, um nach einem erlebnisreichen Tag zu entspannen, mit einem beruhigenden Blick auf den Wald des Nationalparks Wolin direkt von Ihrer privaten, 15 Quadratmeter großen Terrasse.',
            amberDetail1: '<b>Wohnzimmer:</b> Ein bequemes Schlafsofa, ein moderner Fernseher und ein großer Couchtisch vervollständigen den Entspannungsbereich.',
            amberDetail2: '<b>Küchenzeile:</b> Voll ausgestattet, mit einer eleganten Insel und Barhockern, ideal für gemeinsame Frühstücke.',
            amberDetail3: '<b>Schlafzimmer:</b> Eine intime Oase mit einem Doppelbett (160x200 cm) und einem separaten Fernseher.',
            amberDetail4: '<b>Terrasse:</b> Eine riesige, 15 Quadratmeter große möblierte Terrasse mit beruhigendem Blick auf den Nationalpark Wolin.',
            amberDetail5: '<b>Klimaanlage:</b> Voller thermischer Komfort in beiden Zimmern.',
            azureTitle: 'Azure Suite Apartment',
            azureDesc: 'Tauchen Sie ein in klassische Eleganz, kombiniert mit moderner Funktionalität. Das 37 m² große Azure-Apartment ist ein Raum, der Sie umhüllt und Sie jeden Moment Ihres Aufenthalts genießen lässt. Helle, geräumige Innenräume und sorgfältig ausgewählte Accessoires schaffen eine Atmosphäre der Ruhe, und die beeindruckende, 15 Quadratmeter große Terrasse mit Waldblick ist der perfekte Ort für einen Morgenkaffee und abendliche Entspannung.',
            azureDetail1: '<b>Wohnzimmer:</b> Geräumig und hell, mit einem bequemen Sofa, einem eleganten Couchtisch und einem modernen Fernseher.',
            azureDetail2: '<b>Küchenzeile:</b> Volle Freiheit und Unabhängigkeit dank eines modernen Kochfelds, eines Geschirrspülers und einer kompletten Ausstattung.',
            azureDetail3: '<b>Essbereich:</b> Ein schöner, runder Tisch mit Stühlen schafft eine gemütliche Ecke für gemeinsame Mahlzeiten.',
            azureDetail4: '<b>Schlafzimmer:</b> Ein luxuriöses Doppelbett (160x200 cm) und ein separater Fernseher für vollkommene Entspannung.',
            azureDetail5: '<b>Terrasse:</b> Eine beeindruckende, 15 Quadratmeter große Terrasse mit Waldblick, zugänglich von beiden Zimmern.',
            azureDetail6: '<b>Klimaanlage:</b> Individuell regulierbar für die perfekte Temperatur zu jeder Jahreszeit.',
            wifi: '<b>Internet:</b> Schnelles, kostenloses WLAN in der gesamten Wohnung verfügbar.',
            calendarTitle: 'Planen Sie Ihren Aufenthalt',
            calendarDesc: 'Der folgende Kalender zeigt die Verfügbarkeit in Echtzeit. Wir laden Sie ein, eine Reservierung vorzunehmen, um unvergessliche Momente im Herzen der Natur zu gewährleisten.',
            ctaTitle: 'Möchten Sie Ihren Aufenthalt buchen?',
            ctaDesc: 'Kontaktieren Sie uns direkt:<br><a href="mailto:rezerwacja@seaforest.pl">rezerwacja@seaforest.pl</a><br><a href="tel:+48914660501">+48 914 660 501</a>',
            amenitiesComplexTitle: 'Annehmlichkeiten des Sea & Forest Komplexes',
            amenitiesComplexSubtitle: 'Als Gäste der Amber & Azure Residences haben Sie uneingeschränkten Zugang zu allen Attraktionen und Annehmlichkeiten des Resorts.',
            wellnessPoolsTitle: 'Zwei Pools und Jacuzzi',
            wellnessPoolsDesc: 'Wir bieten einen ganzjährig beheizten Außenpool, einen Innenpool mit Kinderbecken und zwei Außen-Whirlpools, ideal zur Entspannung unter den Sternen.',
            wellnessSaunaTitle: 'Welt der Saunen',
            wellnessSaunaDesc: 'Spüren Sie, wie die Anspannung in der Sauna mit einem zarten Waldharz-Aroma von Ihnen abfällt. Ein echtes Detox für Körper und Geist.',
            wellnessSpaTitle: 'SPA-Zone "Shept"',
            wellnessSpaDesc: 'Zwei intime Behandlungsräume, in denen Sie einzigartige, von der Natur inspirierte Behandlungen und Massagen für eine vollständige Regeneration erleben können.',
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
            infoParking: 'Jedem Apartment ist ein Parkplatz in der Tiefgarage zugewiesen (zusätzliche Gebühr von 70 PLN/Tag).',
            infoPets: 'Wir akzeptieren Haustiere – nehmen Sie Ihr Haustier mit in den Urlaub (es fällt eine zusätzliche Gebühr von 100 PLN/Tag an).',
            locationTitle: 'Unser Standort',
            locationDesc: 'Sie finden uns im Sea & Forest-Komplex, in der Pufferzone des Nationalparks Wolin, nur einen kurzen Spaziergang vom Strand entfernt.',
            contactTitle: 'Buchen Sie Ihren Aufenthalt',
            contactDesc: 'Wählen Sie die Amber oder Azure Suite und tauchen Sie ein in Luxus, Ruhe und Natur. Wir erwarten Ihren Kontakt.',
            contactRole: 'Ihre Luxusoase im Sea & Forest',
            contactBtnCall: 'Anrufen: +48 123 456 789',
            contactBtnMail: 'Schreiben: kontakt@amberandazure.pl',
            footerRights: '© 2025 Amber & Azure Residences. Alle Rechte vorbehalten.',
            footerPrivacy: 'Datenschutz-Bestimmungen'
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
    function loadCalendars() {
        const calendarWrappers = document.querySelectorAll('.calendar-wrapper');
        
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


    // Inicjalizacja obu galerii
    initializeGallery('amber-suite');
    initializeGallery('azure-suite');

    // Ładowanie kalendarzy
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
