console.log("Hello Dragon!");
cross = true;
score = 0;
document.onkeydown = function (e) {
  if (e.keyCode == 38) {
    console.log("enter");
    dino = document.querySelector(".dino");
    dino.classList.add("animatedino");
    setTimeout(() => {
      dino.classList.remove("animatedino");
    }, 500);
  }
  if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.keyCode == 37) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  bigdino = document.querySelector(".obstacle");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dx_end = parseInt(
    window.getComputedStyle(dino, null).getPropertyValue("right")
  );
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(bigdino, null).getPropertyValue("left")
  );
  ox_end = parseInt(
    window.getComputedStyle(bigdino, null).getPropertyValue("right")
  );
  oy = parseInt(window.getComputedStyle(bigdino, null).getPropertyValue("top"));

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  offsetX_end = Math.abs(dx_end - ox_end);
  console.log(offsetX_end);
  if ((offsetX < 120 && offsetY < 58) || (offsetX_end < 155 && offsetY < 58)) {
    gameOver.innerHTML = "Game Over - Reload to play again";
    bigdino.classList.remove("obstacleani");
  } else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);

    // aniDur = parseFloat(
    //   window
    //     .getComputedStyle(bigdino, null)
    //     .getPropertyValue("animation-duration")
    // );
    // console.log(aniDur);
    // newDur = aniDur - 0.1;
    // bigdino.style.animationDuration = newDur + "s";
    // // if (newDur < 1.8) {
    // //   newDur = 1.7;
    // //   bigdino.style.animationDuration = newDur + "s";
    // // }
  }
}, 10);

function updateScore(score) {
  scoreCont = document.querySelector(".score");
  scoreCont.innerHTML = "Your Score: " + score;
}
