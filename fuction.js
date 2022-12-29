function fulle() {
    if (batterylevel < 4 ) {
        batterylevel ++
    } 
    batterycolor()
}

function bosalt() {
    if (batterylevel > 0 ) {
        batterylevel --
    } 
    batterycolor()
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