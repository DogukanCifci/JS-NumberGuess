let score = 10;
const body = document.querySelector("body");
let randomSayi;
document.querySelector(".again").onclick = () => {
  body.style.backgroundColor = "gray";
  randomSayi = Math.floor(Math.random() * 21);
  console.log(randomSayi);
  score = 10;
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").onclick = () => {
  let guess = document.querySelector(".guess");

  if (Number(guess.value) < randomSayi) {
    document.querySelector(".msg").textContent = "Sayiyi Yükseltin";
    body.style.backgroundColor = "red";
    score--;
  } else if (Number(guess.value) > randomSayi) {
    document.querySelector(".msg").textContent = "Sayiyi Azaltin";
    body.style.backgroundColor = "red";
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    body.style.backgroundColor = "green";
    document.querySelector(".msg").textContent = "Tebrikler Bildiniz...";
  }
};
