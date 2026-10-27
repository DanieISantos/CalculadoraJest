const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', ()=>{
    expect(somar(2,3)).toBe(5);
});

test('Deve somar 3 + 7 e retornar 13', ()=>{
    expect(somar(6,7)).toBe(13);
});