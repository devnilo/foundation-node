import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Oops!'));
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto));
    } catch (erro) {
        trataErro(erro);
    }
}

pegaArquivo('./arquivos/texto1.md');

/* Durante a aula, aprendemos a utilizar os blocos try e catch, que são as ferramentas do JavaScript para “captura” 
de exceções. Ou seja, qualquer erro ocorrido durante a execução do código no bloco try é tratado dentro do bloco catch.
*/

//-------------------------------------------------------------------------------------------------------------------//

/* Ainda existe um último bloco, o finally, que é executado sempre, independentemente da execução do código ter sido 
resolvida no try ou gerado um erro passado para o catch. Tanto catch quanto finally são opcionais, mas o try deve 
sempre estar acompanhado de um ou outro.

Ao contrário do catch, o finally não recebe nenhum dado através dos parênteses ( ). Vamos refatorar a função feita 
durante a aula para adicionar este bloco:
*/

async function pegaArquivo2(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
    } catch (erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellow('Operação concluída!'))
    }
   }

pegaArquivo2('./arquivos/texto1.md')