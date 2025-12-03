//PlayBtn2 work when Play song show in bottom 
let AllMP = document.getElementById("AllMusicPlay");
let PlayBtn2 = document.getElementById("pplay2");
let PSong = document.getElementById("PrivSong");
let NSong = document.getElementById("NextSong");


// this work when click PlayBtn then Playsong Again click Stopsong
let Play = false;
let pplay = document.querySelector(".PlayP1");
let audio = document.getElementById("AMPlay");

// method 1

let PlayBtnM1 = document.getElementById("M1");
PlayBtnM1.addEventListener("click", () => {
    if (!Play) {
        pplay.src = "items/Play.png";
        AllMP.style.display = "block";
        // audio.style.display = "none";
        audio.src = "items/music/Aapne_Bachaya_Mujhe_Vayuu_Shree_Premanand_ji_Maharaj_Hindi_Rap48k.mp3";
        Play = true;
    }
    else if (Play) {
        pplay.src = "items/Puse.png";
        // audio.style.display = "none";
        AllMP.style.display = "none";
        audio.src = "";
        Play = false;
    }
});

link="/items/music/Shri_Ram_Chandra_Kripalu🙏_Jubin_Nautiyal_Payal_Dev_Manoj_Muntashir.mp3"
// method 2 here pass parameter

// function Playsongs(link){
//     if (!Play) {
//         pplay.src = "items/Play.png";
//         AllMP.style.display = "block";
//         // audio.style.display = "none";
//         audio.src = link;
//         Play = true;
//     }
//     else if (Play) {
//         pplay.src = "items/Puse.png";
//         // audio.style.display = "none";
//         AllMP.style.display = "none";
//         audio.src = "";
//         Play = false;
//     }
// }
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


