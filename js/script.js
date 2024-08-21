let change=document.querySelector('#change');
let body=document.querySelector('body');
let Copy=document.querySelector('#copy');
let area=document.querySelector('#area');

change.addEventListener('click',(e)=>{
    body.style.backgroundColor=ColorGenerator();
    area.innerHTML=ColorGenerator();
})

const ColorGenerator=()=>{
    let red=Math.ceil(Math.random()*255)
let green=Math.ceil(Math.random()*255)
let blue=Math.ceil(Math.random()*255)

     let genBgColor=`rgb(${red},${green},${blue})`
return genBgColor;
}


console.log(ColorGenerator())


