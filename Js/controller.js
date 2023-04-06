export class GameMonsterOverWolrdPart1 {
  constructor(monsteremerge, maxWidth, maxHigth) {
    this._monsteremerge = monsteremerge;
    this._maxLeft = maxWidth;
    this._maxTop = maxHigth;
    this._speed = 2000;
    this.score = 0;
    this.kill = 0;
    this.enemies = 0;
    this.interval;
    this.initializate();
  }

  initializate() {
    document.querySelector("#Kill").textContent = `Kill: ${this.kill}`;
    this.mosnterDificult();
    this.scoreTime();
    this.enimes();
  }

  scoreTime() {
    setInterval(() => {
      const monsteLength = document.querySelectorAll(".monster");
      const enimesLive = document.querySelector("#Enemies");
      this.enemies = monsteLength.length;
      enimesLive.textContent = `Enimes: ${this.enemies}`;

      document.querySelector(
        "#Score"
      ).textContent = `Score: ${(this.score += 1)}`;
    }, 10);
  }
  enimes() {
    setInterval(() => {
      const monsteLength = document.querySelectorAll(".monster");
      const enimesLive = document.querySelector("#Enemies");
      this.enemies = monsteLength.length;
      enimesLive.textContent = `Enimes: ${this.enemies}`;
    }, 10);
  }
  mosnterDificult() {
    this.interval = setInterval(() => {
      if (this._speed % 5 === 0) {
        this.creatMonster();
        this.creatMonster();
        if (this._speed < 1500) {
          this.creatMonster();
          this.creatMonster();
          this._speed -= 10;
        }
        if (this._speed < 1200 && this._speed > 1100) {
          this.creatMonster();
          this._speed -= 3;
        }
        if (this._speed < 700) {
          clearInterval(interval);
        }
        this._speed -= 1;
      } else {
        this.creatMonster();
        this._speed -= 50;
      }
    }, 1000);
  }
  randomPlaceLeft() {
    return Math.floor(Math.random() * this._maxLeft);
  }
  randomPlaceTop() {
    return Math.floor(Math.random() * this._maxTop);
  }
  killMonster(monster) {
    monster.style.animation = "1s killefectMonsters infinite";
    setTimeout(() => {
      monster.src = "../assets/monsterDeath/death.png";
    }, 200);
    const audio = new Audio("../assets/sounds/monsterDeath.mp3");

    setTimeout(() => {
      audio.play();
      //Count Kill element
      const kilCount = document.createElement("h1");
      this.kill += 1;
      kilCount.innerHTML = `${this.kill} X`;
      document.querySelector("#Kill").textContent = `Kill: ${this.kill}`;
      this._monsteremerge.appendChild(kilCount);
      //Remove Monster
      this._monsteremerge.removeChild(monster);

      setTimeout(() => {
        this._monsteremerge.removeChild(kilCount);
      }, 200);
    }, 300);
  }
  creatMonster() {
    const monsteLength = document.querySelectorAll(".monster");
    const backGround = document.querySelector(".background-Cenary");

    if (monsteLength.length < 10) {
      const MosnterRandom = [
        "../assets/monster/monster_0.png",
        "../assets/monster/monster_1.png",
        "../assets/monster/monster_2.png",
        "../assets/monster/monster_3.png",
        "../assets/monster/monster_4.png",
        "../assets/monster/monster_5.png",
      ];
      const random = Math.floor(Math.random() * MosnterRandom.length);
      //Creating the monster
      const monster = document.createElement("img");
      monster.setAttribute("src", `${MosnterRandom[random]}`);
      monster.setAttribute(
        "style",
        `left:${this.randomPlaceLeft()}px; top:${this.randomPlaceTop()}px;");
        `
      );
      monster.setAttribute("class", "monster");
      monster.setAttribute("onClick", "monster.killMonster(this)");
      //where the monster will emerge
      this._monsteremerge.appendChild(monster);
    } else {
      monsteLength.forEach((e) => {
        e.setAttribute("id", "loser");
      });
      const loserImg = document.createElement("img");
      loserImg.setAttribute("src", `../assets/gameOver/gameOver.png`);
      loserImg.setAttribute("id", "imgGameOver");
      backGround.appendChild(loserImg);
      clearInterval(this.interval);
    }
  }
}

export class GameMonsterOverWolrdPart2 {}
