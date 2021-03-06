const newUserHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch(`/api/users/createuser`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Account created! Return home to log in!');
    } else {
      console.log(response.statusText);
    }
  }
};

document
  .querySelector('#user-submit')
  .addEventListener('click', newUserHandler);

document
  .querySelector('#home')
  .addEventListener('click', function homeHandler(event) {
    event.preventDefault();
    document.location.replace('/');
  });
