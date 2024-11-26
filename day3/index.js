/** Crie os destinos possíveis de um jogo, em que o usuário consiga escolher
 * 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
 * ☑️
 * 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
 * ☑️
 * 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
 * ☑️
 * 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
 * ☑️
*/

let area = prompt("Você deseja seguir para a área de Front-End ou Back-End? Escolha entre as duas opções").toLowerCase()

while(area !== 'front-end' && area !== 'back-end'){
    area = prompt("Informação inserida inválida. tente novamente").toLowerCase()
}

let linguagem = ''
if(area === 'front-end'){
    linguagem = prompt("Você deseja aprender React ou Vue? Escolha entre as duas opções").toLowerCase()

    while(linguagem !== 'react' && linguagem !== 'vue'){
        linguagem = prompt("Informação inserida inválida. tente novamente").toLowerCase()
    }
} else if (area === 'back-end'){
    linguagem = prompt("Você deseja aprender C# ou Java? Escolha entre as duas opções").toLowerCase()

    while(linguagem !== 'c#' && linguagem !== 'java'){
        linguagem = prompt("Informação inserida inválida. tente novamente").toLowerCase()
    }
}

let escolha = parseInt(prompt(`Você deseja:
    1) Seguir se especializando na área?
    2) Seguir se desenvolvendo para se tornar Fullstack?
    3) Estou bem até aqui
    
    Obs: Escolha o número da opção desejada.`
))

while(escolha !== 1 && escolha !== 2 && escolha !== 3){
    escolha = parseInt(prompt(`Opção inserida inválida, tente novamente:
        1) Seguir se especializando na área?
        2) Seguir se desenvolvendo para se tornar Fullstack?
        3) Estou bem até aqui`))
}

let opcao = 'ok'
let tecnologias = [linguagem]
if(escolha === 1){
    while(opcao === 'ok'){
        linguagem = prompt("Qual seria a tecnologia que você gostaria de se especializar?")
        tecnologias.push(linguagem)
        opcao = prompt("Tem mais alguma tecnologia que gostaria de se especializar? (ok - sim)").toLowerCase()
    }
    alert(`Lista de aprendizado de tecnologias:
        Area: ${area}
        Lista de tecnologias escolhidas: 
        ${tecnologias.join(', ')}`)
} else if (escolha === 2){
    while(opcao === 'ok'){
        linguagem = prompt("Qual seria a tecnologia que você gostaria de conhecer?")
        tecnologias.push(linguagem)
        opcao = prompt("Tem mais alguma tecnologia que gostaria de conhecer? (ok - sim)").toLowerCase()
    }
    alert(`Lista de aprendizado de tecnologias:
        Area: ${area}
        Lista de tecnologias escolhidas: 
        ${tecnologias.join(', ')}`)
} else if (escolha === 3){
    alert(`Certe! Até o momento, você é da área ${area} e sabe sobre ${linguagem}`)
}