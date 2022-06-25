export default function initRating() {
  function rate() {
    const $submitBtn = document.querySelector('[data-submit]');
    const $grades = document.querySelectorAll('[data-grades] li');
    const $gradeSection = document.querySelector('[data-grades]');
    const events = ['click', 'touchstart'];

    $grades.forEach((grade, index) => {
      events.forEach(e => grade.addEventListener(e, () => pickGrade(index)))
    })
  
    function pickGrade(index) {
      $grades.forEach(grade => grade.classList.remove('active')); 
      $submitBtn.nextElementSibling.innerHTML = "";
      $submitBtn.classList.remove('error-alert');
      $grades[index].classList.add('active'); 
      const grade = $grades[index].innerHTML;
      const $warning = document.querySelector('[data-warning]');
      $warning.innerHTML = `You selected ${grade} out of 5`;
      $gradeSection.setAttribute("data-grades", "picked");
    }  
  }
  
  rate();
}
