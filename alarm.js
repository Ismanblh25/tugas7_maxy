class Alarm {
    constructor(time, message) {
        this.time = time; // format: 'HH:MM'
        this.message = message || 'Alarm!'; // default message
        this.alarmInterval = null;
    }

    // Method to start the alarm
    start() {
        this.alarmInterval = setInterval(() => {
            const currentTime = this.getCurrentTime();
            if (currentTime === this.time) {
                this.triggerAlarm();
                this.stop(); // Stop after triggering the alarm
            }
        }, 1000); // Check every second
    }

    // Method to stop the alarm
    stop() {
        if (this.alarmInterval) {
            clearInterval(this.alarmInterval);
            this.alarmInterval = null;
        }
    }

    // Get the current time in 'HH:MM' format
    getCurrentTime() {
        const now = new Date();
        const hours = this.padZero(now.getHours());
        const minutes = this.padZero(now.getMinutes());
        return `${hours}:${minutes}`;
    }

    // Trigger the alarm action
    triggerAlarm() {
        console.log(this.message); // You can replace this with any action (e.g., sound, notification)
    }

    // Utility function to pad single digit numbers with a zero
    padZero(number) {
        return number < 10 ? `0${number}` : number;
    }
}

// Example usage
const myAlarm = new Alarm('14:30', 'Time to take a break!');
myAlarm.start();
