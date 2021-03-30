document.write(
  '<b>Pomocu while petlje napisati program koji racuna zbir prvih 20 neparnih brojeva.</b><br><br>'
);

let broj = 1;
let zbir = 0;

while (broj < 40) {
  zbir = zbir + broj;
  broj += 2;
}
document.write('Zbir prvih 20 neparnih brojeva je ' + zbir + '.');
