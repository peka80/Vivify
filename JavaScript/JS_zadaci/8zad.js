document.write(
  '<b>Ispisati elemente proizvoljnog niza brojeva, unazad.</b><br><br>'
);

// function niz(min, max) {
//   const r = Math.random() * (max - min) + min;
//   return Math.ceil(r);
// }
// for (let i = 0; i < 20; i++) {
//   console.log(niz(0, 20));
// }
let N = 10,
  i = 0,
  a = Array(N);

while (i < N) a[i++] = i;
a.reverse();
console.log(a);
