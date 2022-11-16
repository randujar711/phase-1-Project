//console.log('working')

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
    console.log(res)
    
})

let weatherContainer = document.getElementById('conatiner')

let day_1 = document.getElementById('day1')
let day1Img = document.getElementById('day1Img')
let day1Btn = document.getElementById('btn')
let day1List = document.getElementById('day1List')

let day_2 = document.getElementById('day2')
let day2Img = document.getElementById('day2Img')
let day2Btn = document.getElementById('btn1')
let day2List = document.getElementById('day2List')

let day_3 = document.getElementById('day3')
let day3Img = document.getElementById('day3Img')
let day3Btn = document.getElementById('btn2')
let day3List = document.getElementById('day3List')

let day_4 = document.getElementById('day4')
let day4Img = document.getElementById('day4Img')
let day4Btn = document.getElementById('btn3')
let day4List = document.getElementById('day4List')

let day_5 = document.getElementById('day5')
let day5Img = document.getElementById('day5Img')
let day5Btn = document.getElementById('btn4')
let day5List = document.getElementById('day5List')

let day_6 = document.getElementById('day6')
let day6Img = document.getElementById('day6Img')
let day6Btn = document.getElementById('btn5')
let day6List = document.getElementById('day6List')

let day_7 = document.getElementById('day7')
let day7Img = document.getElementById('day7Img')
let day7Btn = document.getElementById('btn6')
let day7List = document.getElementById('day7List')


