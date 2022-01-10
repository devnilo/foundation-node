import chalk from 'chalk';
import pegaArquivo from './index';
import validaURLs from './http-validacao';

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    if (caminho[3] === 'validar') {
        console.log(chalk.yellow('Links Validados'), await validaURLs(resultado));
    } else {
        console.log(chalk.yellow('Lista de Links'), resultado)
    }
}

processaTexto(caminho); 

// escrever node cli.js ./arquivos/texto1.md no console para visualizar

