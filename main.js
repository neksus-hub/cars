"use strict";
const select = document.getElementById("cars");

const span = document.getElementById("info");

const getData = function () {
  const cars = fetch("./cars.json");

  cars
    .then((response) => response.json())
    .then((data) => {
      select.addEventListener("change", (e) => {
        e.preventDefault;

        if (select.value !== "choise" && select.value === "BMW") {
          sendData(data.cars[0]);
          span.textContent =
            `${data.cars[0].brand}` +
            ` ${data.cars[0].model}` +
            ` ${data.cars[0].price}`;
        } else if (select.value !== "choise" && select.value === "Volvo") {
          sendData(data.cars[1]);
          span.textContent =
            `${data.cars[1].brand}` +
            ` ${data.cars[1].model}` +
            ` ${data.cars[1].price}`;
        } else {
          span.textContent = "";
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const sendData = (car) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(car),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

getData();
