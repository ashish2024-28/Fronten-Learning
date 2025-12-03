//PlayBtn2 work when Play song show in bottom 
let AllMP = document.getElementById("AllMusicPlay");
let PSong = document.getElementById("PrivSong");
let PlayBtn2 = document.getElementById("pplay2");
let NSong = document.getElementById("NextSong");


// this work when click PlayBtn then Playsong Again click Stopsong
let Play = false;
let pplay = document.querySelector(".pplay");
let audio = document.getElementById("AMPlay");

// method 2 here pass parameter
// PlayBtn.addEventListener("click", () => {
//     Playsongs(link)

// });
// 
function Playsongs(link,PP,AllPP){
    if (!Play) {
        PP.src = "items/Play.png";
        AllMP.style.display = "block";
        // audio.style.display = "block";
        audio.src = link;
        Play = true;
    }
    else if (Play & audio.src == link) {
        PP.src = "items/Puse.png";
        // audio.style.display = "none";
        AllMP.style.display = "none";
        audio.src = "";
        Play = false;
    }
    else if (Play) {
        AllPP.src = "items/Puse.png";
        // audio.style.display = "none";
        AllMP.style.display = "none";
        audio.src = "";
        Play = false;
    }
}
//
//PlayBtn2 work when Play song show in bottom 
PlayBtn2.addEventListener("click", () => {
    AllMP.style.display = "none";
    audio.src = "";
    pplay.src = "items/Puse.png";
    Play = false;
})

// Next and privious Song Play
NSong.addEventListener("click",() =>{
    audio.src = ""
})


