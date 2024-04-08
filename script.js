const FAQItems = document.querySelectorAll('.FAQ-item');

FAQItems.forEach(FAQItem => {
  FAQItem.addEventListener('click', () => {
    const answerContent = FAQItem.querySelector('.FAQ-content');
    answerContent.classList.toggle('show'); // Toggle class 'show' on answer element

    const toggleElement = FAQItem.querySelector('.FAQ-header .toggle'); // Select toggle element
    const arrowElement = FAQItem.querySelector('.FAQ-header .arrow'); // Select arrow element

    if (answerContent.classList.contains('show')) {
      toggleElement.classList.add('active'); // Add 'active' class to toggle element when answer is open
      arrowElement.classList.remove('fa-down'); // Remove 'fa-down' class from arrow (if applicable)
      arrowElement.classList.add('fa-up'); // Add 'fa-up' class to arrow (if applicable)
    } else {
      toggleElement.classList.remove('active'); // Remove 'active' class from toggle element when answer is closed
      arrowElement.classList.remove('fa-up'); // Remove 'fa-up' class from arrow (if applicable)
      arrowElement.classList.add('fa-down'); // Add 'fa-down' class to arrow (if applicable)
    }
  });
});