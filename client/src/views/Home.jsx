import { useState } from "react";
import styles from "../styles/Home.module.css";
import Preloader from "./Preloader";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Topbar from "../components/Topbar/Topbar";
import Particles from "../components/Hooks/Particles";
import useSectionObserver from "../scripts/useSectionObserver";

export default function Home() {
  const [particlesOn, setParticlesOn] = useState(true);
  useSectionObserver(`.${styles.sectionHome}`, 0.2, styles);

  return (
    <>
      <Preloader />

      <Header />

      {/*<Topbar particlesOn={particlesOn} setParticlesOn={setParticlesOn} />*/}

      <main className={styles.mainHome}>
        <section id="intro" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-music"></i> Witaj w SpotiTools
            </h2>
            <p>
              Twoje osobiste centrum zarządzania muzyką. Analizuj, porządkuj i
              odkrywaj nowe możliwości słuchania dzięki zaawansowanym narzędziom
              stworzonym specjalnie dla użytkowników Spotify.
            </p>
            <h2>
              <i className="fa-solid fa-circle-info"></i> Poznaj SpotiTools
            </h2>
            <nav className={styles.introNav}>
              <a href="#czym-jest" role="button">
                Czym jest SpotiTools?
              </a>
              <a href="#problematyka" role="button">
                Problematyka
              </a>
              <a href="#nasze-rozwiazanie" role="button">
                Nasze rozwiązanie
              </a>
              <a href="#technologie-i-integracje" role="button">
                Technologie
              </a>
              <a href="#funkcjonalnosci" role="button">
                Funkcje
              </a>
              <a href="#jak-dziala" role="button">
                Jak działa?
              </a>
              <a href="#dlaczego-warto" role="button">
                Dlaczego my?
              </a>
              <a href="#dla-kogo" role="button">
                Dla kogo?
              </a>
              <a href="#potencjalna-rozbudowa" role="button">
                Rozbudowa
              </a>
              <a href="#status-projektu" role="button">
                Status
              </a>
              <a href="#faq" role="button">
                FAQ
              </a>
              <a href="#kontakt" role="button">
                Kontakt
              </a>
              <a href="#dolacz" role="button">
                Dołącz teraz!
              </a>
            </nav>
          </div>
        </section>

        <section id="czym-jest" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-question-circle"></i> Czym jest
              SpotiTools?
            </h2>
            <p>
              SpotiTools to innowacyjna aplikacja webowa, która rozszerza
              możliwości standardowego konta Spotify, oferując zaawansowane
              narzędzia analityczne i funkcje personalizacji słuchania muzyki.
              Jej celem jest wsparcie użytkowników w świadomym, wygodnym i
              bardziej satysfakcjonującym zarządzaniu własną biblioteką
              muzyczną.
            </p>
            <p>
              W przeciwieństwie do standardowego interfejsu Spotify, który
              skupia się głównie na odtwarzaniu i rekomendacjach, SpotiTools
              pozwala Ci przejąć pełną kontrolę nad swoimi utworami, playlistami
              i zwyczajami słuchania. Aplikacja działa w pełni online i
              integruje się bezpośrednio z Twoim kontem Spotify – bez potrzeby
              instalowania żadnych dodatkowych komponentów.
            </p>
            <p>
              Dzięki SpotiTools możesz analizować historię odtwarzania,
              porządkować biblioteki, automatyzować działania, odkrywać
              nieoczywiste nawyki muzyczne i budować własne narzędzia wokół
              danych z Twojego konta. To idealne rozwiązanie zarówno dla
              zaawansowanych użytkowników, jak i tych, którzy chcą po prostu
              mieć więcej kontroli nad tym, czego i jak słuchają.
            </p>
            <p>
              Aplikacja została zaprojektowana z myślą o przejrzystości,
              funkcjonalności i przyjaznym interfejsie – tak, by każda osoba,
              niezależnie od poziomu technicznego, mogła czerpać maksimum
              korzyści z codziennego korzystania z muzyki.
            </p>
          </div>
        </section>

        <section id="problematyka" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-triangle-exclamation"></i> Problematyka
            </h2>
            <p>
              Mimo że Spotify jest liderem wśród platform streamingowych, jego
              ekosystem cierpi na istotne ograniczenia z punktu widzenia
              użytkownika zaawansowanego oraz każdego, kto chce mieć większą
              kontrolę nad swoją muzyczną przestrzenią. Głównym problemem nie
              jest sama jakość usługi, lecz brak narzędzi wspierających
              personalizację, analizę danych i zaawansowane zarządzanie treścią.
            </p>
            <h3>
              <i className="fa-solid fa-user-secret"></i> Brak wglądu w dane
              użytkownika
            </h3>
            <p>
              Spotify nie oferuje natywnie szczegółowych statystyk słuchania,
              historii odtworzeń czy analiz trendów preferencji muzycznych.
              Użytkownik ma jedynie ograniczony dostęp do „Wrapped” raz w roku
              oraz uproszczone podsumowania tygodniowe, które nie wspierają
              żadnej głębszej analizy.
            </p>
            <h3>
              <i className="fa-solid fa-database"></i> Trudności w zarządzaniu
              biblioteką
            </h3>
            <p>
              Przy rosnącej liczbie playlist, zapisanych albumów i śledzonych
              artystów, zarządzanie biblioteką staje się chaotyczne. Brakuje
              możliwości grupowania playlist, szybkiego wyszukiwania dublujących
              się utworów, czyszczenia nieaktywnych pozycji czy sortowania
              według różnych kryteriów.
            </p>
            <h3>
              <i className="fa-solid fa-sliders"></i> Ograniczona personalizacja
              rekomendacji
            </h3>
            <p>
              Algorytmy Spotify są skuteczne, ale działają głównie na podstawie
              bieżącego odsłuchu. Brakuje wpływu użytkownika na to, jak działa
              system rekomendacji, oraz narzędzi do eksploracji muzyki bazującej
              na głębszych danych (np. tempo, energia, nastrój).
            </p>
            <h3>
              <i className="fa-solid fa-filter"></i> Brak funkcji
              eksploracyjnych i porządkowych
            </h3>
            <p>
              Spotify nie umożliwia filtrowania utworów według cech audio (np.
              tonacja, taneczność), porównywania playlist między sobą ani
              wyszukiwania utworów na podstawie metadanych. Utrudnia to zarówno
              eksplorację nowych brzmień, jak i porządkowanie już istniejących
              zbiorów.
            </p>
            <h3>
              <i className="fa-solid fa-user-gear"></i> Niedostateczne wsparcie
              dla użytkownika zaawansowanego
            </h3>
            <p>
              Osoby, które chciałyby wyciągać więcej informacji z danych
              muzycznych, analizować swoje przyzwyczajenia czy optymalizować
              playlisty według konkretnych kryteriów, są zmuszone do używania
              zewnętrznych narzędzi, często trudnych w obsłudze i niespójnych z
              interfejsem Spotify.
            </p>
            <p>
              SpotiTools powstało jako odpowiedź na te bolączki. To platforma
              stworzona z myślą o użytkownikach, którzy oczekują więcej:
              przejrzystości, kontroli i realnych wniosków z danych muzycznych.
              Dzięki pełnej integracji z kontem Spotify, użytkownik otrzymuje
              narzędzia, których natywna aplikacja po prostu nie oferuje.
            </p>
          </div>
        </section>

        <section id="nasze-rozwiazanie" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-lightbulb"></i> Nasze rozwiązanie
            </h2>
            <p>
              SpotiTools to kompleksowa aplikacja webowa, zaprojektowana z myślą
              o użytkownikach Spotify, którzy chcą mieć realny wpływ na swoje
              muzyczne doświadczenie. Nasze narzędzie działa w pełni online –
              bez konieczności instalacji, bez zbędnej konfiguracji, z prostą i
              bezpieczną autoryzacją konta Spotify. To, co odróżnia SpotiTools
              od innych rozwiązań, to połączenie zaawansowanej analityki,
              personalizacji i intuicyjnego zarządzania biblioteką w jednym,
              spójnym środowisku.
            </p>
            <h3>
              <i className="fa-solid fa-chart-line"></i> Rozbudowana analiza
              muzycznych nawyków
            </h3>
            <p>
              Aplikacja udostępnia szczegółowe statystyki dotyczące historii
              odsłuchów, ulubionych gatunków, najczęściej odtwarzanych utworów,
              artystów oraz zmian preferencji w czasie. Dane są przedstawiane w
              przejrzysty sposób – za pomocą wykresów, rankingów oraz
              interaktywnych wizualizacji.
            </p>
            <h3>
              <i className="fa-solid fa-layer-group"></i> Inteligentne
              zarządzanie biblioteką
            </h3>
            <p>
              Dzięki zaawansowanym filtrom, SpotiTools umożliwia użytkownikowi
              sortowanie, grupowanie i czyszczenie playlist oraz zapisanych
              utworów według wybranych kryteriów: energii, tempa, taneczności,
              daty dodania, obecności w wielu listach itd. Użytkownik może
              szybko znaleźć zdublowane utwory, nieaktywne pozycje czy
              zapomniane playlisty.
            </p>
            <h3>
              <i className="fa-solid fa-wand-magic-sparkles"></i> Personalizacja
              i optymalizacja
            </h3>
            <p>
              Użytkownik może tworzyć automatyczne playlisty na podstawie
              własnych preferencji – np. „chillowe utwory z lat 90.”, „szybkie
              kawałki do biegania” lub „nowości podobne do ulubionych”.
              SpotiTools wykorzystuje metadane dostarczane przez Spotify API
              oraz własne algorytmy rekomendacyjne, by zaproponować najbardziej
              dopasowane propozycje.
            </p>
            <h3>
              <i className="fa-solid fa-arrows-rotate"></i> Interaktywne
              porównania i eksploracja
            </h3>
            <p>
              Aplikacja umożliwia porównywanie dowolnych playlist pod kątem cech
              muzycznych, długości, klimatu czy pokrycia utworów. Użytkownik
              może też przeszukiwać swoją bibliotekę według wybranych atrybutów
              audio, takich jak nastrój, tempo, tonalność, popularność czy
              instrumentalność.
            </p>
            <h3>
              <i className="fa-solid fa-shield-halved"></i> Prosty i bezpieczny
              interfejs
            </h3>
            <p>
              SpotiTools zostało zaprojektowane z myślą o maksymalnej prostocie
              obsługi. Cały proces integracji z kontem Spotify trwa kilkanaście
              sekund i odbywa się poprzez oficjalny mechanizm OAuth. Interfejs
              aplikacji jest responsywny, lekki i intuicyjny – dostępny zarówno
              na komputerach, jak i urządzeniach mobilnych.
            </p>
            <p>
              Nasze rozwiązanie eliminuje kluczowe ograniczenia platformy
              Spotify, oferując użytkownikowi realne korzyści: oszczędność
              czasu, lepsze zrozumienie własnych upodobań oraz większą
              satysfakcję z codziennego słuchania muzyki.
            </p>
          </div>
        </section>

        <section id="technologie-i-integracje" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-microchip"></i> Technologie i integracje
            </h2>
            <p>
              SpotiTools to nowoczesna aplikacja webowa, oparta na sprawdzonych,
              popularnych technologiach front-endowych i back-endowych. Jej
              architektura została zaprojektowana z myślą o skalowalności,
              szybkości działania i bezpieczeństwie, przy jednoczesnym
              zachowaniu pełnej kompatybilności z ekosystemem Spotify.
            </p>
            <h3>
              <i className="fa-brands fa-spotify"></i> Integracja z kontem
              Spotify
            </h3>
            <p>
              Aplikacja wykorzystuje oficjalne Spotify Web API oraz bezpieczny
              protokół autoryzacji OAuth 2.0, co pozwala na uzyskanie dostępu do
              danych użytkownika w sposób w pełni zgodny z wytycznymi platformy.
              Po jednorazowym uwierzytelnieniu, użytkownik może analizować i
              zarządzać swoim profilem muzycznym bez ryzyka naruszenia
              prywatności.
            </p>
            <h3>
              <i className="fa-solid fa-code"></i> Nowoczesne technologie webowe
            </h3>
            <p>
              Interfejs użytkownika został zbudowany w technologii React.js, co
              zapewnia wysoką responsywność, płynność działania i skalowalność
              aplikacji. Dzięki komponentowej strukturze, SpotiTools może być
              łatwo rozwijane o nowe funkcjonalności w przyszłości.
            </p>
            <h3>
              <i className="fa-solid fa-server"></i> Warstwa serwerowa
            </h3>
            <p>
              Back-end aplikacji oparty jest na Node.js z wykorzystaniem
              frameworka Express. Dzięki temu zapewniamy wydajną komunikację z
              API Spotify oraz bezpieczne przetwarzanie zapytań użytkowników.
              Dodatkowo, dane sesyjne są przechowywane w sposób bezpieczny i
              nietrwały, co zwiększa prywatność użytkownika.
            </p>
            <h3>
              <i className="fa-solid fa-chart-pie"></i> Wizualizacja danych
            </h3>
            <p>
              Do tworzenia dynamicznych wykresów i analiz wykorzystano
              biblioteki takie jak Chart.js oraz D3.js. Dzięki temu użytkownik
              może łatwo zrozumieć swoje muzyczne nawyki poprzez atrakcyjne i
              interaktywne wizualizacje.
            </p>
            <h3>
              <i className="fa-solid fa-mobile-screen"></i> Dostępność i
              optymalizacja
            </h3>
            <p>
              SpotiTools działa w pełni w przeglądarce, bez potrzeby instalacji.
              Aplikacja została zoptymalizowana pod kątem urządzeń mobilnych,
              tabletów i desktopów, z zachowaniem zasad Progressive Web App
              (PWA). W przyszłości planowana jest też wersja offline z lokalną
              pamięcią podręczną.
            </p>
            <p>
              Dzięki połączeniu nowoczesnych technologii i bezpośredniej
              integracji z platformą Spotify, SpotiTools oferuje stabilne,
              szybkie i atrakcyjne środowisko pracy z muzyką – zarówno dla
              zwykłych użytkowników, jak i entuzjastów analityki danych.
            </p>
          </div>
        </section>

        <section id="funkcjonalnosci" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-list-check"></i> Funkcjonalności
              aplikacji
            </h2>
            <p>
              SpotiTools to kompleksowe narzędzie stworzone z myślą o
              użytkownikach Spotify, którzy pragną uzyskać pełną kontrolę nad
              swoim doświadczeniem muzycznym. Aplikacja oferuje szereg modułów i
              funkcji, które umożliwiają analizę, porządkowanie i personalizację
              treści w czasie rzeczywistym.
            </p>
            <h3>
              <i className="fa-solid fa-chart-bar"></i> Analiza aktywności
              słuchacza
            </h3>
            <p>
              Statystyki odtworzeń - wykresy najczęściej słuchanych utworów,
              artystów i gatunków muzycznych w ujęciu dziennym, tygodniowym,
              miesięcznym i rocznym.
            </p>
            <p>
              Zmiana preferencji w czasie - wykrywanie trendów i sezonowości w
              wyborach użytkownika.
            </p>
            <p>
              Personalne insighty - zestawienie unikalnych danych, takich jak
              "najczęstsze godziny słuchania", "muzyka do pracy vs relaksu" czy
              "najbardziej energiczne playlisty".
            </p>
            <h3>
              <i className="fa-solid fa-folder-open"></i> Zarządzanie biblioteką
            </h3>
            <p>
              Masowe zarządzanie playlistami - łączenie, kopiowanie i
              filtrowanie list odtwarzania wg różnych kryteriów (np. gatunek,
              BPM, energia).
            </p>
            <p>
              Oczyszczanie biblioteki - wykrywanie i usuwanie zduplikowanych
              utworów, nieaktywnych artystów i starych playlist.
            </p>
            <p>
              Kreator playlist - możliwość generowania playlist na podstawie
              konkretnych emocji, aktywności (np. bieganie, nauka) lub pory
              dnia.
            </p>
            <h3>
              <i className="fa-solid fa-star"></i> Personalizacja i rekomendacje
            </h3>
            <p>
              Inteligentne rekomendacje - sugestie nowych utworów i artystów na
              podstawie analizy profilu słuchacza i ukrytych wzorców.
            </p>
            <p>
              Autouzupełnianie playlist - automatyczne dodawanie brakujących
              utworów podobnych stylistycznie lub tematycznie do zawartości
              listy.
            </p>
            <p>
              Tryb eksperymentalny - propozycje z gatunków i artystów spoza
              strefy komfortu użytkownika – dla poszerzenia horyzontów
              muzycznych.
            </p>
            <h3>
              <i className="fa-solid fa-headphones"></i> Moduł odtwarzania i tła
              dźwiękowego
            </h3>
            <p>
              Wbudowany odtwarzacz - możliwość słuchania muzyki bez opuszczania
              aplikacji (jeśli dostęp przez Spotify SDK).
            </p>
            <p>
              Muzyka tła - opcjonalna ścieżka dźwiękowa towarzysząca pracy z
              aplikacją – do wyboru ambient, lo-fi, jazz itp.
            </p>
            <p>
              Kontrola głośności i stanu - interaktywny pasek głośności,
              pauzowanie i wznowienie, ikona informująca o aktualnym stanie.
            </p>
            <h3>
              <i className="fa-solid fa-user-lock"></i> Integracja i zarządzanie
              kontem
            </h3>
            <p>
              Logowanie przez Spotify - bezpieczna i szybka autoryzacja z
              poziomu przeglądarki dzięki OAuth 2.0.
            </p>
            <p>
              Widok profilu Spotify - dostęp do danych podstawowych konta –
              nazwa, awatar, liczba playlist, obserwowani artyści.
            </p>
            <p>
              Bezpieczne zarządzanie sesją - pełna kontrola nad aktywną sesją i
              możliwość wylogowania jednym kliknięciem.
            </p>
            <h3>
              <i className="fa-solid fa-toolbox"></i> Narzędzia dodatkowe
            </h3>
            <p>
              Wyszukiwarka sekcji - możliwość skoku do wybranej części aplikacji
              na podstawie wpisanej frazy.
            </p>
            <p>
              Tryb jasny/ciemny - płynne przełączanie motywu interfejsu według
              preferencji użytkownika lub pory dnia.
            </p>
            <p>
              Sidebar nawigacyjny - intuicyjny panel boczny ułatwiający
              poruszanie się po aplikacji – dostępny także w wersji mobilnej.
            </p>
            <p>
              Wszystkie funkcje zostały zaprojektowane z myślą o intuicyjności,
              estetyce oraz wartości dodanej dla użytkownika. Niezależnie od
              poziomu zaawansowania, SpotiTools sprawia, że zarządzanie muzyką
              staje się bardziej świadome, uporządkowane i przyjemne.
            </p>
          </div>
        </section>

        <section id="jak-dziala" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-gears"></i> Jak działa?
            </h2>
            <p>
              SpotiTools działa w pełni online, bez konieczności instalowania
              dodatkowego oprogramowania. Aplikacja została zaprojektowana w
              sposób maksymalnie uproszczony dla użytkownika końcowego, przy
              jednoczesnym wykorzystaniu zaawansowanych technologii po stronie
              zaplecza. Poniżej przedstawiamy schemat działania aplikacji krok
              po kroku:
            </p>
            <h3>
              <i className="fa-solid fa-right-to-bracket"></i> Autoryzacja
              użytkownika
            </h3>
            <p>
              Po wejściu na stronę SpotiTools, użytkownik loguje się przez swoje
              konto Spotify, korzystając z bezpiecznego mechanizmu OAuth 2.0.
              Proces ten jest realizowany poprzez oficjalne API Spotify i nie
              wymaga podawania hasła – użytkownik autoryzuje jedynie dostęp do
              wybranych zasobów.
            </p>
            <h3>
              <i className="fa-solid fa-download"></i> Pobieranie danych i
              analiza
            </h3>
            <p>
              Po uzyskaniu dostępu aplikacja pobiera informacje z konta
              użytkownika, m.in.:
            </p>
            <p>- listy odtwarzania, zapisane utwory i albumy</p>
            <p>- statystyki odsłuchów (top artyści, utwory, gatunki)</p>
            <p>- preferencje i zachowania słuchacza</p>
            <p>
              Dane te są analizowane lokalnie lub na serwerze z wykorzystaniem
              bibliotek statystycznych oraz algorytmów klasyfikujących (np.
              analiza sentymentu, tempo, energia utworu). Rezultaty tej analizy
              są prezentowane w atrakcyjnej, interaktywnej formie.
            </p>
            <h3>
              <i className="fa-solid fa-hand-pointer"></i> Interakcja z
              funkcjami aplikacji
            </h3>
            <p>
              Użytkownik może korzystać z różnych modułów dostępnych z poziomu
              menu bocznego lub topbara:
            </p>
            <p>- Eksploracja danych: interaktywne wykresy, rankingi, trendy</p>
            <p>
              - Zarządzanie playlistami: scalanie, czyszczenie, reorganizacja
            </p>
            <p>
              - Generowanie nowych playlist: na podstawie nastroju, aktywności
              lub preferencji
            </p>
            <p>
              - Eksperymentowanie: rekomendacje wykraczające poza typowe wybory
              użytkownika
            </p>
            <h3>
              <i className="fa-solid fa-arrows-spin"></i> Synchronizacja z
              kontem Spotify
            </h3>
            <p>
              Wszystkie zmiany dokonywane w SpotiTools są synchronizowane z
              kontem użytkownika w Spotify w czasie rzeczywistym. Dzięki
              wykorzystaniu Spotify Web API możliwe jest m.in.:
            </p>
            <p>- tworzenie i edytowanie playlist</p>
            <p>- dodawanie/usuwanie utworów</p>
            <p>- zmiana ich kolejności czy nazw</p>
            <p>
              - odtwarzanie muzyki bezpośrednio z poziomu interfejsu aplikacji
              (jeśli zezwala na to środowisko)
            </p>
            <h3>
              <i className="fa-solid fa-palette"></i> Personalizacja interfejsu
            </h3>
            <p>
              Użytkownik może dostosować wygląd aplikacji według własnych
              preferencji:
            </p>
            <p>- zmiana motywu (jasny/ciemny)</p>
            <p>- wyciszenie lub aktywacja muzyki tła</p>
            <p>
              - nawigacja przy użyciu skrótów, wyszukiwarki i przycisków
              kontekstowych
            </p>
            <h3>
              <i className="fa-solid fa-lock"></i> Bezpieczeństwo i prywatność
            </h3>
            <p>
              SpotiTools nie przechowuje haseł użytkowników ani nie udostępnia
              danych osobowych stronom trzecim. Autoryzacja odbywa się wyłącznie
              za pośrednictwem oficjalnych narzędzi Spotify. Po zakończeniu
              sesji użytkownik może się wylogować, co natychmiast kończy dostęp
              aplikacji do jego konta.
            </p>
            <p>
              Dzięki synergii technologii frontendowych (React, TailwindCSS) i
              backendowych (Node.js, Express), całość działa szybko, płynnie i
              bezproblemowo w przeglądarkach desktopowych i mobilnych.
            </p>
          </div>
        </section>

        <section id="dlaczego-warto" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-heart"></i> Dlaczego warto wybrać
              SpotiTools?
            </h2>
            <p>
              SpotiTools to coś więcej niż tylko rozszerzenie dla Spotify – to
              kompletny zestaw narzędzi, które zamieniają codzienne słuchanie
              muzyki w inteligentne, zorganizowane i w pełni spersonalizowane
              doświadczenie. Nasze rozwiązanie zostało stworzone z myślą o
              nowoczesnych użytkownikach, którzy oczekują czegoś więcej niż
              tylko odtwarzacza.
            </p>
            <h3>
              <i className="fa-solid fa-user-astronaut"></i> Maksymalna
              personalizacja doświadczenia muzycznego
            </h3>
            <p>
              Dzięki analizie danych odsłuchu i preferencji, SpotiTools oferuje
              unikalne spojrzenie na gust muzyczny użytkownika. Generujemy
              rekomendacje, tworzymy playlisty dopasowane do nastroju lub
              aktywności, a także podpowiadamy muzykę, która może zaskoczyć –
              ale wciąż wpisuje się w osobisty styl.
            </p>
            <h3>
              <i className="fa-solid fa-broom"></i> Efektywne zarządzanie
              biblioteką
            </h3>
            <p>
              Spotify oferuje podstawowe narzędzia porządkowania, jednak przy
              dużej liczbie utworów i playlist stają się one niewystarczające.
              SpotiTools umożliwia szybkie filtrowanie, czyszczenie zdublowanych
              piosenek, łączenie podobnych list odtwarzania i odnajdywanie
              zapomnianych muzycznych perełek.
            </p>
            <h3>
              <i className="fa-solid fa-chart-simple"></i> Zaawansowana
              analityka
            </h3>
            <p>
              Oferujemy wizualizacje i statystyki odsłuchów, trendy słuchania na
              przestrzeni czasu, porównania między gatunkami i artystami. Dla
              bardziej zaawansowanych użytkowników – również eksport danych i
              podsumowania roczne.
            </p>
            <h3>
              <i className="fa-solid fa-download"></i> Łatwa obsługa – zero
              instalacji
            </h3>
            <p>
              Aplikacja działa całkowicie w przeglądarce. Nie wymaga
              instalowania żadnego oprogramowania ani wtyczek. Wystarczy jedno
              kliknięcie, aby połączyć swoje konto Spotify i rozpocząć
              korzystanie z narzędzi.
            </p>
            <h3>
              <i className="fa-solid fa-shield"></i> Bezpieczna i zgodna z
              polityką Spotify
            </h3>
            <p>
              SpotiTools korzysta z oficjalnego API Spotify i przestrzega
              wszystkich wymogów polityki prywatności. Dane użytkowników są
              chronione, a autoryzacja odbywa się w sposób szyfrowany i
              bezpieczny.
            </p>
            <h3>
              <i className="fa-solid fa-eye"></i> Estetyczny, intuicyjny
              interfejs
            </h3>
            <p>
              Dzięki nowoczesnym technologiom frontendowym (React, TailwindCSS),
              nasz interfejs jest nie tylko funkcjonalny, ale i przyjemny dla
              oka. Dostosowanie trybu ciemnego/jasnego, opcje nawigacji,
              wyszukiwarka i integracja odtwarzacza – wszystko to składa się na
              komfort użytkowania.
            </p>
            <h3>
              <i className="fa-solid fa-rocket"></i> Stały rozwój i aktualizacje
            </h3>
            <p>
              SpotiTools to projekt aktywnie rozwijany. Na podstawie opinii
              użytkowników wprowadzamy nowe funkcje, rozszerzamy analizę, a w
              planach mamy również integracje z innymi platformami muzycznymi i
              rozszerzenia społecznościowe.
            </p>
            <p>
              Wybierając SpotiTools, wybierasz świadome słuchanie. To narzędzie,
              które pozwala odkryć na nowo własną bibliotekę muzyczną, lepiej
              zrozumieć swój gust i słuchać dokładnie tego, czego w danym
              momencie potrzebujesz.
            </p>
          </div>
        </section>

        <section id="dla-kogo" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-users"></i> Dla kogo tworzymy
              SpotiTools?
            </h2>
            <p>
              SpotiTools powstało z myślą o wszystkich, którzy chcą mieć większą
              kontrolę nad swoim doświadczeniem muzycznym w Spotify. Niezależnie
              od tego, czy jesteś okazjonalnym słuchaczem, audiofilem, twórcą
              treści czy specjalistą od marketingu muzycznego – SpotiTools
              zapewnia wartość dostosowaną do Twoich potrzeb.
            </p>
            <h3>
              <i className="fa-solid fa-user"></i> Dla indywidualnych
              użytkowników Spotify
            </h3>
            <p>
              Jeśli słuchasz muzyki codziennie, masz setki playlist i chcesz
              lepiej zrozumieć swoje preferencje – SpotiTools pomoże Ci to
              wszystko uporządkować i odkryć nowe aspekty Twojego gustu
              muzycznego.
            </p>
            <h3>
              <i className="fa-solid fa-music"></i> Dla pasjonatów i
              kolekcjonerów muzyki
            </h3>
            <p>
              Masz tysiące utworów zapisanych na liście „Polubione”? Tworzysz
              tematyczne playlisty i chcesz uniknąć duplikatów lub lepiej je
              zorganizować? Nasze narzędzia dają Ci precyzyjną kontrolę nad
              Twoją kolekcją muzyczną.
            </p>
            <h3>
              <i className="fa-solid fa-chart-area"></i> Dla analityków i osób
              zainteresowanych danymi
            </h3>
            <p>
              Interesuje Cię, jak zmieniają się Twoje nawyki słuchania na
              przestrzeni miesięcy lub lat? Chcesz porównać statystyki
              gatunkowe, częstotliwość odtwarzania lub dowiedzieć się, kiedy
              masz swoje „muzyczne szczyty”? SpotiTools dostarcza czytelnych
              wykresów i zaawansowanych metryk.
            </p>
            <h3>
              <i className="fa-solid fa-video"></i> Dla twórców treści i
              influencerów
            </h3>
            <p>
              Tworzysz playlisty dla swojej społeczności? Chcesz lepiej
              zrozumieć, co może przypaść do gustu Twoim odbiorcom? Dzięki
              analizie i personalizacji z SpotiTools łatwiej dobierzesz muzykę
              do kontekstu Twoich treści.
            </p>
            <h3>
              <i className="fa-solid fa-headphones-simple"></i> Dla DJ-ów i
              kuratorów playlist
            </h3>
            <p>
              Potrzebujesz szybkiego dostępu do danych o BPM, tonacji czy
              nastroju utworu? SpotiTools umożliwia dokładne filtrowanie i
              eksportowanie informacji przydatnych do miksowania i planowania
              setów.
            </p>
            <h3>
              <i className="fa-solid fa-building"></i> Dla firm i zespołów
              kreatywnych
            </h3>
            <p>
              Wykorzystujesz muzykę w tle dla biura, sklepu lub wydarzenia?
              Dzięki rekomendacjom kontekstowym możesz łatwiej dobrać playlisty
              do pory dnia, typu klienta czy charakteru przestrzeni.
            </p>
            <p>
              SpotiTools to uniwersalne rozwiązanie, które dopasowuje się do
              różnych stylów życia i potrzeb. Niezależnie od tego, czy słuchasz
              dla przyjemności, pracy, inspiracji czy nauki – z nami słuchasz
              mądrzej.
            </p>
          </div>
        </section>

        <section id="potencjalna-rozbudowa" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-seedling"></i> Potencjalna rozbudowa
            </h2>
            <p>
              SpotiTools to projekt zaprojektowany z myślą o długoterminowym
              rozwoju. Naszym celem jest nie tylko dostarczenie zaawansowanego
              zestawu narzędzi do analizy i organizacji muzyki, ale również
              ciągłe poszerzanie jego możliwości, by sprostać zmieniającym się
              potrzebom użytkowników i rynku.
            </p>
            <h3>
              <i className="fa-solid fa-chart-line"></i> Rozszerzenie analityki
            </h3>
            <p>
              Planujemy wdrożenie jeszcze bardziej zaawansowanych narzędzi
              analitycznych – takich jak porównania sezonowe, analiza trendów w
              czasie, prognozowanie preferencji muzycznych czy wizualizacja
              ewolucji gustu użytkownika. Integracja z AI pozwoli na
              inteligentne sugestie działań na podstawie wzorców słuchania.
            </p>
            <h3>
              <i className="fa-solid fa-users"></i> Integracja społecznościowa
            </h3>
            <p>
              W przyszłości chcemy umożliwić użytkownikom dzielenie się swoimi
              playlistami, wynikami analiz i rekomendacjami w ramach
              społeczności SpotiTools. Rozważamy wprowadzenie funkcji profilu,
              obserwowania innych użytkowników oraz rankingów i playlist
              tworzonych wspólnie.
            </p>
            <h3>
              <i className="fa-solid fa-robot"></i> Automatyzacja i działania
              masowe
            </h3>
            <p>
              Kolejnym etapem rozwoju będzie możliwość automatycznego
              zarządzania playlistami – usuwanie duplikatów, porządkowanie
              według kryteriów (tempo, gatunek, nastroje), grupowanie podobnych
              utworów czy aktualizacja playlist na podstawie określonych reguł
              (np. „dodaj utwory słuchane najczęściej w tym miesiącu”).
            </p>
            <h3>
              <i className="fa-solid fa-file-export"></i> Eksport danych i
              integracje z innymi usługami
            </h3>
            <p>
              Umożliwimy eksport danych w różnych formatach (CSV, JSON, PDF), by
              ułatwić dalszą analizę lub wykorzystanie poza platformą.
              Dodatkowo, planujemy opcjonalne integracje z usługami takimi jak
              Apple Music, YouTube Music czy Last.fm – by jeszcze lepiej
              połączyć muzyczne światy użytkowników.
            </p>
            <h3>
              <i className="fa-solid fa-brain"></i> Personalizacja z
              wykorzystaniem AI
            </h3>
            <p>
              SpotiTools może w przyszłości analizować dane z wielu źródeł i
              proponować automatycznie generowane playlisty na podstawie
              nastroju, pogody, aktywności fizycznej lub kalendarza użytkownika.
              To pozwoli przenieść doświadczenie muzyczne na zupełnie nowy
              poziom.
            </p>
            <h3>
              <i className="fa-solid fa-language"></i> Wersje językowe i
              dostępność globalna
            </h3>
            <p>
              Aby dotrzeć do szerszego grona użytkowników, planujemy
              wprowadzenie wersji wielojęzycznej oraz dostosowanie funkcji do
              różnych regionów. Nasz interfejs zostanie zoptymalizowany również
              pod kątem dostępności (WCAG), by każdy mógł w pełni korzystać z
              aplikacji.
            </p>
            <p>
              SpotiTools to nie tylko aplikacja – to dynamicznie rozwijająca się
              platforma, która rośnie razem z użytkownikami. Każda nowa
              funkcjonalność będzie odpowiedzią na realne potrzeby i sugestie
              naszej społeczności.
            </p>
          </div>
        </section>

        <section id="status-projektu" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-circle-check"></i> Status projektu
            </h2>
            <p>
              Projekt SpotiTools znajduje się obecnie w fazie
              koncepcyjno-analitycznej, której celem jest możliwie najlepsze
              zrozumienie potrzeb użytkowników oraz ukształtowanie kluczowych
              założeń funkcjonalnych i technologicznych aplikacji. To etap,
              który zapewnia solidne fundamenty dla dalszego rozwoju.
            </p>
            <h3>
              <i className="fa-solid fa-comments"></i> Analiza potrzeb i opinii
            </h3>
            <p>
              Trwają rozmowy z potencjalnymi użytkownikami oraz badania rynkowe,
              które mają na celu wyłonienie rzeczywistych problemów związanych z
              codziennym korzystaniem ze Spotify. Ich wyniki pozwolą
              zdefiniować, które funkcje SpotiTools będą miały największą
              wartość dodaną.
            </p>
            <h3>
              <i className="fa-solid fa-pencil-ruler"></i> Projektowanie i
              planowanie funkcji
            </h3>
            <p>
              Równolegle opracowywany jest szczegółowy projekt interfejsu
              użytkownika oraz struktura aplikacji. Powstaje makieta z opisem
              działania poszczególnych modułów oraz architektura informacji,
              która będzie podstawą dla dalszych etapów implementacji.
            </p>
            <h3>
              <i className="fa-solid fa-magnifying-glass-chart"></i> Weryfikacja
              możliwości technicznych
            </h3>
            <p>
              Prowadzone są testy i analizy dokumentacji Spotify Web API w celu
              weryfikacji zakresu danych, jakie można pozyskać oraz operacji,
              które można wykonać z poziomu aplikacji. To pozwoli realistycznie
              ocenić, jak szerokie i zautomatyzowane mogą być planowane funkcje.
            </p>
            <h3>
              <i className="fa-solid fa-laptop-code"></i> Wybór technologii
            </h3>
            <p>
              SpotiTools zostanie zbudowane przy użyciu nowoczesnych technologii
              webowych – w tym React.js do interfejsu użytkownika oraz Node.js
              na backendzie. Obecnie trwają testy narzędzi oraz konfiguracja
              środowiska developerskiego.
            </p>
            <h3>
              <i className="fa-solid fa-chalkboard-user"></i> Prezentacja
              projektu
            </h3>
            <p>
              Równolegle przygotowywana jest kompleksowa prezentacja wizji
              produktu – zarówno w formie wizualnej, jak i dokumentacyjnej. To
              obecny etap, w którym tworzony jest przekrojowy opis funkcjonalny
              i koncepcyjny (ten, który właśnie przeglądasz).
            </p>
            <h3>
              <i className="fa-solid fa-flask"></i> Kolejny krok: budowa wersji
              beta
            </h3>
            <p>
              Po zakończeniu fazy koncepcyjnej rozpocznie się prace nad wersją
              beta aplikacji. Zostanie ona udostępniona w ograniczonej grupie
              użytkowników testowych, by zebrać opinie, wykryć potencjalne błędy
              i przeprowadzić pierwsze testy UX/UI oraz wydajności.
            </p>
            <p>
              SpotiTools rośnie z każdym dniem, a obecna faza planowania to
              kluczowy krok ku stworzeniu solidnego i dopracowanego narzędzia,
              które zrewolucjonizuje sposób, w jaki korzystamy ze Spotify.
            </p>
          </div>
        </section>

        <section id="faq" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-circle-question"></i> Najczęściej
              Zadawane Pytania (FAQ)
            </h2>
            <div className="faq-item">
              <h3>
                <i className="fa-solid fa-user-shield"></i> Czy SpotiTools ma
                dostęp do moich danych?
              </h3>
              <p>
                Nie przechowujemy żadnych danych użytkowników. SpotiTools
                korzysta z oficjalnego API Spotify, uzyskując tylko niezbędne
                uprawnienia tymczasowo – wyłącznie w celu analizy i wyświetlenia
                danych w Twojej przeglądarce.
              </p>
            </div>
            <div className="faq-item">
              <h3>Czy muszę coś instalować?</h3>
              <p>
                Nie. SpotiTools działa całkowicie online w przeglądarce.
                Wystarczy zalogować się poprzez konto Spotify i od razu
                korzystać z funkcji aplikacji.
              </p>
            </div>
            <div className="faq-item">
              <h3>Czy SpotiTools wpłynie na moje konto Spotify?</h3>
              <p>
                Nie. Aplikacja nie zmienia żadnych danych ani ustawień konta.
                Wszelkie działania są wykonywane lokalnie lub za pomocą
                tymczasowych tokenów dostępu.
              </p>
            </div>
            <div className="faq-item">
              <h3>Czy aplikacja działa na telefonie?</h3>
              <p>
                Tak. Interfejs SpotiTools jest responsywny i dostosowany do
                urządzeń mobilnych, choć pełna funkcjonalność najlepiej sprawdza
                się na większych ekranach.
              </p>
            </div>
            <div className="faq-item">
              <h3>Czy aplikacja jest już gotowa?</h3>
              <p>
                Obecnie projekt znajduje się w fazie przygotowawczej. Trwają
                testy, projektowanie interfejsu i zbieranie opinii. Wersja beta
                będzie dostępna wkrótce.
              </p>
            </div>
            <div className="faq-item">
              <h3>Jak mogę zgłosić sugestię lub błąd?</h3>
              <p>
                Skorzystaj z{" "}
                <a className="link" href="#kontakt">
                  formularza kontaktowego
                </a>{" "}
                w sekcji Kontakt lub napisz na adres{" "}
                <a className="link" href="mailto:kontakt@spotitools.app">
                  kontakt@spotitools.app
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section id="kontakt" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-envelope"></i> Kontakt / Feedback /
              Wsparcie
            </h2>
            <p>
              Masz pytania, pomysły, chcesz lepiej zrozumieć, jak działa
              SpotiTools? A może chciałbyś zgłosić błąd lub podzielić się swoją
              opinią? Jesteśmy tu, aby Ci pomóc!
            </p>
            <h3>
              <i className="fa-solid fa-paper-plane"></i> Skontaktuj się z nami
            </h3>
            <p>
              Możesz wysłać wiadomość e-mail na adres:{" "}
              <a className="link" href="mailto:kontakt@spotitools.pl">
                kontakt@spotitools.pl
              </a>{" "}
              lub skorzystać z formularza kontaktowego, który pojawi się w
              wersji beta aplikacji.
            </p>
            <h3>
              <i className="fa-solid fa-comment-dots"></i> Zostaw swoją opinię
            </h3>
            <p>
              Wszelkie uwagi dotyczące działania aplikacji, brakujących funkcji
              czy ergonomii interfejsu możesz przesyłać bezpośrednio lub poprzez
              nasze kanały społecznościowe (które zostaną uruchomione po
              premierze wersji testowej).
            </p>
            <h3>
              <i className="fa-solid fa-mug-hot"></i> Wesprzyj rozwój projektu
            </h3>
            <p>
              SpotiTools to inicjatywa tworzona oddolnie, bez finansowania
              zewnętrznego. Jeśli chcesz przyczynić się do szybszego rozwoju
              aplikacji i wspomóc twórcę, możesz postawić wirtualną kawę lub
              dokonać dobrowolnej donacji:
            </p>
            <p>
              Buy Me a Coffee:{" "}
              <a
                className="link"
                href="https://www.buymeacoffee.com/spotitools"
                target="_blank"
              >
                buymeacoffee.com/spotitools
              </a>
            </p>
            <p>
              PayPal:{" "}
              <a
                className="link"
                href="https://paypal.me/spotitools"
                target="_blank"
              >
                paypal.me/spotitools
              </a>
            </p>
            <p>
              Każde wsparcie, niezależnie od formy, to dla nas ogromna motywacja
              i sygnał, że projekt ma sens. Dziękujemy!
            </p>
          </div>
        </section>

        <section id="dolacz" className={styles.sectionHome}>
          <div className={styles.content}>
            <h2>
              <i className="fa-solid fa-user-plus"></i> Dołącz już teraz!
            </h2>
            <p>
              Zanurz się w nowy wymiar zarządzania swoją muzyką! SpotiTools to
              narzędzie stworzone z myślą o Tobie – testuj, eksperymentuj,
              odkrywaj nowe możliwości. Wersja beta aplikacji pojawi się już
              wkrótce, a Ty możesz być jednym z pierwszych użytkowników, którzy
              ją przetestują.
            </p>
            <p>
              Chcesz sprawdzić, jak to działa? Uruchom wersję demonstracyjną i
              przekonaj się, co SpotiTools może zrobić dla Twojego konta
              Spotify.
            </p>
            <a href="./login" role="button">
              Uruchom Demo
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <Particles isActive={particlesOn} />
    </>
  );
}

/*
Sprawdzić zawartość sekcji
Zoptymalizować kod CSS
Naprawić linki
*/
