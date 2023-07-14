// Кнопки счетчик
const couter = document.querySelector("#counter");
console.log(couter);
const decrementButton = counter.querySelector('[data-action="decrement"]');
console.log(decrementButton);
const incrementButton = couter.querySelector('[data-action="increment"]');
console.log(incrementButton);
const counterValEl = couter.querySelector("#value");
console.log(counterValEl);

let counterVal = 0;

counterValEl.textContent = counterVal;

const decrement = () => {
  counterVal -= 1;
  counterValEl.textContent = counterVal;
};

const increment = () => {
  counterVal += 1;
  counterValEl.textContent = counterVal;
};

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
