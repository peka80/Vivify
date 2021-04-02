document.write(
  'Zadatak 14<br>Napisati funkciju humanToDogYears , koja prima starost u godinama n, i vraca starost u psećim godinama (koja je 7 puta veća). <hr>'
);

function humanToDogYears() {
  let n = document.getElementById('age').value;
  let dogYear = n * 7;
  document.getElementById('rez').innerHTML = dogYear;
}

// funkcija za ENTER key da isto kao i Click Button
function inputKeyUp(e) {
  e.which = e.which;
  if (e.which == 13) {
    humanToDogYears();
  }
}
