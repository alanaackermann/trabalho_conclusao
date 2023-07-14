const test = require('tape')
const supertest = require('supertest')
const app = require('./validacao_porcentagem_valor')

test('teste api 100-30', (t) => {
    supertest(app)
    .get('/aplicarporcentagem/30/30/100')
    .expect('Content-Type',/json/)
    .expect(200)
    .end((err, res) => {
        t.assert(res.body.valorPorcentagem === 30, 'Valor correto')
        t.end()
    })
})
