// Variables globales
let score = 0;

function incrementScore() {
  score++;
  console.log("Score incrémenté à:", score);
  document.getElementById("score").textContent = score;
}

function resetScore() {
  score = 0;
  console.log("Score réinitialisé à:", score);
  document.getElementById("score").textContent = score;
}

// Initialisation du DOM
function initializeDOM() {
  // Attachement des gestionnaires d'événements
  const buttonClicker = document.getElementById("button-clicker");
  const buttonReset = document.getElementById("button-reset");

  if (buttonClicker) {
    buttonClicker.addEventListener("click", incrementScore);
  }

  if (buttonReset) {
    buttonReset.addEventListener("click", resetScore);
  }

  // Initialiser l'affichage du score
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.textContent = score;
  }
}

// Exporter les fonctions pour les tests ou pour d'autres fichiers
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initializeDOM,
    incrementScore,
    resetScore,
    // Fonction pour obtenir l'état actuel (utile pour les tests)
    getScore: () => score,
    // Fonction pour définir le score (utile pour les tests)
    setScore: (newScore) => {
      score = newScore;
    },
  };
}