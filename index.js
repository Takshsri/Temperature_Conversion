const textBox=document.getElementById("textbox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelcius");
const result=document.getElementById("result");
let temp;
function convertdegree(event){
event.preventDefault();
if(toFahrenheit.checked){
    temp=Number(textBox.value);
    temp=temp * 9 / 5 + 32;
    result.textContent=temp.toFixed(1) +" F";
}
else if(toCelsius.checked){
    temp=Number(textBox.value);
    temp=(temp-32) *(5/9);
    result.textContent=temp.toFixed(1) +" C";  
}
else{
    result.textContent="Select a Unit";
}
}