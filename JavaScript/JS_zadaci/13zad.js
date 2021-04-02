document.write(
  '<b>Zadatak 13<br>Kreirati objekat person koji ima firstName, lastName i age i ispisati ih na ekranu</b><hr>'
);

let person = {
  firstName: 'Petar',
  lastName: 'Dragovic',
  age: 41,
};

document.write(
  'Ime: ' +
    person.firstName +
    '<br>' +
    'Last name: ' +
    person.lastName +
    '<br>' +
    'Age: ' +
    person.age
);
