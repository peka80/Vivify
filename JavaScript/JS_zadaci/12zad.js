document.write(
  '<b>Zadatak 12<br>a) Kreirati 2 niza: array1 ciji su elementi "Banana" i "Orange" i array2 ciji su elementi "Apple" i "Mango"<br>b) Spojiti clanove ovog niza koristeci metod concat i ispisati rezultat.<br>c) Dodati novi element  "Lemon" u  array1 koristeci metod push i ispisati rezultat<br>d) Dodati element "Strawberry" na poziciju 1 u array2 koristeci metod splice i ispisati rezultat.<b><hr>'
);

// pod A zadatak
document.write('<b>a)</b><br><br>');
let array1 = ['Banana', 'Orange'];
let array2 = ['Apple', 'Mango'];
document.write('array1 = ' + array1.join(', ') + '<br>');
document.write('array2 = ' + array2.join(', ') + '<br>');

document.write('<br><hr>');

// pod B zadatak
document.write('<b>b)</b><br><br>');
newArray = array1.concat(array2); // Kreiranje novog niza spajanjem dva prethodna
document.write(newArray.join(', '));
document.write('<br><br><hr>');

// pod C zadatak
document.write('<b>c)</b><br><br>');

array1.push('Lemon');
document.write(array1.join(', '));
document.write('<br><br><hr>');

// pod D zadatak
document.write('<b>d)</b><br><br>');

array2.splice(0, 0, 'Strawberry');
document.write(array2.join(', '));
