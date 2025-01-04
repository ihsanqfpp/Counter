let count = 0;

function increase() {
  count++;
  document.getElementById('count').innerHTML = count;
}

function decrease() {
  count--;
  document.getElementById('count').innerHTML = count;
}
function Reset() {
    count = " ";
    document.getElementById('count').innerHTML = count;
  }
