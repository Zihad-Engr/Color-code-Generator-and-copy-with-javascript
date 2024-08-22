let changeRGB=document.querySelector('#changeRGb');
let changeHex=document.querySelector('#changeHex');
let body=document.querySelector('body');
let Copy=document.querySelector('#Copy');
let area=document.querySelector('#area');
let copytext=document.querySelector('#copytext');
let copytext1=document.querySelector('#copytext1');
let toast=document.querySelector('#toast');
let collectValue=area.value;

area.addEventListener('keyup',(e)=>{
    let color = e.target.value;
    if(color && isValidHex(color)){
        body.style.backgroundColor=color;
    }
    
})
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
    if(isValidHex(area.value)){
        navigator.clipboard.writeText(area.value).then(function(e){
            toast.className="tostaniin toast";
            copytext1.innerHTML=`Wow!`
            copytext.innerHTML=`{${area.value}} code is copied `
        });
    }else{
        alert("Invalid Hex Code!")
    }
  
    
})
toast.addEventListener('click',()=>{
    toast.className="tostaniout toast";
})


const isValidHex=(color)=>{
    if(color.length!=7) return false;
    if(color[0]!="#") return false;

    let subcolor= color.substring(1);
    return /^[0-9A-Fa-f]{6}$/i.test(subcolor);
 }
// const isValidRgb=(color)=>{
//     if(color.length!=7) return false;
//     if(color[0]!="#") return false;

//     let subcolor= color.substring(1);
//     return /^[0-9A-Fa-f]{6}$/i.test(subcolor);
//  }