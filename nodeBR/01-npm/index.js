/*
- obter um usuario
- obter o numero de telefone de um usuario a partir de seu ID
- obter o endereço do usuario pelo ID
*/

/* importamos um módulo interno do node.js para deixar o obterEndereco assincrono sem precisar 
escrever o código que escrevemos no obterUsuario e obterTelefone. PS: alguns momentos do dia dia, não
conseguirei utilizar o promisify(util), pq algumas libs não seguem o padrão de erro e resposta de
callbacks, ai sim teremos que converter para new Promise */
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    // quando der algum problema -> reject(ERRO)
    // quando sucess -> resolv
    return new Promise(function resolvePromise(resolv, reject) {
        setTimeout(function () {
            return resolv({
                id: 1,
                nome: 'Juca',
                dataNascimento: '07/07/2007'
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolv, reject) {
        setTimeout( () => {
            return resolv({
                telefone: '97777-7777',
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout( () => {
        return callback(null, {
            rua: 'Rua da Sorte',
            numero: 7
        })
    }, 2000);
}

const usuarioPromise = obterUsuario()
// para manipular o sucesso usamos a função .then
// para manipular erros usamos .catch

usuarioPromise
    .then(function(usuario) {
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result) {
            return {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },

                telefone: result
            }
        })
    })
    .then(function(resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function(resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
        `)
    })
    .catch(function(error) {
        console.error('DEU RUIM PAI!', error)
    })


/* obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.error('DEU RUIM em USUARIO', error)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('DEU RUIM em TELEFONE', error1)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('DEU RUIM em ENDEREÇO', error2)
                return;
            }

            console.log(`
            Nome: ${usuario.nome}
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
}); */

// const telefone = obterTelefone(usuario.id);


// console.log('telefone', telefone)
