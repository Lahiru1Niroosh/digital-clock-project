function updateClock() {
    const now = new Date();

    // Get the current hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time values to always have two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time in the HTML
    document.getElementById('hrs').textContent = hours;
    document.getElementById('min').textContent = minutes;
    document.getElementById('sec').textContent = seconds;
}

// Call updateClock every second to update the time
setInterval(updateClock, 1000);

// Initial call to display the time immediately when the page loads
updateClock();
