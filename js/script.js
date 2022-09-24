const icons = document.querySelectorAll("#cout-icon");
const firstMain = document.querySelectorAll("main")[0];
const secoundMain = document.querySelectorAll("main")[1];
const choseFromYou = document.querySelectorAll("#secound-cout")[0];
const choseFromComputer = document.querySelectorAll("#secound-cout")[1];
const yourImg = document.querySelectorAll("#secound-img")[0];
const computerImg = document.querySelectorAll("#secound-img")[1];
let score = document.getElementById("score");

icons.forEach((val, ind) => {
    val.onclick = function(){

        firstMain.style.display = "none";
        secoundMain.style.display = "flex";

        let yourSelect = val.getAttribute("data-select");
        let shafill = Math.floor(Math.random() * icons.length);
        let computerSelect = icons[shafill].getAttribute("data-select");
        
        col(yourSelect, computerSelect)

    }
})

function col(you, computer){
    choseFromYou.classList.add(you);
    yourImg.src = `images/icon-${you}.svg`;
    setTimeout(() => {
        choseFromComputer.classList.add(computer)
        computerImg.src = `images/icon-${computer}.svg`;
    }, 500);

    if(you===computer){
        setTimeout(() => {
            document.querySelector("#state").textContent = "Draw";
        }, 500);
    }else if(you==="paper" && computer==="rock" || you==="scissors" && computer==="paper" || you==="rock" && computer==="scissors"){
        setTimeout(() => {
            choseFromYou.classList.add("secound");
            document.querySelector("#state").textContent = "Win";
            score.textContent = parseInt(score.textContent) + 1;
        }, 500);
    }else{
        setTimeout(() => {
            choseFromComputer.classList.add("secound");
            document.querySelector("#state").textContent = "Lose";
            score.textContent === "0" ? "" : score.textContent = parseInt(score.textContent) - 1;
        }, 500);
    }
}
document.querySelector(".again").onclick = resetColFunction;
function resetColFunction(){
    firstMain.style.display = "flex";
    secoundMain.style.display = "none";
    choseFromYou.classList.remove("paper", "scissors", "rock");
    choseFromYou.classList.remove("secound");
    yourImg.src = ``;
    choseFromComputer.classList.remove("paper", "scissors", "rock");
    choseFromComputer.classList.remove("secound");
    computerImg.src = ``;
    document.querySelector("#state").textContent = "";
}

document.querySelector(".rules").onclick =  () => document.querySelector(".background-rules").style.display = "block";
document.querySelector(".close-rules").onclick =  () => document.querySelector(".background-rules").style.display = "none";
