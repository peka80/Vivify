document.write(
  '<b>Zadatak 16<br>Kreirati funkciju koja za parametar uzima niz i vraca poslednji clan tog niza</b><hr>'
);

let niz = ['Petar', 'Dragana', 'Milica'];

function last(niz) {
  document.write('Poslednji element niza je: ' + niz[niz.length - 1]);
}

last(niz);
