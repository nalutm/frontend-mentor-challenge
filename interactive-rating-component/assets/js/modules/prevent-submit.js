export default function initPreventSubmit() {
  const events = ['click', 'touchstart'];
  const $submitBtn = document.querySelector('[data-submit]');

  function blockSubmit() {
    events.forEach(e => $submitBtn.addEventListener(e, preventSubmit))
  }

  function preventSubmit(e) {
    e.preventDefault();
    $submitBtn.nextElementSibling.innerHTML = "Erro! Escolha uma nota";
    $submitBtn.classList.add('error-alert');
  }

  blockSubmit();
}