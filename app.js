// Lagt min Api key i en variabel.
const apiKey = '17b32d5f4ba5d0111deaffce20182e2a';
// En variabel för den stad jag vill kolla väder för.
let cityName = 'Tirana';
// Min API jag använder har jag lagt i en variabel och gjort den till en template litural string för att kunna lägga in min API Key och den stad vi kommer söka på. 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

// Hämta alla element.
let h1Description = document.querySelector('h1');
let imgIcon = document.querySelector('img');
let pTemperature = document.querySelector('.temperature');
let pWindspeed = document.querySelector('.windspeed');
let pHumidity = document.querySelector('.humidity');

// Jag hämtar min url/API och gör om den till .json och sen får jag ut data som jag kan hantera i min kod.
fetch(url).then((response => response.json())).then(data => {

    // Sorterar och hämtar all data jag behöver.
    let weatherDescription = data.weather[0].description;
    let weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let weatherTemperatur = Math.round(data.main.temp);
    let weatherWindSpeed = data.wind.speed;
    let weatherHumidity = data.main.humidity;

    // Byt ut data i de element jag hämtat från HTML.
    h1Description.innerText = weatherDescription;
    imgIcon.src = weatherIcon;
    pTemperature.innerText = weatherTemperatur;
    pWindspeed.innerText = weatherWindSpeed;
    pHumidity.innerText = weatherHumidity;
});

// fetch(url).then(function(response) {
//     return response.json();
// }).then(function(data) {
//     console.log(data);
//     let weatherDescription = data.weather[0].description;
//     let weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
//     let weatherTemperatur = Math.round(data.main.temp);
//     let weatherWindSpeed = data.wind.speed;
//     let weatherHumidity = data.main.humidity;
// });




// Description
// Väderikon, se https://openweathermap.org/weather-conditions 
// Temperatur
// Vindhastighet
// Luftfuktighet