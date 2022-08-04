const inputVal=document.getElementById("input-value");
const inputSel=document.getElementById("input-select");
const outputVal=document.getElementById("output-value");
const outputSel=document.getElementById("output-select");
const shownResult=document.getElementById("lastResult");
let x;
 
inputVal.addEventListener("keyup",converting);
outputVal.addEventListener("change",converting);
 inputSel.addEventListener("change",converting);
outputSel.addEventListener("change",converting); 

function converting(){
   
 if(inputSel.value==="kilometer" && outputSel.value==="kilometer"){
    outputVal.value=inputVal.value;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"km"
 }
    if(inputSel.value==="kilometer" && outputSel.value==="meter"){
     outputVal.value=inputVal.value*1000;
     outputVal.textContent= outputVal.value;
     shownResult.textContent= inputVal.value+"km = "+ outputVal.value+"m"

}
if(inputSel.value==="kilometer" && outputSel.value==="centimeter"){
    outputVal.value=inputVal.value*100000;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"km = "+ outputVal.value+"cm"

}
if(inputSel.value==="kilometer" && outputSel.value==="millmeter"){
    outputVal.value=inputVal.value*1000000;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"km = "+ outputVal.value+"mm"

}
if(inputSel.value==="meter" && outputSel.value==="kilometer"){
    outputVal.value=inputVal.value/1000;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"m = "+ outputVal.value+"km"

}
if(inputSel.value==="meter" && outputSel.value==="meter"){
    outputVal.value=inputVal.value;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"m "

}if(inputSel.value==="meter" && outputSel.value==="centimeter"){
    outputVal.value=inputVal.value*100;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"m = "+ outputVal.value+"cm"

}if(inputSel.value==="meter" && outputSel.value==="millmeter"){
    outputVal.value=inputVal.value*1000;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"m = "+ outputVal.value+"mm"

}if(inputSel.value==="centimeter" && outputSel.value==="kilometer"){
    outputVal.value=inputVal.value/100000;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"cm = "+ outputVal.value+"km"

}
if(inputSel.value==="centimeter" && outputSel.value==="meter"){
    outputVal.value=inputVal.value/100;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"cm = "+ outputVal.value+"m"

}
if(inputSel.value==="centimeter" && outputSel.value==="millmeter"){
    outputVal.value=inputVal.value*10;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"cm = "+ outputVal.value+"mm"

}if(inputSel.value==="centimeter" && outputSel.value==="centimeter"){
    outputVal.value=inputVal.value;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"cm"

}
if(inputSel.value==="millmeter" && outputSel.value==="kilometer"){
    outputVal.value=inputVal.value/1000000;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"mm = "+ outputVal.value+"km"

}if(inputSel.value==="millmeter" && outputSel.value==="meter"){
    outputVal.value=inputVal.value/1000;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"mm = "+ outputVal.value+"m"

}if(inputSel.value==="millmeter" && outputSel.value==="centimeter"){
    outputVal.value=inputVal.value/10;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"mm = "+ outputVal.value+"cm"

}if(inputSel.value==="millmeter" && outputSel.value==="millmeter"){
    outputVal.value=inputVal.value;
    outputVal.textContent= outputVal.value;
    shownResult.textContent= inputVal.value+"mm"

}
}