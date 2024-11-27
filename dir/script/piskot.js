window.onload = (event)=> {
    const piskot = document.getElementById('piskot');
    const counterElement = document.getElementById('counter');

    let pritiski = 0;

    piskot.addEventListener('click',(event)=>{
        pritiski++;
        counterElement.textContent = pritiski;
    });
};