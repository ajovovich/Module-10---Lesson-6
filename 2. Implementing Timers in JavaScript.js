function startTimer() {
    let duration = parseInt(document.getElementById('duration').value);
    let display = document.getElementById('timerDisplay');
    let interval = setInterval(() => {
        if (duration > 0) {
            display.textContent = duration + ' seconds remaining';
            duration--;
        } else {
            clearInterval(interval);
            display.textContent = 'Time is up!';
        }
    }, 1000);
}

//Task 2: Delayed Notification

function showDelayedNotification(delay) {
    setTimeout(() => {
        alert('This is your delayed notification!');
    }, delay);
}

//Show notification after 3 seconds (3000 milliseconds)
showDelayedNotification(3000);

//Task 3: Repeat Notification

let notificationInterval;

function startRepeatingNotifications(interval) {
    notificationInterval = setInterval(() => {
        if (confirm('This is a repeated notification. Click OK to dismiss.')) {
            clearInterval(notificationInterval);
        }
    }, interval);
}

//Repeat notification every 5 seconds (5000 milliseconds)
startRepeatingNotifications(5000);
