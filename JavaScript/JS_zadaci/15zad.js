document.write(
  'Zadatak 15<br>Funkciju humanToDogYears  iz prethodnog zadatka napisati kao anonimnu funkciju i smestiti je u promenljivu anonymousDogAge.<hr>'
);

let anonymousDogAge = function (n) {
  let dogAge = n * 7;
  return dogAge;
};

document.write(anonymousDogAge(7));
