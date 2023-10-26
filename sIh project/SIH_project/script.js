const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6f11ba8131msh2c86ab5d851fd4cp12925ejsn27209d2cc215',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bhilai', options)
    .then(response => response.json())
    .then(response) => {
        console.log(response)
        CLOUD_PCT =response.CLOUD_PCT
EELS_LIKEF=response.EELS_LIKEF
HUMIDITY=response.HUMIDITY
MAX_TEMP=response.MAX_TEMP
MIN_TEMP=reponse.MIN_TEMP
SUNRISE=reponse.SUNRISE
SUNSET=reponse.SUNSET
}
.catch(err=>console.error(err));
