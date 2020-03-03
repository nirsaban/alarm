let alarms = getSavedAlarms();
let correntimeFn = correntTime()



document.querySelector('#saveAlarm').addEventListener('click',function(e){
    e.preventDefault();
    let time = document.querySelector('.time').value;
    let note = document.querySelector('.note').value;
    let song= document.getElementById("mySelect").value;
    alarms.push({
        time : time,
        note: note,
        song: song
    })
    //save to local storage
    saveAlarm(alarms);
     alarms.forEach(alarm=>{
     var alertObj = new MakeAlert(alarm.time,alarm.note,alarm.song)
     alertObj.addToHtml()
     alertObj.checkPlay()
    }) 
});





