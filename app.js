let songList=document.getElementById("song-list")
let progress=document.getElementById("progress")
let playBtn=document.getElementById("play-btn")
let prevBtn=document.getElementById("prev")
let nextBtn=document.getElementById("next")
let time=document.getElementById("time")

let songs=[
    {
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
    }
]
let audio=new Audio("./assets/song1.mp3")
// document.createAttribute(span)

// it returns an Object;
// auio ka upar ab play pause lagega 

// task 1
// show song list in UI 
for(let song of songs){
    let li=document.createElement("li")
    li.innerText=song.name;
    li.setAttribute("id",song.id)
    li.classList.add("song-item")
    songList.append(li)
}

//play button ka icon badlo and gana challao
playBtn.addEventListener("click",()=>{
    audio.paused ? audio.play():audio.pause()
    if(playBtn.children[0].classList.contains("fa-play")){
        playBtn.children[0].classList.remove('fa-play')
        playBtn.children[0].classList.add('fa-pause')

    } else{
        playBtn.children[0].classList.remove('fa-pause')
        playBtn.children[0].classList.add('fa-play')

    }
    // if button ka child uski class check kar rahe hai 
    

    //npw range ko sync karo range sa

    // leaning about time update event 

})
audio.addEventListener("timeupdate",()=>{
    let currentProgress=audio.currentTime*100/audio.duration
    progress.value=currentProgress
    time.innerHTML=audio.currentTime.toFixed(0)+'s'
})

//drag karna sa gana chale

progress.addEventListener("change",()=>{
    let updateTime=audio.duration*progress.value/100
    audio.currentTime=updateTime;
    // npw when time gets updated , gana wahi sa chalgea jitna progress hua 

})
function clearAll(){
    let songs=document.querySelectorAll("#song-list")
    for(let item of songList.children)item.classList.remove("selector")
}
// button dabao gaana chalao pratiyogita
songList.addEventListener("click",(event)=>{
    clearAll()
    let songId=event.target.getAttribute("id")
    event.target.classList.add("selector")
    console.log(songId)
    audio.src=`./assets/song${songId}.mp3`;
    audio.currentTime=0;
    audio.play()
    // event.target.classList.add("selector")
    playBtn.children[0].classList.add('fa-pause')
    playBtn.children[0].classList.remove('fa-play')
    prevBtn.addEventListener("click",()=>{
        let song=document.getElementById(`${songId}`)
        song.classList.remove("selector")
        songId=songId-1
        if(songId==0)songId=songs.length
        song=document.getElementById((`${songId}`))
        song.classList.add("selector")
        audio.src=`./assets/song${songId}.mp3`
        audio.currentTime=0;
        audio.play();
        playBtn.children[0].classList.add('fa-pause')
        playBtn.children[0].classList.remove('fa-play')
 
    })
    nextBtn.addEventListener("click",()=>{
        // event.target.classList.remove("selector")
        let song=document.getElementById(`${songId}`)
        song.classList.remove("selector")
        songId=songId-0+1
        if(songId==songs.length+1)songId=1
        // console.log(songId)
        song=document.getElementById((`${songId}`))
        song.classList.add("selector")
        audio.src=`./assets/song${songId}.mp3`
        audio.currentTime=0;
        audio.play();
        playBtn.children[0].classList.add('fa-pause')
        playBtn.children[0].classList.remove('fa-play')
 
    })
    


    
})



