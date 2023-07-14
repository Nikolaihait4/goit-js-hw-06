// добавление из массива в html
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navEl = document.querySelector("#ingredients");
console.log(navEl);

const addNewItemElement = ingredients.map((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  return li;
});

navEl.append(...addNewItemElement);

// const addNewItemElementP = document.createElement("li");
// addNewItemElementP.classList.add("item");
// addNewItemElementP.textContent = ingredients[0];
// console.log(addNewItemElementP);

// const addNewItemElementM = document.createElement("li");
// addNewItemElementM.classList.add("item");
// addNewItemElementM.textContent = ingredients[1];
// console.log(addNewItemElementM);

// const addNewItemElementG = document.createElement("li");
// addNewItemElementG.classList.add("item");
// addNewItemElementG.textContent = ingredients[2];
// console.log(addNewItemElementG);

// const addNewItemElementT = document.createElement("li");
// addNewItemElementT.classList.add("item");
// addNewItemElementT.textContent = ingredients[3];
// console.log(addNewItemElementT);

// const addNewItemElementH = document.createElement("li");
// addNewItemElementH.classList.add("item");
// addNewItemElementH.textContent = ingredients[4];
// console.log(addNewItemElementH);

// const addNewItemElementC = document.createElement("li");
// addNewItemElementC.classList.add("item");
// addNewItemElementC.textContent = ingredients[5];
// console.log(addNewItemElementC);

// navEl.append(
//   addNewItemElementP,
//   addNewItemElementM,
//   addNewItemElementG,
//   addNewItemElementT,
//   addNewItemElementH,
//   addNewItemElementC
// );
