
///////////////////////////////
function correntTime() {
    var correntime = document.querySelector('.correntime')
    var now = new Date();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var second = now.getSeconds();
    if(hours < 10 ){
        hours = `0${hours}`
    }if(mins < 10){
        mins = `0${mins}`
    }
    correntime.innerHTML = `${hours}:${mins}`;
    return `${hours}:${mins}`;
}
setInterval(correntTime,1000);

/////////////////////////////
const getSavedAlarms = function(){
    alarmsJson = localStorage.getItem('alarms');
    if(alarmsJson != null){
        return JSON.parse(alarmsJson)
    }else{
        return []
    }
}
///////////////////////////////
const saveAlarm = function(alarms){
localStorage.setItem('alarms',JSON.stringify(alarms))
}




//////////////////////////////
class MakeAlert{
    constructor(_time,_note,_song){
    this.time =_time;
    this.note = _note;
    this.song = _song;
    }
    addToHtml(){
    var cardAlarm = document.querySelector('.cardAlarm');
    cardAlarm.innerHTML += "<ul>"
      cardAlarm.innerHTML += `<li class="time">${this.time}</li>`;
      cardAlarm.innerHTML += `<p class="note">${this.note}</p>`;
      cardAlarm.innerHTML += `<p class="song">${this.song}</p>`;
      cardAlarm.innerHTML += "</ul>"
     
    }
    checkPlay(){
        alarms.forEach(alarm=>{
            if(alarm.time == correntTime()){
                var audio = document.querySelector('.audio');
                audio.src =`sounds/${alarm.song}.mp3`;
                audio.autoplay = true;
            }
        })
        setInterval(this.checkPlay,15000)
    }
}