let weatherRequest = async () => {
    let req = await fetch(weatherURL)
    let res = await req.json()
    console.log(res.daily)

    let day1 = {}
    let day2 = {}
    let day3 = {}
    let day4 = {}
    let day5 = {}
    let day6 = {}
    let day7 = {}
    let values = ['day', 'max', 'min']
    Object.keys(res.daily).forEach((key, index) => {
        day1[values[index]] = res.daily[key][0]
        day2[values[index]] = res.daily[key][1]
        day3[values[index]] = res.daily[key][2]
        day4[values[index]] = res.daily[key][3]
        day5[values[index]] = res.daily[key][4]
        day6[values[index]] = res.daily[key][5]
        day7[values[index]] = res.daily[key][6]
    })
     //IMG POPUP
    day_1.append(`Day: ${day1.day} Min: ${day1.min} Max: ${day1.max}`)

    let day1Temp = day1.max && day1.min
    if( day1Temp <= 20 ){
        day1Img.src = 'https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Thermometer_Cold-512.png'
        }else if (day1Temp <= 40 ){
        day1Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-set/49/cold-512.png'
        }else if (day1Temp <= 60 ){
        day1Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-season-28/60/cloud__sun__weather__climate__forecast-512.png'
        }
        else if (day1Temp <= 80 ){
        day1Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png'
        }
        else if (day1Temp <= 100 ){
        day1Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-flat/58/017_-_Sun-512.png'
    }


    day_2.append(`Day: ${day2.day} Min: ${day2.min} Max: ${day2.max}`)

    let day2Temp = day2.max && day2.min
    if( day2Temp <= 20 ){
        day2Img.src = 'https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Thermometer_Cold-512.png'
        }else if (day2Temp <= 40 ){
        day2Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-set/49/cold-512.png'
        }else if (day2Temp <= 60 ){
        day2Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-season-28/60/cloud__sun__weather__climate__forecast-512.png'
        }
        else if (day2Temp <= 80 ){
        day2Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png'
        }
        else if (day2Temp <= 100 ){
        day2Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-flat/58/017_-_Sun-512.png'
    }



    day_3.append(`Day: ${day3.day} Min: ${day3.min} Max: ${day3.max}`)

    let day3Temp = day3.max && day3.min
    if( day3Temp <= 20 ){
        day3Img.src = 'https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Thermometer_Cold-512.png'
        }else if (day3Temp <= 40 ){
        day3Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-set/49/cold-512.png'
        }else if (day3Temp <= 60 ){
        day3Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-season-28/60/cloud__sun__weather__climate__forecast-512.png'
        }
        else if (day3Temp <= 80 ){
        day3Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png'
        }
        else if (day3Temp <= 100 ){
        day3Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-flat/58/017_-_Sun-512.png'
    }



    day_4.append(`Day: ${day4.day} Min: ${day4.min} Max: ${day4.max}`)

    let day4Temp = day4.max && day4.min
    if( day4Temp <= 20 ){
        day4Img.src = 'https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Thermometer_Cold-512.png'
        }else if (day4Temp <= 40 ){
        day4Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-set/49/cold-512.png'
        }else if (day4Temp <= 60 ){
        day4Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-season-28/60/cloud__sun__weather__climate__forecast-512.png'
        }
        else if (day4Temp <= 80 ){
        day4Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png'
        }
        else if (day4Temp <= 100 ){
        day4Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-flat/58/017_-_Sun-512.png'
    }
    


    day_5.append(`Day: ${day5.day} Min: ${day5.min} Max: ${day5.max}`)

    let day5Temp = day5.max && day5.min
    if( day5Temp <= 20 ){
        day5Img.src = 'https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Thermometer_Cold-512.png'
        }else if (day5Temp <= 40 ){
        day5Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-set/49/cold-512.png'
        }else if (day5Temp <= 60 ){
        day5Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-season-28/60/cloud__sun__weather__climate__forecast-512.png'
        }
        else if (day5Temp <= 80 ){
        day5Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png'
        }
        else if (day5Temp <= 100 ){
        day5Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-flat/58/017_-_Sun-512.png'
    }


    day_6.append(`Day: ${day6.day} Min: ${day6.min} Max: ${day6.max}`)

    let day6Temp = day6.max && day6.min
    if( day6Temp <= 20 ){
        day6Img.src = 'https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Thermometer_Cold-512.png'
        }else if (day6Temp <= 40 ){
        day6Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-set/49/cold-512.png'
        }else if (day6Temp <= 60 ){
        day6Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-season-28/60/cloud__sun__weather__climate__forecast-512.png'
        }
        else if (day6Temp <= 80 ){
        day6Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png'
        }
        else if (day6Temp <= 100 ){
        day6Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-flat/58/017_-_Sun-512.png'
    }
    


    day_7.append(`Day: ${day7.day} Min: ${day7.min} Max: ${day7.max}`)

    let day7Temp = day7.max && day7.min
    if( day7Temp <= 20 ){
        day7Img.src = 'https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Thermometer_Cold-512.png'
        }else if (day7Temp <= 40 ){
        day7Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-set/49/cold-512.png'
        }else if (day7Temp <= 60 ){
        day7Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-season-28/60/cloud__sun__weather__climate__forecast-512.png'
        }
        else if (day7Temp <= 80 ){
        day7Img.src = 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png'
        }
        else if (day7Temp <= 100 ){
        day7Img.src = 'https://cdn4.iconfinder.com/data/icons/spring-flat/58/017_-_Sun-512.png'
    }


}
weatherRequest()

    let request = async () => {
        let req = await fetch('http://localhost:3000/closet')
        let res = await req.json()

        console.log(res)
        console.log(res[0].kind)
        day1Btn.addEventListener('click', () => {
        res.forEach((obj) => {
            //console.log(obj.kind)
            //console.log(obj.name)
            let li = document.createElement('li')
            li.innerText = `${obj.kind}: ${obj.name}`
            day1List.append(li)
        })
        })
       day2Btn.addEventListener('click', () => {
        res.forEach((obj) => {
            //console.log(obj.kind)
            //console.log(obj.name)
            let li = document.createElement('li')
            li.innerText = `${obj.kind}: ${obj.name}`
            day2List.append(li)
        })
       })
       day3Btn.addEventListener('click', () => {
        res.forEach((obj) => {
            //console.log(obj.kind)
            //console.log(obj.name)
            let li = document.createElement('li')
            li.innerText = `${obj.kind}: ${obj.name}`
            day3List.append(li)
        })
       })
        day4Btn.addEventListener('click', () => {
        res.forEach((obj) => {
            //console.log(obj.kind)
            //console.log(obj.name)
            let li = document.createElement('li')
            li.innerText = `${obj.kind}: ${obj.name}`
            day4List.append(li)

        })
        })
        day5Btn.addEventListener('click', () => {
        res.forEach((obj) => {
            //console.log(obj.kind)
            //console.log(obj.name)
            let li = document.createElement('li')
            li.innerText = `${obj.kind}: ${obj.name}`
            day5List.append(li)
        })
        })
        day6Btn.addEventListener('click', () => {
        res.forEach((obj) => {
            //console.log(obj.kind)
            //console.log(obj.name)
            let li = document.createElement('li')
            li.innerText = `${obj.kind}: ${obj.name}`
            day6List.append(li)
        })
        })
        day7Btn.addEventListener('click', () => {
        res.forEach((obj) => {
            //console.log(obj.kind)
            //console.log(obj.name)
            let li = document.createElement('li')
            li.innerText = `${obj.kind}: ${obj.name}`
            day7List.append(li)
        })
        })

    }
    request()