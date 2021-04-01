document.write(
  '<b>Napraviti dva niza, m i n, sa proizvoljnim brojem elemenata. Ako je broj elemenata u nizu m veći od broja elemeneta u nizu n  ispisati sve elemente niza m. U suprotnom, ispisati elemente niza n.</b><br><br>'
);

let m = [1, 2, 3, 4, 5];
let n = new Array(10, 11, 12, 13, 'Petar', 'Milica');

console.log(m);
console.log(n);

if (m.length > n.length) {
  document.write(m);
} else {
  document.write(n);
}
