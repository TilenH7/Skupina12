    const gameContainer = document.getElementById('gameContainer');
    const results = document.getElementById('results');
    const scoreBoard = document.getElementById('score');
    let startTime, score, totalClicks, gameInterval;

    function startGame() {
    results.textContent = '';
    score = 0;
    totalClicks = 0;
    scoreBoard.textContent = 'Zadetki: 0';
    spawnBall();
    startTime = Date.now();
    gameInterval = setTimeout(endGame, 10000);
}

    function spawnBall() {
    const ball = document.createElement('div');
    ball.classList.add('ball');

    // Naključno pozicioniranje
    const x = Math.random() * (gameContainer.offsetWidth - 50);
    const y = Math.random() * (gameContainer.offsetHeight - 50);
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    // Dogodek ob kliku
    ball.onclick = () => {
    score++;
    totalClicks++;
    scoreBoard.textContent = `Zadetki: ${score}`;
    ball.remove();
    spawnBall();
};

    gameContainer.appendChild(ball);


    setTimeout(() => {
    if (ball.parentElement) {
    ball.remove();
    totalClicks++;
    spawnBall();
}
}, 1000);
}

    function endGame() {
    clearTimeout(gameInterval);
    gameContainer.innerHTML = '';

    // Ocena rezultatov
    const accuracy = Math.round((score / totalClicks) * 100) || 0;
    let comment = '';
    if (accuracy > 80) {
    comment = 'Odličen refleks, pravi MVP!';
} else if (accuracy > 50) {
    comment = 'Dobra igra, vendar lahko še izboljšaš!';
} else {
    comment = 'Treba bo še malo vaditi!';
}

    results.innerHTML = `
        <p>Rezultat: ${score} klikov</p>
        <p>Natančnost: ${accuracy}%</p>
        <p>${comment}</p>
      `;
}

