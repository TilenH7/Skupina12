const today = new Date();

const datum = today.toLocaleDateString('sl-SI', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
});
document.getElementById('datum').textContent = datum;