const { initializeDOM, incrementScore, resetScore, getScore, setScore } = require("./script");

describe("Tests pour le jeu ClickFast", () => {
  beforeEach(() => {
    // Réinitialiser le score entre les tests
    if (typeof setScore === "function") {
      setScore(0);
    }

    // Faux DOM recréé avant chaque test
    document.body.innerHTML = `
      <div id="container">
        <div id="score">0</div>
        <div id="timer">5</div>
        <button id="button-clicker">Click me!</button>
        <button id="button-reset">Reset</button>
      </div>
    `;

    // Initialiser le DOM après avoir configuré le faux DOM
    initializeDOM();
  });

  test("Vérifiez que le score s'incrémente correctement", () => {
    const scoreElement = document.getElementById("score");
    const buttonClicker = document.getElementById("button-clicker");

    // Simuler un clic sur le bouton
    buttonClicker.click();
    expect(scoreElement.textContent).toBe("1");

    // Simuler un autre clic
    buttonClicker.click();
    expect(scoreElement.textContent).toBe("2");
  });

  test("Vérifiez que le bouton de réinitialisation remet le score à zéro", () => {
    const scoreElement = document.getElementById("score");
    const buttonReset = document.getElementById("button-reset");
    const buttonClicker = document.getElementById("button-clicker");

    // Simuler quelques clics pour augmenter le score
    buttonClicker.click();
    buttonClicker.click();
    expect(scoreElement.textContent).toBe("2");

    // Simuler un clic sur le bouton de réinitialisation
    buttonReset.click();
    expect(scoreElement.textContent).toBe("0");
  });
});