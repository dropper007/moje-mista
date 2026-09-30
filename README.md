# Moje místa

Jednoduchý osobní webový rozcestník v češtině. Responzivní karty, kategorie Pošta / Obecné / Hry / ToDo a hledání bez diakritiky. Čisté HTML, CSS a JavaScript bez frameworků a instalace závislostí.

## Spuštění

Otevři `index.html` v prohlížeči. Ten přesměruje na web v `dist/`. Případně spusť `node preview.cjs` a otevři adresu, kterou vypíše.

## Úprava odkazů

Všechny položky jsou v souboru [`dist/links.js`](dist/links.js). Každá obsahuje název, URL a kategorii; volitelně poznámku a barevnou značku. YouTube odkazy dostanou automaticky ikonu přehrávání. ToDo slouží jako seznam odkazů na rozdělané věci.

Podrobný návod a aktuální seznam: [PREHLED.md](PREHLED.md).

## GitHub Pages

Repozitář je připravený pro publikování bez sestavování:

1. V repozitáři otevři **Settings → Pages**.
2. Vyber **Deploy from a branch**, větev **main**, složku **/ (root)** a ulož.
3. Výslednou adresu zobrazí GitHub v nastavení Pages.

Kořenový `index.html` přesměruje do `dist/`; relativní adresy fungují i na projektové adrese GitHub Pages. Soubor `.nojekyll` vypíná zpracování Jekyllem. Samotný push web automaticky nepublikuje, dokud Pages nezapneš.

## Soukromí

Veřejný repozitář i případný web zpřístupní seznam odkazů komukoli. Do `links.js` nepatří přihlašovací údaje, neveřejné přístupové odkazy ani URL s tokeny. `.gitignore` vylučuje soubory prostředí, klíče, lokální nastavení a archivy; nenahrazuje kontrolu obsahu před commitem.
