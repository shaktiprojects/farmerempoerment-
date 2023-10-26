const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f11ba8131msh2c86ab5d851fd4cp12925ejsn27209d2cc215',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city)=>{
	cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response => {
cloud_pct =response.cloud_pct
feels_like.innerHTML=response.feels_like
humidity.innerHTML=response.humidity
humidity2.innerHTML=response.humidity2
max_temp.innerHTML=response.max_temp
min_temp.innerHTML=response.min_temp
sunrise.innerHTML=response.sunrise
sunset.innerHTML=response.sunset
temp.innerHTML=response.temp
temp2.innerHTML=response.temp2
wind_degrese.innerHTML=response.wind_degrese
wind_speed.innerHTML=response.wind_speed
wind2.innerHTML=response.wind2




		
		console.log(response)
	})
.catch(err => console.error(err));
}
Submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value)
})
getweather()