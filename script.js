// 001 --------------------------------
function CortaBarra(numero, numero2) {
    if (numero == 0 || numero2 == 0)
        return -1;
    else {
        return (numero * numero2) - 1;
    }
    ;
}
console.log(CortaBarra(7, 3));
// 002 -------------------------------
var reMaiusculas = new RegExp(/[A-Z]/g);
var reMinusculas = new RegExp(/[a-z]/g);
function Letras(palavra) {
    var qtdMaiusculas = palavra.replace(reMinusculas, '');
    var qtdMinusculas = palavra.replace(reMaiusculas, '');
    if (qtdMaiusculas.length > qtdMinusculas.length) {
        return palavra.toUpperCase();
    }
    else if (qtdMaiusculas.length < qtdMinusculas.length) {
        return palavra.toLowerCase();
    }
    else {
        return palavra.toLowerCase();
    }
}
