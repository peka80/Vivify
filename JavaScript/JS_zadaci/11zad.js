document.write(
  '<b>Sabrati sve elemente proizvoljnog niza brojeva i ispisati zbir na ekranu.</b><br><br>'
);

// GENERATOR PROIZVOLJNOG NIZA BROJEVA (BEZ PONAVLJANJA CIFARA)
function generator(quantity, max) {
  let niz = [];
  while (niz.length < quantity) {
    let candidateInt = Math.floor(Math.random() * max) + 1;
    if (niz.indexOf(candidateInt) === -1) niz.push(candidateInt);
  }
  return niz;
}
let novNiz = generator(5, 50); // DEFINISAN NOV NIZA SA GORE GENERISANIM BROJEVIMA
let newNiz = novNiz.join(', ');
document.write(newNiz);
document.write('<br>');
// FUNKCIJA SABIRANJA SVIH ELEMENATA (BROJEVA) GORE GENERISANOG NIZA
sabrati = function (novNiz) {
  return novNiz.reduce((a, b) => a + b, 0);
};
let zbir = sabrati(novNiz);
document.write('Zbri svih elemenata proizvoljnog niza je: ' + zbir);
