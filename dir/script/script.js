/*  Tole bo sripta k se bo includala v vseh HTML datotekah. 
    tuki more bit:
        -Dark mode
        -Gumbi
        -...
        -ne vem kaj še

    Za gumbe uporabli addEventListener('click', [ime gumba v htmlju])
*/


document.addEventListener("DOMContentLoaded", () => {
    //testiru bom mau a je fajn on load uporablat al kaj bi blo najbolš pr web developmentu
    console.log("page is fully loaded");
    
    const vrni = document.getElementById('Return');
    const crni = document.getElementById('DarkMode');

    vrni.addEventListener('click', function(event){
        window.location.href = "../public/index.html"
    });
    crni.addEventListener('click', function(event){
        var element = document.body;
        element.classList.toggle("dark-mode");
    });

    const cookie = document.getElementById('piskotLINK');
    const puska = document.getElementById('puskaLINK');
    const slike = document.getElementById('slikeLINK');
    const bombomet = document.getElementById('bombometLINNK');

    cookie.addEventListener('click', function(event){
        window.location.href = "../public/CookieClicker.html"
    });
    puska.addEventListener('click', function(event){
        window.location.href = "../public/puska.html"
    });
    slike.addEventListener('click', function(event){
        window.location.href = "../public/slike.html"
    });
    bombomet.addEventListener('click', function(event){
        window.location.href = "../public/bombomet.html"
    });
});

