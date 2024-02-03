"use script"

const game = document.querySelector("#game"),
    username = document.querySelector("#name"),
    score = document.querySelector("#score"),
    health = document.querySelector("#health"),
    timer = document.querySelector("#time"),
    popap = document.querySelector("#popap"),
    input = document.querySelector("#username"),
    start = document.querySelector("#start");




    let minute = 0,
    second = 0;
function gameTimer() {
    /** Функция таймера для игры */
    second++;
    if (second === 60){
        minute++;
        second = 0;
    }

    timer.textContent = `${minute < 10 ? "0"+minute: minute}:${second < 10 ? "0"+second: second}`
}

let basket = document.createElement("img");
basket.classList.add("basket");
basket.src = "./img/basket.png";
game.appendChild(basket)
console.log(basket)


function draw() {
    game.addEventListener("mousemove", (event) => {
        mouseX = event.offsetX;
        basket.style.left = mouseX + "px";
        if (parseFloat(basket.style.left) <= basket.width/2){
            basket.style.left = basket.width/2 + "px"
        } else if (parseFloat(basket.style.left) >= game.offsetWidth - basket.width/2){
            basket.style.left = basket.style.left - basket.width*2 + "px"
        }
    });
}

function fruits(){
    let fruit = document.createElement("img")
    const fruits  = ['./img/fruit1.svg', './img/fruit2.svg', './img/fruit3.svg']
    let n = Math.random()
    if(n <= 0.33){
        fruit.src = fruits[0]
        console.log(true)
    }
    else if(n >= 0.66){
        fruit.src = fruits[1]
    }
    else{
        fruit.src = fruits[2]
    }
    fruit.classList.add('fruit')

    r = Math.round(Math.random() * game.offsetWidth)
    fruit.style.left = r + 'px'
    game.appendChild(fruit)
    
    setInterval(()=>{
        fruit.style.top = fruit.offsetTop + 1 +'px'
        console.log(fruit.offsetTop)
    }, 10)

    
    // let i = 1
    // while(i <= 10){
    //     if(fruit.offsetLeft >= basket.offsetLeft - 30){
    //         score.textContent = 2
    //         fruit.remove()
    //         i++
    //     }
    // }
}
start.addEventListener("click", () => {
    popap.remove();
    username.textContent = input.value;
    let time = setInterval(gameTimer, 1000);
    let drawGame = setInterval(draw, 1000);
    let fruit = setInterval(fruits, 1000)
});



      