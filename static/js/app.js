const mapDiv = document.getElementById('map')
const mapBtn = document.getElementById('map-btn')
const graphDiv = document.getElementById('graph')
const graphBtn = document.getElementById('graph-btn')
const entryCountry = document.getElementById('entry-country')
const submitBtn = document.getElementById('submit')

let map
var lati = 0
var long = 0

submitBtn.addEventListener('click', async () => {
    country = entryCountry.value //document.getElementById('title').textContent.slice(9) || entryCountry.value
    url = `http://127.0.0.1:5000/${country}/geo`

    return await fetch(url)
    .then((result) => {
        return result.json()
    }).then((data) => {
        document.getElementById('country').innerText = data.Country
        document.getElementById('deaths').innerText = data.Deaths
        document.getElementById('confirmed').innerText = data.Confirmed

        lati = data.Latitude
        long = data.Longitude
        initMap()
    }).catch((err) => {
        console.log(err)
    });

})

graphBtn.addEventListener('click', () => {
    graphDiv.classList.toggle('hidden')
    mapDiv.classList.add('hidden')
})

mapBtn.addEventListener('click', async () =>{
    mapDiv.classList.toggle('hidden')
    graphDiv.classList.add('hidden')

    
    country = entryCountry.value //document.getElementById('title').textContent.slice(9) || entryCountry.value
    url = `http://127.0.0.1:5000/${country}/geo`

    return await fetch(url)
    .then((result) => {
        return result.json()
    }).then((data) => {
        document.getElementById('country').innerText = data.Country
        document.getElementById('deaths').innerText = data.Deaths
        document.getElementById('confirmed').innerText = data.Confirmed
        lati = data.Latitude
        long = data.Longitude
        initMap()
    }).catch((err) => {
        console.log(err)
    });
})

function initMap(){
    var options = {
        center: {
            lat: lati,
            lng: long
        },
        zoom: 5,
    }
    
    map = new google.maps.Map(document.getElementById("map"), options)
}