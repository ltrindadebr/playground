// Resumo e revisão de sintaxe
// Functions
function normalFunction(varA, varB) {
    return varA + varB;
}

let anonFunction = function(varA, varB) {
    return varA + varB;
}
 
let arrowFunction = (varA, varB) => {
    return varA + varB;
}

let resultado = anonFunction(5,4);
console.log(resultado);

// Arrays
let arrayTeste = ['1', '2'];
arrayTeste.push('3');

// Objetos
let objectTest = {
    atributo1 : 'A',
    atributo2 : '1',
    atributo3 : function () {
        return this.atributo1 + ' ' + this.atributo2; 
    }
}
objectTest.atributo1 = B;
console.dir(objectTest);

let arrayExample = ['op1', 'op2', 'op3'];

arrayExample.forEach(function(operacao) {
    console.log(operacao);
});

for (let operacao of arrayExample) {
    console.log(operacao);
}