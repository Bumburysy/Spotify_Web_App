import { UserAnalytics } from "./UserAnalytics";

export default function Analytics() {
  const { data, loading, error } = UserAnalytics();

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Tutaj trafią komponenty</h3>
    </div>
  );
}

/*
To do list:

W miarę prost do implementacji:
-Top utwór (najczęściej słuchany + top 5)
-Top artysta (najczęściej słuchany + top 5)
-Top gatunek (najczęściej słuchany + top 5)

-Liczba słuchanych gatunków
-Okresy słuchania
-Ostatnio słuchane 50
-Liczba sesji
-Średni czas sesji

-Analiza energii i nastroju
-Heatmapa godzin odsłuchań
-Podział dnia, sezonowość słuchania
-Porównania okresów (wzrost/spadek)
-Twój „muzyczny fingerprint”
-Energy/mood scatter plot

Wymaga archiwizacji danych ale da się to zrobić:
-Zapis danych do pliku lokalnego lub w bazie danych
-Wykres gatunków w czasie – jak zmieniają się preferencje
-Liczba nowych utworów / artystów poznanych w okresie
-Porównanie z poprzednim miesiącem – wzrost/spadek odsłuchań
-Dzień rekordów – najwięcej odsłuchań w historii
-Analiza zmian gustu w czasie

Kłopotliwa implementacja raczej nie zostanie zaimplementowana:
-Najczęściej pomijane utwory
-Network graph pokazujący powiązania między artystami, których słuchasz
-Word cloud z tytułów utworów lub nazw artystów
-Porównanie z trendami globalnymi – jak bardzo różnisz się od przeciętnego użytkownika Spotify

Robimy to na zasadzie:
-Logujemy się przez konto Spotify - endpoint do logowania w backend dostajemy token
-Mając token komponenty z frontu wysyłają zapytanie do endpointów backendu, backend pobiera dane z API Spotify, przygotowuje je i wysyła gotowe dane do wyświetlenia w froncie
-Frontend wyświetla dane w odpowiednich komponentach

-Trzeba przerobić na token nie w localstorage tylko w backendzie a front dostaje tylko sesion id

-Dla danego komponentu chyba najlepiej zrobić jeden lub kilka endpointów zwracających kompletne dane? Tak to jest git
-Podzielić w backend endpointy na oddzielne pliki? Tak to ma sens

-Endpoint do pobrania danych użytkownika dla navbara aby wyświetlił awatar nick itp

UX:
Komponent MVP:
-Najczęściej słuchany utwór - nazwa, autor, rok wydania, ikona itp
-Najczęściej słuchany wykonawca
-Najczęściej słuchany gatunek
Komponent Top 5:
-Top 5 utworów
-Top 5 wykonawców
-Top 5 gatunków
Komponent historii:
-Ostatnio słuchane utwory 50
Komponent statystyk sesji:
-Liczba sesji
-Średni czas trwania sesji
-Okresy słuchania
-Liczba słuchanych gatunków
Komponent analizy preferencji:
-Analiza energii i nastroju słuchanej muzyki
-Energy/mood scatter plot
-Muzyczny fingerprint
*/
