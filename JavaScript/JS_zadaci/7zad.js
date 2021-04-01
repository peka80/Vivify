document.write(
  '<b>Ispisati elemente proizvoljnog niza brojeva, uvećane za 1.</b><br><br>'
);

let niz = [1, 4, 6, 7, 4, 56, 76];
document.write(niz);
document.write('<br>');

for (var i = 0; i < niz.length; i++) {
  niz[i] += 1;
}

document.write(niz);
