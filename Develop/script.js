var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = moment().format('LT');

var workHours = [
    {
        dueTime: $("#9"),
        time: parseInt(moment().set('hour', 9).format('HH'))
    },
    {
        dueTime: $("#10"),
        time: parseInt(moment().set('hour', 10).format('HH'))
    },
    {
        dueTime: $("#11"),
        time: parseInt(moment().set('hour', 11).format('HH'))
    },
    {
        dueTime: $("#12"),
        time: parseInt(moment().set('hour', 12).format('HH'))
    },
    {
        dueTime: $("#1"),
        time: parseInt(moment().set('hour', 13).format('HH'))
    },
    {
        dueTime: $("#2"),
        time: parseInt(moment().set('hour', 14).format('HH'))
    },
    {
        dueTime: $("#3"),
        time: parseInt(moment().set('hour', 15).format('HH'))
    },
    {
        dueTime: $("#4"),
        time: parseInt(moment().set('hour', 16).format('HH'))
    },
    {
        dueTime: $("#5"),
        time: parseInt(moment().set('hour', 17).format('HH'))
    }
]

function displayDate () {
    $("#currentDay").text(currentDate);
}

function pastPresentFuture() {

    for (var i = 0; i < workHours.length; i++) {
        if (moment().hour() > workHours[i].time) {
            workHours[i].dueTime.addClass("past");
        }
        if (moment().hour() < workHours[i].time) {
            workHours[i].dueTime.addClass("future");
        }
        if (moment().hour() == workHours[i].time) {
            workHours[i].dueTime.addClass("present");
        }

    }
}

displayDate();
pastPresentFuture()