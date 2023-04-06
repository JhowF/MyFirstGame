import { GameMonsterOverWolrdPart1 } from "./controller.js";

const startGame = document.querySelector(".startGame");
startGame.addEventListener("click", function initiateGame() {
  startGame.setAttribute("id", "StartGamehide");
  music();
  gameInitiation();
});

function music() {
  const audio = new Audio("../assets/sounds/backGroundSound.mp3");
  audio.volume = 0.1;
  audio.play();
}

function gameInitiation() {
  const monsterEmerge = document.querySelector(".background-Cenary");
  const maxWidth = monsterEmerge.clientWidth * 0.8;
  const maxHigth = monsterEmerge.clientHeight * 0.4;

  window.monster = new GameMonsterOverWolrdPart1(
    monsterEmerge,
    maxWidth,
    maxHigth
  );
  const monster = new GameMonsterOverWolrdPart1(
    monsterEmerge,
    maxWidth,
    maxHigth
  );
  setInterval(() => {
    console.log(monster.score);
  });
}

/*


*/
