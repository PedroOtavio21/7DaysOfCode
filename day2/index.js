/** Tarefas
 * Pedir ao usuário que responda 3 perguntas:
 * - Qual o seu nome
 * - Quantos anos você tem
 * - Qual linguagem de programação você está estudando
 * 
 * No final, deverá exibir a mensagem:
 * "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
 * 
*/

const nome = prompt("Olá, qual o seu nome?")
const idade = parseInt(prompt("Quantos anos você tem?"))
const linguagem = prompt("Qual linguagem de programação você está estudando?")

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

/** Exercício Opcional
 * Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:
 * Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
 * 
 * E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:
 * 1 > Muito bom! Continue estudando e você terá muito sucesso. 
 * 2 > Ahh que pena... Já tentou aprender outras linguagens?
*/

let opniao = prompt(`Você gosta de estudar ${linguagem}? Responda 1 para "Sim" e 2 para "Não"`)

while(opniao !== "1" && opniao !== "2"){
    opniao = prompt("Opção inserida inválida. Tente novamente.")
}

if(opniao === "1"){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
}

if(opniao === "2"){
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}
