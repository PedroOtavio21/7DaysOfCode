const converteString = palavra => {
    if (typeof palavra === 'string') {
        return palavra.toLowerCase().trim(); 
    } else {
        return null;
    }
};

let areaAtuacao = prompt("Você deseja atuar na área do Front-End ou Back-End? Digite o nome da mesma maneira:");
areaAtuacao = converteString(areaAtuacao);

if (areaAtuacao !== 'front-end' && areaAtuacao !== 'back-end') {
    alert(`Opção inserida inválida: ${areaAtuacao}. Encerrando o programa.`);
    return; 
}

alert(`Você escolheu como área de atuação: ${areaAtuacao}.`);

let tecnologia = '';
if (areaAtuacao === 'front-end') {
    tecnologia = prompt("Você deseja aprender React ou Vue? Insira o nome da tecnologia:");
    tecnologia = converteString(tecnologia);

    if (tecnologia === 'react' || tecnologia === 'vue') {
        console.log('Tudo ok!');
    } else {
        alert(`Opção inserida inválida: ${tecnologia}`);
    }
} else if (areaAtuacao === 'back-end') {
    tecnologia = prompt("Você deseja aprender C# ou Java? Insira o nome da linguagem:");
    tecnologia = converteString(tecnologia);

    if (tecnologia === 'c#' || tecnologia === 'java') {
        console.log('Tudo ok!');
    } else {
        alert(`Opção inserida inválida: ${tecnologia}`);
    }
}

let opcao = parseInt(prompt(`Você deseja seguir adiante na especialização da área escolhida (opção "1")? 
Ou deseja se tornar um Fullstack (opção "2")?
Opções inseridas: Área de Atuação - ${areaAtuacao}, Tecnologia - ${tecnologia}`));

if (opcao === 1) {
    alert(`Continue se especializando em ${tecnologia}, você está no caminho correto!`);
} else if (opcao === 2) {
    let confirmacao = 'ok';
    let tecnologias = [tecnologia]; 

    while (confirmacao === 'ok') {
        let novaTecnologia = prompt("Insira o nome da nova tecnologia que você precisa aprender:");
        novaTecnologia = converteString(novaTecnologia);
        tecnologias.push(novaTecnologia);

        confirmacao = prompt("Você deseja aprender uma nova tecnologia? (Digite 'ok' para continuar ou 'não' para encerrar)").toLowerCase().trim();
    }

    alert(`Tecnologias que você deseja aprender: ${tecnologias.join(', ')}`);
} else {
    alert("Opção inválida. Escolha entre 1 ou 2.");
}
