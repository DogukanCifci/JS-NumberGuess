let score = 10;
const body = document.querySelector("body");
let topScore = 0;
let randomSayi;
const guess = document.querySelector(".guess");

document.querySelector(".again").onclick = () => {
  body.style.backgroundColor = "gray";
  randomSayi = Math.floor(Math.random() * 21);
  console.log(randomSayi);
};

document.querySelector(".check").onclick = () => {
  let guess = document.querySelector(".guess");

  if (Number(guess.value) < randomSayi) {
    document.querySelector(".msg").textContent = "Sayiyi Yükseltin 🔼";
    body.style.backgroundColor = "red";
    guess.value = "";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (Number(guess.value) > randomSayi) {
    document.querySelector(".msg").textContent = "Sayiyi Azaltin 🔽";
    body.style.backgroundColor = "red";
    guess.value = "";
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    body.style.backgroundColor = "green";
    document.querySelector("#alkis").play();
    document.querySelector(".msg").textContent = "Tebrikler Bildiniz...";
    document.querySelector(".number").textContent = randomSayi;
    document.querySelector(".again").onclick = () => {
      document.querySelector("#alkis").pause();
    };
    if (score > topScore) {
      document.querySelector(".top-score").textContent = score;
      topScore = score;
    }
  }
};

guess.onkeydown = (tus) => {
  if (tus.keyCode === 13) {
    document.querySelector(".check").click();
    guess.value = "";
  }

  if (score == 0) {
    document.querySelector(".msg").textContent = "GAME OVER";

    document.querySelector(".again").onclick = () => {
      randomSayi = Math.floor(Math.random() * 21);
      score = 10;
      document.querySelector(".score").textContent = score;
      document.querySelector(".number").textContent = "?";
      body.style.backgroundColor = "gray";
      document.querySelector(".msg").textContent = "Starting...";
    };
  }
};
