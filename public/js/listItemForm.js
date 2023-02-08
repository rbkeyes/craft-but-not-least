const listItemFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const itemName = document.getElementById('item-name').value.trim();
    const description = document.getElementById('description').value.trim();
    const listPrice = document.getElementById('list-price').value.trim();
    // not 100% sure what we'll need for for the photo upload, adding this for now but can edit later as needed
    const photoUpload = document.getElementById('photo-upload');
    // there will be multiple tags, want to get all of them
    const tag = document.querySelectorAll('#tag');
    
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  