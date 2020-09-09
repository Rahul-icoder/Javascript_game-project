console.log("This is ludo game made by Rahul Icoder");
const Player1 = document.querySelector(".name1");
const Player2 = document.querySelector(".name2");
let name1 = prompt("Enter the name of first player");
let name2 = prompt("Enter the name of second player");
Player1.innerHTML = name1;
Player2.innerHTML = name2;
const Play1 = document.querySelector(".nam1");
const Play2 = document.querySelector(".nam2");
Play1.innerHTML = name1;
Play2.innerHTML = name2;
var n1 = 0;
var n2 = 0;

let spin = document.querySelector(".btn");
spin.addEventListener("click", () => {
  console.log("addEventListener Working");
  setTimeout(function () {
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    document
      .querySelector(".ludo_png1")
      .setAttribute("src", `img/dice${num1}.png`);
    console.log(num1);
    document
      .querySelector(".ludo_png2")
      .setAttribute("src", `img/dice${num2}.png`);

    if (num1 > num2) {
      document.querySelector(".win_name").innerHTML = name1;
      n1 = n1 + 1;
    } else if (num2 > num1) {
      document.querySelector(".win_name").innerHTML = name2;
      n2 = n2 + 1;
    } else {
      document.querySelector(".win_name").textContent = "DRAW";
    }
    document.querySelector(".count1").innerHTML = n1;
    document.querySelector(".count2").innerHTML = n2;
  }, 1000);
});

function stop() {
  alert("Game ended");
  location.reload();
}
