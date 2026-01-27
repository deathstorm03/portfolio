fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(data => {
    document.getElementById("blague").textContent = data.value;
  })
  .catch(error => {
    document.getElementById("blague").textContent =
      "Impossible de charger la blague";
    console.error(error);
  });