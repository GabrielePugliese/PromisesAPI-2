fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    let user = data.results[0];
    document.querySelector('#photo').src = user.picture.large;
    document.querySelector('#fullname').textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
    document.querySelector('#username').textContent = `Username: ${user.login.username}`;
    document.querySelector('#dob').textContent = `Età: ${user.dob.age} anni`;
    document.querySelector('#gender').textContent = `Sesso: ${user.gender}`;
    document.querySelector('#email').textContent = `Email: ${user.email}`;
    document.querySelector('#address').textContent = `Indirizzo: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;
    document.querySelector('#phone').textContent = `Telefono: ${user.phone}`;
    document.querySelector('#nat').textContent = `Nazionalità: ${user.nat}`;
  });