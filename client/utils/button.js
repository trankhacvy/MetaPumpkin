export const clickSound = () => {
  // new Audio("/assets/click-sound.wav").play();
  const sound = document.getElementById("click-sound");
  if (sound && sound.play) {
    sound.play();
  }
};
