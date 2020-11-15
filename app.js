// Lagt min Api key i en variabel.
const apiKey = '17b32d5f4ba5d0111deaffce20182e2a';

// En variabel för den stad jag vill kolla väder för.
let cityName;

// Hämta alla element från HTML.
let h1Description = document.querySelector('h1');
let imgIcon = document.querySelector('img');
let pTemperature = document.querySelector('.temperature');
let pWindspeed = document.querySelector('.windspeed');
let pHumidity = document.querySelector('.humidity');

let button = document.querySelector('button');
let input = document.querySelector('input');
let body = document.querySelector('body');

button.addEventListener('click', function(event) {
    event.preventDefault();
    cityName = input.value;

    getWeather();
});



function getWeather() {

    // Min API jag använder har jag lagt i en variabel och gjort den till en template litural string för att kunna lägga in min API Key och den stad vi kommer söka på. 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

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
        pTemperature.innerText = `${weatherTemperatur} °C`;
        pWindspeed.innerText = weatherWindSpeed;
        pHumidity.innerText = weatherHumidity;

        changeColor(weatherTemperatur);
    }).catch(function(error) {
        alert('Hörredu snygging testa att söka på någon annan text för det du sökte på hittar vi inget resultat på.');
    });
};

const extremlyFreesing = -25
const freesing = -10
const veryCold = 0;
const cold = 5;
const warm = 10;
const veryWarm = 20;
const hot = 30;

function changeColor(weatherTemperatur) {

    if (weatherTemperatur <= extremlyFreesing) {
        body.style.backgroundColor = 'red';
    } else if (weatherTemperatur <= freesing) {
        body.style.backgroundColor = 'blue';
    } else if (weatherTemperatur <= veryCold) {
        body.style.backgroundColor = 'yellow';
    } else if (weatherTemperatur <= cold) {
        body.style.backgroundColor = 'orange';
    } else if (weatherTemperatur <= warm) {
        body.style.backgroundColor = 'navy';
    } else if (weatherTemperatur <= veryWarm) {
        body.style.backgroundColor = 'olive';
    } else if (weatherTemperatur <= hot && weatherTemperatur > 40) {
        body.style.backgroundColor = 'grey';
    } else {
        body.style.backgroundColor = 'pink';
    }

}

// // Jag hämtar min url/API och gör om den till .json och sen får jag ut data som jag kan hantera i min kod.
// fetch(url).then(function(response) {
//     return response.json();
// }).then(function(data) {

// // Sorterar och hämtar all data jag behöver.
// let weatherDescription = data.weather[0].description;
// let weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
// let weatherTemperatur = Math.round(data.main.temp);
// let weatherWindSpeed = data.wind.speed;
// let weatherHumidity = data.main.humidity;

// // Byt ut data i de element jag hämtat från HTML.
// h1Description.innerText = weatherDescription;
// imgIcon.src = weatherIcon;
// pTemperature.innerText = weatherTemperatur;
// pWindspeed.innerText = weatherWindSpeed;
// pHumidity.innerText = weatherHumidity;
// });