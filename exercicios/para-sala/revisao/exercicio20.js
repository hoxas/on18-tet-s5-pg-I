/*REPETIR PARALAVRA
Dado duas variáveis:
obterNome > vai armazenar um nome.
repetirNome > vai armazenar números
Faça um programam que repita a palavra
De acordo com a quantidade de vezes que você
inserir para que essa palavra repita.
exemplo:
const obterNome = "Jéssica";
const repetirNome = 4
A saída terá que ser:
"Alessandra"
"Alessandra"
"Alessandra"
"Alessandra"*/

const nome = "Jéssica";
const repetirNome = 4;

const obterNome = (nome, repeticao) => {
  for (i = 0; i < repeticao; i++) {
    console.log(nome);
  }
};

obterNome(nome, repetirNome);
