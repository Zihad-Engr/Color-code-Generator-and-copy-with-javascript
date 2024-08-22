let change=document.querySelector('#change');
let body=document.querySelector('body');
let Copy=document.querySelector('#Copy');
let area=document.querySelector('#area');

change.addEventListener('click',(e)=>{
    body.style.backgroundColor=ColorGenerator();
    area.value=ColorGenerator();
});
Copy.addEventListener('click',(e)=>{
    navigator.clipboard.writeText(area.value);
    alert("copied");
    
})


const ColorGenerator=()=>{
    let red=Math.ceil(Math.random()*255)
let green=Math.ceil(Math.random()*255)
let blue=Math.ceil(Math.random()*255)

     let genBgColor=`rgb(${red},${green},${blue})`
return genBgColor;
}





