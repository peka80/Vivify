document.write(
  '<b>Zadatak 10.<br>Ispisati svaki drugi element proizvoljnog niza.</b><br><br>'
);

// let n = 15;
// let i = 0;
// let niz = Array(n);

// while (i < n) niz[i++] = i;
// document.write(niz);
// document.write('<br>');

let niz = [
  'Petar',
  'Dragana',
  'Milica',
  'Dragovic',
  23,
  500,
  null,
  true,
  'Ari',
];
document.write(niz);
document.write('<br>');
document.write(niz.filter((x, i) => i % 2));
