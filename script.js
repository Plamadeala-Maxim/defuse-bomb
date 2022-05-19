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

const ecr = document.querySelectorAll(".ecr")
const ecran1 = document.querySelector(".ecran1")
const ecran2 = document.querySelector(".ecran2")
const ecran3 = document.querySelector(".ecran3")
const ecran4 = document.querySelector(".ecran4")

const a = `${Math.floor(Math.random()*9)}`
const b = `${Math.floor(Math.random()*9)}`
const c = `${Math.floor(Math.random()*9)}`
const d = `${Math.floor(Math.random()*9)}`

console.log(`${a}${b}${c}${d}`);


function press(x) {


    if (ecran1.textContent === ""){
        ecran1.textContent += x;
    }else if(ecran2.textContent === ""){
        ecran2.textContent += x;
    }else if(ecran3.textContent === ""){
        ecran3.textContent += x;
    }else if(ecran4.textContent === ""){
        ecran4.textContent += x;
        if(ecran1.textContent === a){
                 ecran1.style.backgroundColor = "green";
             }else{
            ecran1.style.backgroundColor = "red";
        }
        if(ecran2.textContent === b){
            ecran2.style.backgroundColor = "green";
        }else{
            ecran2.style.backgroundColor = "red";
        }

        if(ecran3.textContent === c){
            ecran3.style.backgroundColor = "green";
        }else{
            ecran3.style.backgroundColor = "red";
        }

        if(ecran4.textContent === d){
            ecran4.style.backgroundColor = "green";
        }else{
            ecran4.style.backgroundColor = "red";
        }

}
}



















// const number = Math.floor(Math.random()*9)
// const random = Math.floor(number)









//let display = document.getElementById("display");
//
// function clear1() {
//     display.value = "";
// }
// function calc() {
//     display.value = eval(display.value);
// }

