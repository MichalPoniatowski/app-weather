const searchBtnEl = document.getElementById("searchBtn");
const inputEl = document.getElementById("input-search");
const dataEl = document.getElementById("data");
const erroMessageEl = document.getElementById("error-message");
const tabelRowEl = document.getElementById("tabel-row");

function getWeather(city) {
  erroMessageEl.textContent = "";
  dataEl.textContent = "";
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=e21c79578d65421d875152512230504&q=${city}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        erroMessageEl.textContent = data.error.message;
      } else {
        // dataEl.textContent = JSON.stringify(data, null, 10);
        for (const [key, value] of Object.entries(data.location)) {
          const row = `<tr
             class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             <td class="px-6 py-4">${key}</td>
             <td class="px-6 py-4">${value}</td>
            </tr>`;
          tabelRowEl.insertAdjacentHTML("beforeend", row);
        }

        // const entries = Object.entries(data.location);
        // console.log(entries);
      }
    });
}

searchBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  const city = inputEl.value;

  getWeather(city);
});
