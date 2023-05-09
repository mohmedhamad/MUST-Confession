// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const confession = document.getElementById('confess-text').value;

  // Validate the input values
  if (confession !== '') {
    alert('Thank you for your confession, hope it helps you feel better!');
    form.reset();
  } else if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  } else {
    // Submit zhe form if all inputs are valid
    alert('Thank you for your message, ' + name + '! We will get back to you soon.');
    form.reset();
  }
});