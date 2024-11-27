# Dia 3 - Mais loops e randomização
Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, **o jogo vai ser contra o próprio computador!**

Você deve criar um programinha que **comece com um valor específico pré-definido entre 0 a 10** para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar **mais 2 tentativas.**

No fim, caso você não acerte nenhuma vez, ele vai **imprimir qual era o número inicial.**

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

## DICA
Pense muito bem em qual **estrutura de repetição** você irá utilizar para fazer o seu programa ser executado até o momento em que as 3 tentativas acabem, ou até a pessoa acertar o número.

Lembre-se que você pode sempre **personalizar o seu programa** da forma que quiser.

Não se esqueça de compartilhá-lo no seu GitHub e nas suas redes sociais com a hashtag **#7DaysOfCode**, e também com **#feedback7DoC** caso você precise de alguma ajuda.

## EXTRA
Dê uma olhada nesse site para ***aprender mais sobre estruturas de repetição.***
<a href="https://empresas.alura.com.br/e3t/Ctc/I8+113/d2z6gD04/VX8PbJ8K4M8_W4yXlwP7pLPScW1n-N735nLd1yMhPPSM3lYMRW8wLKSR6lZ3lRW34ksrk3-Xg5CW2pMVQ64gFDWBW3k5V9R4wcFbjW6yzrsj8BvSF4W21Kszy7t4M92W2N44s372SxhJW7NyxhM6dZb8lW3drFT863sswDW7DwFsH4NQlBLW8ZkFr28FCR6QW74N6tj34MBcnW8CW8-W13PSMXW7gb_S760WtMzW4QvBPL7CPVVRW3zB4RD8VkvNCVSPjtD2L6k4hVnp9zp7_vpS0W9k-t1L94H4QFW36gxZl15qTYvW1f8Djh6b6_FrW14cT974MGxCzW1RsmZf8Jr263W8nSvzK4Q6ZC8W3KcjLd6gSFrWW4BF1T23YcfclW2Lb7vx3xXPQfW8Kp0Kd5VvMH0N2s0K_YPd-8xf8HLgMW04"></a>

Para fazer a própria máquina escolher sozinha o número a ser adivinhado, você pode utilizar algo chamado *Math.random()*.

Para isso, utilize o código:
``` javascript
Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
```

Onde, claro, você terá que alterar os valores de mínimo e  máximo pelos limites inferior e superior, respectivamente.

Você pode ler mais sobre a *Math.random()* nesse site.
<a href="https://empresas.alura.com.br/e3t/Ctc/I8+113/d2z6gD04/VX8PbJ8K4M8_W4yXlwP7pLPScW1n-N735nLd1yMhPPT23lYMRW95jsWP6lZ3mXW98P6-x4JN8v6W6_5cKQ4klJbmW8X5fMZ5sQypqW3tFZWW7dCTgqW1QFchJ1Ph1gyVF01YT1SthPbW7711tL7w2BqYW14Zw3z8FnWNDW5Ns13c5PDsbHW7WPVdT4W5CKCW3-nlC-48MbWTW94GVLf8dZDPhW3dfPp46Vs7cJW3WMb496SYplbW558rHx8WC4nqN5_b5kNM6qK7VjMySh6T2Xl5VK-V-n8qjNd6W1vKJjp8MM7qHW5rdxcZ8S4wRGN6pksWq1HNCdN6J6VddQDqq0W8ZKNQP7bB7qpW6l6lQT7HXkrfN80Tw-XRY5ZCW5CtvBn49-7w_W8LSJ1j6zgB8bW1cbzHT7RrpwhW3DWy_q6wL-QJVNqw2y2fxrSnf5bS8mK04"></a>