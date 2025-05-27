const btn = document.getElementById("btn");
const userCard = document.getElementById("userCard");
const profileImage = document.getElementById("profileImage");
const fullName = document.getElementById("fullName");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const locationEl = document.getElementById("location");

// Mock data (simulates API response)
const mockData = {
  results: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Gerben",
        last: "Ottenhof"
      },
      location: {
        street: {
          number: 893,
          name: "Akkersweg"
        },
        city: "Pieterburen",
        state: "Zeeland",
        country: "Netherlands",
        postcode: "9794 WN"
      },
      email: "gerben.ottenhof@example.com",
      phone: "(055) 3777674",
      cell: "(06) 72330258",
      picture: {
        large: "https://randomuser.me/api/portraits/men/38.jpg "
      },
      nat: "NL"
    }
  ]
};

function generateRandomUser() {
  const user = mockData.results[0];

  // Fill the card with user's data
  profileImage.src = user.picture.large;
  fullName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
  phone.textContent = user.phone;
  email.textContent = user.email;
  locationEl.textContent = `${user.location.city}, ${user.location.country}`;

  // Show the card with animation
  userCard.classList.add("show");
}

btn.addEventListener("click", generateRandomUser);