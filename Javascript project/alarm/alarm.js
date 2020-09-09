console.log('hello alarm');
const alarmSubmit = document.getElementById('btn');
let blur = document.getElementById('Time');
let Format = document.getElementById('format');


blur.addEventListener('blur',()=>{
    console.log("element get blurred");
    let regex = /^[0-9]{4,6}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$/;
    let str = blur.value;
    if(regex.test(str))
    {
        console.log('your time format is right');
        // alert("right time format");
        blur.style.border = "3px solid green";
        Format.style.color = "black";
        validTime = true;
        alarmSubmit.addEventListener('click',setAlarm);
    }
    else{
        console.log('wrong time format');
        blur.style.border = "3  px solid red";
        document.getElementById('format').style.color = "tomato";
        alert("wrong time format");
        validTime = false;
    }
})

function ringingBell(){
    var audio = new Audio('./alarm.mp3')
    audio.play();
}
function setAlarm(e){
    e.preventDefault();
    console.log('setting up alarm');
    let alarmTime = document.getElementById('Time');
    let Set_Alarm = new Date(alarmTime.value);
    console.log(Set_Alarm);
    let now = new Date();
    
    let Alarm=(Set_Alarm-now);
    console.log(Alarm);
    if(Alarm>=0)
    {
        setTimeout(() => {
            console.log('alarm is ringing');
            ringingBell();
        }, Alarm);
    }
    else{
        alert('you enter past time or very long time');
    }

}