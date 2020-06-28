const fact = document.querySelector('#fact');
const factText = document.querySelector('#factText');
const numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input', getFactFecthAPI);

function getFactAjax() {
  let number = numberInput.value;
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://numbersapi.com/' + number);
  xhr.onload = function () {
    if (this.status == 200 && number != '') {
      fact.style.display = 'block';
      factText.innerText = this.responseText;
    } else {
      fact.style.display = 'none';
    }
  }
  xhr.send();
}

function getFactFecthAPI() {
  let number = numberInput.value;
  fetch('http://numbersapi.com/' + number)
    .then(response => response.text())
    .then(data => {
      if (number != '') {
        fact.style.display = 'block';
        factText.innerText = data;
      } else {
        fact.style.display = 'none';
      }
    })
    .catch(err => console.log(error));
}