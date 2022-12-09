// 001 --------------------------------

function CortaBarra(numero: number, numero2: number): number{
    if(numero == 0 || numero2 == 0) return -1;
    else{ return (numero * numero2) - 1 } ;
}

console.log(CortaBarra(7,3));

// 002 -------------------------------
let reMaiusculas: RegExp = new RegExp (/[A-Z]/g);
let reMinusculas: RegExp = new RegExp (/[a-z]/g);

function Letras(palavra: string): string{
    let qtdMaiusculas: string = palavra.replace(reMinusculas, '');
    let qtdMinusculas: string = palavra.replace(reMaiusculas, '');

    if(qtdMaiusculas.length > qtdMinusculas.length){
        return palavra.toUpperCase();
    }else if(qtdMaiusculas.length < qtdMinusculas.length){
        return palavra.toLowerCase();
    }else{
        return palavra.toLowerCase();
    }
}