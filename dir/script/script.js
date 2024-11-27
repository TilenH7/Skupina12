/*  Tole bo sripta k se bo includala v vseh HTML datotekah. 
    tuki more bit:
        -Dark mode
        -Gumbi
        -...
        -ne vem kaj še

    Za gumbe uporabli addEventListener('click', [ime gumba v htmlju])
*/

//button.addEventListener('click', function(event) {
//    console.log('Button clicked!');
//}, { passive: true });


window.onload = (event) => {
    //testiru bom mau a je fajn on load uporablat al kaj bi blo najbolš pr web developmentu
    console.log("page is fully loaded");
    
    const vrni = document.getElementById('Return');
    const crni = document.getElementById('DarkMode');

    vrni.addEventListener('click', function(event){
        window.location.href = "../public/index.html"
    });
};

