# Vanilla_JS_TODO
Todo list made with vanilla Javascript
## Getting Started
It's a clock, weather, and todo list webpage inspired by [momentum](https://momentumdash.com/)
### Used
- HTML
- CSS
- Javascript
- [open weather API](https://openweathermap.org/)
### Explanation for functions
#### Why `clock_greet.js`?
At first, I tried to seperate `clock.js` and `greet.js`. But then I couldn't get `hours` variable from `clock.js` from `greet.js`. Since I've wanted to make the greeting comment different depend on the time.
```js
if(hours >= 6 && hours < 12) {
        greeting.innerText = `Good morning, ${text}`;
    }else if(hours >= 12 && hours < 18) {
        greeting.innerText = `Good afternoon, ${text}`;
    }else if(hours >= 18 && hours <= 23) {
        greeting.innerText = `Good evening, ${text}`;
    }else {
        greeting.innerText = `Hello, ${text}`;
    }
```
I should just combine the `js` files. If I knew how to `import` and `export` the files using webpack, I could've seperate those files. So in the future as I study more, I should study how to seperate files and use variables from other files. 
#### Random background
I got the background image from [unsplash](https://unsplash.com/). 
* Creating <img> tag
```js
const image = new Image();
image.src = `images/${imgNum}.jpg`;
body.prepend(image);
```
* Making random numbers for background images
```js
const num = Math.floor(Math.random() * IMG_NUM);
```
#### Sample image
![alt text]()
