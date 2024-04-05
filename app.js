document.addEventListener("DOMContentLoaded", () => {
  const countryContainer = document.getElementById("countryContainer");
  countryContainer.classList.add("container");
  const searchInput = document.getElementById("searchInput");
  const clearButton = document.getElementById("clearButton");

  let data = []; // define data outside the event listener
  console.log(data);

  // Function to create card for each country
  function createCard(country) {
      //Container that contains each country details
      const card = document.createElement("div");
      card.classList.add("card");

      //Image of country - flag
      const img = document.createElement("img");
      img.src = country.flag;
      img.alt = country.name;
      img.classList.add("img_style");
      card.appendChild(img);

      // Card Contents Container right below the image
      const cardContent = document.createElement("div");
      cardContent.classList.add("card_content");

      //Title or name of country
      const title = document.createElement("h2");
      title.textContent = country.name;
      cardContent.appendChild(title);

      //Population
      const population = document.createElement("p");
      population.textContent = "Population:" + country.population.toLocaleString();
      cardContent.appendChild(population);

      // Capital Of Country
      const capital = document.createElement("p");
      capital.textContent = "Capital:" + country.capital;
      cardContent.appendChild(capital);

      // Region Of Country
      const region = document.createElement("p");
      region.textContent = "Region:" + country.region;
      cardContent.appendChild(region);

      // Add the card content to the main country card
      card.appendChild(cardContent);

      return card;
  }

  // Function to filter countries based on search term
  function filterCountries(term) {
      const filteredCountries = data.filter((country) =>
          country.name.toLowerCase().includes(term.toLowerCase())
      );
      renderCountries(filteredCountries);

      // Enable/disable clear button based on input
      clearButton.disabled = term.length === 0;
      clearButton.style.backgroundColor = term.length === 0 ? "lightgray" : "red";
  }

  // Function to render countries
  function renderCountries(countries) {
      countryContainer.innerHTML = "";
      countries.forEach((country) => {
          const card = createCard(country);
          countryContainer.appendChild(card);
      });
  }

  // Event listener for search input
  searchInput.addEventListener("input", (event) => {
      const searchTerm = event.target.value;
      filterCountries(searchTerm);
  });

  // Event listener for clear button click
  clearButton.addEventListener("click", () => {
      searchInput.value = ""; // Clear the search input
      filterCountries(""); // Filter countries with an empty search term
  });

  // Fetch data
  fetch("country.json")
      .then((response) => response.json())
      .then((fetchedData) => {
          data = fetchedData; // update the data variable
          renderCountries(data);
          console.log("fetched data", fetchedData);
      })
      .catch((error) => console.log(error));
});
document.addEventListener("DOMContentLoaded", () => {
  const countryContainer = document.getElementById("countryContainer");
  countryContainer.classList.add("container");
  const searchInput = document.getElementById("searchInput");
  const clearButton = document.getElementById("clearButton");

  let data = []; // define data outside the event listener
  console.log(data);

  // Function to create card for each country
  function createCard(country) {
      //Container that contains each country details
      const card = document.createElement("div");
      card.classList.add("card");

      //Image of country - flag
      const img = document.createElement("img");
      img.src = country.flag;
      img.alt = country.name;
      img.classList.add("img_style");
      card.appendChild(img);

      // Card Contents Container right below the image
      const cardContent = document.createElement("div");
      cardContent.classList.add("card_content");

      //Title or name of country
      const title = document.createElement("h2");
      title.textContent = country.name;
      cardContent.appendChild(title);

      //Population
      const population = document.createElement("p");
      population.textContent = "Population:" + country.population.toLocaleString();
      cardContent.appendChild(population);

      // Capital Of Country
      const capital = document.createElement("p");
      capital.textContent = "Capital:" + country.capital;
      cardContent.appendChild(capital);

      // Region Of Country
      const region = document.createElement("p");
      region.textContent = "Region:" + country.region;
      cardContent.appendChild(region);

      // Add the card content to the main country card
      card.appendChild(cardContent);

      return card;
  }

  // Function to filter countries based on search term
  function filterCountries(term) {
      const filteredCountries = data.filter((country) =>
          country.name.toLowerCase().includes(term.toLowerCase())
      );
      renderCountries(filteredCountries);

      // Enable/disable clear button based on input
      clearButton.disabled = term.length === 0;
      clearButton.style.backgroundColor = term.length === 0 ? "lightgray" : "red";
  }

  // Function to render countries
  function renderCountries(countries) {
      countryContainer.innerHTML = "";
      countries.forEach((country) => {
          const card = createCard(country);
          countryContainer.appendChild(card);
      });
  }

  // Event listener for search input
  searchInput.addEventListener("input", (event) => {
      const searchTerm = event.target.value;
      filterCountries(searchTerm);
  });

  // Event listener for clear button click
  clearButton.addEventListener("click", () => {
      searchInput.value = ""; // Clear the search input
      filterCountries(""); // Filter countries with an empty search term
  });

  // Fetch data
  fetch("country.json")
      .then((response) => response.json())
      .then((fetchedData) => {
          data = fetchedData; // update the data variable
          renderCountries(data);
          console.log("fetched data", fetchedData);
      })
      .catch((error) => console.log(error));
});
