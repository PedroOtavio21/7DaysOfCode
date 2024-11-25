// Atividade do Dia

// Iniciar um número aleatório a ser escolhido pelo computador
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumber = getRandomNumber(0, 10);

let attempts = 3;
let guess = parseInt(prompt("Olá! Tente adivinhar um número entre 0 e 10."));

while (attempts > 0) {
    if (guess === randomNumber) {
        alert(`Parabéns! Você acertou o número ${randomNumber} com ${attempts} tentativas restantes!`);
        break;
    } else {
        attempts--;
        if (attempts > 0) {
            guess = parseInt(prompt(`Errou! Tente novamente. Você ainda tem ${attempts} tentativas restantes.`));
        } else {
            alert(`Você não conseguiu adivinhar. O número correto era ${randomNumber}.`);
        }
    }
}