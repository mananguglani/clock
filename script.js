setInterval(setClock, 1000);

function setClock() {
    currentDate = new Date();
    hours = currentDate.getHours();
    minutes = currentDate.getMinutes();
    seconds = currentDate.getSeconds();

    hourRotation = 30*hours + minutes/2 + seconds/120;
    minuteRotation = 6*minutes + seconds/10;
    secondRotation = 6*seconds;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`;
}

setClock();