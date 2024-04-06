let songList=document.getElementById("song-list")
let progress=document.getElementById("progress")
let playBtn=document.getElementById("play-btn")
let prevBtn=document.getElementById("prev")
let nextBtn=document.getElementById("next")
let time=document.getElementById("time")
let songs=[{
    name:"song1",
    id:1
},
{
    name:"song2",
    id:2
},
{
    name:"song3",
    id:3
},
{
    name:"song4",
    id:4
}]
for(let song of songs){
    let li=document.createElement("li")
    li.innerHTML=song.name
    li.setAttribute("name",song.name)
    li.setAttribute("id",song.id)
    songList.appendChild(li)
    li.classList.add("song-item")
}
let audio=new Audio("./assets/song1.mp3")
// console.log(playBtn.children)
playBtn.addEventListener("click",(e)=>{
    audio.paused?audio.play():audio.pause()
    playBtn.children[0].classList.toggle("fa-play")
    playBtn.children[0].classList.toggle("fa-pause")

})
audio.addEventListener("timeupdate",()=>{
    let pv=audio.currentTime*100/audio.duration
    progress.value=pv
})
progress.addEventListener("change",()=>{
    let time=progress.value*audio.duration/100
    audio.currentTime=time
})
songList.addEventListener("click",(e)=>{
    console.log(e.target)
    let songId=e.target.getAttribute("id")
    audio.src=`./assets/song${songId}.mp3`
    audio.play()
    playBtn.children[0].classList.remove("fa-play")
    playBtn.children[0].classList.add("fa-pause")
    prevBtn.addEventListener("click",()=>{
        songId--;
        audio.src=`./assets/song${songId}.mp3`
        audio.play()
    playBtn.children[0].classList.remove("fa-play")
    playBtn.children[0].classList.add("fa-pause")
    })
    nextBtn.addEventListener("click",()=>{
        songId++;
        audio.src=`./assets/song${songId}.mp3`
        audio.play()
    playBtn.children[0].classList.remove("fa-play")
    playBtn.children[0].classList.add("fa-pause")
  
})
})