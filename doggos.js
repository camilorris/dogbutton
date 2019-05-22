const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  fetch(DOG_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "cute doggo";
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
