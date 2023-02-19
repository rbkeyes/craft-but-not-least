const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // ❄️MX: edited below to redirect to profile page
        document.location.replace('profile/:id');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  

  