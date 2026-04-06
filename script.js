const hour = document.querySelector("#hour");
const min = document.querySelector("#minute");
const sec = document.querySelector("#second");
const amPm = document.querySelector("#ampm");

function updateTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    if(h>12){
        h = h - 12;
        amPm.innerText = "PM"
    }
    h = h<10 ? "0" + h : h ;
    m = m<10 ? "0" + m : m ;
    s = s<10 ? "0" + s : s ;
    hour.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    setTimeout(()=>{
        updateTime();
    },1000);
}
updateTime();