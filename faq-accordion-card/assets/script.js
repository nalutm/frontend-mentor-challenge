document.addEventListener('DOMContentLoaded', () => {
  const $questions = document.querySelectorAll('[data-faq] dt');
  const $answers = document.querySelectorAll('.faq__answer');
  const $arrow = document.querySelectorAll('[data-arrow]');

  const active = 'active';
  const addClass = element => element.classList.add(active);
  const toggleClass = element => element.classList.toggle(active);
  const addEvent = (element, e, cb) => element.addEventListener(e, cb);
  const arrayInteraction = element =>
    element.forEach((question, index) =>
      addEvent(question, 'click', () => handleClick(index))
    );
  
  const handleClick = index => {
    toggleClass($questions[index]);
    toggleClass($arrow[index]);
    toggleClass($answers[index]);
      $answers[index].classList.remove('inactive');
  }

  $answers.forEach(answer => answer.classList.add('inactive'));

  addClass($questions[1]);
  addClass($answers[1]);
  addClass($arrow[1]);
  arrayInteraction($questions);
  arrayInteraction($arrow);
      
})