/* utilizamos o comando 'npm install chalk' no git bash, para fazer a instalação dessa biblioteca do node */
// o chalk é usado para colorir os textos
import chalk from 'chalk';

const log = console.log;

// irei pintar meu texto utilizando o chalk
log(chalk.red('Vamos começar!'))

//encadear métodos para colorir texto, cor de fundo e texto em negrito
log(chalk.blue.bgWhite.bold('Hello World'));

//receber múltiplos argumentos
log(chalk.blue('curso', 'de', 'NodeJS'));

//métodos aninhados
log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));

// uso de template strings e placeholders
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);