const test = require('tape')
const supertest = require('supertest')
const string = require('./string')
const func = require('./teste')
const string = "Zebra";

if (string.charAt(0) === 'Z') {
  console.log("A primeira letra da string é 'Z'.");
} else {
  console.log("A primeira letra da string não é 'Z'.");
}

function validarPrimeiraLetra(string) {
  return string.charAt(0) === 'Z';
}

console.log(validarPrimeiraLetra("Zebra")); // true
console.log(validarPrimeiraLetra("Girafa")); // false
console.log(validarPrimeiraLetra("")); // false

test('teste string Zebra', (t) => {
  supertest(string)
  .get('/validarPrimeiraLetra/Z')
  .expect('Content-Type',/json/)
  .expect(200)
  .end((err, res) => {
      t.assert(res.body.validarPrimeiraLetra === Z, 'Letra correta')
      t.end()
  })
})