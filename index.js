//get input field
var input = document.getElementById("myInput");

//execute function when keyup
document.addEventListener("keyup", function(event) {
  //store keycode
  var key = String(KeyboardEvent.code);
  //cancel default action (precaution w3schools)
  event.preventDefault();
  //trigger button with label that matches code
  document.getElementById(`${event.code}`).click();
})

function playNote(e) {
  var audio = document.querySelector(`audio[data-key="${e}"]`);
  audio.play();
}
