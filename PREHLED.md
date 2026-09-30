# Moje místa – první verze

Aktuální výběr podle zadání:

| Kategorie | Název | Adresa |
| --- | --- | --- |
| Pošta | Seznam Email | https://email.seznam.cz/ |
| Pošta | Open Webmail | https://mail.dropper.cz/ |
| Obecné | IDOS | https://idos.cz/ |
| Obecné | Seznam | https://www.seznam.cz/ |
| Obecné | iDNES | https://www.idnes.cz/ |
| Hry | Chunkbase – Seed Map | https://www.chunkbase.com/apps/seed-map |
| ToDo | Zatím prázdné | Sem přijdou odkazy na rozdělané věci. |

Ostatní položky původního portálu jsou vynechány. U Chunkbase je použit cíl dodaného odkazu, nikoli jeho zkrácený popisek. U Open Webmail je použito HTTPS; přihlášení nebylo ověřováno.

## Otevření

Otevři `dist/index.html` v prohlížeči. Stránka funguje přímo ze souboru, bez instalace a bez serveru. Pro otevření cílových webů je samozřejmě potřeba internet.

## Ruční úpravy

Otevři `dist/links.js` v textovém editoru. Každý řádek uvnitř seznamu představuje jednu kartu. Zkopíruj řádek, změň název (`name`), adresu (`url`) a kategorii (`category`). Na konci ponech čárku. Pro odstranění karty smaž celý její řádek.

Kategorie: `mail` = Pošta, `info` = Obecné, `games` = Hry, `todo` = ToDo. Kategorii není potřeba programovat; Hry i ToDo jsou již připravené.

YouTube video přidej se svou konkrétní adresou a kategorií `games`. Automaticky dostane červenou ikonu přehrávání. ToDo položce dej kategorii `todo`, případně krátkou poznámku `note` o tom, co zbývá udělat. Hotovou položku smaž ze seznamu. V souboru jsou ukázkové řádky, které se na webu nezobrazují.

Uvozovku uvnitř textu zapiš jako `\"`. Po uložení obnov stránku v prohlížeči. V první verzi se odkazy upravují v tomto jednom souboru, nikoli formulářem na webu. Data se neukládají do úložiště prohlížeče.

## Ovládání

- Kategorie filtrují zobrazené karty.
- Hledání pracuje s názvem, adresou, kategorií a poznámkou, bez ohledu na diakritiku.
- Klávesa `/` přesune kurzor do hledání, `Escape` hledání vymaže.
- Odkazy se otevřou v nové kartě.

Čisté HTML, CSS a JavaScript. Bez frameworků, externích fontů, sledování a načítání ikon z cizích serverů. Ikony jsou lokální barevné značky, nikoli stažená loga.

Návod k publikování přes GitHub Pages je v README.md. Samotné nahrání zdrojů do repozitáře nezapíná GitHub Pages.
