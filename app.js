function convert(degree) {
  let num;

  if (degree == 'C') {
    num = (document.getElementById('c').value * 9) / 5 + 32;
    document.getElementById('f').value = Math.round(num);
  } else {
    num = ((document.getElementById('f').value - 32) * 5) / 9;
    document.getElementById('c').value = Math.round(num);
  }
}
