function updateTime() {
  //San Francisco
  let sanFranciscoElement = document.querySelector("#san-francisco");
  if (sanFranciscoElement) {
    let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
    let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
    let sanFranciscoTime = moment().tz("US/Pacific");

    sanFranciscoDateElement.innerHTML = sanFranciscoTime.format("MMMM D, YYYY");
    sanFranciscoTimeElement.innerHTML = `${sanFranciscoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }

  //Madrid
  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");
    let madridTime = moment().tz("Europe/Madrid");

    madridDateElement.innerHTML = madridTime.format("MMMM D, YYYY");
    madridTimeElement.innerHTML = `${madridTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }

  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM D, YYYY");
    londonTimeElement.innerHTML = `${londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }

  //New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("Europe/Madrid");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM D, YYYY");
    newYorkTimeElement.innerHTML = `${newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
 <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small> ${cityTime.format(
    "A"
  )}</small></div>
 </div>
 `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
