document.write(
  '<b>Napraviti dve promenljive i dodeliti im prozivoljne vrednosti. Ukoliko su obe promenljive tipa “number”, ispisati poruku “Promenljive su tipa number”, u suprotnom ispisati “Barem jedna promenljiva nije tipa number”.</b> <br><br>'
);

let broj1 = 10;
let broj2 = 2;

if (typeof broj1 === 'number' && typeof broj2 === 'number') {
  document.write('Promenljive su tipa number.');
} else {
  document.write('Barem jedna promenljiva nije tipa number.');
}
