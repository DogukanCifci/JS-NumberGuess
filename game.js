let score = 10;
const body = document.querySelector("body");
let topScore = 0;

const guess = document.querySelector(".guess");
let status1 = false;
let randomSayi = Math.floor(Math.random() * 21);
document.querySelector(".check").onclick = () => {
  if (guess.value < 0 || guess.value > 20) {
    alert("Lütfen 0-20 arasinda bir sayi giriniz!");
  } else if (Number(guess.value) < randomSayi && score > 0) {
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
  } else if (Number(guess.value) == randomSayi && score != 0) {
    body.style.backgroundColor = "green";
    const alkis = document.querySelector("#alkis");
    alkis.play();
    alkis.volume = 0.3;
    document.querySelector(".msg").textContent = "Tebrikler Bildiniz...";
    document.querySelector(".number").textContent = randomSayi;

    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
    score = 0;
  } else if (score == 0) {
    document.querySelector(".msg").textContent = "GAME OVER";
    document.querySelector(".wrong").play();
  }
};
document.querySelector(".again").onclick = () => {
  document.querySelector("#alkis").pause();
  score = 10;
  console.log("bastiktan sonra score", score);
  body.style.backgroundColor = "gray";
  randomSayi = Math.floor(Math.random() * 21);
  console.log(randomSayi);

  document.querySelector(".score").textContent = score;
  document.querySelector(".msg").textContent = "Starting..";
  document.querySelector(".number").textContent = "?";
  guess.value = "";
};

guess.onkeydown = (tus) => {
  if (tus.keyCode === 13) {
    document.querySelector(".check").click();
    guess.value = "";
  }
};
