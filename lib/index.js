// Add your code here
var counter = 0;

function setCounter() {
   document.querySelector('#counter').textContent = ++counter;
}

window.addEventListener('scroll',  CallAfterSomeTime(() => setCounter()));

function CallAfterSomeTime(func, delay=2000) {
  let timer;
  return () => {
  clearTimeout(timer);
  timer = setTimeout(() => {func()}, delay);
  }
}

window.addEventListener('load', function() {

for (var i = 0; i < 10000; i++) {
  var el = document.createElement('p')
  el.className = 'item'
  el.innerHTML = 'Lorem Ipsum Text ' + (i + 1)
  document.querySelector('#list').appendChild(el)
}


})
