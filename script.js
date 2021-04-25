// debugger;
let today = moment().format('dddd, MMMM Do YYYY')
$('#currentDay').text("Today's date: " + today)
let currentHour = moment().format('H')
currentHour = parseInt(currentHour)



function saveTask () {
    
    let time = $(this).parent().attr('id')
    let userInput = $(this).siblings('.description').val().trim()

    time = parseInt(time.replace('hour-', ''))

    localStorage.setItem(time, userInput)
    console.log(time)
}

let hourArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]
let task = ['', '', '', '', '', '', '', '', '']

// $('.9AM').val(localStorage.getItem('9'))
// $('.10AM').val(localStorage.getItem('10'))
// $('.11AM').val(localStorage.getItem('11'))
// $('.12AM').val(localStorage.getItem('12'))
// $('.1PM').val(localStorage.getItem('13'))
// $('.2PM').val(localStorage.getItem('14'))
// $('.3PM').val(localStorage.getItem('15'))
// $('.4PM').val(localStorage.getItem('16'))
// $('.5PM').val(localStorage.getItem('17'))



function pastPresentFuture () {
    for(i=0; i < 8; i++){
        let key = hourArr[i].toString()
        task[i] = localStorage.getItem(key)
    }
    for(i = 9; i < 18; i++){
        let divEl = document.querySelector('#hour-' + i)
        $('#hour-' + i).children()[1]
        .value = task[i-9]
        console.log(typeof hourArr[i-9])
        console.log('currentHour', typeof currentHour)
        
        if (hourArr[i-9] < currentHour) {
            divEl.setAttribute('class', 'row time-block past')
        } else if (hourArr[i-9] > currentHour) {
            divEl.setAttribute('class', 'row time-block future')
        } else if (hourArr[i-9] === currentHour) {
            divEl.setAttribute('class', 'row time-block present')
        }
    } 
            
}



$('.saveBtn').on('click', saveTask)

setInterval(function (){
    pastPresentFuture()
}, 300000)

pastPresentFuture();
