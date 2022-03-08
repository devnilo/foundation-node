// exportando apenas uma função expecifica de outro arquivo
const { obterPessoas } = require('./service')

Array.prototype.meuFilter = function(callback) {
    const lista = []

    for (index in this) {
        const item = this[index]
        const resultado = callback(item, index, this)
        // 0, "", null, undefined === false

        if (!resultado) continue;
        lista.push(item)
    }
    return lista;
}

async function main() {
    try {
        const { 
            results 
        } = await obterPessoas('a')

    /*
        // usando o filter para pegar uma lista com nomes que tenham 'Lars'
        const familiaLars = results.filter(function(item) {
            // por padrão precisa retornar um booleano
            // para informar se deve manter ou remover da lista
            // false > remove da lista
            // true > mantém na lista
            // nao encontrou = -1
            // encontrou = posicaoNoArray

                                                                   
            const result = item.name.toLowerCase().indexOf(`lars`) !== - 1 
                                                                // !== irá pegar todos os que SÃO lars, 
                                                                // se quisermos pegar todos que NÃO SÃO 
                                                                // Lars utilizamos === 
            return result;
        })
    */

        // agora utilizando Array.filter
        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== - 1
        }) 

        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)
    }
    catch(error) {
        console.error('DEU RUIM!')
    }
}

main()