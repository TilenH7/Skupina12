document.addEventListener("DOMContentLoaded", () => {
    // Log message to ensure the script is running
    console.log("Page is fully loaded");

    // Navigate to the home page when the "Return" button is clicked
    const returnButton = document.getElementById('Return');
    if (returnButton) {
        returnButton.addEventListener('click', () => {
            window.location.href = "../public/index.html";
        });
    }

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('DarkMode');
    if (darkModeToggle) {
        // Set initial state from localStorage
        if (localStorage.getItem("dark-mode") === "enabled") {
            document.body.classList.add("dark-mode");
            darkModeToggle.textContent = "Light Mode"; // Update button text to Light Mode when dark mode is active
        } else {
            darkModeToggle.textContent = "Dark Mode"; // Default to Dark Mode button text
        }

        // Add event listener for toggling dark mode
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle("dark-mode");

            // Update localStorage and button text based on the current state
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("dark-mode", "enabled");
                darkModeToggle.textContent = "Light Mode"; // When dark mode is enabled, set the text to Light Mode
            } else {
                localStorage.setItem("dark-mode", "disabled");
                darkModeToggle.textContent = "Dark Mode"; // When dark mode is disabled, set the text to Dark Mode
            }
        });
    }

    // Helper function for navigation buttons
    const navigateTo = (id, target) => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', () => {
                window.location.href = target;
            });
        }
    };

    // Map navigation buttons to their respective pages
    const navigationMap = {
        'piskotLINK': '../public/CookieClicker.html',
        'puskaLINK': '../public/puska.html',
        'slikeLINK': '../public/slike.html',
        'bombometLINK': '../public/bombomet.html',
    };

    // Iterate over the navigation map and bind event listeners
    for (const [id, target] of Object.entries(navigationMap)) {
        navigateTo(id, target);
    }
});
