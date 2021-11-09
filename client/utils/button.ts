export const clickSound = () => {
  const sound = document.getElementById("click-sound") as any;
  if (sound && sound.play) {
    sound.play();
  }
};
