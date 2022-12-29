function fulle() {
    if (batterylevel < 4 ) {
        batterylevel ++
    } 
    batterycolor()
    batterytext()
}

function bosalt() {
    if (batterylevel > 0 ) {
        batterylevel --
    } 
    batterycolor()
    batterytext()
}

function batterycolor() {
   if (batterylevel===0 ) {
    document.querySelector("#batteryOne").style.background="white"
    document.querySelector("#batteryTwo").style.background="white"
    document.querySelector("#batteryThree").style.background="white"

   } 
   else if (batterylevel===1) {
    document.querySelector("#batteryOne").style.background="red"
    document.querySelector("#batteryTwo").style.background="white"
    document.querySelector("#batteryThree").style.background="white"
    
   }
   else if (batterylevel===2) {
    one.setAttribute("style","background-color:orange")
    two.setAttribute("style","background-color:orange")
    three.setAttribute("style","background-color:white")

   
    
   }
   else if (batterylevel===3) {
    one.setAttribute("style","background-color:green")
    two.setAttribute("style","background-color:green")
    three.setAttribute("style","background-color:green")

   
    
   }
}
function batterytext() {
    if(batterylevel===0 ){
        show.innerHTML="batarya: % 0"
    } else if(batterylevel===1 ){
        show.innerHTML="batarya: % 33"
    }  else if(batterylevel===2 ){
        show.innerHTML="batarya: % 66"
    } else if(batterylevel===3 ){
        show.innerHTML="batarya: % 100"
    }
    
}