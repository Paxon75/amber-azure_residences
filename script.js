document.addEventListener('DOMContentLoaded', () => {

    // === SŁOWNIK TŁUMACZEŃ ===
    const translations = {
        pl: {
            pageTitle: 'Amber & Azure Residences | Luksusowe Apartamenty w Sea & Forest',
            logo: 'Amber & Azure Residences',
            navPhilosophy: 'Filozofia',
            navApartments: 'Apartamenty',
            navAmenities: 'Udogodnienia', // Zmieniono nazwę
            navContact: 'Kontakt',
            videoError: 'Twoja przeglądarka nie obsługuje wideo w tle.',
            heroTitle: 'Amber & Azure Residences',
            heroSubtitle: 'Twoja Przystań, Gdzie Las Całuje Morze',
            heroCta: 'Poznaj Nasze Apartamenty',
            philosophyTitle: 'Prawdziwy luksus to czas i przestrzeň.',
            philosophySubtitle: 'W Amber & Azure Residences wierzymy, że autentyczny odpoczynek rodzi się z harmonii z naturą. Stworzyliśmy dwa wyjątkowe apartamenty w sercu kompleksu Sea & Forest, które pozwalają zwolnić, odetchnąć i na nowo połączyć się ze sobą i z otoczeniem.',
            introText: 'Jako nasi Goście, otrzymujecie klucze nie tylko do luksusowego wnętrza, ale także do bogactwa udogodnień całego resortu, wkomponowanego w malowniczą otulinę Wolińskiego Parku Narodowego. To zaproszenie do doświadczania, odczuwania i czerpania z natury pełnymi garściami.',
            apartmentsMainTitle: 'Twoje Prywatne Apartamenty',
            apartmentsMainSubtitle: 'Każdy z naszych apartamentów to unikalna historia opowiedziana przez design, komfort i bliskość natury. Wybierz swoją idealną przestrzeň do relaksu.',
            
            // Zaktualizowane tłumaczenia dla sekcji "Amber"
            amberSoonTitle: 'Apartament Amber Suite – Wkrótce Dostępny!',
            amberSoonDesc: 'Z przyjemnością informujemy, że Apartament Amber Suite będzie wkrótce dostępny! Ten zupełnie nowy, wyjątkowy apartament, inspirowany ciepłem bursztynu, czeka, aby gościć Państwa w swoich progach. Oferuje niezapomniane wrażenia z pobytu w sercu Wolińskiego Parku Narodowego. Idealny dla tych, którzy cenią sobie przytulny luksus i bliskość natury.',
            amberSoonContact: 'Przygotuj się na swój wymarzony pobyt i odkryj piękno Międzyzdrojów w luksusowym otoczeniu! Już niedługo podamy więcej szczegółów na temat dostępności i rezerwacji',

            azureTitle: 'Apartament Azure Suite',
            azureDesc: 'Zanurz się w klasycznej elegancji połączonej z nowoczesną funkcjonalnością. Apartament Azure o powierzchni 37 m² to przestrzeń, która otula i pozwala w pełni cieszyć się każdą chwilą pobytu. Jasne, przestronne wnętrza i starannie dobrane dodatki tworzą atmosferę spokoju, a imponujący, 15-metrowy taras z widokiem na las jest idealnym miejscem na poranną kawę i wieczorny relaks.',
            azureDetail1: '<b>Salon:</b> Przestronny i jasny, z komfortową sofą, eleganckim stolikiem kawowym i nowoczesnym TV.',
            azureDetail2: '<b>Aneks Kuchenny:</b> Pełna swoboda i niezależność dzięki nowoczesnej płycie, zmywarce i kompletnemu wyposażeniu.',
            azureDetail3: '<b>Część jadalniana:</b> Piękny, okrągły stół z krzesłami tworzy przytulny kącik do wspólnych posiłków.',
            azureDetail4: '<b>Sypialnia:</b> Luksusowe, podwójne łóżko (160x200 cm) i osobny telewizor dla pełnego relaksu.',
            azureDetail5: '<b>Taras:</b> Imponujący, 15-metrowy taras z widokiem na las, dostępny z obu pokoi.',
            azureDetail6: '<b>Klimatyzacja:</b> Indywidualnie sterowana dla idealnej temperatury o każdej porze roku.',
            wifi: '<b>Internet:</b> Szybkie, darmowe Wi-Fi dostępne w całym apartamencie.',
            
            ctaTitle: 'Chcesz zarezerwować pobyt?',
            ctaDesc: 'Skontaktuj się z nami bezpośrednio:<br><a href="mailto:amberazure.residences@gmail.com">amberazure.residences@gmail.com</a><br>Darek: <a href="tel:+48602229707">+48 602 229 707</a><br>Beata: <a href="tel:+48606410041">+48 606 410 041</a>',
            
            packageIncludedTitle: 'W cenie pakietu',
            packageIncluded1: 'Noclegi w komfortowych apartamentach z w pełni wyposażonym aneksem kuchennym, umożliwiającym samodzielne przygotowywanie posiłków.',
            packageIncluded2: 'Nieograniczony dostęp do kompleksu Wellness, Aqua & Sport (podgrzewany basen zewnętrzny, basen wewnętrzny, jacuzzi, sauny oraz siłownia).',
            packageIncluded3: 'Dostęp do atrakcji dla dzieci (sala zabaw, plac zabaw zewnętrzny, sezonowe programy animacyjne).',
            packageIncluded4: 'Lokalizacja w cichej, leśnej okolicy z bezpośrednim dostępem do Wolińskiego Parku Narodowego.',
            
            detailedInfoMainTitle: 'Szczegółowe Informacje i Udogodnienia',
            detailedInfoMainSubtitle: 'Wszystko, co musisz wiedzieć o Twoim pobycie w Sea & Forest Resort.',

            mealsTitle: 'Wyżywienie',
            mealsDesc: 'Pakiet "Pobyt bez wyżywienia" nie obejmuje posiłków. Apartamenty wyposażone są w aneksy kuchenne umożliwiające samodzielne przygotowywanie posiłków.',
            foodFeaturesTitle: 'Co wyróżnia naszą kuchnię:',
            foodFeature1: '<b>Zero waste na talerzu</b> – nie mamy bufetów, za to przygotowujemy pyszne zestawy, tylko tyle ile potrzeba, wykorzystujemy każdy składnik do końca.',
            foodFeature2: '<b>Sea & Forest to Table</b> – współpracujemy z lokalnymi rybakami i dostawcami, by podawać świeże i sezonowe produkty.',
            foodFeature3: '<b>Jemy na świeżym powietrzu</b> – posiłki smakują lepiej, gdy można je zjeść na tarasie lub zabrać na piknik.',
            foodFeature4: '<b>Kameralnie i w rytmie slow</b> – bez pośpiechu, tylko dobre jedzenie i spokój wokół.',
            restaurantHoursTitle: 'Godziny otwarcia gastronomii:',
            restaurantHours: 'Restauracja a la carte For Rest: codziennie 12:00 – 23:00',
            lobbyBarHours: 'Lobby Café & Bar: codziennie 12:00 – 23:00',
            takeawaySnacks: 'Przekąski na wynos: oferujemy zestawy piknikowe, chrupiące kanapki, świeże sałatki – wszystko gotowe, by zabrać na plażę, do lasu albo na rowerową wyprawę.',

            sportEntertainmentTitle: 'Sport i rozrywka',
            sportEntertainmentSubtitle: 'Czas na relaks, ruch i przygodę – tak, jak lubisz!',
            sportEntertainment1: '<b>Transport na plażę melexem</b> – kilka razy dziennie nasz hotelowy melex wygodnie dowiezie Cię na plażę.',
            sportEntertainment2: '<b>Rowerowe przygody</b> – wypożyczasz rower (dodatkowa opłata) i ruszasz w trasę. Leśne ścieżki, klify, dzikie plaże – wybór należy do Ciebie.',
            sportEntertainment3: '<b>Ruch dla ciała, oddech dla głowy</b> – sala fitness, baseny, jacuzzi, sauny i zajęcia sportowe. Grafik fitness dostępny w opisie pakietu i/lub na miejscu.',
            sportEntertainment4: '<b>Sezon pełny atrakcji</b> – koncerty, ogniska i sezonowe animacje dla dzieci. Można słuchać, tańczyć albo po prostu patrzeć na ogień. Grafik atrakcji dostępny w opisie pakietu i/lub na miejscu.',
            sportEntertainment5: '<b>Las, który koi</b> – Woliński Park Narodowy, dzikie ścieżki i cisza, która pozwala usłyszeć własne myśli.',
            sportEntertainment6: '<b>Digital Detox</b> – nasze rytuały wspierające analogowe poranki, wieczory i weekendy oraz strefy „no phone zone” dla tych, którzy chcą odpocząć od ekranu i naprawdę być tu i teraz.',

            wellnessSpaTitle: 'Wellness & SPA',
            wellnessSpaSubtitle: 'Tu ciało się odpręża, a głowa odpoczywa.',
            wellnessSpa1: '<b>Baseny i jacuzzi</b> – wewnętrzny basen z brodzikiem dla dzieci oraz całoroczny, podgrzewany basen zewnętrzny. Do tego dwa jacuzzi – na wieczorne odprężenie pod gwiazdami.',
            wellnessSpa2: '<b>Sauna fińska</b> – Rozgrzewasz ciało, chłodzisz się pod prysznicem, a potem odpoczywasz w leśnej strefie relaksu.',
            wellnessSpa3: '<b>Siłownia</b> – oferujemy nowoczesny sprzęt do ćwiczeń siłowych i wytrzymałościowych. Organizujemy zajęcia fitness.',
            wellnessSpa4: '<b>SPA Shept</b> – autorskie zabiegi inspirowane naturą, bazujące na nauce i holistycznym podejściu do ciała i umysłu.',
            wellnessSpa5: '<b>Cryo-sauna & kąpiele leśne</b> – gorąco polecamy terapie zimnem i spacery wśród drzew - idealne dla tych, którzy chcą się wzmocnić i dotlenić.',
            spaSheptHours: 'SPA Shept: codziennie 9:00 – 21:00',
            poolGymSaunaHours: 'Basen, siłownia, sauny: codziennie 7:00 – 21:00, 21:00 – 23:00 adults only',
            fitnessClasses: 'Zajęcia Fitness: według grafiku',

            kidsAmenitiesTitle: 'Udogodnienia dla dzieci',
            kidsAmenitiesSubtitle: 'Dzieci u nas nie mają czasu na nudę, bo świat Sea & Forest to wielki plac zabaw.',
            kidsAmenities1: 'Sala zabaw Mewa Śmieszka',
            kidsAmenities2: 'Zewnętrzny plac zabaw',
            kidsAmenities3: 'Zorganizowane animacje (atrakcja sezonowa, szczegółowy plan atrakcji dostępy w hotelu i/lub pakiecie)',
            kidsAmenities4: 'Quest of the Wolin Tribe – nasza gra terenowa dla dzieci 7+.',
            kidsAmenities5: 'Eko-Detektywi – edukacyjna gra dla najmłodszych, pełna eksperymentów i sensorycznych odkryć.',
            kidsAmenities6: 'Całoroczny podgrzewany basen zewnętrzny oraz basen wewnętrzny z brodzikiem, akcesoria do pływania',
            kidsAmenities7: 'Na życzenie Gości udostępniamy bezpłatnie do apartamentów wanienkę, podest oraz nakładka na toaletę',
            kidsAmenities8: 'W restauracji znajdują się krzesełka do karmienia, a w toaletach ogólnodostępne przewijaki.',
            kidsAmenities9: 'Dzieci do 3 lat, śpiące z rodzicami, pobyt bez opłat',
            kidsAmenities10: 'Dodatkowe łóżeczko - 30 PLN/doba',

            attractionsLocationTitle: 'Atrakcje i lokalizacja',
            attractionsLocationSubtitle: 'Poznaj piękno okolicy i lokalne atrakcje - zapraszamy do naszej zakładki ATRAKCJE',
            attraction1Title: '<b>Plaża na Wyciągnięcie Ręki</b>',
            attraction1Desc: 'Na piękną, szeroką plażę dotrzesz malowniczym spacerem przez las (ok. 10 minut) lub korzystając z komfortowego, cichego busika elektrycznego (kursuje sezonowo).',
            attraction2Title: '<b>Woliński Park Narodowy</b>',
            attraction2Desc: 'Ruszaj na szlaki prosto z apartamentu. Czekają na Ciebie zapierające dech w piersiach widoki z klifu Gosaň, urokliwe Jezioro Turkusowe oraz edukacyjna Zagroda Pokazowa Żubrów.',
            attraction3Title: '<b>Uroki Międzyzdrojów</b>',
            attraction3Desc: 'Spaceruj słynną Aleją Gwiazd, podziwiaj widoki z 395-metrowego molo, odwiedź fascynujące Oceanarium i realistyczny Gabinet Figur Woskowych.',

            additionallyPaidTitle: 'Dodatkowo płatne',
            infoParking: 'Miejsce parkingowe w garażu podziemnym (70 PLN/doba) – rezerwacja zalecana.',
            infoPets: 'Pobyt zwierzęcia (100 PLN/doba) – prosimy o wcześniejsze zgłoszenie.',
            attractionsLocationCrib: 'Łóżeczko dla dzieci (0-3 lat): 30 PLN/doba.',
            attractionsLocationBikeRental: 'Wypożyczalnia rowerów – więcej informacji na recepcji.',
            attractionsLocationEVCharging: 'Stacja do ładowania samochodów elektrycznych.',
            attractionsLocationClimateTax: 'Obowiązkowa opłata klimatyczna naliczana zgodnie z oficjalnymi stawkami na dany rok.',
            
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
            privacyS6P3: 'W ramach Serwisu stosowane są przede wszystkim niezbędne pliki cookies, które są wymagane do prawidłowego działania strony. Serwis jest hostowany na platformie GitHub Pages and may use technical cookies to maintain sessions and provide basic functionalities.',
            privacyS6P4: 'The Service does not use cookies for analytical purposes (traffic tracking) or marketing purposes (displaying personalized ads).',
            privacyS6P5: 'If there is a cookie banner on the site, you have the option to manage your preferences.',
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
            navAmenities: 'Annehmlichkeiten', // Zmieniono nazwę i przeniesiono
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
            
            amberSoonTitle: 'Amber Suite Apartment – Bald verfügbar!',
            amberSoonDesc: 'Wir freuen uns, Ihnen mitteilen zu können, dass das Amber Suite Apartment bald verfügbar sein wird! Dieses brandneue, einzigartige Apartment, inspiriert von der Wärme des Bernsteins, erwartet Sie, um Sie willkommen zu heißen. Es bietet unvergessliche Erlebnisse während Ihres Aufenthalts im Herzen des Nationalparks Wolin. Perfekt für diejenigen, die gemütlichen Luxus und die Nähe zur Natur schätzen.',
            amberSoonContact: 'Bereiten Sie sich auf Ihren Traumaufenthalt vor und entdecken Sie die Schönheit von Misdroy in einer luxuriösen Umgebung! Weitere Details zur Verfügbarkeit und Buchung werden in Kürze bekannt gegeben.',

            azureTitle: 'Azure Suite Apartment',
            azureDesc: 'Tauchen Sie ein in klassische Eleganz, kombiniert mit moderner Funktionalität. Das 37 m² große Azure-Apartment ist ein Raum, der Sie umhüllt und Sie jeden Moment Ihres Aufenthalts genießen lässt. Helle, geräumige Innenräume und sorgfältig ausgewählte Accessoires schaffen eine Atmosphäre der Ruhe, und die beeindruckende, 15 Quadratmeter große Terrasse mit Waldblick ist der perfekte Ort für einen Morgenkaffee und abendliche Entspannung.',
            azureDetail1: '<b>Wohnzimmer:</b> Geräumig und hell, mit einem bequemen Sofa, einem eleganten Couchtisch und einem modernen Fernseher.',
            azureDetail2: '<b>Küchenzeile:</b> Volle Freiheit und Unabhängigkeit dank eines modernen Kochfelds, eines Geschirrspülers und einer kompletten Ausstattung.',
            azureDetail3: '<b>Essbereich:</b> Ein schöner, runder Tisch mit Krzeseln schafft eine gemütliche Ecke für gemeinsame Mahlzeiten.',
            azureDetail4: '<b>Schlafzimmer:</b> Ein luxuriöses Doppelbett (160x200 cm) und ein separater Fernseher für vollkommene Entspannung.',
            azureDetail5: '<b>Taras:</b> Eine beeindruckende, 15 Quadratmeter große Terrasse mit Waldblick, zugänglich von beiden Zimmern.',
            azureDetail6: '<b>Klimaanlage:</b> Individuell regulierbar für die perfekte Temperatur zu jeder Jahreszeit.',
            wifi: '<b>Internet:</b> Schnelles, kostenloses WLAN in der gesamten Wohnung verfügbar.',
            // Usunięto calendarTitle i calendarDesc
            ctaTitle: 'Möchten Sie Ihren Aufenthalt buchen?',
            ctaDesc: 'Kontaktieren Sie uns direkt:<br><a href="mailto:amberazure.residences@gmail.com">amberazure.residences@gmail.com</a><br>Darek: <a href="tel:+48602229707">+48 602 229 707</a><br>Beata: <a href="tel:+48606410041">+48 606 410 041</a>',
            
            packageIncludedTitle: 'Im Paket enthalten',
            packageIncluded1: 'Übernachtungen in komfortablen Apartments mit voll ausgestatteter Küchenzeile, die die Selbstverpflegung ermöglichen.',
            packageIncluded2: 'Unbegrenzter Zugang zum Wellness-, Aqua- & Sportkomplex (beheizter Außenpool, Innenpool, Whirlpool, Saunen und Fitnessraum).',
            packageIncluded3: 'Zugang zu Attraktionen für Kinder (Spielzimmer, Außenspielplatz, saisonale Animationsprogramme).',
            packageIncluded4: 'Lage in einer ruhigen Waldgegend mit direktem Zugang zum Nationalpark Wolin.',
            
            detailedInfoMainTitle: 'Detaillierte Informationen & Annehmlichkeiten',
            detailedInfoMainSubtitle: 'Alles, was Sie über Ihren Aufenthalt im Sea & Forest Resort wissen müssen.',

            mealsTitle: 'Verpflegung',
            mealsDesc: 'Das Paket "Aufenthalt ohne Verpflegung" beinhaltet keine Mahlzeiten. Die Apartments sind mit Küchenzeilen ausgestattet, die die Selbstverpflegung ermöglichen.',
            foodFeaturesTitle: 'Was unterscheidet unsere Küche:',
            foodFeature1: '<b>Zero Waste auf dem Teller</b> – wir haben keine Buffets, stattdessen bereiten wir köstliche Sets zu, nur so viel wie nötig, und verwenden jede Zutat bis zum Ende.',
            foodFeature2: '<b>Sea & Forest to Table</b> – wir arbeiten mit lokalen Fischern und Lieferanten zusammen, um frische und saisonale Produkte zu servieren.',
            foodFeature3: '<b>Essen im Freien</b> – Mahlzeiten schmecken besser, wenn man sie auf der Terrasse essen oder zum Picknick mitnehmen kann.',
            foodFeature4: '<b>Intim und im Slow-Modus</b> – ohne Eile, nur gutes Essen und Ruhe ringsum.',
            restaurantHoursTitle: 'Öffnungszeiten Gastronomie:',
            restaurantHours: 'A-la-carte-Restaurant For Rest: täglich 12:00 – 23:00 Uhr',
            lobbyBarHours: 'Lobby Café & Bar: täglich 12:00 – 23:00 Uhr',
            takeawaySnacks: 'Snacks zum Mitnehmen: Wir bieten Picknick-Sets, knusprige Sandwiches, frische Salate – alles bereit, um sie an den Strand, in den Wald oder auf eine Fahrradtour mitzunehmen.',

            sportEntertainmentTitle: 'Sport und Unterhaltung',
            sportEntertainmentSubtitle: 'Zeit für Entspannung, Bewegung und Abenteuer – ganz nach Ihrem Geschmack!',
            sportEntertainment1: '<b>Strandtransport mit dem Melex</b> – mehrmals täglich bringt Sie unser Hotel-Melex bequem zum Strand.',
            sportEntertainment2: '<b>Fahrradabenteuer</b> – mieten Sie ein Fahrrad (gegen Aufpreis) und erkunden Sie die Gegend. Waldwege, Klippen, wilde Strände – die Wahl liegt bei Ihnen.',
            sportEntertainment3: '<b>Bewegung für den Körper, Atem für den Geist</b> – Fitnessraum, Pools, Whirlpool, Saunen und Sportaktivitäten. Der Fitnessplan ist in der Paketbeschreibung und/oder vor Ort verfügbar.',
            sportEntertainment4: '<b>Saison voller Attraktionen</b> – Konzerte, Lagerfeuer und saisonale Animationen für Kinder. Man kann zuhören, tanzen oder einfach nur ins Feuer schauen. Der Attraktionsplan ist in der Paketbeschreibung und/oder vor Ort verfügbar.',
            sportEntertainment5: '<b>Wald, der beruhigt</b> – Nationalpark Wolin, wilde Pfade und Stille, die es Ihnen ermöglicht, Ihre eigenen Gedanken zu hören.',
            sportEntertainment6: '<b>Digital Detox</b> – unsere Rituale zur Unterstützung analoger Morgen, Abende und Wochenenden sowie „no phone zone“-Bereiche für diejenigen, die sich von Bildschirmen erholen und wirklich im Hier und Jetzt sein möchten.',

            wellnessSpaTitle: 'Wellness & SPA',
            wellnessSpaSubtitle: 'Hier entspannt sich der Körper, und der Geist erholt sich.',
            wellnessSpa1: '<b>Pools und Whirlpool</b> – Innenpool mit Kinderbecken und ganzjährig beheizter Außenpool. Dazu zwei Whirlpools – für abendliche Entspannung unter den Sternen.',
            wellnessSpa2: '<b>Finnische Sauna</b> – Wärmen Sie Ihren Körper auf, kühlen Sie sich unter der Dusche ab und entspannen Sie sich anschließend im Wald-Entspannungsbereich.',
            wellnessSpa3: '<b>Fitnessraum</b> – wir bieten moderne Geräte für Kraft- und Ausdauertraining. Wir organisieren Fitnesskurse.',
            wellnessSpa4: '<b>SPA Shept</b> – einzigartige, von der Natur inspirierte Behandlungen, basierend auf Wissenschaft und einem ganzheitlichen Ansatz für Körper und Geist.',
            wellnessSpa5: '<b>Kryo-Sauna & Waldbäder</b> – wir empfehlen dringend Kältetherapien und Spaziergänge durch die Bäume – ideal für diejenigen, die sich stärken und mit Sauerstoff versorgen möchten.',
            spaSheptHours: 'SPA Shept: täglich 9:00 – 21:00 Uhr',
            poolGymSaunaHours: 'Pool, Fitnessraum, Saunen: täglich 7:00 – 21:00 Uhr, 21:00 – 23:00 Uhr nur für Erwachsene',
            fitnessClasses: 'Fitnesskurse: gemäß Zeitplan',

            kidsAmenitiesTitle: 'Annehmlichkeiten für Kinder',
            kidsAmenitiesSubtitle: 'Kinder haben bei uns keine Zeit für Langeweile, denn die Welt von Sea & Forest ist ein großer Spielplatz.',
            kidsAmenities1: 'Spielzimmer Mewa Śmieszka',
            kidsAmenities2: 'Außenspielplatz',
            kidsAmenities3: 'Organisierte Animationen (saisonale Attraktion, detaillierter Attraktionsplan im Hotel und/nebo Paket verfügbar)',
            kidsAmenities4: 'Quest des Wolin-Stammes – unser Geländespiel für Kinder ab 7 Jahren.',
            kidsAmenities5: 'Öko-Detektywe – ein Lernspiel für die Kleinsten, voller Experimente und sensorischer Entdeckungen.',
            kidsAmenities6: 'Ganzjährig beheizter Außenpool und Innenpool mit Kinderbecken, Schwimmzubehör',
            kidsAmenities7: 'Auf Wunsch stellen wir den Apartments kostenfrei eine Babywanne, einen Tritthocker und einen Toilettensitzverkleinerer zur Verfügung',
            kidsAmenities8: 'Im Restaurant gibt es Hochstühle, und in den öffentlichen Toiletten Wickeltische.',
            kidsAmenities9: 'Kinder bis 3 Jahre, die bei den Eltern schlafen, übernachten kostenfrei',
            kidsAmenities10: 'Zusätzliches Babybett - 30 PLN/Tag',

            attractionsLocationTitle: 'Attraktionen und Standort',
            attractionsLocationSubtitle: 'Entdecken Sie die Schönheit der Umgebung und lokale Attraktionen – wir laden Sie zu unserer Rubrik ATTRAKTIONEN ein',
            attraction1Title: '<b>Strand zum Greifen nah</b>',
            attraction1Desc: 'Den schönen, breiten Strand erreichen Sie über einen malerischen Waldspaziergang (ca. 10 Minuten) oder mit einem komfortablen, leisen Elektro-Shuttlebus (saisonaler Betrieb).',
            attraction2Title: '<b>Nationalpark Wolin</b>',
            attraction2Desc: 'Starten Sie direkt von Ihrem Apartment aus auf die Wanderwege. Die atemberaubenden Ausblicke vom Gosań-Kliff, der charmante Türkissee und das lehrreiche Wisent-Schaugehege erwarten Sie.',
            attraction3Title: '<b>Reize von Misdroy</b>',
            attraction3Desc: 'Schlendern Sie über die berühmte Promenade der Stars, gehen Sie auf die 395 Meter lange Seebrücke, besuchen Sie das faszinierende Ozeanarium und das realistische Wachsfigurenkabinett.',

            additionallyPaidTitle: 'Zusätzlich kostenpflichtig',
            infoParking: 'Parkplatz in der Tiefgarage (70 PLN/Tag) – Reservierung empfohlen.',
            infoPets: 'Haustieraufenthalt: 90 PLN/Tag',
            attractionsLocationCrib: 'Babybett für Kinder (0-3 Jahre): 30 PLN/Tag',
            attractionsLocationBikeRental: 'Fahrradverleih – weitere Informationen an der Rezeption',
            attractionsLocationEVCharging: 'Ladestation für Elektroautos',
            attractionsLocationClimateTax: 'Obligatorische Kurtaxe gemäß den offiziellen Sätzen für das jeweilige Jahr',
            
            goodToKnowTitle: 'Gut zu wissen',
            goodToKnowWifi: 'Schnelles, kostenloses WLAN in der gesamten Wohnung und im Resortbereich verfügbar.',
            goodToKnowBedding: 'Bettwäsche und Handtücher im Preis inbegriffen.',
            goodToKnowCleaning: 'Endreinigung des Apartments im Preis inbegriffen.',
            goodToKnowCheckIn: 'Check-in ab 16:00 Uhr.',
            goodToKnowCheckOut: 'Check-out bis 11:00 Uhr.',

            locationTitle: 'Unser Standort',
            locationDesc: 'Sie finden uns im Sea & Forest-Kompleks, in der Pufferzone des Nationalparks Wolin, nur einen kurzen Spaziergang vom Strand entfernt.',
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
            privacyS6P3: 'W ramach Serwisu stosowane są przede wszystkim niezbędne pliki cookies, które są wymagane do prawidłowego działania strony. Serwis jest hostowany na platformie GitHub Pages and may use technical cookies to maintain sessions and provide basic functionalities.',
            privacyS6P4: 'The Service does not use cookies for analytical purposes (traffic tracking) or marketing purposes (displaying personalized ads).',
            privacyS6P5: 'If there is a cookie banner on the site, you have the option to manage your preferences.',
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
            navAmenities: 'Annehmlichkeiten', // Zmieniono nazwę i przeniesiono
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
            
            amberSoonTitle: 'Amber Suite Apartment – Bald verfügbar!',
            amberSoonDesc: 'Wir freuen uns, Ihnen mitteilen zu können, dass das Amber Suite Apartment bald verfügbar sein wird! Dieses brandneue, einzigartige Apartment, inspiriert von der Wärme des Bernsteins, erwartet Sie, um Sie willkommen zu heißen. Es bietet unvergessliche Erlebnisse während Ihres Aufenthalts im Herzen des Nationalparks Wolin. Perfekt für diejenigen, die gemütlichen Luxus und die Nähe zur Natur schätzen.',
            amberSoonContact: 'Bereiten Sie sich auf Ihren Traumaufenthalt vor und entdecken Sie die Schönheit von Misdroy in einer luxuriösen Umgebung! Weitere Details zur Verfügbarkeit und Buchung werden in Kürze bekannt gegeben.',

            azureTitle: 'Azure Suite Apartment',
            azureDesc: 'Tauchen Sie ein in klassische Eleganz, kombiniert mit moderner Funktionalität. Das 37 m² große Azure-Apartment ist ein Raum, der Sie umhüllt und Sie jeden Moment Ihres Aufenthalts genießen lässt. Helle, geräumige Innenräume und sorgfältig ausgewählte Accessoires schaffen eine Atmosphäre der Ruhe, und die beeindruckende, 15 Quadratmeter große Terrasse mit Waldblick ist der perfekte Ort für einen Morgenkaffee und abendliche Entspannung.',
            azureDetail1: '<b>Wohnzimmer:</b> Geräumig und hell, mit einem bequemen Sofa, einem eleganten Couchtisch und einem modernen Fernseher.',
            azureDetail2: '<b>Küchenzeile:</b> Volle Freiheit und Unabhängigkeit dank eines modernen Kochfelds, eines Geschirrspülers und einer kompletten Ausstattung.',
            azureDetail3: '<b>Essbereich:</b> Ein schöner, runder Tisch mit Krzeseln schafft eine gemütliche Ecke für gemeinsame Mahlzeiten.',
            azureDetail4: '<b>Schlafzimmer:</b> Ein luxuriöses Doppelbett (160x200 cm) und ein separater Fernseher für vollkommene Entspannung.',
            azureDetail5: '<b>Taras:</b> Eine beeindruckende, 15 Quadratmeter große Terrasse mit Waldblick, zugänglich von beiden Zimmern.',
            azureDetail6: '<b>Klimaanlage:</b> Individuell regulierbar für die perfekte Temperatur zu jeder Jahreszeit.',
            wifi: '<b>Internet:</b> Schnelles, kostenloses WLAN in der gesamten Wohnung verfügbar.',
            // Usunięto calendarTitle i calendarDesc
            ctaTitle: 'Möchten Sie Ihren Aufenthalt buchen?',
            ctaDesc: 'Kontaktieren Sie uns direkt:<br><a href="mailto:amberazure.residences@gmail.com">amberazure.residences@gmail.com</a><br>Darek: <a href="tel:+48602229707">+48 602 229 707</a><br>Beata: <a href="tel:+48606410041">+48 606 410 041</a>',
            
            packageIncludedTitle: 'Im Paket enthalten',
            packageIncluded1: 'Übernachtungen in komfortablen Apartments mit voll ausgestatteter Küchenzeile, die die Selbstverpflegung ermöglichen.',
            packageIncluded2: 'Unbegrenzter Zugang zum Wellness-, Aqua- & Sportkomplex (beheizter Außenpool, Innenpool, Whirlpool, Saunen und Fitnessraum).',
            packageIncluded3: 'Zugang zu Attraktionen für Kinder (Spielzimmer, Außenspielplatz, saisonale Animationsprogramme).',
            packageIncluded4: 'Lage in einer ruhigen Waldgegend mit direktem Zugang zum Nationalpark Wolin.',
            
            detailedInfoMainTitle: 'Detaillierte Informationen & Annehmlichkeiten',
            detailedInfoMainSubtitle: 'Alles, was Sie über Ihren Aufenthalt im Sea & Forest Resort wissen müssen.',

            mealsTitle: 'Verpflegung',
            mealsDesc: 'Das Paket "Aufenthalt ohne Verpflegung" beinhaltet keine Mahlzeiten. Die Apartments sind mit Küchenzeilen ausgestattet, die die Selbstverpflegung ermöglichen.',
            foodFeaturesTitle: 'Was unterscheidet unsere Küche:',
            foodFeature1: '<b>Zero Waste auf dem Teller</b> – wir haben keine Buffets, stattdessen bereiten wir köstliche Sets zu, nur so viel wie nötig, und verwenden jede Zutat bis zum Ende.',
            foodFeature2: '<b>Sea & Forest to Table</b> – wir arbeiten mit lokalen Fischern und Lieferanten zusammen, um frische und saisonale Produkte zu servieren.',
            foodFeature3: '<b>Essen im Freien</b> – Mahlzeiten schmecken besser, wenn man sie auf der Terrasse essen oder zum Picknick mitnehmen kann.',
            foodFeature4: '<b>Intim und im Slow-Modus</b> – ohne Eile, nur gutes Essen und Ruhe ringsum.',
            restaurantHoursTitle: 'Öffnungszeiten Gastronomie:',
            restaurantHours: 'A-la-carte-Restaurant For Rest: täglich 12:00 – 23:00 Uhr',
            lobbyBarHours: 'Lobby Café & Bar: täglich 12:00 – 23:00 Uhr',
            takeawaySnacks: 'Snacks zum Mitnehmen: Wir bieten Picknick-Sets, knusprige Sandwiches, frische Salate – alles bereit, um sie an den Strand, in den Wald oder auf eine Fahrradtour mitzunehmen.',

            sportEntertainmentTitle: 'Sport und Unterhaltung',
            sportEntertainmentSubtitle: 'Zeit für Entspannung, Bewegung und Abenteuer – ganz nach Ihrem Geschmack!',
            sportEntertainment1: '<b>Strandtransport mit dem Melex</b> – mehrmals täglich bringt Sie unser Hotel-Melex bequem zum Strand.',
            sportEntertainment2: '<b>Fahrradabenteuer</b> – mieten Sie ein Fahrrad (gegen Aufpreis) und erkunden Sie die Gegend. Waldwege, Klippen, wilde Strände – die Wahl liegt bei Ihnen.',
            sportEntertainment3: '<b>Bewegung für den Körper, Atem für den Geist</b> – Fitnessraum, Pools, Whirlpool, Saunen und Sportaktivitäten. Der Fitnessplan ist in der Paketbeschreibung und/oder vor Ort verfügbar.',
            sportEntertainment4: '<b>Saison voller Attraktionen</b> – Konzerte, Lagerfeuer und saisonale Animationen für Kinder. Man kann zuhören, tanzen oder einfach nur ins Feuer schauen. Der Attraktionsplan ist in der Paketbeschreibung und/oder vor Ort verfügbar.',
            sportEntertainment5: '<b>Wald, der beruhigt</b> – Nationalpark Wolin, wilde Pfade und Stille, die es Ihnen ermöglicht, Ihre eigenen Gedanken zu hören.',
            sportEntertainment6: '<b>Digital Detox</b> – unsere Rituale zur Unterstützung analoger Morgen, Abende und Wochenenden sowie „no phone zone“-Bereiche für diejenigen, die sich von Bildschirmen erholen und wirklich im Hier und Jetzt sein möchten.',

            wellnessSpaTitle: 'Wellness & SPA',
            wellnessSpaSubtitle: 'Hier entspannt sich der Körper, und der Geist erholt sich.',
            wellnessSpa1: '<b>Pools und Whirlpool</b> – Innenpool mit Kinderbecken und ganzjährig beheizter Außenpool. Dazu zwei Whirlpools – für abendliche Entspannung unter den Sternen.',
            wellnessSpa2: '<b>Finnische Sauna</b> – Wärmen Sie Ihren Körper auf, kühlen Sie sich unter der Dusche ab und entspannen Sie sich anschließend im Wald-Entspannungsbereich.',
            wellnessSpa3: '<b>Fitnessraum</b> – wir bieten moderne Geräte für Kraft- und Ausdauertraining. Wir organisieren Fitnesskurse.',
            wellnessSpa4: '<b>SPA Shept</b> – einzigartige, von der Natur inspirierte Behandlungen, basierend auf Wissenschaft und einem ganzheitlichen Ansatz für Körper und Geist.',
            wellnessSpa5: '<b>Kryo-Sauna & Waldbäder</b> – wir empfehlen dringend Kältetherapien und Spaziergänge durch die Bäume – ideal für diejenigen, die sich stärken und mit Sauerstoff versorgen möchten.',
            spaSheptHours: 'SPA Shept: täglich 9:00 – 21:00 Uhr',
            poolGymSaunaHours: 'Pool, Fitnessraum, Saunen: täglich 7:00 – 21:00 Uhr, 21:00 – 23:00 Uhr nur für Erwachsene',
            fitnessClasses: 'Fitnesskurse: gemäß Zeitplan',

            kidsAmenitiesTitle: 'Annehmlichkeiten für Kinder',
            kidsAmenitiesSubtitle: 'Kinder haben bei uns keine Zeit für Langeweile, denn die Welt von Sea & Forest ist ein großer Spielplatz.',
            kidsAmenities1: 'Spielzimmer Mewa Śmieszka',
            kidsAmenities2: 'Außenspielplatz',
            kidsAmenities3: 'Organisierte Animationen (saisonale Attraktion, detaillierter Attraktionsplan im Hotel und/nebo Paket verfügbar)',
            kidsAmenities4: 'Quest des Wolin-Stammes – unser Geländespiel für Kinder ab 7 Jahren.',
            kidsAmenities5: 'Öko-Detektywe – ein Lernspiel für die Kleinsten, voller Experimente und sensorischer Entdeckungen.',
            kidsAmenities6: 'Ganzjährig beheizter Außenpool und Innenpool mit Kinderbecken, Schwimmzubehör',
            kidsAmenities7: 'Auf Wunsch stellen wir den Apartments kostenfrei eine Babywanne, einen Tritthocker und einen Toilettensitzverkleinerer zur Verfügung',
            kidsAmenities8: 'Im Restaurant gibt es Hochstühle, und in den öffentlichen Toiletten Wickeltische.',
            kidsAmenities9: 'Kinder bis 3 Jahre, die bei den Eltern schlafen, übernachten kostenfrei',
            kidsAmenities10: 'Zusätzliches Babybett - 30 PLN/Tag',

            attractionsLocationTitle: 'Attraktionen und Standort',
            attractionsLocationSubtitle: 'Entdecken Sie die Schönheit der Umgebung und lokale Attraktionen – wir laden Sie zu unserer Rubrik ATTRAKTIONEN ein',
            attraction1Title: '<b>Strand zum Greifen nah</b>',
            attraction1Desc: 'Den schönen, breiten Strand erreichen Sie über einen malerischen Waldspaziergang (ca. 10 Minuten) oder mit einem komfortablen, leisen Elektro-Shuttlebus (saisonaler Betrieb).',
            attraction2Title: '<b>Nationalpark Wolin</b>',
            attraction2Desc: 'Starten Sie direkt von Ihrem Apartment aus auf die Wanderwege. Die atemberaubenden Ausblicke vom Gosań-Kliff, der charmante Türkissee und das lehrreiche Wisent-Schaugehege erwarten Sie.',
            attraction3Title: '<b>Reize von Misdroy</b>',
            attraction3Desc: 'Schlendern Sie über die berühmte Promenade der Stars, gehen Sie auf die 395 Meter lange Seebrücke, besuchen Sie das faszinierende Ozeanarium und das realistische Wachsfigurenkabinett.',

            additionallyPaidTitle: 'Zusätzlich kostenpflichtig',
            infoParking: 'Parkplatz in der Tiefgarage (70 PLN/Tag) – Reservierung empfohlen.',
            infoPets: 'Haustieraufenthalt: 90 PLN/Tag',
            attractionsLocationCrib: 'Babybett für Kinder (0-3 Jahre): 30 PLN/Tag',
            attractionsLocationBikeRental: 'Fahrradverleih – weitere Informationen an der Rezeption',
            attractionsLocationEVCharging: 'Ladestation für Elektroautos',
            attractionsLocationClimateTax: 'Obligatorische Kurtaxe gemäß den offiziellen Sätzen für das jeweilige Jahr',
            
            goodToKnowTitle: 'Gut zu wissen',
            goodToKnowWifi: 'Schnelles, kostenloses WLAN in der gesamten Wohnung und im Resortbereich verfügbar.',
            goodToKnowBedding: 'Bettwäsche und Handtücher im Preis inbegriffen.',
            goodToKnowCleaning: 'Endreinigung des Apartments im Preis inbegriffen.',
            goodToKnowCheckIn: 'Check-in ab 16:00 Uhr.',
            goodToKnowCheckOut: 'Check-out bis 11:00 Uhr.',

            locationTitle: 'Unser Standort',
            locationDesc: 'Sie finden uns im Sea & Forest-Kompleks, in der Pufferzone des Nationalparks Wolin, nur einen kurzen Spaziergang vom Strand entfernt.',
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
            privacyS6P3: 'W ramach Serwisu stosowane są przede wszystkim niezbędne pliki cookies, które są wymagane do prawidłowego działania strony. Serwis jest hostowany na platformie GitHub Pages and may use technical cookies to maintain sessions and provide basic functionalities.',
            privacyS6P4: 'The Service does not use cookies for analytical purposes (traffic tracking) or marketing purposes (displaying personalized ads).',
            privacyS6P5: 'If there is a cookie banner on the site, you have the option to manage your preferences.',
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
            navAmenities: 'Annehmlichkeiten', // Zmieniono nazwę i przeniesiono
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
            
            amberSoonTitle: 'Amber Suite Apartment – Bald verfügbar!',
            amberSoonDesc: 'Wir freuen uns, Ihnen mitteilen zu können, dass das Amber Suite Apartment bald verfügbar sein wird! Dieses brandneue, einzigartige Apartment, inspiriert von der Wärme des Bernsteins, erwartet Sie, um Sie willkommen zu heißen. Es bietet unvergessliche Erlebnisse während Ihres Aufenthalts im Herzen des Nationalparks Wolin. Perfekt für diejenigen, die gemütlichen Luxus und die Nähe zur Natur schätzen.',
            amberSoonContact: 'Bereiten Sie sich auf Ihren Traumaufenthalt vor und entdecken Sie die Schönheit von Misdroy in einer luxuriösen Umgebung! Weitere Details zur Verfügbarkeit und Buchung werden in Kürze bekannt gegeben.',

            azureTitle: 'Azure Suite Apartment',
            azureDesc: 'Tauchen Sie ein in klassische Eleganz, kombiniert mit moderner Funktionalität. Das 37 m² große Azure-Apartment ist ein Raum, der Sie umhüllt und Sie jeden Moment Ihres Aufenthalts genießen lässt. Helle, geräumige Innenräume und sorgfältig ausgewählte Accessoires schaffen eine Atmosphäre der Ruhe, und die beeindruckende, 15 Quadratmeter große Terrasse mit Waldblick ist der perfekte Ort für einen Morgenkaffee und abendliche Entspannung.',
            azureDetail1: '<b>Wohnzimmer:</b> Geräumig und hell, mit einem bequemen Sofa, einem eleganten Couchtisch und einem modernen Fernseher.',
            azureDetail2: '<b>Küchenzeile:</b> Volle Freiheit und Unabhängigkeit dank eines modernen Kochfelds, eines Geschirrspülers und einer kompletten Ausstattung.',
            azureDetail3: '<b>Essbereich:</b> Ein schöner, runder Tisch mit Krzeseln schafft eine gemütliche Ecke für gemeinsame Mahlzeiten.',
            azureDetail4: '<b>Schlafzimmer:</b> Ein luxuriöses Doppelbett (160x200 cm) und ein separater Fernseher für vollkommene Entspannung.',
            azureDetail5: '<b>Taras:</b> Eine beeindruckende, 15 Quadratmeter große Terrasse mit Waldblick, zugänglich von beiden Zimmern.',
            azureDetail6: '<b>Klimaanlage:</b> Individuell regulierbar für die perfekte Temperatur zu jeder Jahreszeit.',
            wifi: '<b>Internet:</b> Schnelles, kostenloses WLAN in der gesamten Wohnung verfügbar.',
            // Usunięto calendarTitle i calendarDesc
            ctaTitle: 'Möchten Sie Ihren Aufenthalt buchen?',
            ctaDesc: 'Kontaktieren Sie uns direkt:<br><a href="mailto:amberazure.residences@gmail.com">amberazure.residences@gmail.com</a><br>Darek: <a href="tel:+48602229707">+48 602 229 707</a><br>Beata: <a href="tel:+48606410041">+48 606 410 041</a>',
            
            packageIncludedTitle: 'Im Paket enthalten',
            packageIncluded1: 'Übernachtungen in komfortablen Apartments mit voll ausgestatteter Küchenzeile, die die Selbstverpflegung ermöglichen.',
            packageIncluded2: 'Unbegrenzter Zugang zum Wellness-, Aqua- & Sportkomplex (beheizter Außenpool, Innenpool, Whirlpool, Saunen und Fitnessraum).',
            packageIncluded3: 'Zugang zu Attraktionen für Kinder (Spielzimmer, Außenspielplatz, saisonale Animationsprogramme).',
            packageIncluded4: 'Lage in einer ruhigen Waldgegend mit direktem Zugang zum Nationalpark Wolin.',
            
            detailedInfoMainTitle: 'Detaillierte Informationen & Annehmlichkeiten',
            detailedInfoMainSubtitle: 'Alles, was Sie über Ihren Aufenthalt im Sea & Forest Resort wissen müssen.',

            mealsTitle: 'Verpflegung',
            mealsDesc: 'Das Paket "Aufenthalt ohne Verpflegung" beinhaltet keine Mahlzeiten. Die Apartments sind mit Küchenzeilen ausgestattet, die die Selbstverpflegung ermöglichen.',
            foodFeaturesTitle: 'Was unterscheidet unsere Küche:',
            foodFeature1: '<b>Zero Waste auf dem Teller</b> – wir haben keine Buffets, stattdessen bereiten wir köstliche Sets zu, nur so viel wie nötig, und verwenden jede Zutat bis zum Ende.',
            foodFeature2: '<b>Sea & Forest to Table</b> – wir arbeiten mit lokalen Fischern und Lieferanten zusammen, um frische und saisonale Produkte zu servieren.',
            foodFeature3: '<b>Essen im Freien</b> – Mahlzeiten schmecken besser, wenn man sie auf der Terrasse essen oder zum Picknick mitnehmen kann.',
            foodFeature4: '<b>Intim und im Slow-Modus</b> – ohne Eile, nur gutes Essen und Ruhe ringsum.',
            restaurantHoursTitle: 'Öffnungszeiten Gastronomie:',
            restaurantHours: 'A-la-carte-Restaurant For Rest: täglich 12:00 – 23:00 Uhr',
            lobbyBarHours: 'Lobby Café & Bar: täglich 12:00 – 23:00 Uhr',
            takeawaySnacks: 'Snacks zum Mitnehmen: Wir bieten Picknick-Sets, knusprige Sandwiches, frische Salate – alles bereit, um sie an den Strand, in den Wald oder auf eine Fahrradtour mitzunehmen.',

            sportEntertainmentTitle: 'Sport und Unterhaltung',
            sportEntertainmentSubtitle: 'Zeit für Entspannung, Bewegung und Abenteuer – ganz nach Ihrem Geschmack!',
            sportEntertainment1: '<b>Strandtransport mit dem Melex</b> – mehrmals täglich bringt Sie unser Hotel-Melex bequem zum Strand.',
            sportEntertainment2: '<b>Fahrradabenteuer</b> – mieten Sie ein Fahrrad (gegen Aufpreis) und erkunden Sie die Gegend. Waldwege, Klippen, wilde Strände – die Wahl liegt bei Ihnen.',
            sportEntertainment3: '<b>Bewegung für den Körper, Atem für den Geist</b> – Fitnessraum, Pools, Whirlpool, Saunen und Sportaktivitäten. Der Fitnessplan ist in der Paketbeschreibung und/oder vor Ort verfügbar.',
            sportEntertainment4: '<b>Saison voller Attraktionen</b> – Konzerte, Lagerfeuer und saisonale Animationen für Kinder. Man kann zuhören, tanzen oder einfach nur ins Feuer schauen. Der Attraktionsplan ist in der Paketbeschreibung und/oder vor Ort verfügbar.',
            sportEntertainment5: '<b>Wald, der beruhigt</b> – Nationalpark Wolin, wilde Pfade und Stille, die es Ihnen ermöglicht, Ihre eigenen Gedanken zu hören.',
            sportEntertainment6: '<b>Digital Detox</b> – unsere Rituale zur Unterstützung analoger Morgen, Abende und Wochenenden sowie „no phone zone“-Bereiche für diejenigen, die sich von Bildschirmen erholen und wirklich im Hier und Jetzt sein möchten.',

            wellnessSpaTitle: 'Wellness & SPA',
            wellnessSpaSubtitle: 'Hier entspannt sich der Körper, und der Geist erholt sich.',
            wellnessSpa1: '<b>Pools und Whirlpool</b> – Innenpool mit Kinderbecken und ganzjährig beheizter Außenpool. Dazu zwei Whirlpools – für abendliche Entspannung unter den Sternen.',
            wellnessSpa2: '<b>Finnische Sauna</b> – Wärmen Sie Ihren Körper auf, kühlen Sie sich unter der Dusche ab und entspannen Sie sich anschließend im Wald-Entspannungsbereich.',
            wellnessSpa3: '<b>Fitnessraum</b> – wir bieten moderne Geräte für Kraft- und Ausdauertraining. Wir organisieren Fitnesskurse.',
            wellnessSpa4: '<b>SPA Shept</b> – einzigartige, von der Natur inspirierte Behandlungen, basierend auf Wissenschaft und einem ganzheitlichen Ansatz für Körper und Geist.',
            wellnessSpa5: '<b>Kryo-Sauna & Waldbäder</b> – wir empfehlen dringend Kältetherapien und Spaziergänge durch die Bäume – ideal für diejenigen, die sich stärken und mit Sauerstoff versorgen möchten.',
            spaSheptHours: 'SPA Shept: täglich 9:00 – 21:00 Uhr',
            poolGymSaunaHours: 'Pool, Fitnessraum, Saunen: täglich 7:00 – 21:00 Uhr, 21:00 – 23:00 Uhr nur für Erwachsene',
            fitnessClasses: 'Fitnesskurse: gemäß Zeitplan',

            kidsAmenitiesTitle: 'Annehmlichkeiten für Kinder',
            kidsAmenitiesSubtitle: 'Kinder haben bei uns keine Zeit für Langeweile, denn die Welt von Sea & Forest ist ein großer Spielplatz.',
            kidsAmenities1: 'Spielzimmer Mewa Śmieszka',
            kidsAmenities2: 'Außenspielplatz',
            kidsAmenities3: 'Organisierte Animationen (saisonale Attraktion, detaillierter Attraktionsplan im Hotel und/nebo Paket verfügbar)',
            kidsAmenities4: 'Quest des Wolin-Stammes – unser Geländespiel für Kinder ab 7 Jahren.',
            kidsAmenities5: 'Öko-Detektywe – ein Lernspiel für die Kleinsten, voller Experimente und sensorischer Entdeckungen.',
            kidsAmenities6: 'Ganzjährig beheizter Außenpool und Innenpool mit Kinderbecken, Schwimmzubehör',
            kidsAmenities7: 'Auf Wunsch stellen wir den Apartments kostenfrei eine Babywanne, einen Tritthocker und einen Toilettensitzverkleinerer zur Verfügung',
            kidsAmenities8: 'Im Restaurant gibt es Hochstühle, und in den öffentlichen Toiletten Wickeltische.',
            kidsAmenities9: 'Kinder bis 3 Jahre, die bei den Eltern schlafen, übernachten kostenfrei',
            kidsAmenities10: 'Zusätzliches Babybett - 30 PLN/Tag',

            attractionsLocationTitle: 'Attraktionen und Standort',
            attractionsLocationSubtitle: 'Entdecken Sie die Schönheit der Umgebung und lokale Attraktionen – wir laden Sie zu unserer Rubrik ATTRAKTIONEN ein',
            attraction1Title: '<b>Strand zum Greifen nah</b>',
            attraction1Desc: 'Den schönen, breiten Strand erreichen Sie über einen malerischen Waldspaziergang (ca. 10 Minuten) oder mit einem komfortablen, leisen Elektro-Shuttlebus (saisonaler Betrieb).',
            attraction2Title: '<b>Nationalpark Wolin</b>',
            attraction2Desc: 'Starten Sie direkt von Ihrem Apartment aus auf die Wanderwege. Die atemberaubenden Ausblicke vom Gosań-Kliff, der charmante Türkissee und das lehrreiche Wisent-Schaugehege erwarten Sie.',
            attraction3Title: '<b>Reize von Misdroy</b>',
            attraction3Desc: 'Schlendern Sie über die berühmte Promenade der Stars, gehen Sie auf die 395 Meter lange Seebrücke, besuchen Sie das faszinierende Ozeanarium und das realistische Wachsfigurenkabinett.',

            additionallyPaidTitle: 'Zusätzlich kostenpflichtig',
            infoParking: 'Parkplatz in der Tiefgarage (70 PLN/Tag) – Reservierung empfohlen.',
            infoPets: 'Haustieraufenthalt: 90 PLN/Tag',
            attractionsLocationCrib: 'Babybett für Kinder (0-3 Jahre): 30 PLN/Tag',
            attractionsLocationBikeRental: 'Fahrradverleih – weitere Informationen an der Rezeption',
            attractionsLocationEVCharging: 'Ladestation für Elektroautos',
            attractionsLocationClimateTax: 'Obligatorische Kurtaxe gemäß den offiziellen Sätzen für das jeweilige Jahr',
            
            goodToKnowTitle: 'Gut zu wissen',
            goodToKnowWifi: 'Schnelles, kostenloses WLAN in der gesamten Wohnung und im Resortbereich verfügbar.',
            goodToKnowBedding: 'Bettwäsche und Handtücher im Preis inbegriffen.',
            goodToKnowCleaning: 'Endreinigung des Apartments im Preis inbegriffen.',
            goodToKnowCheckIn: 'Check-in ab 16:00 Uhr.',
            goodToKnowCheckOut: 'Check-out bis 11:00 Uhr.',

            locationTitle: 'Unser Standort',
            locationDesc: 'Sie finden uns im Sea & Forest-Kompleks, in der otulinie Wolińskiego Parku Narodowego, zaledwie krótki spacer od plaży.',
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
            privacyS6P3: 'W ramach Serwisu stosowane są przede wszystkim niezbędne pliki cookies, które są wymagane do prawidłowego działania strony. Serwis jest hostowany na platformie GitHub Pages and may use technical cookies to maintain sessions and provide basic functionalities.',
            privacyS6P4: 'The Service does not use cookies for analytical purposes (traffic tracking) or marketing purposes (displaying personalized ads).',
            privacyS6P5: 'If there is a cookie banner on the site, you have the option to manage your preferences.',
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

        // Ponowne pobranie i wyświetlenie pogody po zmianie języka
        fetchWeather('Miedzyzdroje', 'YOUR_OPENWEATHERMAP_API_KEY', lang);
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

        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                const newImageSrc = this.dataset.image;
                thumbnails.forEach(t => t.classList.remove('active-thumb'));
                this.classList.add('active-thumb');
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.src = newImageSrc;
                    mainImage.style.opacity = '1';
                }, 300);
            });
        });

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
    // Funkcja loadCalendars jest teraz pusta, ponieważ kalendarze zostały usunięte
    function loadCalendars() {
        // Funkcja nie robi nic, ponieważ kalendarze zostały usunięte
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

    // === Logika Accordion ===
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentNode;
            const accordionContent = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');

            // Close other open accordions in the same accordion container
            const parentAccordionContainer = header.closest('.accordion-container');
            if (parentAccordionContainer) {
                parentAccordionContainer.querySelectorAll('.accordion-item.active').forEach(item => {
                    if (item !== accordionItem) {
                        item.classList.remove('active');
                        item.querySelector('.accordion-content').style.maxHeight = null;
                        item.querySelector('.accordion-icon').classList.remove('fa-chevron-up');
                        item.querySelector('.accordion-icon').classList.add('fa-chevron-down');
                    }
                });
            }

            // Toggle current accordion
            accordionItem.classList.toggle('active');
            if (accordionItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                accordionContent.style.maxHeight = null;
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });

    // === Logika pobierania pogody ===
    const fetchWeather = async (city, apiKey, lang) => {
        const tempElement = document.getElementById('current-temperature');
        const weatherPrefixElement = document.querySelector('.weather-prefix');
        
        if (!tempElement || !weatherPrefixElement) return;

        // Ustawienie tekstu ładowania
        tempElement.textContent = '--°C';
        weatherPrefixElement.textContent = translations[lang].weatherLoading;

        try {
            // Użyj proxy, aby uniknąć problemów z CORS w środowisku Canvas
            const proxyUrl = `https://api.allorigins.win/raw?url=`;
            const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`;
            
            const response = await fetch(proxyUrl + encodeURIComponent(weatherApiUrl));
            const data = await response.json();

            if (data.main && data.main.temp) {
                tempElement.textContent = `${Math.round(data.main.temp)}°C`;
                weatherPrefixElement.textContent = translations[lang].weatherPrefix;
            } else {
                tempElement.textContent = 'N/A';
                weatherPrefixElement.textContent = translations[lang].weatherError;
                console.error('Błąd pobierania pogody: Nieprawidłowe dane', data);
            }
        } catch (error) {
            tempElement.textContent = 'N/A';
            weatherPrefixElement.textContent = translations[lang].weatherError;
            console.error('Błąd pobierania pogody:', error);
        }
    };


    // Inicjalizacja galerii tylko dla Azure
    initializeGallery('azure-suite');

    // Ładowanie kalendarzy (teraz pusta funkcja)
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

    // Pobieranie pogody po załadowaniu języka (aby prefix był w odpowiednim języku)
    // UWAGA: Zastąp 'YOUR_OPENWEATHERMAP_API_KEY' swoim kluczem API OpenWeatherMap
    // Klucz API OpenWeatherMap jest wymagany do działania funkcji pobierania pogody.
    // Możesz go uzyskać na stronie: https://openweathermap.org/api
    fetchWeather('Miedzyzdroje', 'YOUR_OPENWEATHERMAP_API_KEY', savedLang);
});
