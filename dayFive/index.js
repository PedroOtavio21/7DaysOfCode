const listaDeCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
}

let continuar = true

while(continuar){
    const adicionar = prompt("Deseja adicionar um alimento na lista de compras? (sim/não)")

    if(adicionar === 'sim'){
        const alimento = prompt("Insira o nome do alimento desejado")
        const categoria = prompt("Insira o nome da categoria do alimento escolhido")

        if(listaDeCompras[categoria]){
            listaDeCompras[categoria].push(alimento)
        } else {
            alert("Categoria inválida, tente novamente com as categorias disponíveis")
        }
    } else if (adicionar === 'não') {
        continuar = false
    } else {
        alert("Tentativa inválida, tente novamente!")
    }
}

let mensagem = 'Lista de compras:\n'
for(const categoria in listaDeCompras){
    if(listaDeCompras[categoria].lenght > 0){
        mensagem += ` ${categoria}: ${listaDeCompras[categoria].join(", ")}\n`
    } else {
        mensagem += ` ${categoria}:\n`
    }
}

alert(mensagem)