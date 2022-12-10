// 001 --------------------------------

function CortaBarra(numero: number, numero2: number): number {
  if (numero == 0 || numero2 == 0) return -1;
  else {
    return numero * numero2 - 1;
  }
}

console.log(CortaBarra(7, 3));

// 002 -------------------------------
let reMaiusculas: RegExp = new RegExp(/[A-Z]/g);
let reMinusculas: RegExp = new RegExp(/[a-z]/g);

function Letras(palavra: string): string {
  let qtdMaiusculas: string = palavra.replace(reMinusculas, "");
  let qtdMinusculas: string = palavra.replace(reMaiusculas, "");

  if (qtdMaiusculas.length > qtdMinusculas.length) {
    return palavra.toUpperCase();
  } else if (qtdMaiusculas.length < qtdMinusculas.length) {
    return palavra.toLowerCase();
  } else {
    return palavra.toLowerCase();
  }
}

//003 --------------------------------

class Lutador {
  Nome: string;
  Vida: number;
  Ataque: number;

  constructor(nome: string, vida: number, ataque: number) {
    this.Nome = nome;
    this.Vida = vida;
    this.Ataque = ataque;
  }
}

function DeclararVencedor(
  lutador1: Lutador,
  lutador2: Lutador,
  primeiroAtaque: string
): string {
  do {
    if (primeiroAtaque == lutador1.Nome) {
      lutador2.Vida -= lutador1.Ataque;
      lutador1.Vida -= lutador2.Ataque;
      console.log(
        `${lutador1.Nome} atacou ${lutador2.Nome}: ${lutador2.Nome} agora tem ${lutador2.Vida}`
      );
      if (lutador2.Vida > 0) {
        console.log(
          `${lutador2.Nome} atacou ${lutador1.Nome}: ${lutador1.Nome} agora tem ${lutador1.Vida}`
        );
      }
    } else if (primeiroAtaque == lutador2.Nome) {
      lutador1.Vida -= lutador2.Ataque;
      lutador2.Vida -= lutador1.Ataque;
      console.log(
        `${lutador2.Nome} atacou ${lutador1.Nome}: ${lutador1.Nome} agora tem ${lutador1.Vida}`
      );
      if (lutador1.Vida > 0) {
        console.log(
          `${lutador1.Nome} atacou ${lutador2.Nome}: ${lutador2.Nome} agora tem ${lutador2.Vida}`
        );
      }
    }
  } while (lutador1.Vida > 0 && lutador2.Vida > 0);
  if (lutador1.Vida > 0) {
    return `${lutador1.Nome} Ganhou o Duelo!`;
  } else {
    return `${lutador2.Nome} Ganhou o Duelo!`;
  }
}

console.log(
  DeclararVencedor(
    new Lutador("Fulano", 10, 2),
    new Lutador("Ciclano", 7, 3),
    "Ciclano"
  )
);
