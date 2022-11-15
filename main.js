console.log('working')

let weatherURL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=apparent_temperature_max,apparent_temperature_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York'
const clothesForm = document.getElementById("clothes-form")

clothesForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    let req = await fetch('http://localhost:3000/closet', {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify({
            name: clothesForm.name.value,
            kind: clothesForm.category.value,
            season: clothesForm.season.value
        })
    })
    let res = await req.json()
})

let weatherContainer = document.getElementById('conatiner')
let day_1 = document.getElementById('day1')
let day_2 = document.getElementById('day2')
let day_3 = document.getElementById('day3')
let day_4 = document.getElementById('day4')
let day_5 = document.getElementById('day5')
let day_6 = document.getElementById('day6')
let day_7 = document.getElementById('day7')

let weatherRequest = async () => {
    let req = await fetch(weatherURL)
    let res = await req.json()
    console.log(res.daily)
    let day = {}
    let day2 = {}
    let day3 = {}
    let values = ['day', 'max', 'min']
    Object.keys(res.daily).forEach((key, index) => {
        day[values[index]] = res.daily[key][0]
        day2[values[index]] = res.daily[key][1]
        day3[values[index]] = res.daily[key][2]
    })
    console.log(day, day2, day3)
    let h3 = document.createElement("h3")
    h3.innerText = day.day
    let p = document.createElement("p")
    p.innerText = `${day.min} - ${day.max}`
    day_1.append(h3, p)
}

weatherRequest()
