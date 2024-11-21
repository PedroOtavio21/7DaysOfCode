// Peça para o usuário responder as seguintes 3 perguntas:
// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

const nome = prompt('Qual o seu nome?')
const idade = parseInt(prompt("Quantos anos você tem?"))
const linguagem = prompt("Qual linguagem de programação você está estudando?")

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`)

const opcao = parseInt(prompt(`Você gosta de estudar ${linguagem}? Responda com número "1" para SIM ou "2" para NÃO`))

if(opcao !== 1 || opcao !== 2){
    alert("Valor inserido inválido!")
} else {
    if(opcao === 1){
        alert("Muito bom! Continue estudando e você terá muito sucesso.")
    } 

    if(opcao === 2){
        alert("Ahh que pena... Já tentou aprender outras linguagens?")
    }
}