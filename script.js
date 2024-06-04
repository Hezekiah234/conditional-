// var drink = "fanta"
// if (drink == "sprite") {
//    show.innerHTML="Buy fanta"
// }else{
// show.innerHTML= "sha buy anything for me"
// }
// var food = "Amala"  

// if (food == "Amala") {
//  show.innerHTML= "Buy abula"
// } else if (food == "Eba") {
//  show.innerHTML= 'Buy ila'
// } else if (food == "Iyan") {
//  show.innerHTML= 'Buy Egusi'
// }else{
//  show.innerHTML= 'Buy anything you find'
// }
// arthimetic operation
var  song = "audio/dun.mp3"
var songToPlay= new Audio (song)
function checkValue() {
 if (num.value !=""){
  if (num.value >=0 && num.value < 40){
   console.log ("F")
   show.innerHTML= "F"
   songToPlay.play()
  } else if (num.value >=40 && num.value <45 ){
   console.log("E"); 
   show.innerHTML= "E" 
  }
}
}



