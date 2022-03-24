

function updateTime() {
    let currentDay = moment();

    // updates the time element in the header
    $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss"));



    // For coloring the past, present, and future time blocks
    var currentTime = moment().format('H');
    for (var i = 0; i < scheduleElArray.length; i++) {
        scheduleElArray[i].removeClass("future past present");

        if (currentTime > scheduleElArray[i].data("hour")) {
            scheduleElArray[i].addClass("past");

        } else if (currentTime === scheduleElArray[i].attr("data-hour")) {
            scheduleElArray[i].addClass("present");

        } else {

            scheduleElArray[i].addClass("future");
        }
    }
}

// textarea elements
let saveBtn = $(".input-group-append");
let container = $(".container-fluid");
let schedule9am = $("#nineAm");
let schedule10am = $("#tenAm");
let schedule11am = $("#elevenAm");
let schedule12pm = $("#twelvePm");
let schedule1pm = $("#onePm");
let schedule2pm = $("#twoPm");
let schedule3pm = $("#threePm");
let schedule4pm = $("#fourPm");
let schedule5pm = $("#fivePm");

let scheduleElArray = [
    schedule9am,
    schedule10am,
    schedule11am,
    schedule12pm,
    schedule1pm,
    schedule2pm,
    schedule3pm,
    schedule4pm,
    schedule5pm,
];

renderLastRegistered();
updateTime();
setInterval(updateTime, 1000); 

// render schedule saved in local storage
function renderLastRegistered() {
    for (let el of scheduleElArray) {
        el.val(localStorage.getItem("time block " + el.data("hour")));

    }
}



// function for handling clicks
function handleFormSubmit(event) {
    event.preventDefault();

    let btnClicked = $(event.currentTarget);

    let targetText = btnClicked.siblings("textarea");
 
    let targetTimeBlock = targetText.data("hour");

    localStorage.setItem("time block " +  targetTimeBlock, targetText.val());
}

saveBtn.on("click", handleFormSubmit);




