export default function initSubmitRating() {
  function submitRating() {
    const events = ['click', 'touchstart'];
    const $submitBtn = document.querySelector('[data-submit]');
    const $form = document.querySelector('[data-form]');

    events.forEach(e => 
      $submitBtn.addEventListener(e, send)
    )
    
    function send() {
      const $thankCard = document.querySelector('[data-thanks]');
      $form.classList.add('submit');
      $thankCard.classList.add('active');
    }
  }
  
  const observeTarget = document.querySelector('[data-grades]');
  const observer = new MutationObserver(handleMutation);
  
  observer.observe(observeTarget, {attributes: true})
  
  function handleMutation(mutation) {
    const $gradeSection = document.querySelector('[data-grades]');
    if(mutation[0].target.dataset.grades === 'picked') {
      submitRating();
    }
  }
}
