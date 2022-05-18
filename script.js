const taimer =document.querySelector(".timer")
let time = 60;

const updateCountdown = () => {
    const minute = Math.floor(time / 60)
    let secunde = time % 60;
    if (secunde < 10){
        secunde = "0" + secunde
    }
taimer.innerHTML = `${minute}:${secunde}`

    if (time === 0){
        alert("arti pierdut")
        time = 60
    }
    time--
}




setInterval(updateCountdown,1000)
