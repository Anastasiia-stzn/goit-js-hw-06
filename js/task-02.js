const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulContainerRef = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient) => {
  const createListItem = document.createElement("li");
  createListItem.classList.add("item");
  createListItem.textContent = ingredient;

  return createListItem;
});

ulContainerRef.append(...markup);
