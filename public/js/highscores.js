const backButtonHandler = () => {
  fetch('/api/users/', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.id);
      document.location.replace(`/teampage/${data.id}`);
    });
};

document
  .querySelector('#back-btn')
  .addEventListener('click', backButtonHandler);
