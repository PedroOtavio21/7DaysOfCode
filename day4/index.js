// Definir um valor aleatório de 1 a 10
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomValue = random(1, 10)
// alert(randomValue)

// Peça do usuário que insire um valor qualquer
let attempts = 3
let userValue = parseInt(prompt("Insira um valor inteiro de 1 a 10"))

// Verificação de resultados
while(attempts > 0){
    if(randomValue === userValue){
        alert(`Parabêns! você acertou o valor selecionado em ${attempts} tentativas!`)
        break
    } else {
        attempts--
        if(attempts === 0){
            alert(`Suas tentativas acabaram. O valor aleatório escolhido era: ${randomValue}`)
            break
        }
        userValue = parseInt(prompt(`Você errou desta vez. Tente novamente um valor de 1 a 10
            Tentativas restantes: ${attempts}`))
    }
}