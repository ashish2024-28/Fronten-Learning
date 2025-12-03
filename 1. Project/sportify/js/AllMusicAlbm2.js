
//-------//
let AllPP = document.querySelectorAll(".pplay")

let PlayBtnM1 = document.getElementById("M1");
let PP1 = document.querySelector(".PlayP1");
PlayBtnM1.addEventListener("click", () => {
    Playsongs(songs[0],PP1,PP1)
    console.log(Playsongs)
});

let PlayBtnM2 = document.getElementById("M2");
let PP2 = document.querySelector(".PlayP2");
PlayBtnM2.addEventListener("click", () => {
    Playsongs(songs[1],PP2,AllPP)
    console.log(Playsongs)
});

