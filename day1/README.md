# Dia 1 - Operações Booleanas
Este primeiro dia é super importante! Ao final dele, você terá um novo conhecimento que é essencial para os próximos desafios.

Existe uma situação super comum para quem utiliza o Javascript: problemas com os tipos de variáveis na hora de comparar os valores de duas variáveis entre si. Eu já passei muito por isso!

Em linguagens de programação compiladas, como Java e C#, esse problema é detectado em tempo de compilação, e você que está desenvolvendo o código tem um aviso claro do erro.

Já no Javascript, esses erros passam despercebidos, já que o código não passa por um compilador. Ou seja, os erros só aparecem em tempo de execução.

A parte mais confusa para quem está começando a aprender lógica com Javascript é a operação de igualdade entre valores. Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo para um tipo booleano de maneira implícita (automática), e isso afetará variáveis que eram Strings, Numbers, Object, etc….

Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:

``` javascript
console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );
```

O que não faz necessariamente muito sentido.

(Você pode testar tudo isso indo no seu navegador, clicando com o botão direito, escolhendo a opção “Inspecionar” e a aba “Console”. Nessa aba, basta copiar e colar cada uma das linhas acima para confirmar que todas realmente retornam true).

Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

``` javascript
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
```

## Dica
Você também pode utilizar o próprio navegador para executar esse seu programa, caso ainda não tenha familiaridade com editores de código, como o Visual Studio Code.

Para isso, como eu falei acima, basta você clicar com o botão direito do mouse em qualquer página, selecionar a opção “Inspecionar”, ir na aba “Console” e digitar o seu código. Bem simples, né?

Se você quiser mudar os nomes das variáveis e valores, fique à vontade. Mas jamais imprima algo que não seja verdadeiro, hein!

## Extra
Separei um artigo da Alura para você aprender mais sobre operadores de comparação.
<link href="https://empresas.alura.com.br/e3t/Ctc/I8+113/d2z6gD04/VWXDGy1nkBf-W7ytPL51fFxwlW3LfLlX5nCPQDN6mkvpW5kvg0W7lCGcx6lZ3mPW6Jd1lv4llCd2W3Rc1JX3J0FqBW1DdTRN10NV34W7CYH644lg0GhW7JsRKx6tj6FrW5s2Wjj4h0-zbW3kgXLC4dF1G1W5-5LSt8-hN5WW8GbM0Q6Z31cWW4Zr5y285SDz8VPYnRv5f0nXSW8lmYL57WMLSrW7pkzGF297Vc2W64Yhh02WWC5kW8zwxFb9lz9FmW5hMB5L2W95nTW66ch2K80KHQYW7b159K1cDYMkVF3M-w2hPF3kW6y2yc-2P66QzW3JlMhY9l4WclW7blQnF8l0mJPW7NxdJg5yKPMrN79q4w6l4jzKW3cC--12LXrnYW3rS7XG91z8tjW692Rnv2RJYv5W7xFgwK22n3jnN7lc7fwS6F9GN3tBs9SJW675W2ZsVmx5H3tlJW6GWKzB3FRYd3W6NDWw4634nmtW1jnkyc4S5BjnW3NNY1b8sQl4nW3vjkNS7TCVMpW8fcpDd9gfGGyW3HdLN05512wkVz64Vt1nn3VkW2Fj05713lf5wf80NGR-04">