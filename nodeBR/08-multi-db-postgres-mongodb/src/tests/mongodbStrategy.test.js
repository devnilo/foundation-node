const assert = require('assert')
const MongoDB = require('../db/strategies/mongodb')
const ContextStrategy = require('../db/strategies/base/contextStrategy')

const context = new ContextStrategy(new MongoDB())
describe('MongoDB Suite de testes', function() {
    this.beforeAll(async () => {
        await context.connect()
    })

    it('Verificar conexão', async () => {
        const result = await context.isConnected()
        const expected = 'CONECTADO'

        assert.deepEqual(result, expected)
    })
})