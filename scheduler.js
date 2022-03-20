var calendarDate = document.querySelector("#currentDay");
var currentDate = moment();
calendarDate.textContent = currentDate.format("MMMM DD, YYYY - hh:mm a");

var saveBtn = document.getElementById("button-addon2")
saveBtn.onclick = saveData;

function saveData(){
    var input = document.getElementById("saveServer");
    localStorage.setItem("server", input.value);
    var storedValue = localStorage.getItem("server");
}// does not save on page refresh...fix this

