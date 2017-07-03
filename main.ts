var minhaVar = 'minha variavel';

function minhaFunc(x, y) {
    return x + y;
}

//es 6
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor * 2;
});

numeros.map(valor =>  valor * 2);

class Matematica {
    soma(x, y) {
        return x + y;
    }
}

var n1: string = 'sdfsdf';
var n2: any = 'sdfsdf';
n2 = 4;

/* VER
 * http://es6-features.org/#Constants
 * https://babeljs.io/
 */