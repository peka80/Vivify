document.write(
  '<b>Napisati program koji ispituje da li je proizvoljan broj paran ili neparan i rezultat ispisati na ekranu.</b> <br><br>'
);

let broj = 9;

if (broj % 2 == 0) {
  document.write('Broj ' + broj + ' je paran.');
} else {
  document.write('Broj ' + broj + ' je neparan.');
}
