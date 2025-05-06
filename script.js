let count = 0; // Compteur de clics
let timeLeft = 5; // Temps imparti en secondes
let isGameActive = false; // Indique si le jeu est actif

const button = document.getElementById('myButton');
const clickCountDisplay = document.getElementById('clickCount');
const timerDisplay = document.createElement('p'); // Affichage du chrono
timerDisplay.id = 'timer';
timerDisplay.textContent = `Temps restant : ${timeLeft}s`;
document.getElementById('container').appendChild(timerDisplay);

// Fonction pour démarrer le jeu
function startGame() {
    if (isGameActive) return; // Empêche de redémarrer le jeu si déjà actif

    isGameActive = true;
    count = 0;
    timeLeft = 5;
    clickCountDisplay.textContent = `Nombre de clics : ${count}`;
    timerDisplay.textContent = `Temps restant : ${timeLeft}s`;

    // Décrémentation du chrono toutes les secondes
    const timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Temps restant : ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval); // Arrête le chrono
            isGameActive = false; // Désactive le jeu
            timerDisplay.textContent = `Temps écoulé !`;
        }
    }, 1000);
}

// Écouteur d'événement pour le bouton
button.addEventListener('click', () => {
    if (isGameActive && timeLeft > 0) {
        count++;
        clickCountDisplay.textContent = `Nombre de clics : ${count}`;
    }
});

// Démarrage du jeu au premier clic
button.addEventListener('click', startGame);