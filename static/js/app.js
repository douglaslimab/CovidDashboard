const mapDiv = document.getElementById('map')
const mapBtn = document.getElementById('map-btn')
const body = document.querySelector('body')

let map
var lati = 0
var long = 0

mapBtn.addEventListener('click', async () =>{
    mapDiv.classList.toggle('hidden')

    country = document.getElementById('title').textContent.slice(9)
    url = `http://127.0.0.1:5000/${country}/geo`

    return await fetch(url)
    .then((result) => {
        return result.json()
    }).then((data) => {
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