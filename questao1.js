let escada = []
const exibeNumero = (n) => {
    for (let i = 0; i < n; i++) {
        escada.push(" ".repeat(n - i - 1) + "*".repeat(i + 1));
        }
        for (const n of escada) {
          console.log(n)
        }
      }
exibeNumero(7)

/**Função Exibe a escada construída com "*" 
 * (n) -> parametro de medida para quantidade de Linhas e colunas
 * for -> repete a função inserindo + 1 "*" e -1 " " a cada loop
 * (n) -> deve ser informado na chamada da 
 * 
 * # Questão 01

Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.
*/