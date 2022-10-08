function playSound(e) {
  // console.log(e.keycode);

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(audio);
  if (!audio) return; //stop the audio from running
  audio.currentTime = 0;
  audio.play();
  // console.log(key);

  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitioned", removeTransition));
window.addEventListener("keydown", playSound);
