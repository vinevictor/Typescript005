// 001 --------------------------------
function CortaBarra(numero, numero2) {
    if (numero == 0 || numero2 == 0)
        return -1;
    else {
        return numero * numero2 - 1;
    }
}
console.log(CortaBarra(7, 3));
// 002 -------------------------------
var reMaiusculas = new RegExp(/[A-Z]/g);
var reMinusculas = new RegExp(/[a-z]/g);
function Letras(palavra) {
    var qtdMaiusculas = palavra.replace(reMinusculas, "");
    var qtdMinusculas = palavra.replace(reMaiusculas, "");
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
//003 --------------------------------
var Lutador = /** @class */ (function () {
    function Lutador(nome, vida, ataque) {
        this.Nome = nome;
        this.Vida = vida;
        this.Ataque = ataque;
    }
    return Lutador;
}());
function DeclararVencedor(lutador1, lutador2, primeiroAtaque) {
    do {
        if (primeiroAtaque == lutador1.Nome) {
            lutador2.Vida -= lutador1.Ataque;
            lutador1.Vida -= lutador2.Ataque;
            console.log("".concat(lutador1.Nome, " atacou ").concat(lutador2.Nome, ": ").concat(lutador2.Nome, " agora tem ").concat(lutador2.Vida));
            if (lutador2.Vida > 0) {
                console.log("".concat(lutador2.Nome, " atacou ").concat(lutador1.Nome, ": ").concat(lutador1.Nome, " agora tem ").concat(lutador1.Vida));
            }
        }
        else if (primeiroAtaque == lutador2.Nome) {
            lutador1.Vida -= lutador2.Ataque;
            lutador2.Vida -= lutador1.Ataque;
            console.log("".concat(lutador2.Nome, " atacou ").concat(lutador1.Nome, ": ").concat(lutador1.Nome, " agora tem ").concat(lutador1.Vida));
            if (lutador1.Vida > 0) {
                console.log("".concat(lutador1.Nome, " atacou ").concat(lutador2.Nome, ": ").concat(lutador2.Nome, " agora tem ").concat(lutador2.Vida));
            }
        }
    } while (lutador1.Vida > 0 && lutador2.Vida > 0);
    if (lutador1.Vida > 0) {
        return "".concat(lutador1.Nome, " Ganhou o Duelo!");
    }
    else {
        return "".concat(lutador2.Nome, " Ganhou o Duelo!");
    }
}
console.log(DeclararVencedor(new Lutador("Fulano", 10, 2), new Lutador("Ciclano", 7, 3), "Ciclano"));
