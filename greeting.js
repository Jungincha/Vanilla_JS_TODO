// import { hours } from './clock.js';

const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

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
    // if(hours >= 6 && hours < 12) {
    //     greeting.innerText = `Good morning ${text}`;
    // }else if(hours >= 12 && hours < 18) {
    //     greeting.innerText = `Good afternoon ${text}`;
    // }else if(hours >= 18 && hours <= 23) {
    //     greeting.innerText = `Good evening ${text}`;
    // }else {
    greeting.innerText = `Hello ${text}`;
    // }
    
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
    loadName();
}

init();