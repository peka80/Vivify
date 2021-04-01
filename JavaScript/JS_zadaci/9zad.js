document.write(
  '<b>6. Zadatak <br>Napraviti promenljive a i b, koje sadrže proizvoljne brojeve, i promenljivu operacija koja sadrzi string sa nazivom operacije (moze da bude ‘saberi’, ‘oduzmi’, ‘pomnozi’, ‘podeli’). Ispisati rezultat operacije čiji naziv je sadržan u promenljivoj operacija sa vrednostima a i b. Npr. ako je vrednost promenljive operacija ‘saberi’, ispisati rezultat a + b (koristiti switch).</b><br><br>'
);

let a = 5;
let b = 10;
let operacija = 'Saberi';

switch (operacija) {
  case 'Saberi':
    document.write(
      'Zbir promenljive A (' + a + ') i promenljive B (' + b + ') je ' + (a + b)
    );
    break;
  case 'Oduzmi':
    document.write(
      'Razlika promenljive A (' +
        a +
        ') i promenljive B (' +
        b +
        ') je ' +
        (a - b)
    );
    break;
  case 'Pomnozi':
    document.write(
      'Proizvod promenljive A (' +
        a +
        ') i promenljive B (' +
        b +
        ') je ' +
        a * b
    );
    break;
  case 'Podeli':
    document.write(
      'Količnik promenljive A (' +
        a +
        ') i promenljive B (' +
        b +
        ') je ' +
        a / b
    );
    break;
  default:
    document.write('Nepoznata operacija!');
}
