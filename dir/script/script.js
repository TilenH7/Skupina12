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
