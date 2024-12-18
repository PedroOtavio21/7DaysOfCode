# Dia 3 - Fluxo de Decisão
Você alguma vez já jogou **algum jogo que te desse mais de uma escolha** e, dependendo do que você escolhesse, o destino do personagem seria totalmente diferente?

**Hoje você vai desenvolver um exemplo assim com Javascript!**

Eu quero que você trabalhe com estruturas de controle de fluxo. Esse jeito complicado de falar só quer dizer que, assim como nos jogos, **a história que você montar precisa se adaptar às respostas dadas por quem está jogando.**

Para isso, você vai precisar de algumas estruturas capazes de alterar o fluxo da aplicação, como *for, while, if e else*. Todas essas conseguem cumprir esse objetivo, dada uma certa condição.

O *if* e o *else*, que eu já te mostrei nos últimos dias, são capazes de criar ramificações dentro da aplicação para que seja tomada uma ou outra ação, dependendo da condição fornecida.

Os loops (como *for* e *while*) são capazes de fazer uma tarefa repetitiva se transformar em poucas linhas de código, independente de quantas vezes você precisar repetir aquela tarefa.

Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para **área de Front-End** ou seguir para a **área de Back-End**.

2. Caso esteja na área de **Front-End**, se quer **aprender React** ou **aprender Vue**. Caso esteja na área de **Back-End**, poderá **aprender C#** ou **aprender Java**.

3. Depois, *independente das escolhas anteriores*, o usuário poderá escolher entre **seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack**. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte **quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer**. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “*Tem mais alguma tecnologia que você gostaria de aprender?*”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre **escolher qual decisão tomar para conseguir aprender** e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa **inserir quantas tecnologias quiser na lista de aprendizado**.

## DICA
Já deu pra ter uma ideia de como fazer toda essa historinha acontecer, né? Principalmente lembrando **como utilizar as estruturas condicionais e loops em Javascript!**

Caso você ainda não saiba como imprimir e receber valores nas páginas web com HTML e CSS, você poderá usar *console.log, prompt e alert* para desenvolver o seu jogo, como você já viu nos últimos dias.

Lembre-se que você pode sempre **personalizar o jogo da forma que quiser**.

## EXTRA
Você já viu **estruturas condicionais em Javascript** anteriormente, mas vou recapitular. O *if* é usado para verificar se uma determinada condição é verdadeira.

Exemplo:

``` javascript
if (cidade === “Roma”){
    // mostre a foto do “Coliseu”
}
```

Além disso, ele também pode ser usado com um ou vários *else if*, que irá saber que a condição anterior era falsa e vai verificar se a atual é verdadeira.

Por fim, existe o *else* sozinho, sem nenhuma condição, e o código dentro dele será executado sempre que todas as condições encadeadas anteriormente forem falsas.
``` javascript
if (cidade === “Roma”){
    // mostre a foto do “Coliseu”
}
else if (cidade === “Paris”){
    // mostre a foto do “Torre Eiffel”
}
else {
    // dê a resposta “Você não digitou nenhuma cidade válida”
}
```

Além disso, para a **parte 4, você precisará de uma estrutura de repetição** (loop) como o *while*. Para usá-lo, é bem fácil:
``` javascript
let idade = 0;

while (idade < 8) {
    // algum comando para imprimir a idade
    idade = idade + 1;
}
```

Esse código começará com a idade em zero e, ao entrar no while, esse valor será impresso e, logo depois, incrementado em 1.

Ou seja, depois da primeira vez que ele passar, o valor da idade será igual a 1, que é menor que 8, e por isso, **a condição do *while* terá um resultado verdadeiro** e ele continuará a ser executado.

Ele só vai parar quando o valor da variável idade chegar a 8, que não é menor que 8, e por isso **a condição do *while* terá um resultado falso**.

Você também pode aprender mais sobre o *while* nesse site.
<link href="https://empresas.alura.com.br/e3t/Ctc/I8+113/d2z6gD04/VVVKBl13k9pSW7tWcLS8N4yGpW37H_hZ5nJ4hvN4bXfKz3lYMRW8wLKSR6lZ3p0W6wB_7L6Cc0G7W1z_W8S8RSDm4VrdfQh76wWp1VjxWGr6Q33lvW835FWh6hqsqzW3j_tsb8Dx9V9W5Sh_wG2ftmL0VkLc_05BWtjMW4016-r1-0wYBW4ZBfJF6g0FP7W9bb4zm6zr83KW7_Wf9w2GJxlWW5C76vw4myRQ-VYFb4v1LDzh6W46JL7q6-8CKYW7KNWwz4BbMC1W99_SfN8x7zs4W8M9JDN2DDTKqW8n1P8t2f3BBwV34n2L6xFkSgW6Z0fjS5SFdr_W1LySf_34DMXkN69tpNPqF09nW7fDXkM7Wb-2HW97Cw502GkRhsW2h8V681nr4GnW8KkqSN8jPGCKW3QHwNd2C9xBCf1lpw4H04">