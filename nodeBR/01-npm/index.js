/*
- obter um usuario
- obter o numero de telefone de um usuario a partir de seu ID
- obter o endereço do usuario pelo ID
*/

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Juca',
            dataNascimento: new Date() 
        }
    )}, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            telefone: '97777-7777',
            ddd: 11
        }
    )}, 2000);

}

function obterEndereco(idUsuario, callback) {
    setTimeout( () => {
        return callback(null, {
            rua: 'da sorte',
            numero: 7
        })
    }, 2000);
}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
    if(error) {
        console.error('DEU RUIM em USUARIO', error)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if(error1) {
            console.error('DEU RUIM em TELEFONE', error1)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if(error2) {
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
});

// const telefone = obterTelefone(usuario.id);


// console.log('telefone', telefone)
