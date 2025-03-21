const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;

  // TODO: Complete function
  if (element.matches('div')) {
    const state = element.getAttribute('data-state');
    if (state === 'hidden') {
      element.textContent = element.getAttribute('data-number');
      element.setAttribute('data-state', 'visible');
    }
    else {
      element.textContent = '';
      element.setAttribute('data-state', 'hidden');
    }
  }
});
