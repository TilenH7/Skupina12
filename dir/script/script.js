document.addEventListener("DOMContentLoaded", () => {

    const vrni = document.getElementById('Return');
    const crni = document.getElementById('DarkMode');

    if(vrni){
        vrni.addEventListener('click', function(event){
            window.location.href = "../public/index.html"
        });
    };
    
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        crni.textContent = "Svetli način"; // Update button text
    } else {
        crni.textContent = "Temni način"; // Default to light mode
    }

    // Add event listener for toggling dark mode
    crni.addEventListener('click', () => {
        document.body.classList.toggle("dark-mode");




        // Update localStorage and button text based on the current state
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            crni.textContent = "Svetli način";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            crni.textContent = "Temni način";
        }

    });


    const navigateTo = (id, target) => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', () => {
                window.location.href = target;
            });
        }
    };

    navigateTo('piskotLINK', '../public/CookieClicker.html');
    navigateTo('puskaLINK', '../public/puska.html');
    navigateTo('slikeLINK', '../public/slike.html');
    navigateTo('bombometLINK', '../public/bombomet.html');
});


const translations = {
    sl: {
      "title-index": "Orožje slovenske vojske",
      "dark-mode" : "Temni način",
      "cookie-clicker" : "Kliker keksov",
      "slovenska-vojska" : "Slovenska vojska (SV) uporablja širok spekter orožja, prilagojenega njenim potrebam kot manjša, sodobna in visoko mobilna vojaška sila. Orožje, ki ga uporablja SV, zajema tako osebno oborožitev vojakov kot tudi težjo tehniko za izvajanje nalog v različnih operativnih okoljih. Tukaj so nekatere vrste orožja, ki jih uporablja Slovenska vojska:",
      "poglej-slike" : "Poglej slike",
      "ostrostrelska-puska" : "Ostrostrelska puška – PGM Precision Hecate",
      "avto-bombomet" : "Avtomatski bombomet – Heckler & Koch GMG",
      "read-more" : "Preberi več!",
      "go-back" : "Pojdi nazaj",
      "osnovni-podatki": "Osnovni podatki",
      "kaliberP": "Kaliber: 12,7 x 99 mm",
      "strelivoP": "Strelivo: 12,7 mm, ostrostrelno",
      "dometP": "Učinkovit domet: 2.200 m",
      "okvirP": "Okvir: 7 nabojev",
      "dolzinaP": "Dolžina: 1.439 mm",
      "masaP": "Masa: 15.300 g",
      "kaliberAB": "Kaliber: 30 x 53 mm",
      "strelivoAB": "Strelivo: 40 mm, različno tipi",
      "dometAB": "Učinkovit domet: 1.500 m",
      "hitrost-streljanjaAB": "Hitrost streljanja: 350 bomb/minuto",
      "dolzinaAB": "Dolžina: 1.180 mm",
      "masaAB": "Masa: 60.6 kg",
      "namen" : "Namen",
      "namenBesediloP" : "Ostrostrelna puška je orožje ravni čete. Z novim kalibrom 8,6 mm zapolnjuje pomembno praznino med lahkim kalibrom 7,62 mm in težkim kalibrom 12,7 mm.",
      "delovanje" : "Delovanje",
      "delovanjeBesediloP" : "Konstrukcijsko gre za enostrelno repetirno orožje (princip obratnočepnega zaklepa). Kopito je preklopno in nastavljivo. Orožja SV so opremljena z optično namerilno napravo proizvajalca Schmidt & Bender in nočno optiko proizvajalca Simrad.",
      "namenBesediloAB" : "Avtomatski bombomet GMG je večnamensko orožje za podporo, običajno nameščeno na tronožniku ali drugih nosilcih (vozila, plovila). Namenjen je uničevanju lahko oklepljenih in neoklepljenih zemeljskih ciljev s neposrednim in posrednim ognjem do razdalje 2000m.",
      "delovanjeBesediloAB" : "Avtomatski bombomet GMG je avtomatsko orožje z masivnim inercijskim zaklepom. Strelja iz odprtega zaklepa.  Polni se z leve ali desne strani s strelivom, povezanim v razpadni nabojnik po 32 nabojev. Z orožjem upravljata dva člana posadke. Strelja lahko posamično ali rafalno.",
      "piskotJS" : "Piškot",
      "domaca-stran" : "Domača stran",
    },
    en: {
      "title-index": "Weapons of the Slovenian Army",
      "dark-mode" : "Dark mode",
      "cookie-clicker" : "Cookie clicker",
      "slovenska-vojska" : "The Slovenian Armed Forces (SAF) use a wide range of weapons tailored to their needs as a small, modern and highly mobile military force. The weapons used by the SAF include both personal armaments for soldiers and heavier equipment for the performance of tasks in different operational environments. Here are some of the weapons used by the SAF:",
      "poglej-slike" : "View images",
      "ostrostrelska-puska" : "Sniper rifle – PGM Precision Hecate",
      "avto-bombomet" : "Automatic Bomber - Heckler & Koch GMG",
      "read-more" : "Read more!",
      "go-back" : "Go back",
      "osnovni-podatki": "Basic Information",  // English translation
      "kaliberP": "Caliber: 12.7 x 99 mm",
      "strelivoP": "Ammunition: 12.7 mm, sniper",
      "dometP": "Effective range: 2,200 m",
      "okvirP": "Magazine: 7 rounds",
      "dolzinaP": "Length: 1,439 mm",
      "masaP": "Weight: 15,300 g",
      "kaliberAB": "Caliber: 30 x 53 mm",
      "strelivoAB": "Ammunition: 40 mm, various types",
      "dometAB": "Effective range: 1,500 m",
      "hitrost-streljanjaAB": "Rate of fire: 350 grenades per minute",
      "dolzinaAB": "Length: 1,180 mm",
      "masaAB": "Weight: 60.6 kg",
      "namen" : "Purpose",
      "namenBesediloP" : "A sniper rifle is a company-level weapon. With the new 8.6 mm calibre, it fills an important gap between the light 7.62 mm and the heavy 12.7 mm calibre.",
      "delovanje" : "Operation",
      "delovanjeBesediloP" : "Structurally, it is a single-shot bolt-action weapon (reverse bolt-lock principle). The stock is foldable and adjustable. The Slovenian Army's rifles are equipped with an optical sight manufactured by Schmidt & Bender and night optics manufactured by Simrad.",
      "namenBesediloAB" : "The GMG automatic grenade launcher is a multifunctional support weapon, usually mounted on a tripod or other mounts (vehicles, vessels). It is intended for destroying lightly armored and unarmored ground targets with direct and indirect fire up to a distance of 2,000 meters.",
      "delovanjeBesediloAB" : "The GMG automatic grenade launcher is an automatic weapon with a massive inertial bolt-lock. It fires from an open bolt. It can be loaded from the left or right side with ammunition linked in a disintegrating belt containing 32 rounds. The weapon is operated by a two-member crew. It can fire both single shots and bursts.",
      "piskotJS" : "Cookie",
      "domaca-stran" : "Home page",
    },
  };
  
  function switchLanguage(language) {
    localStorage.setItem("language", language);
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });
  }
  
  window.onload = () => {
    const savedLanguage = localStorage.getItem("language") || "sl";
    switchLanguage(savedLanguage);
    document.getElementById("lang-sl").addEventListener("click", () => switchLanguage("sl"));
    document.getElementById("lang-en").addEventListener("click", () => switchLanguage("en"));
  };
  