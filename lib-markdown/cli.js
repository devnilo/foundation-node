import pegaArquivo from './regex';

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    console.log('Lista de Links', resultado)
}

processaTexto(caminho);

// escrever node cli.js ./arquivos/texto1.md no console para visualizar

