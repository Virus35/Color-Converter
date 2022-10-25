String.prototype.convertToRGB = function(){
    if(this.length != 6){
        return "Only six-digit hex colors are allowed."
;    }

    var aRgbHex = this.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

  var fullColorHex = function(r,g,b) {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    let save="#"+red+green+blue;
    return save;
  };

const hex=document.querySelector("#HexConvertButton");
let hexInput=document.querySelector("#hexCInp");
let display=document.querySelector("#hexCOut");

let rInput=document.querySelector("#RCInput");
let gInput=document.querySelector("#GCInput");
let bInput=document.querySelector("#BCInput");
let rgb=document.querySelector("#rgbConvertButton");
let display1=document.querySelector("#rgbCOut");

console.log(typeof rInput.value);

hex.addEventListener("click",(e)=>{
    display.innerHTML=hexInput.value.convertToRGB();
})

rgb.addEventListener("click",(e)=>{
    let r=rInput.value;
    let g=gInput.value;
    let b=bInput.value;
    let result=fullColorHex(+r,+g,+b);
    display1.innerHTML=result;
})


let rrInput=document.querySelector("#RrInput");
let ggInput=document.querySelector("#GrInput");
let bbInput=document.querySelector("#BrInput");
let display2=document.querySelector("#range-color-box");

const array=[rrInput,ggInput,bbInput];
array.forEach((cur_value,index)=>{
    cur_value.addEventListener("input",(e)=>{
        let rr=rrInput.value;
        let gg=ggInput.value;
        let bb=bbInput.value;
        let result1=fullColorHex(+rr,+gg,+bb);
        display2.innerHTML=result1;
    })
})


let random=document.querySelector("#randomPickerButton");
random.addEventListener("click",(e)=>{
    document.querySelector(".random-value-para").innerHTML=generateRandomColor();
})


function hexFindbtn() {
    let hexInput = document.getElementById("hexInput").value;
    if(hexInput.length!=7){
        document.getElementById("color-box").innerHTML="PLEASE ENTER A VALID CODE";
        document.getElementById("color-box").style.display="flex";
        document.getElementById("color-box").style.fontSize="2rem";
        document.getElementById("color-box").style.alignItems="center";
        document.getElementById("color-box").style.justifyContent="center";

    }
    else{
        document.getElementById("color-box").innerHTML="";
        document.getElementById("color-box").style.backgroundColor = `${hexInput}`;
    }
        
}

function RGBFindbtn() {
    let red= document.getElementById("RInput").value;
    let green= document.getElementById("GInput").value;
    let blue= document.getElementById("BInput").value;
    document.getElementById("rgb-color-box").style.backgroundColor= `rgb(${red},${green},${blue})`;
}