# Dia 5 - Arrays e Coleções
Sabe quando você vai no supermercado com uma lista de compras e acaba ficando indo e voltando nos mesmos corredores até completar a lista?

Você precisa de uma maçã e vai para a área de frutas. O próximo item é um leite e você segue para os laticínios. Mas em seguida você anotou a pêra, e precisa novamente retornar para a área de frutas.

**Depois que você resolver o desafio de hoje, com certeza não fará mais isso!**

Assim como a nossa lista de compras, **é muito comum que programas trabalhem com listas** de strings, números e objetos.

Pense em todo catálogo de e-commerce que você já viu, na lista de eventos do seu Google Calendar, ou ainda na sua caixa de e-mails. Todos esses sites usam **listas para exibir informações de uma forma simples e fácil** de entender.

Além disso, você pode aproveitar as listas para fazer filtros, ordenação, e outras funcionalidades muito úteis.

Nesse ponto, você já deve ter percebido que trabalhar com essas coleções é algo que você vai precisar dominar, né?

Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará **se você deseja adicionar uma comida na sua lista de compras**, e você deve poder responder com *sim* ou *não*.

Em seguida, ele perguntará qual **comida você deseja inserir**, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar **em qual categoria essa comida se encaixa**, com algumas opções já pré-definidas, como *frutas, laticínios, congelados, doces* e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá **exibir uma lista com todos os itens agrupados**, da seguinte forma:

Caso você adicione na sua lista:
*banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca*

O programa deverá imprimir, por exemplo:

```js
Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho
```

## DICA
Existe um objeto dentro da linguagem Javascript que é usado justamente para **criar listas de elementos, chamado Array**. Use e abuse dele!

Lembre-se que você sempre pode estilizar da maneira que quiser o seu programinha, inclusive utilizando outras tecnologias para isso, como HTML e CSS.

Porém, isso **não é obrigatório na nossa lista de lógica de programação com Javascript**. Como eu já mencionei nos dias anteriores, você pode usar recursos como console.log, alert e prompt para desenvolver o seu programa.

Não se esqueça de compartilhar o seu código no seu GitHub e nas suas redes sociais com a hashtag **#7DaysOfCode**, e também com #feedback7DoC caso você precise de alguma ajuda.

## EXTRA
Para criar um **array vazio**, você pode usar colchetes. E aí, para **inserir algo em um array**, você pode usar a função *.push()*. Por exemplo:

```js
let meuArray = [];
meuArray.push(elemento1);
```
Depois disso, o array não estará mais vazio, ele terá o elemento1.

Para aprender mais sobre arrays em Javascript, dê uma olhada <a href="https://empresas.alura.com.br/e3t/Ctc/I8+113/d2z6gD04/VWn0Hw2LTyXCW8Mz82w2xQgvMW6cqVBw5nNmNQMJvQnP3lYMRW8wLKSR6lZ3pGW6-gtL4911dY6W7NTnrW3B1Yr8W3jsSCh8MV0rFW5Zm7hl5h04YCW1CtLHB6Lyt9MW3v6f7X2b94rBW2xnYzh2HFwsJN3P4NgZyQhckN2q5xmfd1f61W4x3Vt94-ZNVTW7nC3qC8YPgkKN8MTrSSQ_g8rW1xKJkp37ys9HW5tBsCb1dKfbLW5RGNfn5SMkk7W4ZHh3m94jT2XW4J4zTk464mkHW69DY7M3y7crWW5CqKlh7gSWywW8FFK7b7FtsnPW5nnDZB1F6QB-W3_98_74R68XLN1Yt2b9BrVGBW2D5VSy8BqD-wW3vhscR8mJzJqW7dG_dj3Yf58JW6vcv0m7kR1MdN452HR15Hf6sf2vW2Lz04">nesse site.</a>