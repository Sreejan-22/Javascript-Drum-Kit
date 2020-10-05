window.addEventListener("keydown", function (e) {
  let audio = document.querySelector(`audio[data-key = "${e.key}"]`); 
  if (!audio) {
    return; // stops the function from runnning altogether
  }
  audio.currentTime = 0;
  audio.play();
  let key = document.querySelector(`.key[data-key = "${e.key}"]`);
  key.classList.add("playing");
});

function removeTransform(e) {
  if (e.propertyName !== "transform") return; 
  
  this.classList.remove("playing");
}

let allKeys = document.querySelectorAll(".key");
allKeys.forEach((key) => key.addEventListener("transitionend", removeTransform));
