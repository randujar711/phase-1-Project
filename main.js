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
let day1Btn = document.getElementById('btn')

let day_2 = document.getElementById('day2')
let day2Img = document.getElementById('day2Img')
let day2Btn = document.getElementById('btn1')

let day_3 = document.getElementById('day3')
let day3Img = document.getElementById('day3Img')
let day3Btn = document.getElementById('btn2')

let day_4 = document.getElementById('day4')
let day4Img = document.getElementById('day4Img')
let day4Btn = document.getElementById('btn3')

let day_5 = document.getElementById('day5')
let day5Img = document.getElementById('day5Img')
let day5Btn = document.getElementById('btn4')

let day_6 = document.getElementById('day6')
let day6Img = document.getElementById('day6Img')
let day6Btn = document.getElementById('btn5')

let day_7 = document.getElementById('day7')
let day7Img = document.getElementById('day7Img')
let day7Btn = document.getElementById('btn6')


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
    day1Btn.addEventListener('click', () => {
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
    })


    day_2.append(`Day: ${day2.day} Min: ${day2.min} Max: ${day2.max}`)

    let day2Temp = day2.max && day2.min
    day2Btn.addEventListener('click', () => {
    if( day2Temp <= 20 ){
        day2Img.src = 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }else if (day2Temp <= 40 ){
        day2Img.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        }else if (day2Temp <= 60 ){
        day2Img.src = 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
        }
        else if (day2Temp <= 80 ){
        day2Img.src = 'https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU='
        }
        else if (day2Temp <= 100 ){
        day2Img.src = 'https://media.istockphoto.com/id/615398376/photo/new-york-city-nyc-usa.jpg?s=612x612&w=0&k=20&c=rlrsrt4jbORPDSOW5df06Ik_X_5iQo1rYQd53xSs4nw='
    }
    })


    day_3.append(`Day: ${day3.day} Min: ${day3.min} Max: ${day3.max}`)

    let day3Temp = day3.max && day3.min
    day3Btn.addEventListener('click', () => {
    if( day3Temp <= 20 ){
        day3Img.src = 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }else if (day3Temp <= 40 ){
        day3Img.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        }else if (day3Temp <= 60 ){
        day3Img.src = 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
        }
        else if (day3Temp <= 80 ){
        day3Img.src = 'https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU='
        }
        else if (day3Temp <= 100 ){
        day3Img.src = 'https://media.istockphoto.com/id/615398376/photo/new-york-city-nyc-usa.jpg?s=612x612&w=0&k=20&c=rlrsrt4jbORPDSOW5df06Ik_X_5iQo1rYQd53xSs4nw='
    }
    })


    day_4.append(`Day: ${day4.day} Min: ${day4.min} Max: ${day4.max}`)
    let day4Temp = day4.max && day4.min

    day4Btn.addEventListener('click', () => {
        if( day4Temp <= 20 ){
        day4Img.src = 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }else if (day4Temp <= 40 ){
        day4Img.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        }else if (day4Temp <= 60 ){
        day4Img.src = 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
        }
        else if (day4Temp <= 80 ){
        day4Img.src = 'https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU='
        }
        else if (day4Temp <= 100 ){
        day4Img.src = 'https://media.istockphoto.com/id/615398376/photo/new-york-city-nyc-usa.jpg?s=612x612&w=0&k=20&c=rlrsrt4jbORPDSOW5df06Ik_X_5iQo1rYQd53xSs4nw='
        }
    })


    day_5.append(`Day: ${day5.day} Min: ${day5.min} Max: ${day5.max}`)
    let day5Temp = day5.max && day5.min

    day5Btn.addEventListener('click', () => {
        if( day5Temp <= 20 ){
        day5Img.src = 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }else if (day5Temp <= 40 ){
        day5Img.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        }else if (day5Temp <= 60 ){
        day5Img.src = 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
        }
        else if (day5Temp <= 80 ){
        day5Img.src = 'https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU='
        }
        else if (day5Temp <= 100 ){
        day5Img.src = 'https://media.istockphoto.com/id/615398376/photo/new-york-city-nyc-usa.jpg?s=612x612&w=0&k=20&c=rlrsrt4jbORPDSOW5df06Ik_X_5iQo1rYQd53xSs4nw='
        }
    })


    day_6.append(`Day: ${day6.day} Min: ${day6.min} Max: ${day6.max}`)
    let day6Temp = day6.max && day6.min

    day6Btn.addEventListener('click', () => {
        if( day6Temp <= 20 ){
        day6Img.src = 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }else if (day6Temp <= 40 ){
        day6Img.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        }else if (day6Temp <= 60 ){
        day6Img.src = 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
        }
        else if (day6Temp <= 80 ){
        day6Img.src = 'https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU='
        }
        else if (day6Temp <= 100 ){
        day6Img.src = 'https://media.istockphoto.com/id/615398376/photo/new-york-city-nyc-usa.jpg?s=612x612&w=0&k=20&c=rlrsrt4jbORPDSOW5df06Ik_X_5iQo1rYQd53xSs4nw='
        }
    })


    day_7.append(`Day: ${day7.day} Min: ${day7.min} Max: ${day7.max}`)
    let day7Temp = day7.max && day7.min

    day7Btn.addEventListener('click', () => {
        if( day7Temp <= 20 ){
        day7Img.src = 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }else if (day7Temp <= 40 ){
        day7Img.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        }else if (day7Temp <= 60 ){
        day7Img.src = 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
        }
        else if (day7Temp <= 80 ){
        day7Img.src = 'https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU='
        }
        else if (day7Temp <= 100 ){
        day7Img.src = 'https://media.istockphoto.com/id/615398376/photo/new-york-city-nyc-usa.jpg?s=612x612&w=0&k=20&c=rlrsrt4jbORPDSOW5df06Ik_X_5iQo1rYQd53xSs4nw='
        }
    })

}
weatherRequest()
