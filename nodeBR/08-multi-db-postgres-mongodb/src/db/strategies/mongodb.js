const ICrud = require('./interfaces/interfaceCrud')
const Mongoose = require('mongoose')
const STATUS = {
    0: 'DESCONECTADO',
    1: 'CONECTADO',
    2: 'CONECTANDO',
    3: 'DESCONECTANDO'
}

class MongoDB extends ICrud {
    constructor() {
        super()
        this._herois = null
        this._driver = null
    }

    async isConnected() {
        const state = STATUS[connection.readyState]

        if (state === 'CONECTADO') return state;

        if (state !== 'CONECTANDO') return state;

        await new Promise(resolve => setTimeout(resolve, 1000))

        return STATUS[connection.readyState]
    }

    defineModel() {
        this._herois = new Mongoose.Schema({
            nome: {
                type: String,
                required: true
            },
            poder: {
                type: String,
                required: true
            },
            insertedAt: {
                type: Date,
                default: new Date()
            }
        })

        const model = Mongoose.model('Heroi', heroiSchema)
    }

    connect() {
        const user = 'devnilo'
        const pass = 'test'
        const url = `mongodb://${user}:${pass}@localhost:27017/herois`

        Mongoose.connect(url, { useNewUrlParser: true }, (error) => {
            if (!error) return;

            console.log('Falha na conexão!', error)
        })

        const connection = Mongoose.connection
        connection.once('open', () => console.log('database rodando!'))
    }

    create(item) {
        const resultCadastrar = await model.create({
            nome: 'Clone Laranja',
            poder: 'Clonagem'
        })
        console.log('result cadastrar', resultCadastrar)
    }
}

module.exports = MongoDB