const clock = document.querySelector("#Clock")
// let date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);