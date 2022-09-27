const btn = document.querySelectorAll("kbd");

const clapAudio = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0025.mp3"
);
const hihatAudio = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0010.mp3"
);
const kickAudio = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0000.mp3"
);

const openhatAudio = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/RS.mp3"
);

const boomEffectaudio = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/OH25.mp3"
);
const rideEffect = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/MA.mp3"
);

const snareEffect = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CY0010.mp3"
);

const tomEffect = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CH.mp3"
);

const tinkEffect = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CB.mp3"
);
const spaceBarEffect = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0010.mp3"
);

Array.from(btn).forEach((key) => {
  key.addEventListener("click", () => {
    switch (key.innerHTML) {
      case "A":
        clapAudio.currentTime = 0;
        clapAudio.play();
        break;
      case "S":
        hihatAudio.currentTime = 0;
        hihatAudio.play();
        break;
      case "D":
        kickAudio.currentTime = 0;
        kickAudio.play();
        break;
      case "F":
        openhatAudio.currentTime = 0;
        openhatAudio.play();
        break;
      case "G":
        boomEffectaudio.currentTime = 0;
        boomEffectaudio.play();
        break;
      case "H":
        rideEffect.currentTime = 0;
        rideEffect.play();
        break;
      case "J":
        snareEffect.currentTime = 0;
        snareEffect.play();
        break;

      case "K":
        tomEffect.currentTime = 0;
        tomEffect.play();
        break;
      case "L":
        tinkEffect.currentTime = 0;
        tinkEffect.play();
        break;
      case "Space":
        spaceBarEffect.currentTime = 0;
        spaceBarEffect.play();
        break;
    }
  });
});

window.onkeydown = function (e) {
  const key = e.keyCode ? e.keyCode : e.which;

  switch (key) {
    case 65:
      clapAudio.currentTime = 0;
      clapAudio.play();
      break;
    case 83:
      hihatAudio.currentTime = 0;
      hihatAudio.play();
      break;
    case 68:
      kickAudio.currentTime = 0;
      kickAudio.play();
      break;
    case 70:
      openhatAudio.currentTime = 0;
      openhatAudio.play();
      break;
    case 71:
      boomEffectaudio.currentTime = 0;
      boomEffectaudio.play();
      break;
    case 72:
      rideEffect.currentTime = 0;
      rideEffect.play();
      break;
    case 74:
      snareEffect.currentTime = 0;
      snareEffect.play();
      break;
    case 75:
      tomEffect.currentTime = 0;
      tomEffect.play();
      break;
    case 76:
      tinkEffect.currentTime = 0;
      tinkEffect.play();
      break;
    case 32:
      spaceBarEffect.currentTime = 0;
      spaceBarEffect.play();
      break;
  }
};
