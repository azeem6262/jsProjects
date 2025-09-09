const body = document.querySelector('body');
const mainPage = document.querySelector('.mainPage');
mainPage.style.display = 'flex';
mainPage.style.flexDirection = 'column'
mainPage.style.alignItems = 'center';
const allH1 = document.querySelectorAll('.mainHeading');
allH1.forEach((h1)=>{
    h1.style.textAlign = 'center';
})
const nav = document.querySelectorAll('.navbar');
nav.forEach((n)=>{
    n.style.textAlign = 'center';
    n.style.background = 'black';
    n.style.padding = '15px'
})
const navText = document.querySelectorAll('.navText');
navText.forEach((nT)=>{
    nT.style.padding = '5px'
    nT.style.color = 'white'
})
const boxes = document.querySelectorAll('.box');
boxes.forEach((box)=>{
    box.style.alignItems = 'center'
    box.style.height = '80px';
    box.style.width = '80px';
    box.style.display = 'inline-block';
    box.style.margin = '5px';
    box.style.border = '2px solid black';
    box.addEventListener('click', (e)=>{
        console.log(e.target);
        console.log(e);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey';
        }else if(e.target.id === 'white'){
            body.style.backgroundColor = 'white';
        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }else if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
        }
    })})
function setColor(selector, colorValue){
const temp = document.querySelector(selector);
    temp.style.backgroundColor = `${colorValue}`;
    
}
setColor('#grey', 'grey');
setColor('#white', 'white');
setColor('#blue', 'blue');
setColor('#yellow', 'yellow');
