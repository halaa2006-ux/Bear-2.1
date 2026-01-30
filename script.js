
const rightEar = document.getElementById("rightEar");
const bear = document.getElementById("bear");
const face = document.getElementById("face");
const rightEye = document.getElementById("rightEye");
const rightPupil = rightEye.querySelector(".pupil");
const winkSound = document.getElementById("winkSound");

 
bear.addEventListener("mouseenter", () => {
  // tilt ears outward
  leftEar.style.transform = "rotate(-15deg)";
  rightEar.style.transform = "rotate(15deg)";
});

bear.addEventListener("mouseleave", () => {
  // reset ears
  leftEar.style.transform = "rotate(0deg)";
  rightEar.style.transform = "rotate(0deg)";
});

face.addEventListener("mouseenter", () => {
  rightEye.style.height = "0px";
  rightEye.style.borderRadius = "10px";
  rightPupil.style.opacity = "0";
  rightEye.classList.add("no-liner");
  winkSound.currentTime = 0;
winkSound.play();

});

face.addEventListener("mouseleave", () => {
rightEye.style.height = "60px";
  rightEye.style.borderRadius = "50%";
  rightPupil.style.opacity = "1";
  rightEye.classList.remove("no-liner");
});
face.addEventListener("click", () => {
  winkSound.currentTime = 0; // rewind
  winkSound.play();
});

document.body.addEventListener("click", () => {
  const sound = document.getElementById("winkSound");
  sound.play();
});
document.addEventListener("keydown", function (event) {
 if (event.key === "w") {
    rightEye.classList.add("wink");

    setTimeout(() => {
      rightEye.classList.remove("wink");
    }, 300);
  }
});
