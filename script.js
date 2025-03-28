//This variable is used to keep track of how many times the button has been clicked.
let clicks = 0;

function trackClicks(){
  //Shorthand way to increase clicks by 1
  clicks++;
  
  //Uncomment this to see the code keeping track of clicks in the console of your browser
  //console.log(clicks) 
  
  let div = document.getElementById("surpriseDiv");
  
  //This is how you add a class in JavaScript
  div.classList.add("surprise");
}
