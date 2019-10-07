let date, minutes, hours, seconds;

// clock 
const clockContainer = document.querySelector(".js-clock"),
clockTitle = document.querySelector("h1");

// greet input
const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

        
function getTime() {
            
    date = new Date();
    minutes = date.getMinutes();
    hours  = date.getHours();
    seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}



function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    if(hours >= 6 && hours < 12) {
        greeting.innerText = `Good morning, ${text}`;
    }else if(hours >= 12 && hours < 18) {
        greeting.innerText = `Good afternoon, ${text}`;
    }else if(hours >= 18 && hours <= 23) {
        greeting.innerText = `Good evening, ${text}`;
    }else {
        greeting.innerText = `Hello, ${text}`;
    }

    }
                
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
                
function init() {
    getTime();
    setInterval(getTime, 1000);
    loadName();
    
}

init();