
// Dom selection
const cityName = document.getElementById('city');
const temp = document.getElementById('temp');
const description = document.getElementById('desc');
const inputFeild = document.getElementById('input');
const inputText = inputFeild.value
const button = document.getElementById('button');
const image = document.getElementById('img');



window.addEventListener('load', function () {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=71a220768f10518e67b6c60c2c30adcb`

            fetch(api)
                .then(res => res.json())
                .then(data => display(data))

        }))
    }
})

// const celcius=

const display = (data) => {
    cityName.innerText = data.sys.country
    temp.innerText = (data.main.temp - 274.15).toFixed(0);
    description.innerText = data.weather[0].description;




    if (data.weather[0].id > 200 && data.weather[0].id < 300) {
        image.src = `https://openweathermap.org/img/wn/11d@2x.png`
    }
    else if (data.weather[0].id > 300 && data.weather[0].id < 500) {
        image.src = `https://openweathermap.org/img/wn/9d@2x.png`
    }
    else if (data.weather[0].id > 500 && data.weather[0].id < 700) {
        image.src = `https://openweathermap.org/img/wn/10d@2x.png`
    }
    else if (data.weather[0].id > 700 && data.weather[0].id < 800) {
        image.src = `https://openweathermap.org/img/wn/50d@2x.png`
    }
    else if (data.weather[0].id == 800) {
        image.src = `https://openweathermap.org/img/wn/01d@2x.png`
    }
    else if (data.weather[0].id > 800) {
        image.src = `https://openweathermap.org/img/wn/02d@2x.png`
    }




}



button.addEventListener('click', function () {
    getWeather();
})



const getWeather = () => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFeild.value},&APPID=71a220768f10518e67b6c60c2c30adcb`

    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data));

    inputFeild.value = ''
}




const displayWeather = (weather) => {

    cityName.innerText = weather.name;
    temp.innerText = (weather.main.temp - 274.15).toFixed(0);
    description.innerText = weather.weather[0].description;
    // console.log(weather.weather[0].id)

   

    if (weather.weather[0].id > 200 && weather.weather[0].id < 300) {
        image.src = `https://openweathermap.org/img/wn/11d@2x.png`
    }
    else if (weather.weather[0].id > 300 && weather.weather[0].id < 500) {
        image.src = `https://openweathermap.org/img/wn/9d@2x.png`
    }
    else if (weather.weather[0].id > 500 && weather.weather[0].id < 700) {
        image.src = `https://openweathermap.org/img/wn/10d@2x.png`
    }
    else if (weather.weather[0].id > 700 && weather.weather[0].id < 800) {
        image.src = `https://openweathermap.org/img/wn/50d@2x.png`
    }
    else if (weather.weather[0].id == 800) {
        image.src = `https://openweathermap.org/img/wn/01d@2x.png`
    }
    else if (weather.weather[0].id > 800) {
        image.src = `https://openweathermap.org/img/wn/02d@2x.png`
    }



}
