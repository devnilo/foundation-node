const service = require('./service')

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

    // mesmo código acima porém em apenas uma linha
        const names = result.results.map((pessoa) => pessoa.name)

        console.log('names', names)
    }
    catch(error) {
        console.error('DEU RUIM!', error)
    }
}

main()