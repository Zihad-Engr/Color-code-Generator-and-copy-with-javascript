let changeRGB=document.querySelector('#changeRGb');
let changeHex=document.querySelector('#changeHex');
let body=document.querySelector('body');
let Copy=document.querySelector('#Copy');
let area=document.querySelector('#area');
let copytext=document.querySelector('#copytext');
let copytext1=document.querySelector('#copytext1');
let toast=document.querySelector('#toast');


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
        
        
        toast.className="tostaniin";
        setTimeout(function(){
            toast.className="tostaniout";
           
        },1500)
        copytext1.innerHTML=`Wow!`
        copytext.innerHTML=`{${area.value}} code is copied `
    });
  
    
})


