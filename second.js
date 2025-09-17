const mainPage = document.querySelector('.mainPage');
mainPage.style.display = 'flex';
mainPage.style.flexDirection = 'column'
mainPage.style.alignItems = 'center';

const randomColor = function() {
    let color = '#';
    const hex = '0123456789ABCDEF';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
let intervalId;
const startChangingColor = function(){
    const changeBgColor = ()=>{
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

startBtn.addEventListener('click', startChangingColor);

stopBtn.addEventListener('click', stopChangingColor);


