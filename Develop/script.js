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

var events = {
    eventNineOClock: [],
    eventTenOClock: [],
    eventElevenOClock: [],
    eventTwelveOClock: [],
    eventOneOClock: [],
    eventTwoOClock: [],
    eventThreeOClock: [],
    eventFourOClock: [],
    eventFiveOClock: []
};

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

function saveEvent() {
    localStorage.setItem("events", JSON.stringify(events));
}

$("#btn-9").on("click", function() {
    var eventText = $("#9").val();
    if (eventText) {
        events.eventNineOClock.push({
           event: eventText
        });
        saveEvent();
    } 
});
$("#btn-10").on("click", function() {
    var eventText = $("#10").val();
    if (eventText) {
        events.eventTenOClock.push({
           event: eventText
        });
        saveEvent();
    } 
});
$("#btn-11").on("click", function() {
    var eventText = $("#11").val();
    if (eventText) {
        events.eventElevenOClock.push({
           event: eventText
        });
        saveEvent();
    } 
});
$("#btn-12").on("click", function() {
    var eventText = $("#12").val();
    if (eventText) {
        events.eventTwelveOClock.push({
           event: eventText
        });
        saveEvent();
    } 
});
$("#btn-1").on("click", function() {
    var eventText = $("#1").val();
    if (eventText) {
        events.eventOneOClock.push({
           event: eventText
        });
        saveEvent();
    } 
});
$("#btn-2").on("click", function() {
    var eventText = $("#2").val();
    if (eventText) {
        events.eventTwoOClock.push({
           event: eventText
        });
        saveEvent();
    } 
});
$("#btn-3").on("click", function() {
    var eventText = $("#3").val();
    if (eventText) {
        events.eventThreeOClock.push({
           event: eventText
        });
        saveEvent();
    } 
});
$("#btn-4").on("click", function() {
    var eventText = $("#4").val();
    if (eventText) {
        events.eventFourOClock.push({
           event: eventText
        });
        saveEvent();
    } 
});
$("#btn-5").on("click", function() {
    var eventText = $("#5").val();
    if (eventText) {
        events.eventFiveOClock.push({
           event: eventText
        });
        saveEvent();
    } 
});

displayDate();
pastPresentFuture()