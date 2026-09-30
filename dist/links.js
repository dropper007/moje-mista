// Tady upravuj odkazy. Každý řádek = jedna karta.
// category: "mail" (Pošta), "info" (Obecné), "games" (Hry), "todo" (ToDo).
// Povinné: name, url, category. Volitelné: note, icon, color, tint.
// Položku odebereš smazáním celého řádku. Po úpravě soubor ulož a obnov stránku.
window.PORTAL_LINKS = [
  { name: "Seznam Email", url: "https://email.seznam.cz/", category: "mail", icon: "S", color: "#ce2335", tint: "#ffedf0" },
  { name: "Open Webmail", url: "https://mail.dropper.cz/", category: "mail", icon: "@", color: "#2254b2", tint: "#eaf1ff" },
  { name: "IDOS", url: "https://idos.cz/", category: "info", icon: "ID", color: "#244cc0", tint: "#eaf0ff", note: "Jízdní řády" },
  { name: "Seznam", url: "https://www.seznam.cz/", category: "info", icon: "S", color: "#ce2335", tint: "#ffedf0" },
  { name: "iDNES", url: "https://www.idnes.cz/", category: "info", icon: "iD", color: "#252d3c", tint: "#edf0f5", note: "Zprávy" },
  { name: "Chunkbase", url: "https://www.chunkbase.com/apps/seed-map", category: "games", icon: "▦", note: "Minecraft · Seed Map" },

  // Další odkaz přidáš zkopírováním jednoho řádku a změnou názvu a adresy.
  // Například (odstraň úvodní // a vlož skutečnou adresu):
  // { name: "Název videa", url: "https://www.youtube.com/watch?v=SEM_VLOZ_ID", category: "games" },
  // { name: "Co chci dokončit", url: "https://example.com/", category: "todo", note: "Co zbývá udělat" },
];
