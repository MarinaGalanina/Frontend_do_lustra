# Frontend dla lustra
![316059071_517506233431281_1823421312507901978_n](https://user-images.githubusercontent.com/100734139/223771703-36d1f466-dea7-4219-92c5-b6d9382e1151.png)
## Installation and configuration
```bash
lxterminal -e 'cd ...gui && npm install ; npm start ; sleep infinity' &
lxterminal -e 'cd .../express-server && npm install ; node serwer.js ; sleep infinity' &
lxterminal -e 'cd .../express-server && pip3 install pygame ; python3 music.py ; sleep infinity' &
lxterminal -e 'python3 '.../new_gl.py' ; bash'
```
## REACT
Na początku projekt reaktowy został stworzony poprzez komendę:
npx create-react-app my-app
która, żeby zadziałać, potrzebuje zainstalowanego Node.js’a, open source’owego środowiska pozwalającego na hostowanie serwerów na urządzeniu. Node.js został zainstalowany.
* ### Główny Komponent, root aplikacji (index.js)
Jest to plik w którym można dodać wszystkie zależności, które wprowadzają wrappery, czyli elementy oddziałowywujące na wszystkie komponenty w środku nich. Nie ma tu żadnych dodatkowych wrapperów poza standardowym React.Strict.
Root w tym kontekście oznacza komponent, w którym są zagnieżdżone wszystkie inne komponenty aplikacji.

* ### Komponent zawierający pod-komponenty (App.js)
App.js to komponent, który zwraca cały kod html aplikacji.
Są w nim zaimportowane wszystkie pod-komponenty i zdecydowana większość dynamicznej logiki aplikacji, tak zwanych State Hook’ów, czyli React’owego odpowiednika globalnych (dzięki temu, że App.js importuje wszystkie inne pod komponenty) dynamicznych zmiennych. Oprócz tego wykonuje on co dwie sekundy zapytanie do API serwera Express.js, o którym można przeczytać w punkcie 3.2. , dzięki czemu jest przechowywana w pamięci podręcznej przeglądarki informacja o obecnym, rozpoznanym słowie, ale tylko jeżeli się zmieniło względem słowa rozpoznanego 2 sekundy temu. To pozwoliło na wprowadzenie logiki, która wywołuje funkcje mające wpływ na sposób wyświetlania pod-komponentów wtedy, kiedy zostanie zmienione rozpoznane słowo i jest ono jednym z słów pasujących do zdefiniowanych wcześniej rozpoznawalnych ekspresji. Wszystkie pod-komponenty reagują na chociaż jedną komendę głosową, a sam App.js posiada komponent

* ### Pod-Komponenty
  + #### Godzina (HourDiv)
    Komponent, który renderuje obecną godzinę, minuty i sekundy. Te 3 wartości odświeżają się co sekundę i bazują na czasie systemowym lustra. Komponent działa w 100% offline.
  + #### Element Czarnego Tła (BlackScreenDiv)(część kodu App.js)
    Element, który znajduje się bezpośrednio w kodzie App.js, odpowiadający za wyświetlenie czarnego tła nad wszystkimi innymi komponentami razem z Instrukcją obsługi lustra komendami głosowymi. Wyświetla się przy pierwszym uruchomieniu lustra. Pojawia się i znika przy użyciu odpowiednich komend głosowych 

## Node.js  Express Serwer
Serwer, który ma na celu umożliwienie komunikacji między aplikacją react’ową, a skryptem Pythonowym będącym częścią modelu rozpoznawania słów, który zapisuje słowa do pliku tekstowego.
* Skrypt włączający serwer (serwer.js)
* Plik z rozpoznanym przez skrypt python’owy słowem
## Komendy głosowe wywołujące funkcje GUI
```
"pokaż wszystko LUB hejka => Pokaż Wszystko i Ukryj Polecenia",
          "ukryj wszystko => Ukryj Wszystko i Wyświetl Polecenia",
          "pokaż pogodę => Pokaż Okienko Pogody",
          "ukryj pogodę => Ukryj Okienko Pogody",
          "pokaż godzinę => Pokaż Okienko Godziny",
          "ukryj godzinę => Ukryj Okienko Godziny",
          "pokaż muzykę => Pokaż Okienko Muzyki",
          "ukryj muzykę => Ukryj Okienko Muzyki",
          "zatrzymaj muzykę => Zatrzymaj Muzykę",
          "wznów muzykę => Wznów Muzykę",
          "pokaż kalendarz => Pokaż Okienko Kalendarza",
          "ukryj kalendarz => Ukryj Okienko Kalendarza",
          "pokaż komplement => Pokaż Okienko Komplementów",
          "ukryj komplement => Ukryj Okienko Komplementów",
          "pokaż żart => Pokaż Okienko Żartów",
          "ukryj żart => Ukryj Okienko Żartów",
          "ścisz muzykę LUB jeszcze ścisz muzykę => Mów Komendy Na Przemian Aby Ściszyć Muzykę",
          "podgłośnij muzykę LUB jeszcze podgłośnij muzykę => Mów Komendy Na Przemian Aby Podgłośnić Muzykę"
```
