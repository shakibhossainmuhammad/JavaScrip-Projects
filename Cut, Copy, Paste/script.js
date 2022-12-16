// Copy section starts here
let CopyText = document.getElementById('CopyText');
let CopyBTN = document.getElementById('CopyBTN');

CopyBTN.addEventListener('click', function () {
  navigator.clipboard.writeText(CopyText.value);
  alert('Copy success!');
});
// Copy section ends here

// Copy section starts here
let Cut = document.getElementById('Cut');
let CutBTN = document.getElementById('CutBTN');

CutBTN.addEventListener('click', function () {
  navigator.clipboard.writeText(Cut.value);
  Cut.value = ' ';
  alert('Cut success!');
});
// Copy section ends here

// Paste section starts here
let Paste = document.getElementById('Paste');
let PasteBTN = document.getElementById('PasteBTN');

PasteBTN.addEventListener('click', function () {
  Paste.value = ' ';
  navigator.clipboard.readText().then(function (text) {
    Paste.value = text;
  });
  alert('Paste success!');
});
// Paste section ends here
