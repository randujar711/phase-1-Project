console.log('working')

let weatherURL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=apparent_temperature_max,apparent_temperature_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York'

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
    let values = ['day', 'max', 'min']
    Object.keys(res.daily).forEach((key, index) => {
        day[values[index]] = res.daily[key][0]
    })
    // for (let key in res.daily) {
    //   day[values[key]] = res.daily[key][0]
    // }
    console.log(day)

    console.log(res.daily.apparent_temperature_max)
    console.log(res.daily.apparent_temperature_max[1])

    day_1.innerText = `${res.daily.apparent_temperature_max[0]}, ${res.daily.apparent_temperature_min[0]},${res.daily.time[0]}`

    day_2.innerText = `${res.daily.apparent_temperature_max[1]}, ${res.daily.apparent_temperature_min[1]},${res.daily.time[1]}`

    day_3.innerText = `${res.daily.apparent_temperature_max[2]}, ${res.daily.apparent_temperature_min[2]},${res.daily.time[2]}`

    day_4.innerText = `${res.daily.apparent_temperature_max[3]}, ${res.daily.apparent_temperature_min[3]},${res.daily.time[3]}`

    day_5.innerText = `${res.daily.apparent_temperature_max[4]}, ${res.daily.apparent_temperature_min[4]},${res.daily.time[4]}`

    day_6.innerText = `${res.daily.apparent_temperature_max[5]}, ${res.daily.apparent_temperature_min[5]},${res.daily.time[5]}`

    day_7.innerText = `${res.daily.apparent_temperature_max[6]}, ${res.daily.apparent_temperature_min[6]},${res.daily.time[6]}`

}

weatherRequest()
