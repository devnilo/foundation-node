const assert = require('assert')
const MongoDB = require('../db/strategies/mongodb')
const ContextStrategy = require('../db/strategies/base/contextStrategy')

const MOCK_HEROI_CADASTRAR = {
    nome: 'Clone Laranja',
    poder: 'Clonagem'
}

const context = new ContextStrategy(new MongoDB())
describe('MongoDB Suite de testes', function() {
    this.beforeAll(async () => {
        await context.connect()
    })

    it('MongoDB Connection', async () => {
        const result = await context.isConnected()
        const expected = 'CONECTADO'

        assert.deepEqual(result, expected)
    })

    it('MongoDB Register', async () => {
        const {nome, poder} = await context.create(MOCK_HEROI_CADASTRAR)

        assert.deepEqual({nome, poder}, MOCK_HEROI_CADASTRAR)
    })
})