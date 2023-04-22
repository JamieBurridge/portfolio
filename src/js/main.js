window.onload = () => {
    const greetingEl = document.getElementById("home_greeting");

    greetingEl.textContent = getTimeBasedMessage()

};

function getTimeBasedMessage() {
    let time = new Date();
    time = time.getHours();

    if (time >= 1 && time < 12) {
        return "Good morning"
    } else if (time >= 12 && time < 19) {
        return "Good afternoon"
    } else if (time >= 19) {
        return "Good evening"
    }
}
