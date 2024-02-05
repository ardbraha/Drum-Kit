for (let i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    let buttonLetter = this.innerHTML;
    keyCheckUp(buttonLetter)
    buttonAnimation(buttonLetter)
  })
}

document.addEventListener("keydown", function(event){
  keyCheckUp(event.key)
  buttonAnimation(event.key)
})

function keyCheckUp(key){
  switch (key){
    case "w":
      let tomOne = new Audio('sounds/tom-1.mp3');
      tomOne.play();
      break;
    case "a":
      let tomTwo = new Audio('sounds/tom-2.mp3');
      tomTwo.play();
      break;
    case "s":
      let tomThree = new Audio('sounds/tom-3.mp3');
      tomThree.play();
      break;
    case "d":
      let tomFour = new Audio('sounds/tom-4.mp3')
      tomFour.play();
      break;
    case "j":
      let snare = new Audio('sounds/snare.mp3')
      snare.play()
      break;
    case "k":
      let crash = new Audio('sounds/crash.mp3')
      crash.play()
      break;
    case "l":
      let kickBass = new Audio('sounds/kick-bass.mp3')
      kickBass.play()
      break;
    default:
      console.log(buttonLetter)
  }
}

function buttonAnimation(key){
  let activeKey = document.querySelector("." + key)
  activeKey.classList.add("pressed")

  setTimeout(() => {
    activeKey.classList.remove("pressed")
  }, 100);
}