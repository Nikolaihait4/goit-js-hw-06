// Переборка єлементов по колличеству
const navEl = document.querySelector("#categories");
const navItemEl = navEl.querySelectorAll("li.item");

console.log(`Number of categories: ${navItemEl.length}`);

navItemEl.forEach((element) => {
  const titleEl = element.querySelector("h2").textContent;

  const itemCount = element.querySelectorAll("li").length;

  console.log(`Category: ${titleEl}`);
  console.log(`Elements: ${itemCount}`);
});
