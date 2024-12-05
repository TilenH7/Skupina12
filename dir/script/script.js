document.addEventListener("DOMContentLoaded", () => {

    const vrni = document.getElementById('Return');
    const crni = document.getElementById('DarkMode');

    if(vrni){
        vrni.addEventListener('click', function(event){
            window.location.href = "../public/index.html"
        });
    };
    if (crni) {
        crni.addEventListener('click', function(event){
            var element = document.body;
            element.classList.toggle("dark-mode");
        });
    }


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
