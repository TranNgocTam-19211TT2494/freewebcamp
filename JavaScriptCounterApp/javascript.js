let btnSubtract = document.getElementById('subtract');
let btnAdd = document.getElementById('add');
let output = document.getElementById('output');
let result;

btnAdd.addEventListener('click', function () { 
  result = Number(output.innerHTML) + 1;

  if(result > 10) {
    result = 0;
  }

  output.innerHTML = result;
});

btnSubtract.addEventListener('click', function () {
  result = Number(output.innerHTML) - 1;
  if(result < 0) {
    result = 0;
  }
  
  output.innerHTML = result;
});