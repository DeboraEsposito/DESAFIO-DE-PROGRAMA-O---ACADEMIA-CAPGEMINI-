var senha = "";

const validaSenha = (senha) => {
  letrasDigitadas = senha.length
  faltamLetras = 6 - letrasDigitadas 
  

  if(letrasDigitadas < 6){
    console.log(faltamLetras)
  }else if(letrasDigitadas >= 6){
    
  }
  
}

validaSenha("rt744")

/** função validaSenha
 * (senha) -> senha digitada pelo usuário
 * função compara quantidade de letras digitadas as 6 letras necessárias e exibe quantos caracteres faltam.
 * 
 * # Questão 02

Débora se inscreveu em uma rede social para se manter em contato com seus amigos. A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a senha precisa ser forte. O site considera uma senha forte quando ela satisfaz os seguintes critérios:
Possui no mínimo 6 caracteres.

Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza se é uma senha forte. Para ajudar Débora, construa um algoritmo que informe qual é o número mínimo de caracteres que devem ser adicionados para uma string qualquer ser considerada segura.

 */
