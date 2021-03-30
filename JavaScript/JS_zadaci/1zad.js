document.write(
  '<b>Napisati program koji ispituje da li je proizvod dve proizvoljne promenljive tipa number veći od njihovog zbira i rezultat ispisati na ekranu</b> <br><br>'
);

let num1 = 5;
let num2 = 2;
let zbir = num1 + num2;
let proizvod = num1 * num2;

if (zbir < proizvod) {
  document.write(
    'Proizvod broja ' +
      num1 +
      ' i broja ' +
      num2 +
      ' iznosi ' +
      proizvod +
      '. Sto je vece od njihovog zbira, koji je ' +
      zbir +
      '.'
  );
} else if (zbir > proizvod) {
  document.write(
    'Zbir broja ' +
      num1 +
      ' i broja ' +
      num2 +
      ' iznosi ' +
      zbir +
      '. Sto je vece od njihovog proizvoda, koji je ' +
      proizvod +
      '.'
  );
} else {
  document.write(
    'Zbir i proizvod brojeva ' + num1 + ' i ' + +num2 + ' je isti broj.'
  );
}
