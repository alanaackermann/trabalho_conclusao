const test = require('tape')
const func = require('./teste')

function validarPorcentagem(valor, porcentagem, valorBase) {
    const porcentagemCalculada = (porcentagem / 100) * valorBase;
    return valor === porcentagemCalculada;
  }
  
  test('validarPorcentagem', (t) => {
    t.assert(func.validarPorcentagem(30, 30, 100) === 30, "true 30 é 30% de 100")
    t.end()
})

test('validarPorcentagem', (t) => {
    t.assert(func.validarPorcentagem(50, 30, 100) === 30, "false 50 não é 30% de 100")
    t.end()
})

test('validarPorcentagem', (t) => {
    t.assert(func.validarPorcentagem(30, 20, 100) === 30, "false 30 não é 20% de 100")
    t.end()
})

 
