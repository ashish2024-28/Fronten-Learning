// Songs title 
let songsName = [];
let songs = [];


async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/items/music/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    // let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
            songsName.push(element.href.split("/music/")[1].split(".mp3")[0].slice(0, 40).concat("...."))
        }
    }
    // return songs
}

async function main() {
    // Get the list of all the songs
    await getSongs();

    // Song List
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songsName) {
        songUL.innerHTML = songUL.innerHTML + `<button><li>${song} </li></button>`;
    }
    // play the first song

    songUL.childNodes[0].addEventListener("click", () => {
        // var audio = new Audio(songs[0])
        // audio.play();
        // Play(0);
        link = ""
         Playsongs(link);
        

    });

    songUL.childNodes[1].addEventListener("click", () => {
        // var audio = new Audio(songs[1])
        // audio.play();
        // Play(1);

    });

    songUL.childNodes[2].addEventListener("click", () => {
        var audio = new Audio(songs[2])
        audio.play();
    });

    songUL.childNodes[3].addEventListener("click", () => {
        var audio = new Audio(songs[3])
        audio.play();
    });

    songUL.childNodes[4].addEventListener("click", () => {
        var audio = new Audio(songs[4])
        audio.play();
    });

    songUL.childNodes[5].addEventListener("click", () => {
        var audio = new Audio(songs[5])
        audio.play();
    });

    songUL.childNodes[6].addEventListener("click", () => {
        var audio = new Audio(songs[6])
        audio.play();
    });
    songUL.childNodes[7].addEventListener("click", () => {
        var audio = new Audio(songs[7])
        audio.play();
    });

    songUL.childNodes[8].addEventListener("click", () => {
        var audio = new Audio(songs[8])
        audio.play();
    });

    songUL.childNodes[9].addEventListener("click", () => {
        var audio = new Audio(songs[9])
        audio.play();
    });

    songUL.childNodes[10].addEventListener("click", () => {
        var audio = new Audio(songs[10])
        audio.play();
    });

    songUL.childNodes[11].addEventListener("click", () => {
        var audio = new Audio(songs[11])
        audio.play();
    });

    songUL.childNodes[12].addEventListener("click", () => {
        var audio = new Audio(songs[12])
        audio.play();
    });

    songUL.childNodes[13].addEventListener("click", () => {
        var audio = new Audio(songs[13])
        audio.play();
    });

    songUL.childNodes[14].addEventListener("click", () => {
        var audio = new Audio(songs[14])
        audio.play();
    });

    songUL.childNodes[15].addEventListener("click", () => {
        var audio = new Audio(songs[15])
        audio.play();
    });

    songUL.childNodes[16].addEventListener("click", () => {
        var audio = new Audio(songs[16])
        audio.play();
    });

    songUL.childNodes[17].addEventListener("click", () => {
        var audio = new Audio(songs[17])
        audio.play();
    });

    songUL.childNodes[18].addEventListener("click", () => {
        var audio = new Audio(songs[18])
        audio.play();
    });

    songUL.childNodes[19].addEventListener("click", () => {
        var audio = new Audio(songs[19])
        audio.play();
    });

    songUL.childNodes[20].addEventListener("click", () => {
        var audio = new Audio(songs[20])
        audio.play();
    });

    songUL.childNodes[21].addEventListener("click", () => {
        var audio = new Audio(songs[21])
        audio.play();
    });
    songUL.childNodes[22].addEventListener("click", () => {
        var audio = new Audio(songs[22])
        audio.play();
    });

    songUL.childNodes[23].addEventListener("click", () => {
        var audio = new Audio(songs[23])
        audio.play();
    });

    songUL.childNodes[24].addEventListener("click", () => {
        var audio = new Audio(songs[24])
        audio.play();
    });

}


main(); 