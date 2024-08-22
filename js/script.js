let changeRGB=document.querySelector('#changeRGb');
let changeHex=document.querySelector('#changeHex');
let body=document.querySelector('body');
let Copy=document.querySelector('#Copy');
let area=document.querySelector('#area');


//  RGB Genetor 
changeRGB.addEventListener('click',(e)=>{
    body.style.backgroundColor=ColorGeneratorRGB();
    area.value=ColorGeneratorRGB();
});

const ColorGeneratorRGB=()=>{
    let red=Math.ceil(Math.random()*255);
let green=Math.ceil(Math.random()*255);
let blue=Math.ceil(Math.random()*255);

     let genBgColor=`rgb(${red},${green},${blue})`

return genBgColor;
}



// Hex Generator 

changeHex.addEventListener('click',(e)=>{
    body.style.backgroundColor=ColorGeneratorHex();
    area.value=ColorGeneratorHex();
});

const ColorGeneratorHex=()=>{
    let red=Math.ceil(Math.random()*255).toString(16);
let green=Math.ceil(Math.random()*255).toString(16);
let blue=Math.ceil(Math.random()*255).toString(16);
     let genBgColorHex=`#${red}${green}${blue}`
return genBgColorHex;
}




// Copy Code 


Copy.addEventListener('click',(e)=>{
    navigator.clipboard.writeText(area.value).then(function(e){
        alert("Your Code is copy!")
    });
  
    
})


