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
let day1Img = document.getElementById('day1Img')

let day_2 = document.getElementById('day2')
let day_3 = document.getElementById('day3')
let day_4 = document.getElementById('day4')
let day_5 = document.getElementById('day5')
let day_6 = document.getElementById('day6')
let day_7 = document.getElementById('day7')

/*let dayDate = document.getElementsByClassName('date')
let dayMax = document.getElementsByClassName('max')
let dayMin = document.getElementsByClassName('min')*/

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

    /*for (let key in res.daily) {
       day[values[key]] = res.daily[key][0]
     }*/

     
    day_1.append(`Day: ${day1.day} Min: ${day1.min} Max: ${day1.max}`)

    let day1Temp = day1.max && day1.min
    if( day1Temp <= 20 ){
        day1Img.src = 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }else if (day1Temp <= 40 ){
        day1Img.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        }else if (day1Temp <= 60 ){
        day1Img.src = 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
        }
        else if (day1Temp <= 80 ){
        day1Img.src = 'https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU='
        }
        else if (day1Temp <= 100 ){
        day1Img.src = 'https://media.istockphoto.com/id/615398376/photo/new-york-city-nyc-usa.jpg?s=612x612&w=0&k=20&c=rlrsrt4jbORPDSOW5df06Ik_X_5iQo1rYQd53xSs4nw='
        }
    /*btn.addEventListener('click', () => {
        if(day1.max <= 100){
        console.log('hello')
        }else{
            console.log('goodbye')
        }
    })*/


    
    /*day_2.append(`Day: ${day2.day} Min: ${day2.min} Max: ${day2.max}`)

    day_3.append(`Day: ${day3.day} Min: ${day3.min} Max: ${day3.max}`)

    day_4.append(`Day: ${day4.day} Min: ${day4.min} Max: ${day4.max}`)

    day_5.append(`Day: ${day5.day} Min: ${day5.min} Max: ${day5.max}`)

    day_6.append(`Day: ${day6.day} Min: ${day6.min} Max: ${day6.max}`)

    day_7.append(`Day: ${day7.day} Min: ${day7.min} Max: ${day7.max}`)*/

    //icon display 

}
weatherRequest()
