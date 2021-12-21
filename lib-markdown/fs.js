// FS - FILE SYSTEM, é usado para acessar e ler arquivos
/* diferente do chalk, não é necessário dar npm install para o fs, pois ele já é uma biblioteca
que vem junto ao node */
import fs from 'fs';
import chalk from 'chalk';

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    //                                     erro, data
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto1.md'); // Isso é um teste.

/* na linha 10, no terceiro parametro temos que passar entre parenteses o erro para depois passar o sucesso, como não 
iremos usar o erro agora, vamos colocar _ para ignorar, pois se colocarmos apenas (texto), o javascript irá entender
que o texto é um erro, pois ele estará como primeiro paramentro */

//-------------------------------------------------------------------------------------------------------------//

/* agora iremos fazer o mesmo codigo, utilizando o erro */

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo nesse diretório'));
}

function pegaArquivoErro(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.blue(texto));
    })
}

// passando um caminho que não tenha nada para forçar o erro
pegaArquivoErro('./arquivos/') // Error: EISDIR não há arquivo nesse diretório