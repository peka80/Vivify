document.write(
  '<b>Napisati program koji sabira prvih 10 dvocifrenih brojeva.</b><br><br>'
);

const broj = 20;
let zbir = 0;

for (let i = 10; i < broj; i++) {
  zbir += i;
}

document.write('Zbir prvih 10 dvocifrenih brojeva je: ', zbir);
