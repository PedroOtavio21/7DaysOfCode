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
