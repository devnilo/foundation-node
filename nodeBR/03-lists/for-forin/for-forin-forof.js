const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('a')
        const names = []

        console.time('for')
        for (let i = 0; i <= result.results.length - 1; i++) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        } 
        console.timeEnd('for') // for: 0.081ms
    
        console.time('forin')
        for (let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('forin') // forin: 0.013ms
    
        console.time('forof')
        for (pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('forof') // forof: 0.023ms
    
        console.log(`names`, names)
    }
    catch(error) {
        console.error(`DEU RUIM`, error)
    }
}

main()

/* depois desses testes podemos observar que o forIn é mais rápido, porém o forOf consome menos linhas
que o forIn */
