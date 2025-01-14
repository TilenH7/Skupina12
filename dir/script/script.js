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
      "ostrostrelska-puska" : "Ostrostrelska puška – PGM Precision Hecate"
    },
    en: {
      "title-index": "Weapons of the Slovenian Army",
      "dark-mode" : "Dark mode",
      "cookie-clicker" : "Cookie clicker",
      "slovenska-vojska" : "The Slovenian Armed Forces (SAF) use a wide range of weapons tailored to their needs as a small, modern and highly mobile military force. The weapons used by the SAF include both personal armaments for soldiers and heavier equipment for the performance of tasks in different operational environments. Here are some of the weapons used by the SAF:",
      "poglej-slike" : "View images",
      "ostrostrelska-puska" : "Sniper rifle – PGM Precision Hecate",
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
  