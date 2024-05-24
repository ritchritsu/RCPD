

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
  
      if (entry.isIntersecting && !entry.target.isAnimated) {
        // Element is visible and hasn't been animated yet
        entry.target.classList.add('show');
        entry.target.isAnimated = true; // Mark the element as animated
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  
  // Initialize 'isAnimated' flag for each element (false by default)
  hiddenElements.forEach((el) => {
    el.isAnimated = false;
    observer.observe(el);
  });

  
  const inquireButton = document.getElementById('inquire-button');
  const popupForm = document.getElementById('popup-form');
  
  inquireButton.addEventListener('click', function() {
    if (popupForm.classList.contains('show')) {
      popupForm.classList.remove('show'); // Hide the popup
    } else {
      popupForm.classList.add('show'); // Show the popup
    }
  });
  


