const text = document.querySelector('.fancy');
const srtText = text.textContent;
const splitText = srtText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += '<span>' + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 100);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char ++  
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}