const assert = require('assert')
const Postgres = require('../db/strategies/postgres')
const ContextStrategy = require('../db/strategies/base/contextStrategy')

const context = new ContextStrategy(new Postgres())
const MOCK_HEROI_CADASTRAR = { 
    nome: 'Homem Aranha', 
    poder: 'Teia' 
}

describe('Postgres Strategy', function () {
    this.timeout(Infinity)
    this.beforeAll(async function () {
        await context.connect()
    })
    
    it('PostgresSQL Connection', async function () {
        const result = await context.isConnected()
        assert.equal(result, true)
    })

    it('PostgresSQL Register', async function () {
        const result = await context.create(MOCK_HEROI_CADASTRAR)
        delete result.id

        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })
    
    it('PostgresSQL Listing', async function () {
        const [result] = await context.read({ nome: MOCK_HEROI_CADASTRAR.nome })
        delete result.id

        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })
})