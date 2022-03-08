// map é usado para retornar um array novo baseado no que o usuario pediu

const service = require('./service')

Array.prototype.meuMap = function(callback) {
    const novoArrayMapeado = []

    for (let i = 0; i <= this.length - 1; i++) {
        const resultado = callback(this[i], i)

        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado;
}

async function main() {
    try {
        const result = await service.obterPessoas('a')
        
    /*  const names = []
        result.results.forEach(function(pessoa) {
            names.push(item.name)
        })
    */

    /*
        const names = result.results.map(function(pessoa) {
            return pessoa.name
        })
    */

    //  mesmo código acima porém em apenas uma linha
    //  const names = result.results.map((pessoa) => pessoa.name)

    // agora utilizando o Array.map
        const names = result.results.meuMap(function(pessoa, i) {
            return `[${i}] ${pessoa.name}`;
        })

        console.log('names', names)
    }
    catch(error) {
        console.error('DEU RUIM!', error)
    }
}

main()