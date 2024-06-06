const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=1;i<=6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

console.log(randomColor());

const startChangingColor = function(){
    document.body.style.backgroundImage = `linear-gradient(to top right,${randomColor()},${randomColor()},${randomColor()})` 
}
const stopChangingColor = function(){
    clearInterval(timeId)
    timeId = null
}

document.querySelector('.start').addEventListener("click",function(){
    timeId = setInterval(startChangingColor, 1000);
})

document.querySelector(".stop").addEventListener("click",stopChangingColor)