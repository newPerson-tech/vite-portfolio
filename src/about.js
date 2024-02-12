import "../style.scss";

const cardBodyEl = document.getElementById("cardBody");
function createBtn(value) {
  const btnEl = document.createElement("button");
  btnEl.className = "btn-secondary btn";
  btnEl.innerHTML = value;
  cardBodyEl.appendChild(btnEl);
}

let i = 100;
while (i < 10) {
  createBtn(i + 1);
  i++;
}

/* let num = 10000000;

do {
  console.log("operation from do: ", num);
  createBtn(num + 1);
  num++;
} while (num < 3); */

for (let num = 0; num < 10; num++) {
  if (num === 3) {
    continue;
  }
  if (num === 4) {
    continue;
  }
  if (num === 6) {
    continue;
  }
  createBtn(num);
}

/* parentLoop: for (let i = 0; i < 5; i++) {
  console.log("parent loop: ", i);
  for (let j = 0; j < 10; j++) {
    if (j === 3) {
      break parentLoop;
    }
    console.log("nested loop_____", j);
  }
} */

// for..in дуже хороший цикл для проходження по властивостям об'єкта
const objValues = {
  value: 1,
  title: "First number",
  class: "item-1",
  key: "3",
};

for (let key in objValues) {
  console.log(key);
  console.log(objValues[key]);
}

const arrSmiles = [
  { title: "🇯🇪", action: "sdf" },
  { title: "🇦🇸", action: "sdf" },
  { title: "🏑", value: "sdfsdf" },
];
for (let smile of arrSmiles) {
  console.log(smile);
  createBtn(smile.title);
}
