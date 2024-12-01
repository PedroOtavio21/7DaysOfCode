// Crie o formato da lista de compras (array ou objeto)
let listaDeCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: []
}

let adicionarAlimento = confirm("Você deseja adicionar um alimento a sua lista de compras? (confirmar - sim / cancelar - não)")

if(adicionarAlimento){
    let alimento = ''
    let categoria = ''
    do {
        alimento = prompt("Qual alimento você deseja adicionar?")
        
        do {
            categoria = prompt(`Insira a categoria desejada para o aliment: ${alimento}
            a) frutas
            b) laticinios
            c) congelados
            d) doces`
            )

            if(!['a', 'b', 'c', 'd'].includes(categoria)){
                categoria = prompt(`Categoria inserida inválida! Escolha a categoria correta desta vez.
                a) frutas
                b) laticinios
                c) congelados
                d) doces`)
            }

        } while(!['a', 'b', 'c', 'd'].includes(categoria))
        
        switch(categoria){
            case 'a':
                listaDeCompras.frutas.push(alimento)
                break
            case 'b':
                listaDeCompras.laticinios.push(alimento)
                break
            case 'c':
                listaDeCompras.congelados.push(alimento)
                break
            case 'd':
                listaDeCompras.doces.push(alimento)
                break
            default:

         }   
        
        adicionarAlimento = confirm("Deseja adicionar outro alimento a lista de compras?")
    } while(adicionarAlimento);

    alert(`Lista de todos os itens agrupados:
        Frutas: ${listaDeCompras.frutas.join(', ')}
        Laticícions: ${listaDeCompras.laticinios.join(', ')}
        Congelados: ${listaDeCompras.congelados.join(', ')}
        Doces: ${listaDeCompras.doces.join(', ')}`
    )
} else {
    alert(`Tudo bem. até algum outro momento.
        Frutas: ${listaDeCompras.frutas.join(', ')}
        Laticícions: ${listaDeCompras.laticinios.join(', ')}
        Congelados: ${listaDeCompras.congelados.join(', ')}
        Doces: ${listaDeCompras.doces.join(', ')}`)
}