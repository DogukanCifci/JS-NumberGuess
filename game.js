let score = 10;
const body = document.querySelector("body");
let topScore = 0;
let randomSayi;
const guess = document.querySelector(".guess");
let status1 = false;

document.querySelector(".again").onclick = () => {
  score = 10;
  console.log("bastiktan sonra score", score);
  body.style.backgroundColor = "gray";
  randomSayi = Math.floor(Math.random() * 21);
  console.log(randomSayi);

  document.querySelector(".score").textContent = score;
  document.querySelector(".msg").textContent = "Starting..";
  document.querySelector(".number").textContent = "?";
};

document.querySelector(".check").onclick = () => {
  if (Number(guess.value) < randomSayi && score > 0) {
    document.querySelector(".msg").textContent = "Sayiyi Yükseltin 🔼";
    body.style.backgroundColor = "red";
    guess.value = "";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (Number(guess.value) > randomSayi && score > 0) {
    document.querySelector(".msg").textContent = "Sayiyi Azaltin 🔽";
    body.style.backgroundColor = "red";
    guess.value = "";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (Number(guess.value) == randomSayi && score > 0) {
    body.style.backgroundColor = "green";
    const alkis = document.querySelector("#alkis");
    alkis.play();
    alkis.volume = 0.3;
    document.querySelector(".msg").textContent = "Tebrikler Bildiniz...";
    document.querySelector(".number").textContent = randomSayi;

    if (score > topScore) {
      document.querySelector(".top-score").textContent = score;
      topScore = score;
    }
  } else if (score == 0) {
    document.querySelector(".msg").textContent = "GAME OVER";
    document.querySelector(".wrong").play();
  }
};

guess.onkeydown = (tus) => {
  if (tus.keyCode === 13) {
    document.querySelector(".check").click();
    guess.value = "";
  }
};
