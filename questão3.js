function montarCombinacoes(minhaPalavra) {
  let palavra = minhaPalavra.split('');
  var tamanhoDinamico = palavra.length;
  var primeiraPosicaoLoopAnterior = 0;

  for(var i = 0;i < palavra.length;i++) {
      
      if (i == tamanhoDinamico - 1) {
          i = 0;
          primeiraPosicaoLoopAnterior = primeiraPosicaoLoopAnterior + tamanhoDinamico;
          tamanhoDinamico--;
      }

      if (tamanhoDinamico == 2) break;

      palavra.push(palavra[i] + palavra[primeiraPosicaoLoopAnterior + i + 1]);
  }

  return verificarAnagrama(palavra)
}

function verificarAnagrama(palavra) {
  var arrayEncontrado = [];

  palavra.forEach((item, index) => {

      var palavraEncontrada = percorrerSegundaPalavra(item, index, palavra)

      if (palavraEncontrada) {
          arrayEncontrado.push(palavraEncontrada)
      }
      
  });
  // console.log(arrayEncontrado)
  return arrayEncontrado;
}

function percorrerSegundaPalavra(item, index, palavra) {

  for (var j = index + 1; j < palavra.length; j++) {

      var palavraExiste = compararPalavras(item, palavra, j)

      if (palavraExiste) {
          var adicionarPalavra = (palavraExiste)
          return adicionarPalavra;
      }

  }
}

function compararPalavras(item, palavra, j) {
  var somaI = 0;
  var somaJ = 0;
  var tamanhoDaString = 0;

  for (var k = 0; k < item.length; k++) {

      if (item.length != palavra[j].length) continue

      if (palavra[j].includes(item[k]) && item.includes(palavra[j][k])) {
          somaI += item[k].charCodeAt()
          somaJ += palavra[j][k].charCodeAt()

          tamanhoDaString++;

          if (tamanhoDaString == item.length && somaI == somaJ) {
              var palavraExiste = [item, palavra[j]]
              return palavraExiste;
          }
      }
  }
}

function montarArray(resultado, texto) {
  var posicoesDesejadas = [];
  var posicaoNoTexto = 0;
  
  for (let index in resultado) {
      var array = []
      posicaoNoTexto = texto.indexOf(resultado[index][0])

      if (resultado[index][0].length > 1) {            
          let arrayTemporario = [posicaoNoTexto];

          for (var i = 1; i < resultado[index][0].length; i++) {
              arrayTemporario.push(i + posicaoNoTexto)
          }

          array.push(arrayTemporario);
          posicaoNoTexto = texto.substring(posicaoNoTexto + 1).indexOf(resultado[index][1]) + 1;
          arrayTemporario = [posicaoNoTexto];
          
          for (var i = 1; i < resultado[index][1].length; i++) {
              arrayTemporario.push(i + posicaoNoTexto)
          }

          array.push(arrayTemporario);            
      } else {            
          array.push(posicaoNoTexto);
          array.push(texto.substring(posicaoNoTexto + 1).indexOf(resultado[index][1]) + posicaoNoTexto + 1);
      }

      posicoesDesejadas.push(array)
      
  }
  
  return posicoesDesejadas;
  
}

var texto = 'ifailuhkqq';
var resultado = montarCombinacoes(texto);

var posicoes = montarArray(resultado, texto);

console.log(resultado)
console.log(posicoes)

/** Função montar combinação
 * 
 * param -> var texto
 * var texto -> deve receber texto que será combinado
 * processa dados da var texto e insere na var palavra montando anagrama
 * 
 * função verifica anagrama
 * verífica palavra encontrada e insere em 'array encontrado"
 * 
 * função verificaSegundaPalavra
 * 
 * compara as letras para verificar exitência de letras
 * 
 * função montaArray
 * 
 * monta os arrays de anagrama comparando letras e quantidade de letras, dessa forma evita a inserção de letras repetidas.
 * 
 * # Questão 03
Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser realocadas para formar a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que encontre o número de pares de substrings que são anagramas.

 * 
 */

