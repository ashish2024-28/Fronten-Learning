
async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/items/music/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
     for(let index = 0; index < as.length; index++){
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href)
        }
    }
    return songs
}

async function main() {
    // Get the list of all the songs
    let songs = await getSongs()

    // Song List
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>${song} <li>`;
    }
    // play the first song
    var audio = new Audio(songs[12])
    audio.play();
}
 
main(); 
