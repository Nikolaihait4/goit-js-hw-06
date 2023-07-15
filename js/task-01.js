// Переборка єлементов по колличеству
const navEl = document.querySelector("#categories");
const navItemEl = [...navEl.children];

console.log(`Number of categories: ${navItemEl.length}`);

navItemEl.forEach((item) => {
  const titleEl = item.firstElementChild.textContent;

  const itemCount = item.lastElementChild.children.length;

  console.log(`Category: ${titleEl}`);
  console.log(`Elements: ${itemCount}`);
});
