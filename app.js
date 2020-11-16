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

// Skapar en addventlistener som ger input.value till min variabel cityName.
button.addEventListener('click', function(event) {
    event.preventDefault();
    cityName = input.value;

    // Kallar på min funktion getWeather.
    getWeather();
});

// Skapar en funhktion som ska hämta den information jag vill ha och varifrån den ska komma ifrån.
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
        pWindspeed.innerText = `Windspeed: ${weatherWindSpeed}`;
        pHumidity.innerText = `Humidity: ${weatherHumidity}`;

        // Kallar på min funktion changeColor och lägger in min variabel weatherTemperatur som parameter.
        changeColor(weatherTemperatur);

        humidityChange(weatherHumidity);

        // Skapar en funktion som ger ett alert meddelande ifall vi skrivit in och sökt på ett "dåligt/otillgängligt" input.
    }).catch(function() {
        alert('Hörredu snygging testa att söka på någon annan text för det du sökte på hittar vi inget resultat på.');
    });
};

// Skapar en funktion som ändrar backgrunds bilden beroende på temperaturen i den stad vi sökt på.
// (background image istället för background color för jag tycker det blev snyggare) 
function changeColor(weatherTemperatur) {

    if (weatherTemperatur <= -10) {
        body.style.backgroundImage = "url('/img/vinter.jpg')";
    } else if (weatherTemperatur <= 0) {
        body.style.backgroundImage = "url('/img/vinter10.jpg')";
    } else if (weatherTemperatur <= 5) {
        body.style.backgroundImage = "url('/img/grad0.jpg')";
    } else if (weatherTemperatur <= 10) {
        body.style.backgroundImage = "url('/img/vår5.jpg')";
    } else if (weatherTemperatur <= 20) {
        body.style.backgroundImage = "url('/img/vår11.jpg')";
    } else if (weatherTemperatur <= 30) {
        body.style.backgroundImage = "url('/img/sommar20.jpg')";
    } else {
        body.style.backgroundImage = "url('/img/öken.jpg')";
    }
};

let changeColorHumidity = document.querySelector('.humidity');

function humidityChange(weatherHumidity) {
    if (weatherHumidity <= 20) {
        changeColorHumidity.style.fontFamily = 'Lucida Sans';
        changeColorHumidity.style.color = 'red';
    } else if (weatherHumidity <= 40) {
        changeColorHumidity.style.fontFamily = 'serif';
        changeColorHumidity.style.color = 'yellow';
    } else if (weatherHumidity <= 60) {
        changeColorHumidity.style.fontFamily = 'monospace';
        changeColorHumidity.style.color = 'navy';
    } else if (weatherHumidity <= 80) {
        changeColorHumidity.style.fontFamily = 'fantasy';
        changeColorHumidity.style.color = 'green';
    } else {
        changeColorHumidity.style.fontFamily = 'cursive';
        changeColorHumidity.style.color = 'pink';
    }
};