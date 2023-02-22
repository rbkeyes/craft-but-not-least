const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/login", {
      method: "GET",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // ❄️MX: onclick function on login button, redirect to profile page only 
    // ⚠️will affect on sell page when required login
    // const profilePage = document.getElementById('signinBtn');
    // profilePage.addEventListener('click', function () {
    //   window.location.href = `api/profile/${req.session.id}`
    // }
    // );

    if (response.ok) {
      // profilePage();
      // window.location.href = `api/profile/${req.session.id}`;
      document.location.replace('/')
    } else {
      // console.error(response.statusText);
      alert("Failed to log in.");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
