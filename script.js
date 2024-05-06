// script.js

// Function to update the time from API
async function updateTimeFromAPI() {
    try {
        const response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Brussels");
        const data = await response.json();
        const dateTime = new Date(data.utc_datetime);
        const options = { hour: "numeric", minute: "2-digit", timeZoneName: "short" };
        const timeString = dateTime.toLocaleTimeString("en-US", options);
        const timeBubble = document.getElementById("time-hour");
        const timeZone = document.querySelector(".time-zone");
        timeBubble.textContent = timeString.split(',')[0];
        timeZone.textContent = data.utc_offset;
    } catch (error) {
        console.error("Error fetching time data:", error);
    }
}

// Call the function to update the time initially
updateTimeFromAPI();

// Function to update the time every minute
setInterval(updateTimeFromAPI, 60 * 1000);

// script.js

// Drag and drop functionality for the About Me window
dragElement(document.getElementById("about-me-window"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "drag-area")) {
        document.getElementById(elmnt.id + "drag-area").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Function to open the About Me window
function openAboutMe() {
    document.getElementById("about-me-window").style.display = "block";
}

// Function to close the About Me window
function closeAboutMe() {
    document.getElementById("about-me-window").style.display = "none";
}
